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

const SkeletonStyle = styled.div`
  transition: 1s;
  background-color: rgba(226, 232, 240, 1);
  border-color: rgba(224, 224, 224, 1);
  border-radius: 0.75rem;
  animation: ${skeletonAnimation} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  min-height: 204px;

  @media (max-width: 1080px) {
    min-height: 270px;
  }
  @media (max-width: 768px) {
    min-height: 232px;
  }
  @media (max-width: 620px) {
    min-height: 194px;
  }
`;

const SkeletonComponent = () => {
  return <SkeletonStyle />;
};

export const Skeleton = memo(SkeletonComponent);
