import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Welcome() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <WelcomeText>Hi {session.user.email.slice(0, -10)}</WelcomeText>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

const WelcomeText = styled.h2`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  margin-top: 1.7rem;
  font-family: var(--font-primary);
  font-weight: 900;
  font-size: 2rem;
`;
