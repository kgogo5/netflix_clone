import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  position: relative;
  padding: 20px 20px;
  width: 100%;
  height: calc(100vh - 50px);
`;

const Title = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  h1 {
    display: inline-block;
    font-size: 28px;
    font-weight: 500;
  }

  .genresList {
    margin-left: 10px;
    display: inline-block;
    span {
      margin-left: 5px;
      padding: 0 6px 2px;
      border: 1px solid #fff;
      border-radius: 2px;
      font-size: 12px;
      cursor: default;

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const PageContent = styled.div`
  margin-top: 30px;
  border: 1px solid red;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: -1;
`;

const Breadcrumb = styled.div`
  & > a:hover,
  & > a:focus {
    color: #999;
  }
`;

const CurrentPath = styled.span`
  color: #bdbdbd;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={
          result.background_image_additional
            ? result.background_image_additional
            : result.image_background
        }
      />

      <Breadcrumb>
        <Link to="/">Home</Link> >{" "}
        <Link to={`/${window.location.pathname.split("/")[1]}`}>
          {window.location.pathname.split("/")[1]}
        </Link>
        <CurrentPath> > {result.slug}</CurrentPath>
      </Breadcrumb>

      <Title>
        <h1>{result.name}</h1>
        <div className="genresList">
          {result.genres
            ? result.genres.map((genres) => (
                <span key={genres.id}>{genres.name}</span>
              ))
            : null}
        </div>
      </Title>

      {}

      <PageContent>
        <div className="img_area"></div>
        <div className="content_area"></div>
      </PageContent>

      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
