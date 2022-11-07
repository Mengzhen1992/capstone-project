import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Welcome() {
  const { data: session } = useSession();
  if (session) {
    return (
      <LoginWrap>
        <WelcomeText>Hi {session.user.name}</WelcomeText>
        <Logoutbutton onClick={() => signOut()}>Sign out</Logoutbutton>
      </LoginWrap>
    );
  }
  return (
    <>
      <LoginButton onClick={() => signIn()}>Sign in</LoginButton>
    </>
  );
}

const LoginWrap = styled.span`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  display: flex;
  justify-content: space-between;
`;

const WelcomeText = styled.h2`
  margin-top: 2.2rem;
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.8rem;
`;

const Logoutbutton = styled.button`
  background: var(--color-addbutton);
  box-shadow: var(--shadow-addbutton);
  border: 1px solid var(--color-addbutton-border);
  border-radius: 10px;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: var(--color-taskname);
  height: 1.5rem;
  width: 6rem;
  margin-top: 2.55rem;
  cursor: pointer;
`;

const LoginButton = styled.button`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  margin-top: 2.4rem;
  background: var(--color-addbutton);
  box-shadow: var(--shadow-addbutton);
  border: 1px solid var(--color-addbutton-border);
  border-radius: 10px;
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--color-taskname);
  text-align: center;
  height: 1.5rem;
  width: 6rem;
  cursor: pointer;
`;
