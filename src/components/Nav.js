import React from 'react'
import logo from '../img/logo.png'
import '../index.css'
export const Nav = () => {

  return (
    <div style={{backgroundColor: 'transparent',}} className='nav'>
      <img className="nav-logo" style={{backgroundColor: 'black', marginTop: '25px', width: '200px', borderRadius: '20px'}} src={logo}  alt='logo' data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/>
      <center> <br />
        </center>
        <hr style={{color: 'white'}}/>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body"
  style={{fontSize: '25px'
}}>

    <h5 id="offcanvasTopLabel">
    </h5>
    COMING SOON...
  </div>
</div>
<hr style={{color: 'yellow'}}/>
    </div>
  )
}
export default Nav;
