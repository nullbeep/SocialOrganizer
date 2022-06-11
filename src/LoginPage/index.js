import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";
import ID from "./account.png";
import Pass from "./padlock.png";
const Container = styled.div`
  background-color: #5470a6; //change to your own color
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
  margin-top: 5vw; // change
`;

const Title = styled.div`
  color: #a6c4ff; //
  font-size: 5.5vw; //change
  margin-bottom: 0.7vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;
const IDIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 0.4vw;
  filter: invert(82%) sepia(54%) saturate(3781%) hue-rotate(192deg)
    brightness(108%) contrast(101%);
`;

const Input = styled.input`
  width: 200px;
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
      <Wrapper>
        <IDIcon src={ID} />
        <Input></Input>
      </Wrapper>
      <Wrapper>
        <IDIcon src={Pass} />
        <Input />
      </Wrapper>
      <Paragraph>Hello this is Andrew</Paragraph>
    </Container>
  );
}

export default LoginPage;
