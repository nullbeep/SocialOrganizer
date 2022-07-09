import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";
import Settings from "./settings.png";

const Container = styled.div`
  background-color: #406754; 
  height: 100vh;
  align-items: center;
`;
const LogoIcon = styled.img`
  width: 125px; //change
  height: 125px; // change
  margin-top: 5vw; // change
`;

const SettingsIcon = styled.img`
width: 75px;
height: 75px;

filter: invert(91%) sepia(24%) saturate(3490%) hue-rotate(193deg)
    brightness(90%) contrast(97%);
`

function MainPage() {
  
return(
<Container>
      <LogoIcon src={Apple} />
      <SettingsIcon src={Settings} />
</Container>
)

}
export default MainPage;
