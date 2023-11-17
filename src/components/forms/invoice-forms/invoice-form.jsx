"use client";

import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";

const InvoiceForm = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [fileName, setFileName] = useState("");

  return (
    <>
      <Paper className="h-fit w-full rounded-md p-4">
        <div className="flex justify-between">
          <h4 className="flex text-primary">Tagihan Pembayaran</h4>
          <Chip label={`Lunas`} color="success" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p>Kode pesanan</p>
            <div className="mt-2 rounded-lg bg-gray-200 p-6 text-center text-lg font-semibold">
              #198237182
            </div>
          </div>
          <div>
            <p>Total tagihan</p>
            <div className="mt-2 rounded-lg bg-gray-200 p-6 text-center text-lg font-semibold">
              Rp 0
            </div>
          </div>
          <i>
            Setelah melakukan pembayaran mohon konfirmasi pembayaran anda dengan
            menakan tombol Konfirmasi dan ikuti instruksi selanjutnya.
          </i>
        </div>
        <Button
          // disabled
          variant="contained"
          className="mt-2 h-fit w-full bg-primary p-2 capitalize"
          onClick={() => setOpen(true)}
        >
          Konfirmasi
        </Button>
      </Paper>
      <Dialog open={open} maxWidth="md" onClose={() => setOpen(false)}>
        <form>
          <DialogTitle className="w-[500px]">Konfirmasi Pembayaran</DialogTitle>
          <Divider />
          <DialogContent className="flex flex-col gap-4">
            <div>
              <p>Nama Lengkap</p>
              <TextField
                size="small"
                placeholder="Masukan nama lengkap"
                className="w-full"
              />
            </div>
            <div>
              <p>Nama Bank</p>
              <TextField
                size="small"
                placeholder="Contoh: (BRI)"
                className="w-full"
              />
            </div>
            <div>
              <p>Bukti Pembayaran</p>
              <div className="mt-1 flex items-center gap-2">
                <Button
                  variant="contained"
                  className="bg-primary capitalize"
                  onClick={() => ref.current.click()}
                >
                  Upload File
                  <input
                    onChange={(e) => {
                      const files = e.target.files;

                      if (files.length == 0) return;

                      setFileName(files[0].name);
                    }}
                    ref={ref}
                    name="music"
                    multiple={false}
                    type="file"
                    // accept=".mp3,audio/*"`
                    className="hidden"
                  />
                </Button>
                {fileName !== "" && (
                  <p className="w-44 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                    {fileName}
                  </p>
                )}
              </div>
            </div>
          </DialogContent>
          <DialogActions className="pb-6 pr-6">
            <Button variant="contained" className="bg-primary capitalize">
              Konfirmasi
            </Button>
            <Button
              color="warning"
              className="bg-red-500"
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Batal
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default InvoiceForm;
