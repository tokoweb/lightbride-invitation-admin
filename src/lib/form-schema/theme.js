import { mixed, object, string } from "yup";

const themeSchema = object({
  image: mixed().required("Preview tema tidak boleh kosong"),
  name_theme: string().required("Nama tema tidak boleh kosong"),
  directory: string().required("Direktori tema tidak boleh kosong"),
  theme_category_id: mixed().required("Kategoori tema tidak boleh kosong"),
  theme_sub_category_id: mixed().nullable(),
});

export default themeSchema;
