"use client";

import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Form3 = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-primary">Acara!</h2>
        <p>Hai kak! di isi dulu ya datanya</p>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="m-0 text-xl">Akad Nikah</h4>
        <div className="flex gap-4">
          <div className="w-full">
            <p>Tanggal</p>
            <Datepicker
              useRange={false}
              asSingle
              value={value}
              primaryColor="indigo"
              containerClassName={
                "relative w-full text-gray-700 border-[1px] rounded border-gray-300 mt-1"
              }
              inputClassName={
                "relative transition-all duration-300 py-[9px] pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-indigo-500 focus:ring-indigo-500/20"
              }
              onChange={(e) => setValue(e)}
            />
          </div>
          <div className="w-full">
            <p>Waktu/jam</p>
            <TextField
              type="time"
              required
              size="small"
              className="mt-1 w-full"
            />
          </div>
        </div>

        <div>
          <p>Tempat/lokasi</p>
          <TextField
            required
            size="small"
            placeholder="Masukan tempat/lokasi akad"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Alamat lengkap</p>
          <TextareaAutosize
            minRows={3}
            placeholder="Masukan alamat lengkap lokasi akad pernikahan"
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <Divider className="mb-4 mt-2" />
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="m-0 text-xl">Resepsi Nikah</h4>
        <div className="flex gap-4">
          <div className="w-full">
            <p>Tanggal</p>
            <Datepicker
              useRange={false}
              asSingle
              value={value}
              primaryColor="indigo"
              containerClassName={
                "relative w-full text-gray-700 border-[1px] rounded border-gray-300 mt-1"
              }
              inputClassName={
                "relative transition-all duration-300 py-[9px] pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-indigo-500 focus:ring-indigo-500/20"
              }
              onChange={(e) => setValue(e)}
            />
          </div>
          <div className="w-full">
            <p>Waktu/jam</p>
            <TextField
              type="time"
              required
              size="small"
              className="mt-1 w-full"
            />
          </div>
        </div>

        <div>
          <p>Tempat/lokasi</p>
          <TextField
            required
            size="small"
            placeholder="Masukan tempat/lokasi resepsi"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Alamat lengkap</p>
          <TextareaAutosize
            minRows={3}
            placeholder="Masukan alamat lengkap lokasi resepsi pernikahan"
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <Divider className="mb-4 mt-2" />
      </div>

      <div>
        <p>Link google maps</p>
        <TextareaAutosize
          minRows={3}
          placeholder="Masukan link google maps"
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>
    </div>
  );
};

export default Form3;
