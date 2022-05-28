import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";

const Container = styled.div`
  background-color: black; //change to your own color
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* margin-top: 300px; */
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 100px; //change
  height: 100px; // change
  margin-top: 300px; // change
`;

const Title = styled.div`
  color: white; //
  font-size: 100px; //change
`;

const Paragraph = styled.div`
  color: yellow;
  font-size: 24px;
`;
function LoginPage() {
  return (
    <Container>
      <LogoIcon src={Apple} />
      <Title>LogIn</Title>
      <Paragraph>Hello this is Andrew</Paragraph>
    </Container>
  );
}

export default LoginPage;
