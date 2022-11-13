import React from "react";
import { getCsrfToken } from "next-auth/react";
import LayoutSytle from "../../components/LayoutStyle";
import styled from "styled-components";
import github from "../../public/images/github.svg";
import google from "../../public/images/google.svg";

import Image from "next/image";

export default function Login({ csrfToken }) {
  return (
    <LayoutSytle>
      <GithubForm action="/api/auth/signin/github" method="POST">
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <input type="hidden" name="callbackUrl" value="/" />
        <GithubButton type="submit">
          <Image src={github} alt="github icon" />
          <Text>Sign in with Github</Text>
        </GithubButton>
      </GithubForm>
      <GoogleForm action="/api/auth/signin/google" method="POST">
        <input type="hidden" name="csrfToken" value={csrfToken} />
        <input type="hidden" name="callbackUrl" value="/" />
        <GithubButton type="submit">
          <Image src={google} alt="google icon" />
          <Text>Sign in with Google</Text>
        </GithubButton>
      </GoogleForm>
    </LayoutSytle>
  );
}

const GithubButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-button);
  box-shadow: var(--shadow-box);
  border: 1px solid var(--shadow-addbutton);
  border-radius: 15px;
  width: 16rem;
  height: 3rem;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  color: var(--color-button-font);
  cursor: pointer;
  &:hover {
    background: var(--color-button-hover);
  }
`;

const GithubForm = styled.form`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  justify-self: center;
  margin-top: 9rem;
`;

const GoogleForm = styled.form`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  justify-self: center;
  margin-top: 13rem;
`;

const Text = styled.p`
  padding-left: 0.5rem;
`;

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
