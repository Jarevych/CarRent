import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAppHeader = styled.div`
width: 1440px;
margin: 0 auto;
display: flex;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 100;
  translate: -50%;
  padding: 0 20px;
  box-shadow: 0 5px 10px gray;
  justify-content: center;
  .header-nav {
    display: flex;
    gap: 40px;
    padding: 10px;
    font-size: 24px;
  };
  .active {
    color: 0B44CD;
  }
  .active::after {
    content: '';
    display: flex;
    height: 3px;
    background-color: #0B44CD;
  }
`;

export const StyledNavLink = styled(NavLink)`
  /* border: 1px solid #b3b3ef; */
  padding: 5px 15px;
  border-radius: 5px;
  text-decoration: none;
  color: #0B44CD; 
  font-weight: 700;
  &:hover {
    color: #3470FF;
    /* border-color: #9393da; */
  }
`;