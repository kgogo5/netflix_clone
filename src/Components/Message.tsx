import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

export default function Message({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
}
