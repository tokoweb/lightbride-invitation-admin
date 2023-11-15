import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white/30 backdrop-blur-md">
      <CircularProgress color="primary" />
    </div>
  );
};
export default Loading;
