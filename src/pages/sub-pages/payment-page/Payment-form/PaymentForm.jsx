import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useNavigate
import "./PaymentFormStyle.css";
import { departments } from "../../../../data/Departmetns";

const PaymentForm = () => {
  const location = useLocation();

  const { feeType } = location.state || { feeType: "Unknown Fee" };
  
  const [formData, setFormData] = useState({
    registrationNo: "",
    rollNo: "",
    department: "",
    session: "",
    semester: "",
    name: "",
    email: "",
    amount: "",
    credit: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRollNo = (rollNo) => {
    const code = rollNo.substring(2, 4);
    const sessionCode = rollNo.substring(0, 2);
    const session = sessionCode !== "" ? `20${sessionCode} - ${parseInt(sessionCode) + 1}` : "";

    const departmentObj = departments.find((dept) => dept.code === code);
    const department = departmentObj ? departmentObj.name : "";

    setFormData((prevData) => ({
      ...prevData,
      rollNo,
      session,
      department,
    }));

    console.log("Extracted Code:", code);
    console.log("Extracted Session:", session);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="payment-form-container">
      <h2>{feeType}</h2>
      <form className="PaymentForm" onSubmit={handleSubmit}>
        <label>
          Registration No.
          <input
            type="text"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleChange}
          />
        </label>

        <label>
          Roll No.
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={(e) => {
              const value = e.target.value;
              handleChange(e); // Update form data with current input
              handleRollNo(value); // Process roll number
            }}
          />
        </label>

        <label>
          Department
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">
              {formData.department === ""
                ? "Select Your Department"
                : formData.department}
            </option>
            {departments.map((department) => (
              <option key={department.code} value={department.shortName}>
                {department.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Session
          <input
            type="text"
            name="session"
            value={formData.session}
            onChange={handleChange}
            disabled
          />
        </label>

        <label>
          Semester
          <select
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          >
            <option value="">Select Semester</option>
            {Array.from({ length: 8 }, (_, i) => (
              <option key={`semester-${i + 1}`} value={`${i + 1}th`}>
                {(i+1 == 1) ? `${i + 1}st` : (i+1 == 2) ? `${i + 1}nd` : (i+1 == 3) ? `${i + 1}rd` : `${i + 1}th`}
              </option>
            ))}
          </select>
        </label>

        {feeType === "Credit Fee" && (
          <label>
            Total Credit
            <input
              type="number"
              name="credit"
              value={formData.credit}
              onChange={handleChange}
            />
          </label> 
        )}

        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Amount to pay
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Proceed to next</button>
      </form>
    </div>
  );
};

export default PaymentForm;
