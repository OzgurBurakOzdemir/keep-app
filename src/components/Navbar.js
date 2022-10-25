import React from "react";
import { Navbar, Nav, Input, InputGroup } from "rsuite";
import { Gear, AddOutline } from "@rsuite/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  MdHomeFilled,
  MdLightbulbOutline,
  MdSearch,
  MdMenu,
  MdSettings,
} from "react-icons/md";
import { setSidebar } from "../slices/sidebarSlice";
const MyNavbar = () => {
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  // something
  return (
    <Navbar style={{ display: "flex" }}>
      <Navbar.Brand
        onClick={() => dispatch(setSidebar(!isOpen))}
        style={{ cursor: "pointer" }}
      >
        <MdMenu size="1.25rem" />
      </Navbar.Brand>
      <Nav>
        <Nav.Item icon={<MdLightbulbOutline />}>Keep</Nav.Item>
      </Nav>
      <Nav style={{ marginLeft: "10%", marginRight: "10%", flex: "1" }}>
        <Nav.Item style={{ width: "100% " }}>
          <InputGroup>
            <Input placeholder="Search now." />
            <InputGroup.Addon>
              <MdSearch size="1.25rem" />
            </InputGroup.Addon>
          </InputGroup>
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<MdSettings />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
