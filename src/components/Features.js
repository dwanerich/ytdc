import React from "react";
import img1 from '../img/wpix-logo.png'
import img2 from '../img/spectrum.png'
import img3 from '../img/barclays-logo.jpeg'
import img4 from '../img/Nassau.png'
import highlights from '../img/highlights.png'



const Features = () => {
  const teamData = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    }
  ]

  return (
    <div className='container-fluid'>
      <center>
        <hr />
      <img src={highlights} />
      <hr />
      </center> <br />
      {/* <h2 className="headers">HIGHLIGHTS</h2> */}
      <div className='row'>
    {teamData.map((person, index) => (
      <div key={index} className='col-sm'>
        <img src={person.img} alt={person.name} className="feat-img"/>
      </div>
    ))}
    </div>
  </div>
);
};

export default Features;
