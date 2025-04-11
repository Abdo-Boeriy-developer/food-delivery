import { z } from "zod";



export const schema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 charaters" }),
    confirm: z
      .string()
      .min(6, { message: "Password must be at least 6 charaters" }),
  })
  .refine((value) => value.password === value.confirm, {
    message: "Password don match",
    path: ["confirm"],
  });