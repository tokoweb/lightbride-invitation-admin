import { Paper, Button, TextField } from "@mui/material";

import "croppie/croppie.css";
import PhotoForm from "./photo-form";

const BrideForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Data mempelai pria</h4>
        <div className="">
          <PhotoForm />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <p>Nama lengkap</p>
              <TextField
                size="small"
                className="w-full"
                placeholder="Masukan nama lengkap"
              />
            </div>
            <div className="w-full">
              <p>Nama panggilan</p>
              <TextField
                size="small"
                className="w-full"
                placeholder="Masukan nama panggilan"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <p>Nama ayah</p>
              <TextField
                size="small"
                className="w-full"
                placeholder="Masukan nama ayah"
              />
            </div>
            <div className="w-full">
              <p>Nama ibu</p>
              <TextField
                size="small"
                className="w-full"
                placeholder="Masukan nama ibu"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="contained" className="h-fit bg-primary capitalize">
            Simpan
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default BrideForm;
