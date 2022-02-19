import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>
          <Link to="/" className="link">
              WEB PORTAL
          </Link>
      </Logo>
      <Menu
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MenuIcon sx={{ fontSize: 35 }} />
      </Menu>
      <NavLinks isOpen={isOpen}>
        <NavItem>
          <Link to="/about" className="link" >
            ABOUT US
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className="link">
            CONTACT US
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/" className="link">
            HOME
          </Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
}
const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgba(232, 242, 249);
  color: black;
  position: fixed;
  top: 0;
  width: 100%;
`;
const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  margin-right: 20px;
 
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    line-height: 2;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  }
`;
const NavItem = styled.li`
  margin-right: 20px;
  .link {
    text-decoration: none;
    color: black;
  }
`;
const Logo = styled.div`
  font-weight: bold;
  display: flex;
  flex: 20%;
  font-size: 20px;
  margin-left: 20px;
  .link {
    text-decoration: none;
    color: black;
  }
  @media (max-width:768px){
      margin-left: 0;
  }
`;

const Menu = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  color: black;
  margin-right: 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export default Navbar;
