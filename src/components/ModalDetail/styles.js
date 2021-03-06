import styled from 'styled-components';

export const Content = styled.div`
  color: #666;

  h2 {
    font-size: 14px;
    margin: 10px 0;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
  }

  hr {
    border: 1px solid #ccc;
    margin-top: 10px;
  }
`;

export const Signature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 200px;
    max-height: 65px;
  }
`;
