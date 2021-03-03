import React from "react";
const Produto = ({ photos, name }) => {
  return (
    <div>
      {photos.map((photo, index) => (
        <img src={photo.src} alt={name} />
      ))}
    </div>
  );
};

export default Produto;
