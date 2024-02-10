import { memo, useEffect } from "react";
import styled from "styled-components";

const Container = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  padding: 30px 20px 50px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  margin: 25px 0 0;

  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default function SectionComponent({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element;
}) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}

export const Section = memo(SectionComponent);
