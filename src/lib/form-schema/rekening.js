import { array, date, number, object, string } from "yup";

const rekeningSchema = object({
  bank_name: string().required("Nama bank tidak boleh kosong"),
  account_number: number().required("Nomor rekening tidak boleh kosong"),
  account_name: string().required("Nama pemilik tidak boleh kosong"),
});

export default rekeningSchema;
