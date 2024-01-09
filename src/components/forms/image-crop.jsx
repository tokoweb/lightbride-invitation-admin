"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";

import { enqueueSnackbar } from "notistack";
import Cropper from "react-easy-crop";
import { FaRegImage } from "react-icons/fa6";
import { HiX } from "react-icons/hi";

import { getCroppedImg, objectUrlToFile } from "@lib/utils/canvasUtils";
import { cn } from "@/lib/utils";
import readFileImage from "@/lib/utils/readFileImage";

const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

const ImageCropperModal = ({
  imageSrc,
  dialog,
  setDialog,
  setResult,
  aspectRatio,
  setPreview,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

      setResult(await objectUrlToFile(croppedImage, "image.png"));
      setPreview(croppedImage);
      setDialog(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    setDialog(false);
  };

  return (
    <Dialog
      open={dialog}
      onClose={onClose}
      PaperProps={{
        className: "w-full rounded-lg p-1",
      }}
    >
      <DialogTitle className="flex items-center justify-between">
        <h2>Crop Image</h2>
        <IconButton onClick={onClose} color="error">
          <HiX />
        </IconButton>
      </DialogTitle>
      <DialogContent className="h-fit w-full max-w-[1000px] overflow-hidden p-5">
        <div className="relative h-80 w-full overflow-hidden rounded-md">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="mt-6 w-full bg-white">
          <p>Zoom</p>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
          />
        </div>
      </DialogContent>
      <DialogActions className="p-5">
        <Button onClick={showCroppedImage} variant="contained">
          Crop Image
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ImageCropper = ({
  setResult,
  aspectRatio,
  imageClassName,
  className,
  imgPreview,
}) => {
  const ref = useRef();
  const [preview, setPreview] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    const getPreview = async () => {
      if (!!imgPreview && imgPreview instanceof File) {
        setPreview(await readFileImage(imgPreview));
      } else {
        setPreview(imgPreview);
      }
    };

    getPreview();
  }, [imgPreview]);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size > 3145728) {
        enqueueSnackbar("File Teralu besar, Maksimal file 3MB", {
          variant: "error",
        });

        return null;
      }

      const file = e.target.files[0];

      setImageSrc(await readFile(file));
    }
  };

  useEffect(() => {
    if (imageSrc) setDialog(true);
  }, [imageSrc]);

  useEffect(() => {
    if (!dialog) setImageSrc(null);
  }, [dialog]);

  return (
    <>
      <div
        className={cn(
          "m-auto mb-4 max-w-[400px] rounded-md border-2 border-dashed border-gray-300 p-2",
          className,
        )}
      >
        <div className={imageClassName}>
          {preview ? (
            <Image src={preview ?? "/l"} width={1000} height={1000} alt="" />
          ) : (
            <div className="m-auto w-1/2 text-gray-900 opacity-20">
              <FaRegImage className="h-full w-full" />
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <input
          ref={ref}
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="hidden"
          multiple={false}
        />
        <Button onClick={() => ref.current.click()} variant="contained">
          Pilih Gambar
        </Button>
        {dialog && (
          <ImageCropperModal
            imageSrc={imageSrc}
            dialog={dialog}
            setDialog={setDialog}
            setResult={setResult}
            aspectRatio={aspectRatio}
            setPreview={setPreview}
          />
        )}
      </div>
    </>
  );
};

export default ImageCropper;
