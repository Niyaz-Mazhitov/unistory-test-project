import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 35px;

  h1 {
    font-size: 36px;
    font-family: ${props => props.theme.fontFamily.primary};
    letter-spacing: 1px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 1px;
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E75626;
  }
`;

export const Table = styled.table`
  width: 100%;

  th {
    text-align: left;
    font-size: 24px;
    font-family: ${props => props.theme.fontFamily.primary};
    padding-bottom: 16px;
  }

  td {
    padding: 16px 0;
    font-size: 14px;
    font-family: ${props => props.theme.fontFamily.secondary};
    border-top: 1px solid #ffffff;
  }
`;