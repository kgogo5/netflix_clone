import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  margin: 25px 0 50px;

  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;

    @media (max-width: 1042px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
