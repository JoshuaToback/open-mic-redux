import React from "react";
import TeamProp from "../components/TeamProp"

import Josh from "../assets/images/headshot.png"
import Andrea from "../assets/images/andreareel.png"
import Violet from "../assets/images/violet.png"
import ghoul from "../assets/images/flgl.png"
import Chris from "../assets/images/falcon.png"
import RMM from "../assets/images/RMM.png"


function About() {

  const members = [
    {
      name: "Joshua Toback (JTVA)",
      title: 'Project Lead and Casting Director',
      image: Josh,
      bio: "The founder of Open Mic Studios, Joshua began voice acting in 2007 when he recorded voice over for his LEGO stopmotion animations. Little did he know that the voice acting aspect would turn into his greatest passion. He is now a casting director aspiring to create a bridge for everyone to cross over into the voiceover industry!"
    },

    {
      name: "Gordon Williams (RedMufflerMan)",
      title: "Casting Director",
      image: RMM,
      bio: "Gordon is a Voice Actor, Casting director and Content Creator based in Houston TX.  With over 10+ years of production experience ranging from television, to advertising, to Youtube content creation, Gordon has the experience to help make your project a reality!"
    },

    {
      name: "Andrea Avery (DreyahVA)",
      title: 'Casting Director and Voice Coach',
      image: Andrea,
      bio: "Andrea is a classically trained singer and actor with a passion for performance! She’s been voice acting for 3 years but has been an actor since childhood. She loves to direct and bring people into the voice over community. She is always around and willing to help!"
    },
    
    {
      name: "Violet (MetalFireVA)",
      title: 'Casting Director',
      image: Violet,
      bio: "Violet is a longtime voice actress who's been a part of several projects since 2012. She hopes to bring her passion for voiceover and excitement regarding finding new talent to work with to OMS!"
    },

    {
      name: "Luis Luna (FLGL)",
      title: 'Casting Director and Designer',
      image: ghoul,
      bio: "Luis is a longtime artist and voice actor who's a voice actor for fun and an artist for real! His passion for art of both digital and voice will paint a new picture for you!"
    },

    {
      name: 'Christiaan Conners',
      title: 'Casting Director',
      image: Chris,
      bio: "Starting his voice acting journey in 2014, Christiaan has kept chasing the dream to this day. He has joined OMS to help others chase said dream!"
    }
  ];

  return (
    <div className="about">
      <h1 className="title">Meet the Team</h1>
      <TeamProp members={members} />
    </div>
  );
}

export default About;
