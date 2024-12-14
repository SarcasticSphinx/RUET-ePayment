import React from "react";
import "./TableStyle.css";
import { Link, useLocation } from "react-router-dom";
import {
  HonsSemesterFeeData,
  MastersSemesterFeeData,
} from "../../../data/SemesterFee";

const SemesterFeeTable = () => {
    const location = useLocation();
    const department = location.state.deptName;
  return (
    <div className="semester-fee-table container">
      <h1>
        <span className="dept-name">{department}</span> 
        {/* <br />Semester Fee Dates */}
      </h1>
      <span className="registrar-info">
        For missing semesters/sessions, please contact Room-101, Registrar
        Building, RUET
      </span>
      <div className="table-container">
        <h2>Bachelor</h2>
        <table>
          <thead>
            <tr>
              <th>Degree</th>
              <th>Session</th>
              <th>Semester</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>End Date (with 30 Taka)</th>
              <th>Status (If you pay Today)</th>
            </tr>
          </thead>
          <tbody>
            {HonsSemesterFeeData.map((row, index) => (
              <tr key={index}>
                <td>{row.degree}</td>
                <td>{row.session}</td>
                <td>{row.semester}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>{row.extendedEndDate}</td>
                <td>
                  <Link to="/payNow" state={{ feeType: "Semester Fee" }}>
                    {row.status}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-container">
        <h2>Masters</h2>
        <table>
          <thead>
            <tr>
              <th>Degree</th>
              <th>Session</th>
              <th>Semester</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>End Date (with 30 Taka)</th>
              <th>Status (If you pay Today)</th>
            </tr>
          </thead>
          <tbody>
            {MastersSemesterFeeData.map((row, index) => (
              <tr key={index}>
                <td>{row.degree}</td>
                <td>{row.session}</td>
                <td>{row.semester}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>{row.extendedEndDate}</td>
                <td>
                  <Link to="/payNow" state={{ feeType: "Semester Fee" }}>
                    {row.status}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SemesterFeeTable;
