import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const PlatformPresenter = ({ platformLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {platformLists && platformLists.length > 0 && (
        <Section title="Platforms List">
          {platformLists.map((platformLists) => platformLists.name)}
        </Section>
      )}
    </Container>
  );

PlatformPresenter.propTypes = {
  platformLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PlatformPresenter;
