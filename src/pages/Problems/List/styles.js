import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;
  color: #666;

  h1 {
    font-size: 18px;
  }
`;
export const Table = styled.table`
  font-size: 14px;
  width: 100%;
  margin-top: 25px;
  border-spacing: 0 10px;
  text-align: left;

  th {
    padding: 10px;
  }

  th:last-child {
    text-align: center;
  }
`;

export const Linha = styled.tr`
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  td {
    text-align: left;
    padding: 10px;
  }

  td:last-child {
    text-align: center;
  }
`;
