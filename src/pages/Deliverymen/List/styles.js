import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;
  color: #666;

  input {
    margin-top: 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 35px;
    padding: 5px;

    ::placeholder {
      color: #ccc;
    }
  }
  h1 {
    font-size: 18px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      background: #7d40e7 0% 0% no-repeat padding-box;
      border: 0;
      border-radius: 4px;
      text-align: center;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 20px;
    }
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

    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }

    .iniciais {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-right: 5px;
      color: #a28fd0;
      background: #f4effc 0% 0% no-repeat padding-box;
      opacity: 1;
      text-align: center;
      align-self: center;
      vertical-align: middle;
      padding: 8px;
    }
  }

  td:last-child {
    text-align: center;
  }
`;
