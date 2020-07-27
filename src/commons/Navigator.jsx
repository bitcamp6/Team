import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/images/logo3.png'

const Navigator = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand js-scroll-trigger">IZZI</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">공지 사항</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">커뮤니티</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/mypage" className="nav-link js-scroll-trigger">거래 게시판</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#">이벤트</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" herf="#">고객지원</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" herf="#">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link js-scroll-trigger">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigator;