import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 100%;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 30%;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      color: #999;
      margin-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    button {
      border: 0;
      background: none;
      margin-top: 2px;
      font-size: 12px;
      color: #ff0000;
    }
  }
`;
