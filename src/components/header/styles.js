import styled from 'styled-components';

export const Header = styled.header`
  background: #7159c1;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

  nav {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 52px;
    padding: 0 42px;
    color: #fff;
    width: 100%;
    font-size: 14px;

    span {
      font-size: 20px;
      margin-left: 15px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }
`;
