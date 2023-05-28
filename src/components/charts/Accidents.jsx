import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Accidents = ({ data }) => {
  return (
    <div>
      <BarChart width={750} height={250} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='cases' fill='#8884d8' />
      </BarChart>
    </div>
  );
};

export default Accidents;
