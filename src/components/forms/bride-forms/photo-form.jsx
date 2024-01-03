"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Button, ClickAwayListener, Divider } from "@mui/material";

import Croppie from "croppie";
import { MdOutlineClose } from "react-icons/md";

const PhotoForm = () => {
  const ref = useRef(null);
  const imageHelperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [croppie, setCroppie] = useState();
  const [base64, setBase64] = useState();

  useEffect(() => {
    if (!image || !open) return;

    const reader = new FileReader();
    reader.readAsDataURL(image);

    const croppieInstance = new Croppie(imageHelperRef.current, {
      enableExif: true,
      viewport: {
        height: 200,
        width: 200,
      },
      boundary: {
        height: 300,
        width: 300,
      },
    });

    reader.onload = () => {
      setCroppie(croppieInstance);
      croppieInstance.bind({ url: reader.result });
    };
  }, [open]);

  const closeHandler = () => {
    croppie.destroy();
    setOpen(false);
  };

  return (
    <>
      <input
        type="file"
        multiple={false}
        ref={ref}
        className="hidden"
        onChange={(e) => {
          setOpen(true);
          setImage(e.target.files[0]);
        }}
      />
      {open && (
        <div className="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-black/20">
          <ClickAwayListener onClickAway={closeHandler}>
            <div className="rounded-md bg-white p-4">
              <div className="flex items-center justify-between">
                <h4 className="mb-0 text-lg">Foto mempelai pria</h4>
                <button
                  onClick={closeHandler}
                  className="h-10 w-10 !p-2 text-2xl text-black"
                >
                  <MdOutlineClose />
                </button>
              </div>
              <Divider className="mb-4 w-full" />
              <div ref={imageHelperRef} />
              <Button
                variant="contained"
                className="w-full bg-primary capitalize"
                onClick={() => {
                  if (croppie) {
                    croppie.result({ type: "base64" }).then((base64) => {
                      setBase64(base64);
                      setOpen(false);
                    });
                  }
                }}
              >
                Upload
              </Button>
            </div>
          </ClickAwayListener>
        </div>
      )}
      <div className="flex w-full flex-col items-center justify-evenly gap-6 rounded-md bg-indigo-50 py-8 lg:flex-row">
        <div className="h-60 w-60 rounded-md border-2 border-dashed border-gray-500 p-1">
          {base64 && (
            <Image
              src={base64}
              width={300}
              height={300}
              alt="photo pengantin pria"
              className="rounded-md"
            />
          )}
        </div>
        <Button
          variant="contained"
          onClick={() => ref.current.click()}
          className="h-fit bg-primary capitalize"
        >
          Upload gambar
        </Button>
      </div>
    </>
  );
};

export default PhotoForm;
