import React from "react";

function ClientProp(props) {
  const handleImageClick = () => {
    // Add logic here for the external link redirection
    window.open(props.url, "_blank");
  };
  return (
    <div className="client">
      <h2>{props.client}</h2>
      <div className="client-image-container">
        <img
          src={props.src}
          alt={props.client}
          className="client-logo"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default ClientProp;
