import { mixed,object, string } from "yup";

const groomSchema = object({
  name_male: string().required(
    "Nama lengkap mempelai wanita tidak boleh kosong",
  ),
  nickname_male: string().required(
    "Nama panggilan mempelai wanita tidak boleh kosong",
  ),
  name_man_father: string().required(
    "Nama ayah mempelai wanita tidak boleh kosong",
  ),
  name_man_mother: string().required(
    "Nama ibu mempelai wanita tidak boleh kosong",
  ),
  woman_photo: mixed().required("Foto mempelai wanita tidak boleh kosong"),
});

export default groomSchema;
