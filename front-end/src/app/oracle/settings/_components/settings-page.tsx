import { getUserSession } from "@/utils/get-user";
import { SettingsPageContainer } from "./settings-page-container";
import { UpdateProfileForm } from "./update-profile-form";
import { UpdateProfilePicture } from "./update-profile-picture";

export const SettingsPage = async () => {
  const { username, email, profileImageUrl } = await getUserSession();

  return (
    <SettingsPageContainer>
      <UpdateProfilePicture profileImageUrl={profileImageUrl as string} />
      <UpdateProfileForm username={username} email={email} />
    </SettingsPageContainer>
  );
};
