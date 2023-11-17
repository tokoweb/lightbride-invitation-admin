import { Paper, Button, TextareaAutosize } from "@mui/material";

const VideoForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <h4 className="text-primary">Data Video</h4>
      <div>
        <p>Link youtube</p>
        <TextareaAutosize
          minRows={3}
          placeholder="Masukan link video youtube"
          className="w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="mt-6 flex justify-end">
        <Button variant="contained" className="h-fit bg-primary capitalize">
          Simpan
        </Button>
      </div>
    </Paper>
  );
};

export default VideoForm;
