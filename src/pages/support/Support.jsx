import React from "react";
import "./SupportStyle.css";
import emailImg from "../../images/email.png";
import callImg from "../../images/call.png";
import locationImg from "../../images/location.png";
import timeImg from "../../images/time.png";

import { support } from "../../data/suppport";

const Support = () => {
  return (
    <div className=" container">
      <h1>System and Support</h1>
      <div className="support-container">
        {support.map((item) => {
          return (
            <div key={item.id} className="support-card">
              <h2>{item.title}</h2>
              <div className="support-details">
                <div className="support-details-item">
                  <img src={emailImg} alt="email" />
                  <p>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </p>
                </div>
                <div className="support-details-item">
                  <img src={callImg} alt="call" />
                  <p>
                    <a href={`tel:${item.phone}`}>{item.phone}</a>
                  </p>
                </div>
                <div className="support-details-item">
                  <img src={locationImg} alt="location" />
                  <p>{item.location}</p>
                </div>
                <div className="support-details-item">
                  <img src={timeImg} alt="time" />
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Support;
