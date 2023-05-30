import React from 'react';
import { Link } from 'react-router-dom';

const auditData = [
  {
    type: 'Alarm - Security Alarm',
    id: 398048,
    assignment: 'Castle on the hill',
    previousInspection: '20/02/2021',
    openDefects: 2,
  },
  {
    type: 'Generator',
    id: 3223,
    assignment: 'Head Office',
    previousInspection: '20/33/2021',
    openDefects: 1,
  },
  {
    type: 'Vehicle',
    id: 21222,
    assignment: 'Adam',
    previousInspection: 3,
    openDefects: 0,
  },
  {
    type: 'Work Station',
    id: 23344,
    assignment: 'Adam',
    previousInspection: '20/21/2012',
    openDefects: 2,
  },
];

const AssetsTable = () => {
  return (
    <div>
      <div className='assetsTable'>
        <table id='auditsTable' style={{ width: '100%' }}>
          <tr>
            <th>Assets Type</th>
            <th>Assets ID</th>
            <th>Assignment</th>
            <th>Previous Inspection</th>
            <th>Open Defects</th>
          </tr>
          {auditData.map(
            ({ type, id, assignment, previousInspection, openDefects }, i) => {
              return (
                <tr key={i}>
                  <td>{type}</td>
                  <td>
                    <Link to={`/${id}`} className='assetsLink'>
                      {id}
                    </Link>
                  </td>
                  <td>{assignment}</td>
                  <td>{previousInspection}</td>
                  <td>{openDefects}</td>
                </tr>
              );
            }
          )}
        </table>
      </div>
    </div>
  );
};

export default AssetsTable;
