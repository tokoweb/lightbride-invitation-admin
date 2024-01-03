import { mixed,object } from "yup";

const coverSchema = object({
  cover_photo_potrait: mixed().required(
    "Foto cover portait tidak boleh kosong",
  ),
  cover_photo_landscape: mixed().required(
    "Foto cover landscape tidak boleh kosong",
  ),
});

export default coverSchema;
