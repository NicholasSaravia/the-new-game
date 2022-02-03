import Image from "next/image";
import React from "react";

const Profile = ({ id, url, callback }) => {
  // handle click event
  // return id

  // todo: if url is incorrect show default missing-image image

  return (
    <div className="h-42 w-42 relative">
      <Image
        src={url}
        height={90}
        width={90}
        alt="profile image"
        objectFit="contain"
      ></Image>
    </div>
  );
};

export default Profile;

// proptypes
