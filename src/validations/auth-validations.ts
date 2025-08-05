import z from "zod";

export const loginSchemaForm = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export type LoginForm = z.Infer<typeof loginSchemaForm>;
