import React from "react";
import { Link } from "react-router-dom";
import "./homeStyle.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="register-office">
        <h1 className="section-heading">
          Office of the Registrar & Central Library
        </h1>
        <div className="fee-options">
          <div className="option">
            <p>1. Semester Fee</p>
            <div>
              <Link to="/RUET-ePayment/Faculty-and-depts" state= { {feeType: "Semester Fee"} } >Dates</Link>
              <Link to="/RUET-ePayment/payNow" state={ {feeType: "Semester Fee"} }>Pay Now</Link>
            </div>
          </div>
          <div className="option">
            <p>2. Library Fine (Student)</p>
            <Link to="/RUET-ePayment/payNow" state={ {feeType: "Library Fine (Student)"} }>Pay Now</Link>
          </div>
          <div className="option">
            <p>3. Library Fine (Faculty & Employee)</p>
            <Link to="/RUET-ePayment/payNow"  state={ {feeType: "Library Fine (Faculty & Employee)"} }>Pay Now</Link>
          </div>
          <div className="option">
            <p>4. Medium of Instruction(MIC) Fee</p>
            <Link to="/RUET-ePayment/payNow"  state={ {feeType: "MIC Fee"} }>Pay Now</Link>
          </div>
        </div>
      </section>
      <div className="horizontal-divider"></div>
      <section className="exam-office">
        <h1 className="section-heading">
          Office of The Controller of Examinations
        </h1>
        <div className="fee-options">
          <div className="option">
            <p>1. Credit Fee</p>
            <Link to="/RUET-ePayment/payNow"  state={{ feeType: "Credit Fee" }}>Pay Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
