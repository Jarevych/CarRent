import React from "react";
// import Header from "./Header";
import { StyledAppHeader} from './LayoutStyling'
import Header from "./Header";

const Layout = ({children}) => {
  return (

    <StyledAppHeader>
      <Header/>
      <h1>hello</h1>
    </StyledAppHeader>
  );
};

export default Layout;
