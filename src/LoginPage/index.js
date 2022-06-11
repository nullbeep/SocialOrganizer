import React, { useState } from "react";
import styled from "styled-components";
import Apple from "./apple.png";
import ID from "./account.png";
import Pass from "./padlock.png";
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
  color: #C4A8E1; //
  font-size: 5.5vw; //change
  margin-bottom: 0.7vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
<<<<<<< HEAD
  margin-bottom: 20px;
=======
  margin-bottom: 15px;
>>>>>>> 80eabe8eb4a56a7099d6a2806cfae8b1eb773f83
  align-items: center;
`;
const IDIcon = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 0.4vw;
  margin-right: 15px;
  filter: invert(82%) sepia(54%) saturate(3781%) hue-rotate(192deg)
    brightness(108%) contrast(101%);
`;

const Input = styled.input`
  width: 200px;
  background-color: #406754;
  border-radius: 200px;
  border: 3px #C4A8E1 solid;
  color: #e1a8ba;
  height: 20px;
  font-size: 20px;
  padding: 7px;
`;
const Paragraph = styled.div`
  color: #C4A8E1;
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
        <Input />
      </Wrapper>
      <Paragraph>Forgot your password?</Paragraph>
      <Paragraph>Don't have an account? Sign up!</Paragraph>
    </Container>
  );
}

export default LoginPage;
