import React, { useState } from 'react';
import styled from 'styled-components';
import { trainingSchedule } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) { font-size: 32px; }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 14px 20px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.text_secondary + '50'};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  outline: none;
  align-self: center;
  font-size: 16px;
  &:focus { border-color: ${({ theme }) => theme.primary}; }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const Th = styled.th`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white || '#FFFFFF'};
  padding: 18px;
  font-weight: 700;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + '15'};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  line-height: 1.4;
`;

const CostText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  white-space: nowrap;
`;

const RegisterButton = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white || '#FFFFFF'};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

const TrainingSchedule = () => {
  const [query, setQuery] = useState("");

  if (!trainingSchedule) {
    return (
      <Container>
        <Title>Loading Schedule...</Title>
      </Container>
    );
  }

  const filtered = trainingSchedule.filter(item => 
    item.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container id="training-schedule">
      <Wrapper>
        <Title>2026 Training Schedule</Title>
        <SearchInput 
          placeholder="Search for a training course..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Course Title</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Cost (₦)</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => (
                <tr key={item.id || idx}>
                  <Td>{item.id}</Td>
                  <Td style={{ color: 'inherit', fontWeight: '500', minWidth: '250px' }}>
                    {item.title}
                  </Td>
                  <Td style={{ whiteSpace: 'nowrap' }}>{item.start}</Td>
                  <Td style={{ whiteSpace: 'nowrap' }}>{item.end}</Td>
                  <Td><CostText>{item.cost}</CostText></Td>
                  <Td>
                    {item.link ? (
                      <RegisterButton href={item.link} target="_blank" rel="noopener noreferrer">
                        Register
                      </RegisterButton>
                    ) : (
                      <span style={{ fontSize: '12px', opacity: 0.5 }}>TBD</span>
                    )}
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          {filtered.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'gray' }}>
              No courses found matching "{query}".
            </div>
          )}
        </TableWrapper>
      </Wrapper>
    </Container>
  );
};

export default TrainingSchedule;