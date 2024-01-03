import { object, string } from "yup";

const videoSchema = object({
  video: string()
    .required("Link video tidak boleh kosong")
    .matches(
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      "Link Video tidak valid",
    ),
});

export default videoSchema;
