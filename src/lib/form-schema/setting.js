import { number, object } from "yup";

const settingSchema = object({
  active_days: number().required("Masa aktif undangan tidak boleh kosong"),
});

export default settingSchema;
