import { object, string } from "yup";

export const createUserSchema = object({
  name: string().min(2).max(50).required(),
  rollNumber: string().min(1).max(50).required(),
  email: string().email().max(100).required(),
  password: string().min(8).max(100).required(),
});
