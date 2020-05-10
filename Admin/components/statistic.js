import firebase from "../firebase";
import React, { useState } from "react";
const Statistic = () => {

  return (
    <section className="statistic statistic2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="statistic__item statistic__item--green">
              <h2 className="number">10,368</h2>
              <span className="desc">members online</span>
              <div className="icon">
                <i className="zmdi zmdi-account-o" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="statistic__item statistic__item--orange">
              <h2 className="number">388,688</h2>
              <span className="desc">items sold</span>
              <div className="icon">
                <i className="zmdi zmdi-shopping-cart" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="statistic__item statistic__item--blue">
              <h2 className="number">1,086</h2>
              <span className="desc">this week</span>
              <div className="icon">
                <i className="zmdi zmdi-calendar-note" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="statistic__item statistic__item--red">
              <h2 className="number">$1,060,386</h2>
              <span className="desc">total earnings</span>
              <div className="icon">
                <i className="zmdi zmdi-money" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Statistic;
