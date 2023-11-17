import { Divider } from "@mui/material";
import PhotoForm from "../bride-forms/photo-form";
import TextField from "@mui/material/TextField";

const Form2 = () => {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-primary">Informasi Mempelai!</h2>
        <p>Hai kak! di isi dulu ya datanya</p>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="m-0 text-xl">Calon Mempelai Pria</h4>
        <div>
          <p>Foto mempelai pria</p>
          <PhotoForm />
        </div>
        <div>
          <p>Nama lengkap</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama lengkap"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nama panggilan</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama panggilan"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nama ayah</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama ayah"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nama ibu</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama ibu"
            className="mt-1 w-full"
          />
        </div>
        <Divider className="mb-4 mt-2" />
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="m-0 text-xl">Calon Mempelai Wanita</h4>
        <div>
          <p>Foto mempelai wanita</p>
          <PhotoForm />
        </div>
        <div>
          <p>Nama lengkap</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama lengkap"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nama panggilan</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama panggilan"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nama ayah</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama ayah"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nama ibu</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nama ibu"
            className="mt-1 w-full"
          />
        </div>
        <Divider className="mb-4 mt-2" />
      </div>

      <div>
        <p>Foto sampul</p>
        <PhotoForm />
      </div>
    </div>
  );
};

export default Form2;
