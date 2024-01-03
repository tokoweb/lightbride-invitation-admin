import { object, string } from "yup";

const websiteSettingSchema = object({
  token_wa: string().nullable(),
  domain: string().required("Nama domain tidak boleh kosong"),
});

export default websiteSettingSchema;
