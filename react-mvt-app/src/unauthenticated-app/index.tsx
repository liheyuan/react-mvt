import React, { useState } from "react";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { Button, Card, Divider } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container>
      <Header />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <RegisterPage /> : <LoginPage />}
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有帐号了？直接登录" : "还没有帐号？注册一个吧"}
        </a>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
