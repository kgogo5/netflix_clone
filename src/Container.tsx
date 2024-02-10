import styled from "styled-components";

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 30px 20px 50px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export default function Container({ children }: { children: JSX.Element }) {
  return <Wrap>{children}</Wrap>;
}
