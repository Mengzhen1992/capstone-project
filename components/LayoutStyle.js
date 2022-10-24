import styled from "styled-components";

export default function LayoutSytle({ children }) {
  return (
    <Wrap>
      <WrapMask>{children}</WrapMask>
    </Wrap>
  );
}

export const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(/images/bgImage.png);
  backdrop-filter: blur(2px);
`;

export const WrapMask = styled.div`
  display: grid;
  grid-template-columns: 1.5rem auto 1.5rem;
  /* grid-template-rows: 2rem 2.5rem 1.5rem 1rem auto 2rem auto 8rem; */
  grid-template-rows: 2rem 1rem auto auto;
  row-gap: 2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgba(253, 231, 190, 0.4);
  backdrop-filter: blur(40px);
`;
