import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionList = styled.div`
  position: absolute;
  width: 180px;
  left: calc(50% - 90px);
  top: calc(100% + 5px);
  background: #fff;
  border-radius: 4px;
  padding: 0 8px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  color: #999;
  z-index: 1;
  text-align: left;
  font-size: 12px;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: initial;
      border-bottom: 1px solid #ccc;
      padding: 10px;
      cursor: pointer;

      span {
        margin-left: 5px;
      }
    }
  }
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(255, 255, 255);
  }
`;
export const Action = styled.div``;
