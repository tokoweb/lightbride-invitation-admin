import { array, date, object, string } from "yup";

const storySchema = object({
  story: array().of(
    object({
      title: string().required("Nama acara tidak boleh kosong"),
      date: date()
        .required("Tanggal tidak boleh kosong")
        .typeError("Format tanggal salah"),
      body: string().required("Isi cerita tidak boleh kosong"),
    }),
  ),
});

export default storySchema;
