import styled from 'styled-components';
import { darken } from 'polished';

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
  text-align: center;
  padding: 50px 20px;
  border-radius: 4px;

  form {
    > div {
      background: #fff;
      display: flex;
      flex-direction: row;
      margin-top: 30px;
      padding: 30px;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        label {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          text-align: left;
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
        }

        select {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 44px;
          padding: 0 15px;
          margin: 0 0 10px;

          option {
            width: 100%;
            height: 44px;
            border: 1px solid #ccc;
            padding: 0 15px;
            margin: 0 0 10px;
          }
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
