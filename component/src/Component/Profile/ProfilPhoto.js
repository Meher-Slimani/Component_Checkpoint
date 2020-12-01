import React from "react";
import picture from "./profilePicture.jpg";

function ProfilPhoto() {
  return (
    <div className="photo-de-profil">
      <img className="image" src={picture} />
    </div>
  );
}

export default ProfilPhoto;
