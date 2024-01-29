import { object, string } from "yup";

const updateProfileSchema = object({
  name: string().required("Nama tidak boleh kosong"),
  fullname: string().required("Username tidak boleh kosong"),
  password: string(),
});

export default updateProfileSchema;
