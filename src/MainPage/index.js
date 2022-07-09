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

const LogoIcon = styled.img`
  width: 125px; //change
  height: 125px; // change
  margin-top: 15px; // change
  align-self: center;
`;

const SettingsIcon = styled.img`
  width: 75px;
  height: 75px;
  align-self: flex-end;
  position: absolute;
  margin-top: 30px;

  /* margin-right: 100px; */
  filter: invert(91%) sepia(24%) saturate(3490%) hue-rotate(193deg)
    brightness(90%) contrast(97%);
`;

const GroupButton = styled.button`
width: 150px;
height: 150px;

`

function MainPage() {
  return (
    <Container>
      <LogoIcon src={Apple} />
      <SettingsIcon src={Settings} />
      <GroupButton>GroupButton</GroupButton>
    </Container>
  );
}
export default MainPage;
