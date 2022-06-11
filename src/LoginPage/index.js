import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";
import ID from "./account.png";
import Pass from "./padlock.png";
import Eye from "./eye.png";
import Eyeclose from "./eyeclose.png";
const Container = styled.div`
  background-color: #406754; //change to your own color
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* margin-top: 300px; */
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 150px; //change
  height: 150px; // change
  margin-top: 3vw; // change
`;

const Title = styled.div`
  color: #c4a8e1; //
  font-size: 5.5vw; //change
  margin-bottom: 0.7vw;
  font-family: "Itim", cursive;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;
const IDIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 0.4vw;
  margin-right: 15px;
  filter: invert(91%) sepia(24%) saturate(3490%) hue-rotate(193deg)
    brightness(90%) contrast(97%);
`;

const Input = styled.input`
  width: 200px;
  background-color: #406754;
  border-radius: 200px;
  border: 3px #c4a8e1 solid;
  color: #e1a8ba;
  height: 20px;
  font-size: 20px;
  padding: 7px;
`;
const EyeIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 0.4vw;
  margin-left: 15px;
  filter: invert(91%) sepia(24%) saturate(3490%) hue-rotate(193deg)
    brightness(90%) contrast(97%);
`
const Paragraph = styled.div`
  color: #c4a8e1;
  font-size: 20px;
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
        <Input type="password" />
        <EyeIcon src={Eye}/>
      </Wrapper>
      <Paragraph>Forgot your password?</Paragraph>
      <Paragraph>Don't have an account? Sign up!</Paragraph>
    </Container>
  );
}

export default LoginPage;
