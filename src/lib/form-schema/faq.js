import { object, string } from "yup";

const faqSchema = object({
  question: string().required("Pertanyaan wajib diisi"),
  answer: string().required("Jawaban wajib diisi"),
});

export default faqSchema;
