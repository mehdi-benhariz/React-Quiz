import React from 'react';
import {MDBNavbar,
    MDBNavbarNav,MDBNavItem ,MDBFormInline } from "mdbreact";

const Nav = () => {
    return ( 
        <MDBNavbar color="purple accent-5"  style={{position: "fixed", top:"0" ,width:"100%"}} >
          <MDBNavbarNav left>
          <MDBFormInline>
          <h4><strong class="white-text" >Quizzz</strong></h4>
          </MDBFormInline>

          </MDBNavbarNav>
      <MDBNavbarNav right>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
     );
}
 
export default Nav;