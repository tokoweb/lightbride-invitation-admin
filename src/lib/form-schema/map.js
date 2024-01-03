import { object, string } from "yup";

const mapSchema = object({
  map: string()
    .required("Link google maps tidak boleh kosong")
    .matches(
      /<iframe[^>]+src=["'](https:\/\/www\.google\.com\/maps\/embed[^"']+)["'][^>]*><\/iframe>/,
      "Maps tidak valid",
    ),
});

export default mapSchema;
