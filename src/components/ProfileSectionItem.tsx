import { title } from "process";
import React from "react";
import { Location } from "./";

interface ProfileSectionItemProps {
  title: string;
  secondaryTitle: string;
  dateFrom: Date;
  dateTo: Date;
  location: Location;
}

const ProfileSectionItem: React.FC<ProfileSectionItemProps> = () => {
  return <div></div>;
};

export default ProfileSectionItem;
