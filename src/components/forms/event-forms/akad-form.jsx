"use client";

import { Paper, Button, TextField, TextareaAutosize } from "@mui/material";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const AkadForm = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Data Akad Nikah</h4>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-full">
              <p>Tanggal</p>
              <Datepicker
                useRange={false}
                asSingle
                value={value}
                primaryColor="indigo"
                containerClassName={
                  "relative w-full text-gray-700 border-[1px] rounded border-gray-300"
                }
                inputClassName={
                  "relative transition-all duration-300 py-[9px] pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-indigo-500 focus:ring-indigo-500/20"
                }
                onChange={(e) => setValue(e)}
              />
            </div>
            <div className="w-full">
              <p>Waktu / Jam</p>
              <TextField
                size="small"
                className="w-full"
                placeholder="Masukan waktu "
              />
            </div>
          </div>
          <div>
            <p>Tempat / Lokasi</p>
            <TextField
              size="small"
              className="w-full"
              placeholder="Masukan tempat / lokasi akad nikah"
            />
          </div>
          <div>
            <p>Alamat</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan alamat lengkap lokasi resepsi pernikahan"
              className="w-full rounded-md border border-gray-300 p-2"
            />
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

export default AkadForm;
