import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import BCLogo from "../images/BC_Logo.png"

const CustomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light style={{backgroundColor: "#b9bfb4"}} expand="md">
        <NavbarBrand  href="/"><img className="mx-auto" style={{width: "250px"}} src={BCLogo} />Talent Calculator</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Hunter">Hunter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Shaman">Shaman</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Warlock">Warlock</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Warrior">Warrior</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Rogue">Rogue</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Priest">Priest</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Paladin">Paladin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Mage">Mage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Druid">Druid</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;