import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;
  color: #666;

  h1 {
    font-size: 18px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      font-weight: bold;

      a {
        background: #cccccc 0% 0% no-repeat padding-box;
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
        margin-right: 5px;
      }

      button {
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
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px 20px;
  border-radius: 4px;
  text-align: left;

  form {
    > div {
      background: #fff;
      padding: 30px;
      margin-top: 20px;
      text-align: left;

      .endereco {
        display: grid;
        grid-template-columns: 55% 30%;
        grid-gap: 20px;
      }
      .endereco-complemento {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        grid-gap: 20px;
      }

      .numero {
        width: 155px;
      }

      .complemento {
        width: 300px;
      }

      .endereco-cidade {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        grid-gap: 20px;
      }

      div {
        label {
          font-size: 14px;
          font-weight: 700;
          color: #999;
        }

        input {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 44px;
          padding: 0 15px;
          margin: 0 0 10px;

          &::placeholder {
            color: #999;
          }
        }
      }
    }
  }
`;
