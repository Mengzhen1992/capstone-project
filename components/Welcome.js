import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import logout from "../public/images/logout.svg";
import calendar from "../public/images/calendar.svg";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Welcome() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      {session && (
        <Wrap>
          <WelcomeText>Hi {session.user.name}</WelcomeText>
          <Calendarbutton onClick={() => router.push("/calendar")}>
            <Image src={calendar} alt="button to calendar" />
          </Calendarbutton>
          <Logoutbutton onClick={() => signOut()}>
            <Image src={logout} alt="button to logout" />
          </Logoutbutton>
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.span`
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

const Calendarbutton = styled.button`
  background: transparent;
  border-style: none;
  margin-top: 2.6rem;
  margin-right: -3rem;
  color: #000;
  text-align: right;
  cursor: pointer;
`;

const Logoutbutton = styled.button`
  background: transparent;
  border-style: none;
  font-size: 1.5rem;
  margin-top: 2.7rem;
  text-align: right;
  cursor: pointer;
`;
