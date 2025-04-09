import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ProfileIcon = () => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src="https://avatars.githubusercontent.com/u/178677917?v=4" />
      <AvatarFallback>User picture</AvatarFallback>
    </Avatar>
  );
};
