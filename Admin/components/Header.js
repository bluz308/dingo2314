import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const routerPath = [
  { pathName: "Login", url: "/" },
  { pathName: "Dashboard", url: "/dashboard" },
  { pathName: "Blog", url: "/blog" },
  { pathName: "Menu", url: "/menu" },
  { pathName: "Register", url: "/register" }
];

const Header = () => {
  return (
    <header className="header-desktop3 d-none d-lg-block">
      <div className="section__content section__content--p35">
        <div className="header3-wrap">
          <div className="header__logo">
            <a href="#">
              <img src="images/icon/logo-white.png" alt="CoolAdmin" />
            </a>
          </div>
          <div className="header__navbar">
            <ul className="list-unstyled">
              {routerPath.map((item) => (
                <li
                  className={
                    useRouter().pathname === item.url ? "active" : null
                  }>
                  <Link href={item.url}>{item.pathName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header__tool">
            <div className="header-button-item has-noti js-item-menu">
              <i className="zmdi zmdi-notifications" />
              <div className="notifi-dropdown notifi-dropdown--no-bor js-dropdown">
                <div className="notifi__title">
                  <p>You have 3 Notifications</p>
                </div>
                <div className="notifi__item">
                  <div className="bg-c1 img-cir img-40">
                    <i className="zmdi zmdi-email-open" />
                  </div>
                  <div className="content">
                    <p>You got a email notification</p>
                    <span className="date">April 12, 2018 06:50</span>
                  </div>
                </div>
                <div className="notifi__item">
                  <div className="bg-c2 img-cir img-40">
                    <i className="zmdi zmdi-account-box" />
                  </div>
                  <div className="content">
                    <p>Your account has been blocked</p>
                    <span className="date">April 12, 2018 06:50</span>
                  </div>
                </div>
                <div className="notifi__item">
                  <div className="bg-c3 img-cir img-40">
                    <i className="zmdi zmdi-file-text" />
                  </div>
                  <div className="content">
                    <p>You got a new file</p>
                    <span className="date">April 12, 2018 06:50</span>
                  </div>
                </div>
                <div className="notifi__footer">
                  <a href="#">All notifications</a>
                </div>
              </div>
            </div>
            <div className="header-button-item js-item-menu">
              <i className="zmdi zmdi-settings" />
              <div className="setting-dropdown js-dropdown">
                <div className="account-dropdown__body">
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-account" />
                      Account
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-settings" />
                      Setting
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-money-box" />
                      Billing
                    </a>
                  </div>
                </div>
                <div className="account-dropdown__body">
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-globe" />
                      Language
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-pin" />
                      Location
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-email" />
                      Email
                    </a>
                  </div>
                  <div className="account-dropdown__item">
                    <a href="#">
                      <i className="zmdi zmdi-notifications" />
                      Notifications
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-wrap">
              <div className="account-item account-item--style2 clearfix js-item-menu">
                <div className="image">
                  <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                </div>
                <div className="content">
                  <a className="js-acc-btn" href="#">
                    john doe
                  </a>
                </div>
                <div className="account-dropdown js-dropdown">
                  <div className="info clearfix">
                    <div className="image">
                      <a href="#">
                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                      </a>
                    </div>
                    <div className="content">
                      <h5 className="name">
                        <a href="#">john doe</a>
                      </h5>
                      <span className="email">johndoe@example.com</span>
                    </div>
                  </div>
                  <div className="account-dropdown__body">
                    <div className="account-dropdown__item">
                      <a href="#">
                        <i className="zmdi zmdi-account" />
                        Account
                      </a>
                    </div>
                    <div className="account-dropdown__item">
                      <a href="#">
                        <i className="zmdi zmdi-settings" />
                        Setting
                      </a>
                    </div>
                    <div className="account-dropdown__item">
                      <a href="#">
                        <i className="zmdi zmdi-money-box" />
                        Billing
                      </a>
                    </div>
                  </div>
                  <div className="account-dropdown__footer">
                    <a href="#">
                      <i className="zmdi zmdi-power" />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
