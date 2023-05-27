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

const data = [
  {
    name: 'First Aid Injury',
    cases: 100,
  },
  {
    name: 'To be determined',
    cases: 30,
  },
  {
    name: 'Medical Treatment',
    cases: 10,
  },
  {
    name: 'Critical Injury',
    cases: 3,
  },
];

const Accidents = () => {
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
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
