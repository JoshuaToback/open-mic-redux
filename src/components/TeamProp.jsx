import React from 'react';

const AboutProp = ({ members }) => {
  return (
    <div className='about-containers team-containers'>
      {members.map((member, index) => (
        <div key={index} className="details-container .member-card">
          <img src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <h3>{member.title}</h3>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutProp;
