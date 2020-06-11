import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #000000;
  opacity: 0.7;

  display: ${(props) => (props.visibleModal ? 'block' : 'none')};
`;

export const Content = styled.div`
  top: 238px;
  left: 497px;
  width: 450px;
  height: 353px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;
`;
