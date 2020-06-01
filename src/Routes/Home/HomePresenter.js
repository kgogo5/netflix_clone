import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div``;

const HomePresenter = ({
  gameLists,
  storeLists,
  platformLists,
  genreLists,
  tagLists,
  publisherLists,
  error,
  loading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        {gameLists && gameLists.length > 0 && (
          <Section title="Games List">
            <ul>
              {gameLists.map((gameLists) => (
                <li key={gameLists.id}>
                  <a href="#">
                    <span className="imgBox">
                      <img src={gameLists.background_image} alt={gameLists} />
                    </span>
                    <strong>{gameLists.name}</strong>
                  </a>
                </li>
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
                <li key={storeLists.id}>
                  <a href="#">
                    <span className="imgBox">
                      <img
                        src={storeLists.image_background}
                        alt={`${storeLists.name} images`}
                      />
                    </span>
                    <strong>{storeLists.name}</strong>
                  </a>
                </li>
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
                <li key={platformLists.id}>
                  <a href="#">
                    <span className="imgBox">
                      <img
                        src={platformLists.image_background}
                        alt={`${platformLists.name} images`}
                      />
                    </span>
                    <strong>{platformLists.name}</strong>
                  </a>
                </li>
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
                <li key={genreLists.id}>
                  <a href="#">
                    <span className="imgBox">
                      <img
                        src={genreLists.image_background}
                        alt={`${genreLists.name} images`}
                      />
                    </span>
                    <strong>{genreLists.name}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </Container>

      <Container>
        {tagLists && tagLists.length > 0 && (
          <Section title="Tags List">
            <ul>
              {tagLists.map((tagLists) => (
                <li key={tagLists.id}>
                  <a href="#">
                    <span className="imgBox">
                      <img
                        src={tagLists.image_background}
                        alt={`${tagLists.name} images`}
                      />
                    </span>
                    <strong>{tagLists.name}</strong>
                  </a>
                </li>
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
                <li key={publisherLists.id}>
                  <a href="#">
                    <span className="imgBox">
                      <img
                        src={publisherLists.image_background}
                        alt={`${publisherLists.name} images`}
                      />
                    </span>
                    <strong>{publisherLists.name}</strong>
                  </a>
                </li>
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
        tagLists &&
        publisherLists &&
        gameLists.length === 0 &&
        storeLists.length === 0 &&
        platformLists.length == 0 &&
        genreLists.length === 0 &&
        tagLists.length === 0 &&
        publisherLists === 0 && (
          <Message text="Nothing found" color="#95a5a6" />
        )}
    </>
  );

HomePresenter.propTypes = {
  gameLists: PropTypes.array,
  storeLists: PropTypes.array,
  platformLists: PropTypes.array,
  genreLists: PropTypes.array,
  tagLists: PropTypes.array,
  publisherLists: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
