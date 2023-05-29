import React from 'react';

const auditData = [
  {
    site: 'Cardiff Bay Mast',
    generalInspections: '0/1',
    HeSAudits: '0/1',
    MarqueeSignOff: '-',
    PreStartCheckList: '0/1',
  },
  {
    site: 'Tallin Estonia',
    generalInspections: '0/1',
    HeSAudits: '0/1',
    MarqueeSignOff: '-',
    PreStartCheckList: '0/1',
  },
  {
    site: 'Poland WhaeareHouse',
    generalInspections: '0/1',
    HeSAudits: '0/1',
    MarqueeSignOff: '-',
    PreStartCheckList: '0/1',
  },
  {
    site: 'Germany Dortmund',
    generalInspections: '0/1',
    HeSAudits: '0/1',
    MarqueeSignOff: '-',
    PreStartCheckList: '0/1',
  },
];

const AuditTargets = () => {
  return (
    <div className='safetyDashboardContainer'>
      <h3 className='safetyDashboardTitle'>Audit Targets</h3>
      <div className='auditTargetsTable'>
        <table id='auditsTable'>
          <tr>
            <th>Site Name</th>
            <th>General Inspections</th>
            <th>H&S Audits</th>
            <th>Marquee sign off</th>
            <th>Pre Start Checklist</th>
          </tr>
          {auditData.map(
            (
              {
                site,
                generalInspections,
                HeSAudits,
                MarqueeSignOff,
                PreStartChecklist,
              },
              i
            ) => {
              return (
                <tr key={i}>
                  <td>{site}</td>
                  <td>{generalInspections}</td>
                  <td>{HeSAudits}</td>
                  <td>{MarqueeSignOff}</td>
                  <td>{PreStartChecklist}</td>
                </tr>
              );
            }
          )}
        </table>
      </div>
    </div>
  );
};

export default AuditTargets;
