import React, { useContext, useState, useEffect } from "react";
import Account from "../../assets/img/set-img/s-account.svg";
import Notification from "../../assets/img/set-img/s-notification.svg";
import Security from "../../assets/img/set-img/s-security.svg";
import SCalendar from "../../assets/img/set-img/s-calendar.svg";
import LeftMenu from "./components/LeftMenu";
import TopNav from "./components/TopNav";

import { Link } from "react-router-dom";
import AccountTab from "./components/AccountTab";
import NotificationTab from "./components/NotificationTab";
import SecurityTab from "./components/SecurityTab";
import ScheduleTab from "./components/ScheduleTab";

function Settings() {
  return (
    <div id="page-top">
      <div id="wrapper" className="d-flex text-start">
        <LeftMenu />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <TopNav />
            <div className="container-fluid vh-100">
              <div>
                <h1 className="h-size mb-4 f-color fw-normal mt-1">Settings</h1>
              </div>
              <div className="row">
                <div className="col col-12">
                  <div>
                    <ul
                      className="nav nav-tabs flex-column mt-1 border-0 w-25"
                      role="tablist"
                      style={{float: "left"}}
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab"
                          href="#tab-1"
                        >
                          <img src={Account} />
                          &nbsp; &nbsp; &nbsp;Account
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab"
                          href="#tab-2"
                        >
                          <img src={Notification} />
                          &nbsp; &nbsp; &nbsp;Notification
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab"
                          href="#tab-3"
                        >
                          <img src={Security} />
                          &nbsp; &nbsp; &nbsp;Security
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab"
                          href="#tab-4"
                        >
                          <img src={SCalendar} />
                          &nbsp; &nbsp; &nbsp;Schedule
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content px-4 w-75" style={{float: "right"}}>
                      <AccountTab />
                      <NotificationTab />
                      <SecurityTab />
                      <ScheduleTab />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to={"#page-top"} className="border rounded d-inline scroll-to-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    </div>
  );
}
export default Settings;
