"use client";

import BrideForm from "@/components/forms/bride-forms/bride-form";
import CoverForm from "@/components/forms/bride-forms/cover-form";
import AkadForm from "@/components/forms/event-forms/akad-form";
import MapsForm from "@/components/forms/event-forms/maps-form";
import ResepsiForm from "@/components/forms/event-forms/resepsi-form";
import GalleryForm from "@/components/forms/gallery-forms/gallery-form";
import VideoForm from "@/components/forms/gallery-forms/video-form";
import ProfileForm from "@/components/forms/profile-forms/profile-form";
import FeaturesForm from "@/components/forms/setting-forms/features-form";
import MusicForm from "@/components/forms/setting-forms/music-form";
import SettingForm from "@/components/forms/setting-forms/setting-form";
import StoryForms from "@/components/forms/story-forms/";

const EditPengguna = ({ params }) => {
  const { id } = params;

  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Edit Pengguna</h3>
      </div>
      <div className="mt-6 flex flex-col gap-6 rounded-xl lg:flex-row">
        <div className="flex w-full flex-col gap-6">
          <BrideForm />
          <CoverForm />
          <AkadForm />
          <MapsForm />
          <SettingForm />
          <div className="rounded-md bg-white p-4">
            <StoryForms />
          </div>
        </div>
        <div className="flex w-full flex-col gap-6">
          <BrideForm />
          <MusicForm />
          <ResepsiForm />
          <VideoForm />
          <GalleryForm />
          <FeaturesForm />
          <div className="rounded-md bg-white p-4">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPengguna;
