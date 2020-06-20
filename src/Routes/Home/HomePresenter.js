import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const HomePresenter = ({
  gameLists,
  storeLists,
  platformLists,
  genreLists,
  publisherLists,
  error,
  loading,
}) => (
  <>
    <Helmet>
      <title>
        STEAMFLIX | Site for providing information on game expertise
      </title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Container>
          {gameLists && gameLists.length > 0 && (
            <Section title="Games List">
              <ul>
                {gameLists.map((gameLists) => (
                  <Poster
                    key={gameLists.id}
                    id={gameLists.id}
                    bgURL={gameLists.background_image}
                    name={gameLists.name}
                    released={gameLists.released}
                    metacritic={gameLists.metacritic}
                    infoURL={"game"}
                  />
                ))}
              </ul>
            </Section>
          )}
        </Container>

        <Container>
          {storeLists && storeLists.length > 0 && (
            <Section title="Stores List">
              <ul>
                {storeLists.map((storeLists) => (
                  <Poster
                    key={storeLists.id}
                    id={storeLists.id}
                    bgURL={storeLists.image_background}
                    name={storeLists.name}
                    domain={storeLists.domain}
                    infoURL={"store"}
                  />
                ))}
              </ul>
            </Section>
          )}
        </Container>

        <Container>
          {platformLists && platformLists.length > 0 && (
            <Section title="Platforms List">
              <ul>
                {platformLists.map((platformLists) => (
                  <Poster
                    key={platformLists.id}
                    id={platformLists.id}
                    bgURL={platformLists.image_background}
                    name={platformLists.name}
                    infoURL={"platform"}
                  />
                ))}
              </ul>
            </Section>
          )}
        </Container>

        <Container>
          {genreLists && genreLists.length > 0 && (
            <Section title="Genres List">
              <ul>
                {genreLists.map((genreLists) => (
                  <Poster
                    key={genreLists.id}
                    id={genreLists.id}
                    bgURL={genreLists.image_background}
                    name={genreLists.name}
                    infoURL={"genre"}
                  />
                ))}
              </ul>
            </Section>
          )}
        </Container>

        <Container>
          {publisherLists && publisherLists.length > 0 && (
            <Section title="Publishers List">
              <ul>
                {publisherLists.map((publisherLists) => (
                  <Poster
                    key={publisherLists.id}
                    id={publisherLists.id}
                    bgURL={publisherLists.image_background}
                    name={publisherLists.name}
                    infoURL={"publisher"}
                  />
                ))}
              </ul>
            </Section>
          )}
        </Container>
        {/* 로드에 실패했을 때 */}
        {error && <Message color="#e74c3c" text={error} />}
        {/* 아무것도 없을 때 */}
        {gameLists &&
          storeLists &&
          platformLists &&
          genreLists &&
          publisherLists &&
          gameLists.length === 0 &&
          storeLists.length === 0 &&
          platformLists.length === 0 &&
          genreLists.length === 0 &&
          publisherLists === 0 && (
            <Message text="Nothing found" color="#95a5a6" />
          )}
      </>
    )}
  </>
);

HomePresenter.propTypes = {
  gameLists: PropTypes.array,
  storeLists: PropTypes.array,
  platformLists: PropTypes.array,
  genreLists: PropTypes.array,
  publisherLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
