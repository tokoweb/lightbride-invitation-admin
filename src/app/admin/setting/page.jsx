"use client";

import Masonry from "@mui/lab/Masonry";

import ContactAdminForm from "@/components/forms/web-setting-forms/contact-admin-form";
import InvitationSettingForm from "@/components/forms/web-setting-forms/invitation-setting-form";
import RekeningForm from "@/components/forms/web-setting-forms/rekening-form";

const Setting = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Setting Web</h3>
      </div>
      <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
        <InvitationSettingForm />
        <ContactAdminForm />
        <RekeningForm />
      </Masonry>
    </>
  );
};
export default Setting;
