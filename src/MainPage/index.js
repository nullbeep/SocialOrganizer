import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";
import Settings from "./settings.png";

const Container = styled.div`
  background-color: #406754;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 30px;
  /* align-items: center; */
`;

const Header = styled.div`
height: 15%;
display: flex;
flex-direction: column;
`

const Body = styled.div`
height: 75%;
`

const Footer = styled.div`
  height: 10%;
  
`

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
`

const AddButton = styled.button`
width: 150px;
height: 50px;
`

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
      <AddButton>Add</AddButton>
    </Footer>
    </Container>
  );
}
export default MainPage;
