import React from 'react';
import styled from 'styled-components';

// Table Container
const TableContainer = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

// Table Wrapper
const TableWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

// Styled Table
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 12px;
  overflow: hidden;

  thead {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    font-size: 14px; /* Reduced font size for table headers */
  }

  colgroup {
    col:first-child {
      width: 10%; /* Smaller width for the first column */
    }
    col:nth-child(2) {
      width: 35%;
    }
    col:nth-child(3) {
      width: 45%; /* Larger width for the remaining columns */
    }
  }

  th, td {
    padding: 16px;
    border: 1px solid #ddd;
    font-size: 14px; /* Reduced text size */
  }

  td {
    text-align: center;
    color: #4682B4;
    font-size: 13px; /* Reduced text size for table data */
  }
  
  td:nth-child(3) {
    text-align: left;
    color: #4682B4;
    font-size: 13px; /* Reduced text size for the third column */
  }

  th {
    font-weight: bold;
    text-align: center;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 12px;
      font-size: 12px; /* Reduced font size for medium screens */
    }
  }

  @media (max-width: 480px) {
    th, td {
      padding: 8px;
      font-size: 11px; /* Smallest text for small screens */
    }
  }
`;

// Table Title
const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// Sample Data for the Table
const data = [
  {id: 9},
  { number: 1, name: 'Duration',  location: '2 Days' },
  { number: 2, name: 'Training Language',  location: 'English' },
  { 
    number: 3, name: 'Prerequisite',  
    location: <>
      • A bachelor's degree in engineering, technology, or a related field.
      <br />
      • Several years of experience in the field of engineering, construction, or operations.
      <br />
      • A basic understanding of commissioning and start-up principles and procedures.
    </>
  },
  { number: 4, name: 'Methodology',  location: 'Theoretical/Practical'},
  
  { number: 5, name: 'Overview',  location: 'The Commissioning and Start-Up Course is designed to equip participants with essential knowledge and practical skills needed to effectively manage the commissioning and start-up phases of projects, particularly in engineering and industrial settings. This course covers the entire process from initial planning to final handover, ensuring that systems operate efficiently, safely, and in compliance with industry standards.'},
  { number: 6, name: 'Objectives',  location: 
    <>
      • Understand the principles and importance of commissioning and start-up.
      <br />
      • Develop effective commissioning plans and strategies.
      <br />
      • Learn about the verification and testing of systems and equipment.
      <br />
      • Execute Pre-commissioning and Commissioning Activities.
      <br />
      • Manage Initial Start-up.
      <br />
      • Master safe and systematic start-up procedures.
      <br />
      • Gain insights into operator training and documentation handover.
      <br />
      • Troubleshoot and Resolve Issues.
      <br />
      • Enhance Team Coordination.
      <br />
      • Improve Project Outcomes.
      <br />
      • Analyze real-world case studies to identify best practices and common challenges.
    </>
  },
  { number: 7, name: 'Outline',  location: 
    <>
      •	Module 1:   Introduction to Commissioning and Start-Up
      <br />
      •	Module 2:   Preparation and planning
      <br />
      •	Module 3:   Mechanical Completion  and Integrity checking
      <br />
      •	Module 4:   Pre-commissioning & Operational Testing
      <br />
      •	Module 5:   Start Up & Initial Operation
      <br />
      •	Module 6:   Performance and Acceptance testing 
      <br />
      •	Module 7:   Post Commissioning
      <br />
      •	Module 8:   Case Study

    </>
  },
  { number: 8, name: 'Assessment',  location: '•	Online Written  Exam / AutoCAD Design Exam '},
  { number: 9, name: 'Course Delivery Formats',  location: 
  <>
    •	Classroom-based training
    <br />
    •	Online courses 
    <br />
    •	In-house workshops
    <br />
    •	On-the-job training
  </>
},
  { number: 10, name: 'Training cost',  location: '•	#100,000 / $80 '},
  { number: 11, name: 'Certification',  location: '•	Certificate of Completion '},
];

// React Table Component
const CustomStyledTable = () => {
  return (
    <TableContainer>
      <TableWrapper>
        <Title>Overview</Title>
        <StyledTable>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>No.</th>
              <th>Conditions</th>
              <th>Course: Commissioning and Start-up</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.number}</td>
                <td>{row.name}</td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </TableContainer>
  );
};

export default CustomStyledTable;
