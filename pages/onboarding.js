import { signIn } from "next-auth/react";
import styled from "styled-components";
import LayoutSytle from "../components/LayoutStyle";

export default function Onboading() {
  return (
    <LayoutSytle>
      <LoginWrap>
        <Logo>Tico</Logo>
        <LoginText>Easy task & time management</LoginText>
        <LoginButton onClick={() => signIn()}>Get Started</LoginButton>
      </LoginWrap>
    </LayoutSytle>
  );
}

const LoginWrap = styled.span`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h2`
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 9rem;
`;

const LoginText = styled.p`
  font-family: var(--font-primary);
  color: var(--color-date);
  font-size: 1.2rem;
`;

const LoginButton = styled.button`
  background: var(--color-button);
  box-shadow: var(--shadow-addbutton);
  border: 1px solid var(--color-addbutton-border);
  border-radius: 10px;
  font-family: var(--font-primary);
  font-size: 1.4rem;
  color: var(--color-button-font);
  text-align: center;
  height: 2.5rem;
  width: 12rem;
  margin-top: 2.5rem;
  cursor: pointer;
`;
