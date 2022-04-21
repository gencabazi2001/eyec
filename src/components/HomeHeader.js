import React from "react";
import { StyledHeader,StyledHomeHeader, HeaderEmptyDiv,SearchBox } from "./styled/Header.styled";
import { Button, InsideNavButton } from "./styled/Button.styled";
import { Search, Notifications } from "@material-ui/icons";
import { Face } from "@material-ui/icons";
import { HomeImage } from "./styled/Logo.styled";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <StyledHomeHeader>
      <HomeImage w="150px"  src="./images/eye.png"/>
      <HeaderEmptyDiv>  
        <h3>EYE C</h3>  
      </HeaderEmptyDiv>
      <Link to="/login"style={{ textDecoration: 'none' }}>
      <Button w="100px" radius="10px">
        Log In
      </Button>
      </Link>
      <Link to="/register"style={{ textDecoration: 'none' }}>
      <Button w="100px" radius="10px">
        Sign Up
      </Button>
      </Link>
    </StyledHomeHeader>
  );
}

export default HomeHeader;
