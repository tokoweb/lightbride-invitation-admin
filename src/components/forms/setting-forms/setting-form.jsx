import { Button, Paper, TextField } from "@mui/material";
import React from "react";

const SettingForm = () => {
  return (
    <Paper className="w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Pengaturan Undangan</h4>
        <div>
          <p>Nama Domain / URL Undangan</p>
          <div className="flex items-center">
            <div className="h-full rounded-l-md bg-primary p-2 text-white">
              site.undangan.shoppers.my.id/
            </div>
            <TextField
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="akudandia"
            />
          </div>
          {/* <Button variant="contained" className="mt-2 bg-primary capitalize">
            Simpan
          </Button> */}
        </div>
        <div className="mt-6">
          <p>Token Whatsapp Gateway</p>
          <TextField
            size="small"
            placeholder="Masukan token whatsapp gateway"
            className="mt-2 w-full"
          />
          <i className="text-slate-500">
            Kosongkan jika tidak memiliki token whatsapp gateway atau{" "}
            <a
              href="https://nusagateway.com/"
              target="_blank"
              className="text-primary"
            >
              klik disini
            </a>
          </i>
        </div>
        <div className="flex justify-end">
          <Button variant="contained" className="mt-2 bg-primary capitalize">
            Simpan
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default SettingForm;
