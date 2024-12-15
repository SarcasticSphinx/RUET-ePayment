import React from 'react'
import NodataImg from '../../images/no-data.png'
import './StatisticsStyle.css'

const Statistics = () => {
  return (
    <div className='container'>
      <h1>Statistics</h1>
      
      <img className='no-data-img' src={NodataImg} alt="" />
      <h2>This page currently have no data</h2>
    </div>
  )
}

export default Statistics
