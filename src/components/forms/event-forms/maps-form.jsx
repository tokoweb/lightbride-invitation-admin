"use client";

import { Paper, TextareaAutosize, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const MapsForm = () => {
  const [src, setSrc] = useState("");

  return (
    <Paper className="w-full rounded-md p-4">
      <h4 className="text-primary">Data Maps Lokasi</h4>
      <TextareaAutosize
        minRows={3}
        placeholder="Masukan link dari google maps"
        className="w-full rounded-md border border-gray-300 p-2"
        onInput={(e) => {
          const match = e.target.value.match(/src=["']([^"']+)["']/);

          if (match) {
            setSrc(match[1]);
          }
        }}
      />
      <Link href={"/map"} className="text-sm text-blue-600 underline">
        Cara menambah maps
      </Link>
      <div className="mt-6 flex justify-end">
        <Button variant="contained" className="h-fit bg-primary capitalize">
          Simpan
        </Button>
      </div>
      {src !== "" && (
        <div className="mt-8">
          <iframe
            className="h-96 w-full rounded-md"
            src={src}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </Paper>
  );
};

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.679895448076!2d107.61830685!3d-6.910325299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sen!2sid!4v1699339387799!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

export default MapsForm;
