import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Grid = styled.div`
  margin: 25px 0 50px;

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    grid-gap: 15px;
  }

  a {
    padding-bottom: 10px;
    display: block;
    &:hover,
    &:focus {
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
    }
  }

  .imgBox {
    display: block;
    width: 100%;
    min-height: 132px;
    position: relative;
    overflow: hidden;

    img {
      min-height: 40%;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -66px;
      margin-left: -50%;
    }
  }

  & img {
    display: inline-block;
    width: 100%;
  }

  & strong {
    display: block;
    margin-top: 10px;
    text-align: center;
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
