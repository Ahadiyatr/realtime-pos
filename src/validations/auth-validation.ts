import z from 'zod';

export const loginSchemaForm = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

export const createUserSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  avatar_url: z.union([
    z.string().min(1, 'Image URL is Required'),
    z.instanceof(File),
  ]),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  avatar_url: z.union([
    z.string().min(1, 'Image URL is Required'),
    z.instanceof(File),
  ]),
});

export type LoginForm = z.Infer<typeof loginSchemaForm>;
export type CreateUserForm = z.Infer<typeof createUserSchema>;
export type UpdateUserSchema = z.Infer<typeof updateUserSchema>;
