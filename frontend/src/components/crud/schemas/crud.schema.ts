import { z } from "zod";
const crudSchema = z.object({
  id: z.number(),
  nome: z.string(),
  email: z.string(),
  fone: z.string(),
  data_nascimento: z.string(),
  profissao: z.string(),
});

export { crudSchema };

