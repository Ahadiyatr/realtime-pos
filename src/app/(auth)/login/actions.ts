'use server';

import { INITIAL_STATE_LOGIN_FORM } from '@/constants/auth-constant';
import { createClient } from '@/lib/supabase/server';
import { AuthFormState } from '@/types/auth';
import { loginSchemaForm } from '@/validations/auth-validation';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(
  prevState: AuthFormState,
  FormData: FormData | null
) {
  if (!FormData) {
    return INITIAL_STATE_LOGIN_FORM;
  }

  const validateFields = loginSchemaForm.safeParse({
    email: FormData.get('email'),
    password: FormData.get('password'),
  });

  if (!validateFields.success) {
    return {
      status: 'error',
      erros: {
        ...validateFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  const supabase = await createClient();

  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword(validateFields.data);

  if (error) {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single();

  if (profile) {
    const cookieStore = await cookies();
    cookieStore.set('user_profile', JSON.stringify(profile), {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 Year
    });
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
