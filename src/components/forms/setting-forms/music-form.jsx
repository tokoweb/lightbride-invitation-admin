"use client";

import { useRef, useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { buildFormData } from "@/lib/utils/formData";
import { useUpdateMusicMutation } from "@/redux/services/settings-api";

const MusicForm = () => {
  const [fetcher, { isLoading }] = useUpdateMusicMutation();
  const [file, setFile] = useState();
  const ref = useRef(null);

  return (
    <Paper className="h-fit w-full p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          fetcher(buildFormData({ music: file }));
        }}
      >
        <h3 className="form-title">Musik</h3>
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

                    if (e.target.files[0].size > 2097152) {
                      enqueueSnackbar("File Teralu besar, Maksimal file 2MB", {
                        variant: "error",
                      });

                      return;
                    }

                    setFile(files[0]);
                  }}
                  ref={ref}
                  name="music"
                  multiple={false}
                  type="file"
                  accept=".mp3,audio/*"
                  className="hidden"
                />
              </Button>
              {file && (
                <p className="w-44 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                  {file.name}
                </p>
              )}
            </div>
          </div>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            className="mt-4 self-end md:mt-0"
            type="submit"
          >
            Simpan
          </LoadingButton>
        </div>
      </form>
    </Paper>
  );
};

export default MusicForm;
