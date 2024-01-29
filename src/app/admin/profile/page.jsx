import Paper from "@mui/material/Paper";

import ProfileForm from "@/components/forms/profile-forms/profile-form";

const Profile = () => (
  <>
    <div className="mb-3">
      <h3>Profil</h3>
    </div>
    <div className="flex flex-col gap-6">
      <Paper className="h-fit w-full rounded-md p-4 lg:w-2/3 xl:w-1/2">
        <ProfileForm />
      </Paper>
    </div>
  </>
);

export default Profile;
