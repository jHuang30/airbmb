import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import FrontForm from './front_form';

export default () => {
  return (
      <div className="splash">
        <NavbarContainer />  
        <FrontForm/>
      </div>
  )
}