import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBInput,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink,
    MDBDropdown, MDBDropdownToggle, MDBCollapse, MDBIcon,} from "mdbreact";
import Estimate from "../../move/component/Estimate";
import {Route,Link} from 'react-router-dom'
import MovingType from "../../move/component/MovingType";
const SidebarNavbar = () => {
    const [toggleStateA,setToggleStateA]=useState(false)
    const mainStyle = {
        paddingTop: "4rem"
    }
    const specialCaseNavbarStyles = {
        WebkitBoxOrient: "horizontal",
        flexDirection: "row"
    };
    const onClickHandleToggle=e=>{
        setToggleStateA(!toggleStateA)
    }
    return (
        <div>
            <Router>
                <div className="grey-skin">

                    <MDBNavbar double expand="md">
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <div
                                    onClick={onClickHandleToggle}
                                    key="sideNavToggleA"
                                    style={{
                                        lineHeight: "32px",
                                        marginRight: "1em",
                                        verticalAlign: "middle"
                                    }}
                                >
                                    <MDBIcon icon="bars" color="white" size="2x" />
                                </div>

                            </MDBNavItem>

                        </MDBNavbarNav>

                        <MDBNavbarNav right style={specialCaseNavbarStyles}>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">
                                    <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Contact</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Support</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">
                                    <MDBIcon icon="user" className="d-inline-inline" />{" "}
                                    <div className="d-none d-md-inline">Account</div>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Dropdown</div>
                                    </MDBDropdownToggle>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBNavbar>
                    <MDBCollapse isOpen={toggleStateA} navbar>
                        <MDBNavbarNav right>
                            <MDBInput
                                type="text"
                                hint="Search"
                                style={{
                                    color: "#fff",
                                    padding: "0 10px 8px 30px",
                                    boxSizing: "border-box"
                                }}
                            />
                            <MDBNavItem active>
                                <a href="/">Home</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href={"/estimate"}>이사견적보기</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href="/movingType">이사타입</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href="/videoUpload">영상올리기</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href="#!">Profile</a>
                            </MDBNavItem> <MDBNavItem>
                            <a href="#!">Profile</a>
                        </MDBNavItem>
                            
                            
                        </MDBNavbarNav>
                    </MDBCollapse>

                </div>
            </Router>
        </div>
    );
};

export default SidebarNavbar;