import React from 'react';
import '../assets/css/main.css'

const Main = () => {
    return (
        <div>
            <main className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">방 안에서 이사를</div>
                        <div className="intro-heading text-uppercase">Welcome To IZZI!</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="../components/Estimate.js">이사하러 가기
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;