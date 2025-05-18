import Image from "next/image";
import NoUserPicture from "@/public/no-user-image.png";

const UserMenuIcon = ({ profileImageUrl }: { profileImageUrl: string }) => {
  return (
    <Image
      src={!profileImageUrl ? NoUserPicture : profileImageUrl}
      width={50}
      height={50}
      alt="profile-picture"
      className="cursor-pointer rounded-full"
    />
  );
};

export default UserMenuIcon;
