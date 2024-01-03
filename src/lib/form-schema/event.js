import { array, date, number, object, string } from "yup";

const eventSchema = object({
  data_event: array().of(
    object({
      name: string().required("Nama acara tidak boleh kosong"),
      date: date()
        .required("Tanggal tidak boleh kosong")
        .typeError("Format tanggal salah"),
      time: string().required("Waktu tidak boleh kosong"),
      location: string().required("Tempat/lokasi tidak boleh kosong"),
      address: string().required("Alamat tidak boleh kosong"),
    }),
  ),
});

export default eventSchema;
