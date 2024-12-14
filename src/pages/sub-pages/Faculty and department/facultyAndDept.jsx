import React, { useState } from 'react';
import './facultyAndDeptStyle.css';
import { faculties } from '../../../data/Faculties';
import { Link, useLocation } from 'react-router-dom';
import dropDownImg from '../../../images/dropdown.png';

const FacultyAndDept = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [department, setDepartment] = useState(null);
  console.log(department);


  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className='faculty-container'>
      <h1>Available Faculties and Departments</h1>
      <p>For missing semesters/sessions, please contact Room-101, Admin Building, RUET</p>

      <div className='faculties'>
        <ul>
          {faculties.map((faculty, index) => (
            <li key={index}>
              <div onClick={() => toggleDropdown(index)} className='faculty-header'>
                {faculty.name}
                <img src={dropDownImg} alt="Toggle Dropdown" className={`dropdown-icon ${openDropdown === index ? 'open' : ''}`} />
              </div>
              {openDropdown === index && (
                <ul className='departments'>
                  {faculty.departments.map((department, deptIndex) => (
                    <Link to="/RUET-ePayment/SemesterFeeTable" state={{deptName: department}}>
                    <li key={deptIndex} onClick={() => setDepartment(department)}>{department}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacultyAndDept;
