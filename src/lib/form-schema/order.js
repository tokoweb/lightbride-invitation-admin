import { mixed, object, string } from "yup";

const orderSchema = object({
  status: string().required("Status tidak boleh kosong"),
  trial_date: string().required("Trial tidak boleh kosong"),
  active_date: string().required("Trial tidak boleh kosong"),
});

export default orderSchema;
