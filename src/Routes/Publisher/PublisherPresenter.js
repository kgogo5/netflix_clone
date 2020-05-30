import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const PublisherPresenter = ({ publisherLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {publisherLists && publisherLists.length > 0 && (
        <Section title="Publishers List">
          {publisherLists.map((publisherLists) => publisherLists.name)}
        </Section>
      )}
    </Container>
  );

PublisherPresenter.propTypes = {
  publisherLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PublisherPresenter;
