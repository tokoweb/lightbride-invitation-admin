"use client";

import { Button, IconButton, TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { BsTrashFill } from "react-icons/bs";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const StoryForm = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <Grid2 xs={12} md={6}>
      <div>
        <h3>#1</h3>
      </div>
      <div className="flex-1/2 flex flex-col gap-2 md:flex-row md:gap-4">
        <div className="w-full">
          <p>Judul</p>
          <TextField
            size="small"
            name="url"
            className="w-full rounded-md"
            placeholder="Masukan judul"
          />
        </div>
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
      </div>
      <div className="mt-2 w-full">
        <p>Cerita</p>
        <TextareaAutosize
          minRows={3}
          placeholder="Masukan salam pembuka whatsapp (bawah)..."
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="flex">
        <Button
          variant="contained"
          className="mt-4 h-fit bg-primary capitalize"
        >
          simpan
        </Button>
        <IconButton
          color="warning"
          className="ml-6 mt-4 h-fit p-2 text-xl capitalize"
        >
          <BsTrashFill />
        </IconButton>
      </div>
    </Grid2>
  );
};

export default StoryForm;
