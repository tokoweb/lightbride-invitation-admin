import { number, object, string } from "yup";

const testimonialSchema = object({
  address: string().required("Alamat tidak boleh kosong"),
  review: string().required("Ulasan tidak boleh kosong"),
});

export default testimonialSchema;
