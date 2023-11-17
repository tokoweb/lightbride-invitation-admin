"use client";

import { useState } from "react";
import StoryForm from "./story-form";
import Button from "@mui/material/Button";

const StoryForms = () => {
  const [story, setStory] = useState([""]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {story.map((e, i) => (
          <StoryForm key={`story_${i}`} />
        ))}
      </div>
      <Button
        variant="contained"
        className="mt-6 w-full"
        onClick={() => setStory((prev) => [...prev, ""])}
      >
        Tambah Cerita
      </Button>
    </>
  );
};

export default StoryForms;
