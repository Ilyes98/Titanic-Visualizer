import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles/GenderChart.css';

function GenderChart({ genderData }) {
  return (
    <div className="GenderChart">
      <h2>Gender Distribution</h2>
      <div className="chart-container">
        <BarChart
          className="chart"
          width={500}
          height={300}
          data={genderData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default GenderChart;
