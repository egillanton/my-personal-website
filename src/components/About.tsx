import React from "react";

interface AboutProps {
  firstName?: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string;
}

const About: React.FC<AboutProps> = ({
  firstName,
  lastName,
  email,
  phone,
  address,
}) => {
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
};

export default About;
