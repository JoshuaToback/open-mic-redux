import React from "react";


import DON from "../assets/images/DoNInviteNoText.png";
import ClientProp from "../components/ClientProp";

function Clients() {
  const clients = [
    {
      client: "Dead of Night Productions",
      src: DON,
      url: "https://www.youtube.com/channel/UChiRm2qtJ3OzoP14UMSOdow",
    },

    
    
  ];

  return (
    <div className="clients">
      <h1>Clients</h1>

      <div className="clients-container">
        {clients.map((clientProp, index) => (
          <ClientProp
            key={index}
            client={clientProp.client}
            src={clientProp.src}
            url={clientProp.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Clients;
