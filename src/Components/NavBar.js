import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';


import { Link } from 'react-router-dom';
import { Outlet} from "react-router-dom";


function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
        
        <Link to = '/' style={{ textDecoration: 'none' }}>
        <MDBNavbarBrand>
          Timeless Rides
          </MDBNavbarBrand>
          </Link>

            <MDBNavbarToggler
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenBasic(!openBasic)}
            >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              <Link to = '/Gallery' style={{ textDecoration: 'none' }}>
                <MDBNavbarLink active aria-current='page'>
                  Gallery
                </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <Link to = '/Forum' style={{ textDecoration: 'none' }}>
                <MDBNavbarLink>Forum</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              
              

              <MDBNavbarItem>
              <Link to = '/MyGarage' style={{ textDecoration: 'none' }}>
                <MDBNavbarLink>Garage</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>

            </MDBNavbarNav>

          
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavBar;