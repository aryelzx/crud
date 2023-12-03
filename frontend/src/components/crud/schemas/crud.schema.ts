import { z } from "zod";
const crudSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  fone: z.string().min(3).max(255),
  birthday: z.string().min(3).max(255),
  profession: z.string().min(3).max(255),
});

export { crudSchema };
