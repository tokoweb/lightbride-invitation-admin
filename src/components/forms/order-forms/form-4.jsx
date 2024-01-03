"use client";

import { useState } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

const Form4 = () => {
  const [cerita, setCerita] = useState([""]);

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-primary">Cerita!</h2>
        <p>Hai kak! di isi dulu ya datanya</p>
      </div>

      {cerita.map((e, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h4 className="m-0 text-xl">Cerita #{i + 1}</h4>
          <div>
            <p>Tanggal</p>
            <TextField required size="small" className="mt-1 w-full" />
          </div>

          <div>
            <p>Judul</p>
            <TextField
              required
              size="small"
              placeholder="Masukan judul cerita"
              className="mt-1 w-full"
            />
          </div>
          <div>
            <p>Isi cerita</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan isi cerita"
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <Divider className="mb-4 mt-2" />
        </div>
      ))}

      <Button
        variant="contained"
        className="w-full bg-primary capitalize"
        onClick={() => setCerita([...cerita, ""])}
      >
        Tambah Cerita
      </Button>
    </div>
  );
};

export default Form4;
