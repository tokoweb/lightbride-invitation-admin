import { mixed, object, string } from "yup";

const brideSchema = object({
  name_female: string().required(
    "Nama lengkap mempelai pria tidak boleh kosong",
  ),
  nickname_female: string().required(
    "Nama panggilan mempelai pria tidak boleh kosong",
  ),
  name_woman_father: string().required(
    "Nama ayah mempelai pria tidak boleh kosong",
  ),
  name_woman_mother: string().required(
    "Nama ibu mempelai pria tidak boleh kosong",
  ),
  man_photo: mixed().required("Foto mempelai pria tidak boleh kosong"),
});

export default brideSchema;
