import React from "react";
import "./searchReceiptStyle.css";
import { useState } from "react";




const searchReceipt = () => {
    const [RollNo, setRollNo] = useState("");
    const handleChange = (e) => {
        setRollNo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", RollNo);
    };


    
  return (
    <div className="search-receipt-container">
      <h1>Search for Payment Receipt</h1>
      <form className="PaymentForm" onSubmit={handleSubmit}>
        <label>
          Roll No.
          <input
            type="text"
            name="registrationNo"
            value={RollNo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default searchReceipt;
