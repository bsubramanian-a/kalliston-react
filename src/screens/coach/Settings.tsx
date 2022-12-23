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
import InvoicePayoutTab from './components/InovicePayoutTab';
import BillingTab from './components/BillingTab';
import CardTab from './components/CardTab';

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
                      style={{ float: "left" }}
                    >
                      <li className="nav-item" role="presentation">
                        <Link to={"#tab-1"}
                          className="nav-link active d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Account
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link to={"#tab-2"}
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Notification
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link to={"#tab-3"}
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Security
                        </Link>
                      </li>
                      {/* <li className="nav-item" role="presentation">
                        <Link to={"#tab-4"}
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Schedule
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link to={"#tab-5"}
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Invoice & Payout
                        </Link>
                      </li> */}
                      <li className="nav-item" role="presentation">
                        <Link to={"#tab-7"}
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Billing Setting
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link to={"#tab-6"}
                          className="nav-link d-flex justify-content-start align-items-center"
                          role="tab"
                          data-bs-toggle="tab">
                          Card Setting
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content px-4 w-75" style={{ float: "right" }}>
                      <AccountTab />
                      <NotificationTab />
                      <SecurityTab />
                      {/* <ScheduleTab /> */}
                      {/* <InvoicePayoutTab /> */}
                      <BillingTab />
                      <CardTab />
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
