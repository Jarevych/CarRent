import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const StyledAppHeader = styled.div`
  position: relative;
  padding: 0 20px 20px 20px;
  box-shadow: 0 5px 10px gray;
  .header-nav {
    display: flex;
    gap: 40px;
    padding: 20px;
    font-size: 24px;
    /* background-color: #9393da; */
  }
  .active {
    color: red;
  }
  .active::after {
    content: '';
    display: block;
    height: 3px;
    background-color: red;
  }
`;

