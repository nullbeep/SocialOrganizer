import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";
import Settings from "./settings.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Container = styled.div`
  background-color: #406754;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  padding-right: 30px;
  /* align-items: center; */
`;

const Header = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  height: 75%;
`;

const Footer = styled.div`
  height: 10%;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
`;

const LogoIcon = styled.img`
  width: 125px; //change
  height: 125px; // change
  margin-top: 15px; // change
  align-self: center;
`;

const SettingsIcon = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-end;
  position: absolute;
  margin-top: 15px;

  /* margin-right: 100px; */
  filter: invert(91%) sepia(24%) saturate(3490%) hue-rotate(193deg)
    brightness(90%) contrast(97%);
`;

const GroupButton = styled.button`
  width: 150px;
  height: 150px;
  margin-left: 30px;
`;

const ManageButton = styled.button`
  width: 150px;
  height: 50px;
  margin-left: 30px;
`;

const AddButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-right: 30px;
`;

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownElementContainer = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
function MainPage() {
  return (
    <Container>
      <Header>
        <LogoIcon src={Apple} />
        <SettingsIcon src={Settings} />
      </Header>
      <Body>
        <GroupButton>GroupButton</GroupButton>
      </Body>
      <Footer>
        <DropdownButton id="dropdown-basic-button" title="Add">
          <Dropdown.Item href="#/action-1">Person</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Group</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Manage">
          <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>

        {/* <ManageButton>Manage</ManageButton> */}
      </Footer>
    </Container>
  );
}
export default MainPage;
