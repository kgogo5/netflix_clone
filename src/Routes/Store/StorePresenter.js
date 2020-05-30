import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const StorePresenter = ({ storeLists, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {storeLists && storeLists.length > 0 && (
        <Section title="Stores List">
          {storeLists.map((storeLists) => storeLists.name)}
        </Section>
      )}
    </Container>
  );

StorePresenter.propTypes = {
  storeLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default StorePresenter;
