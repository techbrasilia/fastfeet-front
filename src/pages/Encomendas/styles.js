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
`;
export const Table = styled.table`
  font-size: 14px;
  width: 100%;
  margin-top: 25px;
  border-spacing: 0 10px;
`;

export const Linha = styled.tr`
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;

  td {
    text-align: center;

    > span {
      color: ${(props) => {
        if (props.status === 'Cancelada') {
          return '#DE3B3B';
        }
        if (props.status === 'Retirada') {
          return '#4D85EE';
        }
        if (props.status === 'Pendente') {
          return '#C1BC35';
        }
        if (props.status === 'Entregue') {
          return '#2CA42B';
        }
        return '';
      }};
    }
  }
`;
