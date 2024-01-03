"use client";

import { useState } from "react";

import Image from "next/image";

import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";

import { produce } from "immer";
import { useDropzone } from "react-dropzone";

const Form5 = () => {
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
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-primary">Gallery!</h2>
        <p>Hai kak! di isi dulu ya datanya</p>
      </div>
      <div>
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
                    className="absolute bottom-2 left-2 mt-4 h-fit bg-warning capitalize hover:bg-warning-dark"
                  >
                    Hapus
                  </Button>
                </div>
              ))}
            </Masonry>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form5;
