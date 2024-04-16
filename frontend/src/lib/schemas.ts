import { z } from "zod";

// SCHEMAS
const applySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email().min(5),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const loginSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

// TYPES
type ApplyData = z.infer<typeof applySchema>;
type LoginData = z.infer<typeof loginSchema>;
type Activity = {
  name: string;
  date: string;
};

export { applySchema, loginSchema };
export type { ApplyData, LoginData, Activity };
