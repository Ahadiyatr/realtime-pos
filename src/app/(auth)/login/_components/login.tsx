'use client';

import FormInput from '@/components/common/form-input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import {
  INITIAL_LOGIN_FORM,
  INITIAL_STATE_LOGIN_FORM,
} from '@/constants/auth-constant';
import { LoginForm, loginSchemaForm } from '@/validations/auth-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../actions';
import { toast } from 'sonner';

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchemaForm),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  const [loginState, loginAction, isPendingLogin] = useActionState(
    login,
    INITIAL_STATE_LOGIN_FORM
  );

  const onSubmit = form.handleSubmit(async data => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      loginAction(formData);
    });
  });

  useEffect(() => {
    if (loginState?.status === 'error') {
      toast.error('Login Failed', {
        description: loginState.errors?._form?.[0],
      });
      startTransition(() => {
        loginAction(null);
      });
    }
  }, [loginState, loginAction]);

  return (
    <Card className="bg-[#FDF6EC]/95 dark:bg-gray-900/70 backdrop-blur-xl border border-[#FF6B35]/20 shadow-2xl rounded-2xl">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-heading text-[#3B2C35] dark:text-[#FDF6EC]">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-[#6A4C93] dark:text-gray-400 font-medium">
          Login to access all features ✨
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-5">
            <FormInput
              form={form}
              type="email"
              name="email"
              label="Email"
              placeholder="Insert Email Here"
            />
            <FormInput
              form={form}
              type="password"
              name="password"
              label="Password"
              placeholder="******"
            />

            <Button
              type="submit"
              disabled={isPendingLogin}
              className="w-full bg-[#FF6B35] hover:bg-[#F7B267] text-white font-semibold py-3 rounded-xl shadow-md transition-transform hover:scale-[1.02]"
            >
              {isPendingLogin ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
