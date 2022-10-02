import React from "react";
import { Fragment } from "react";
import {  FaFacebook, FaPinterest, FaInstagram } from 'react-icons/fa';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="bg">
            <h1 className="header">WE’RE LAUNCHING SOON</h1>
            <footer> <FaFacebook className="face" /> <FaPinterest className="pint" /> <FaInstagram className="insta" />  </footer>
            <div className="clock">
              <section>
                <p>{timerDays}</p>
                <small>DAYS</small>
              </section>

              <section>
                <p>{timerHours}</p>
                <small>HOURS</small>
              </section>

              <section>
                <p>{timerMinutes}</p>
                <small>MINUTES</small>
              </section>

              <section>
                <p>{timerSeconds}</p>
                <small>SECONDS</small>
              </section>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
    
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
