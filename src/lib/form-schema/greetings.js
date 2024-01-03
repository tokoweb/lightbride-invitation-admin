import { object, string } from "yup";

const greetingsSchema = object({
  greeting: string().nullable(),
  greeting_wa_over: string().required(),
  greeting_wa_under: string().required(),
});

export default greetingsSchema;
