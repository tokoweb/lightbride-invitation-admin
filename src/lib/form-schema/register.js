import { number, object, string } from "yup";

const registerSchema = object({
  name: string().required("Nama tidak boleh kosong"),
  email: string()
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  password: string()
    .required("Password tidak boleh kosong")
    .min(8, "Password minimal harus 8 karakter"),
  // phone: number("").required("Nomor Hp tidak boleh kosong"),
  domain: string()
    .required("Nama domain tidak boleh kosong")
    .matches(
      /^[A-Za-z-0-9]+$/,
      'Nama domain tidak valid (hanya bisa alfabet, number, dan "-")',
    ),
});

export default registerSchema;
