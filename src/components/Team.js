import React from 'react'
import niecy from '../img/dh.png'
import rodney from '../img/rc.png'
import dwane from '../img/dr.png'
import team from '../img/the_team.png'
import Footer from './Footer'
import { NavLink } from "react-router-dom";




const Team = () => {

  const teamData = [
    {
      img: niecy,
      name: 'Denise Howell',
      title: 'Founder & CEO',
      link: 'http://www.instagram.com/denisehowell'
    },
    {
      img: rodney,
      name: 'Rodney Coles',
      title: 'Camera & Film',
      link: 'http://www.instagram.com/'

    },
    {
      img: dwane,
      name: 'Dwane Rich',
      title: 'Technology',
      link: 'http://www.instagram.com/dwanerich'

    }
  ]
  return (
    <div className='container-fluid'>
      <center>
        <hr />
      <img src={team} className='headers'/>
      </center>
      <hr />
      <div className='row'>
    {teamData.map((person, index) => (

      <div key={index} className='col-sm'>
        <img src={person.img} alt={person.name} className="team-img"/>
        <h2 className='headers'>{person.name}</h2>
        <p className='headers'>{person.title}</p>
      </div>
    ))}
    </div>
    {/* <Footer /> */}
  </div>
);
};

export default Team
