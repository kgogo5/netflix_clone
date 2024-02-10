import { memo } from "react";
import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
0%, 100% {
  background-color: rgba(226, 232, 240, 0.2);
}
50% {
  background-color: rgba(226, 232, 240, 0.1);
}
`;

const SkeletonStyle = styled.div<{
  width: string;
  height: string;
}>`
  & + & {
    margin-top: 12px;
  }
  transition: 1s;
  background-color: rgba(226, 232, 240, 1);
  border-color: rgba(224, 224, 224, 1);
  border-radius: 0.75rem;
  animation: ${skeletonAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const SkeletonComponent = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  return <SkeletonStyle width={width} height={height} />;
};

export const CustomSkeleton = memo(SkeletonComponent);
