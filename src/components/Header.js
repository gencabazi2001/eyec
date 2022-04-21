import React from "react";
import { StyledHeader, SearchBox } from "./styled/Header.styled";
import { Button, ProfileButton } from "./styled/Button.styled";
import { Search, Notifications, Iso } from "@material-ui/icons";
import { useState } from "react";
import {
  ToggleHolder,
  ToggleList,
  ToggleListHolder,
  ToggleListItem,
} from "./styled/DropDown.styled";
import {useDispatch} from 'react-redux'
import {logout} from '../state/actions/isLoggedIn'
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const logOut = () => {
    dispatch(logout())
    sessionStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <StyledHeader>
      <SearchBox>
        <input type="text" className="input-search" placeholder="Search" />
        <Button w="40px" radius="50%">
          <Search fontSize="medium" />
        </Button>
      </SearchBox>
      <Button w="40px" radius="50%">
        <Notifications fontSize="medium" />
      </Button>
      <ToggleHolder>
        <Button w="128px" radius="10px" onClick={toggling}>
          My Account
        </Button>
        {isOpen && (
          <ToggleListHolder>
            <ToggleList>
              <ToggleListItem>Settings</ToggleListItem>
              <ToggleListItem onClick={logOut}>
                Log Out
                </ToggleListItem>
            </ToggleList>
          </ToggleListHolder>
        )}
      </ToggleHolder>
    </StyledHeader>
  );
}

export default Header;
