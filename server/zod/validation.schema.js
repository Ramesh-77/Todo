import { z } from "zod";
// zod schema for user validation
export const zodUserRegisterSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string(),
});

// zod schema for login validation
export const zodUserLoginSchema = z.object({
    email: z.email(),
    password: z.string(),
  });

//   zod schema for todo validation
export const zodAddTodoSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    status: z.enum(["pending", "in-progress", "completed"]).optional(),
  });