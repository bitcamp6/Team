import React, {Component, useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


const Navbars= () => {

    const [collapse1,setCollapse1]=useState(false)
    const onClickToggleCollapse=e=>{
        setCollapse1(!collapse1)
    }

    return (
        <div>
            <Router>
                <MDBContainer>
                    <MDBNavbar color="amber lighten-4" style={{ marginTop: '20px' }} light>
                        <MDBContainer>
                            <MDBNavbarBrand>
                               IZZI
                            </MDBNavbarBrand>
                            <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={onClickToggleCollapse} />
                            <MDBCollapse isOpen={collapse1} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#!">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Link</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Profile</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBContainer>
            </Router>
        </div>
    );
};

export default Navbars;