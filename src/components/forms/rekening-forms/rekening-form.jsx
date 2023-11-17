import { TextField, Button, IconButton } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { BsTrashFill } from "react-icons/bs";

const RekeningForm = () => {
  return (
    <Grid2 xs={12} md={6}>
      <div>
        <h3>#1</h3>
      </div>
      <div>
        <div>
          <p>Nama Bank</p>
          <TextField
            size="small"
            name="url"
            className="w-full rounded-md"
            placeholder="Masukan nama bank"
          />
        </div>
        <div className="mt-2 flex flex-col gap-2 md:flex-row md:gap-4">
          <div className="w-full">
            <p>Nomor Rekening</p>
            <TextField
              size="small"
              name="url"
              className="w-full rounded-md"
              placeholder="Masukan nomor rekening"
            />
          </div>
          <div className="w-full">
            <p>Nama Pemilik</p>
            <TextField
              size="small"
              name="url"
              className="w-full rounded-md"
              placeholder="Masukan nama pemilik"
            />
          </div>
        </div>
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

export default RekeningForm;
