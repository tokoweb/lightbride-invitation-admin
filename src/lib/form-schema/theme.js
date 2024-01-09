import { mixed, object, string } from "yup";

const themeSchema = object({
  image: mixed().required("Preview tema tidak boleh kosong"),
  name_theme: string().required("Nama tema tidak boleh kosong"),
  directory: string().required("Direktori tema tidak boleh kosong"),
});

export default themeSchema;
