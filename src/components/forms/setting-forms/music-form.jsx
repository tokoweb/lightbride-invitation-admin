"use client";
import { Button, Paper } from "@mui/material";
import React, { useRef, useState } from "react";

const MusicForm = () => {
  const [fileName, setFileName] = useState("");
  const ref = useRef(null);

  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Musik</h4>
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <p className="text-slate-500">Musik Latar (Max 2MB)</p>
            <div className="flex items-center gap-2">
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
          <Button
            variant="contained"
            className="mt-4 h-fit self-end bg-primary capitalize md:mt-0"
          >
            Simpan
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default MusicForm;
