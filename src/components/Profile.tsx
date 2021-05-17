import React from "react";
import { About } from "./";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div>
      <About firstName="Egill Anton" lastName="Hlöðversson"></About>
    </div>
  );
};

export default Profile;
