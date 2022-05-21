import { Dashboard, WarningRound, Gear, Image } from "@rsuite/icons";
import React, { useEffect } from "react";
import { MdAgriculture, MdGroup } from "react-icons/md";
import { Nav, Sidenav, Toggle } from "rsuite";
import { useSelector } from "react-redux";

const panelStyles = {
  padding: "15px 20px",
  color: "#aaa",
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: "#34c3ff",
  color: " #fff",
};

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  const { isOpen } = useSelector((state) => state.sidebar);
  //   useEffect(() => {
  //     if (isOpen === false) {
  //       //   setActiveKey();
  //       console.log("isOpen", isOpen);
  //     }
  //     console.log("activeKey", activeKey);
  //   }, [isOpen]);

  useEffect(() => {
    console.log("activeKey", activeKey);
  }, [activeKey]);

  return (
    <div style={{ width: 240 }}>
      <Sidenav expanded={isOpen} defaultOpenKeys={["1"]}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<Dashboard />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<WarningRound />}>
              User Group
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="3"
              title="Advanced"
              icon={<Image />}
            >
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<Gear />}
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
