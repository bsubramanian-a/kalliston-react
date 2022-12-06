import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../../assets/img/logo-d.svg';
import Trending from '../../../assets/img/d-menu/trending_up.svg';
import Person from '../../../assets/img/d-menu/person.svg';
import ChatBubble from '../../../assets/img/d-menu/chat_bubble_outline.svg';
import Calendar from '../../../assets/img/d-menu/calendar_today.png';
import FitnessCenter from '../../../assets/img/d-menu/fitness_center.svg';
import Computer from '../../../assets/img/d-menu/computer.svg';
import StoreFront from '../../../assets/img/d-menu/storefront.svg';

function LeftMenu() {
    return (
        <nav className="navbar navbar-dark align-items-start d-flex flex-column justify-content-between align-items-center sidebar sidebar-dark accordion bg-white-primary shadow-n p-0">
            <div className="container-fluid d-flex flex-column p-0 vh-100">
                <div><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><img src={Logo} /></div>
                    <div className="sidebar-brand-text mx-3"><span className="text-black" style={{ fontSize: "21px", fontWeight: "900" }}>Kalliston</span></div>
                </a>
                    <hr className="sidebar-divider my-0" />
                    <ul className="navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item"><a className="nav-link active" href="index.html"><img src={Trending} /><span className="f-color ms-md-4 l-size">Sales</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="client.html"><img src={Person} /><span className="f-color ms-md-4 l-size">Client</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="chat.html"><img src={ChatBubble} /><span className="f-color ms-md-4 l-size">Chat</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="schedule.html"><img src={Calendar} /><span className="f-color ms-md-4 l-size">Schedule</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="fitness.html"><img src={FitnessCenter} /><span className="f-color ms-md-4 l-size">Fitness Programs</span></a></li>
                    </ul>
                </div>
                <ul className="navbar-nav text-light" id="accordionSidebar-1">
                    <li className="nav-item"><a className="nav-link" href="profile.html"><img src={Computer} /><span className="f-color ms-md-4 l-size">Coach Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="package.html"><img src={StoreFront} /><span className="f-color ms-md-4 l-size">Packages</span></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default LeftMenu;