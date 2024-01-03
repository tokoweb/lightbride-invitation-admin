import { object, string } from "yup";

const loginSchema = object({
  email: string()
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  password: string().required("Password tidak boleh kosong"),
});

export default loginSchema;
