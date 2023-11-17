"use client";

import { Paper, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { produce } from "immer";

const GalleryForm = () => {
  const [files, setFiles] = useState();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => ({
          ...file,
          preview: URL.createObjectURL(file),
        })),
      );
    },
  });

  return (
    <Paper className="w-full rounded-md p-4">
      <h4 className="text-primary">Data Gallery</h4>
      <div
        {...getRootProps({
          className:
            "dropzone w-full border-2 border-gray-300 border-dashed focus:border-primary flex flex-col gap-2 items-center bg-gray-100 text-gray-400 hover:border-gray-500 transition duration-200 rounded-md p-6 py-16",
        })}
      >
        <input {...getInputProps()} />
        <p className="">Drag and drop foto disini</p>
        <p>atau</p>
        <Button
          variant="contained"
          className="mt-4 h-fit bg-primary capitalize"
        >
          Pilih gambar
        </Button>
      </div>
      {files && files.length > 0 && (
        <div className="mt-6">
          <Masonry columns={{ xs: 2, md: 3 }} spacing={{ xs: 1, md: 2 }}>
            {files.map((file, i) => (
              <div key={`image_${i + 1}`} className="relative rounded-md">
                <Image
                  className="rounded-md"
                  src={file.preview}
                  alt={`image_${i + 1}`}
                  width={200}
                  height={100}
                />
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    setFiles(
                      produce((items) => {
                        items.splice(i, 1);
                      }),
                    );
                  }}
                  className="bg-warning hover:bg-warning-dark absolute bottom-2 left-2 mt-4 h-fit capitalize"
                >
                  Hapus
                </Button>
              </div>
            ))}
          </Masonry>
        </div>
      )}
      <div className="mt-6 flex justify-end">
        <Button variant="contained" className="h-fit bg-primary capitalize">
          Simpan
        </Button>
      </div>
    </Paper>
  );
};

export default GalleryForm;
