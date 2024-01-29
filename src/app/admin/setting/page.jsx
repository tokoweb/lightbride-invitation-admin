"use client";

import Masonry from "@mui/lab/Masonry";

import ContactAdminForm from "@/components/forms/web-setting-forms/contact-admin-form";
import InvitationSettingForm from "@/components/forms/web-setting-forms/invitation-setting-form";
// import RekeningForm from "@/components/forms/web-setting-forms/rekening-form";
import SocialMediaForm from "@/components/forms/web-setting-forms/social-media-form";

const Setting = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Setting Web</h3>
      </div>
      {/* <div className="grid w-full grid-cols-2 gap-6"> */}
      <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
        <InvitationSettingForm />
        {/* <ContactAdminForm /> */}
        <SocialMediaForm />
        {/* <RekeningForm /> */}
      </Masonry>
      {/* </div> */}
    </>
  );
};
export default Setting;
