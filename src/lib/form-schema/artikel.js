import { mixed, object, string } from "yup";

const articleSchema = object({
  image: mixed().required("Preview tema tidak boleh kosong"),
  title: string().required("Judul artikel tidak boleh kosong"),
  // body: string().required("Konten artikel tidak boleh kosong"),
});

export default articleSchema;
