import { Link } from "react-router-dom";
import styled from "styled-components";

export interface ICard {
  id: string;
  bgURL?: string;
  name: string;
  released?: string;
  metacritic?: string;
  infoURL?: string;
  domain?: string;
  image_background?: string;
  background_image?: string;
}

const Image = styled.img`
  display: inline-block;
  width: 100%;
  min-height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -27%;
  margin-left: -50%;
  transition: 0.15s;

  @media (max-width: 480px) {
    top: 0;
    left: 0;
    margin: 0;
    position: static;
  }
`;

const Inner = styled.div`
  position: relative;
  .img_link {
    position: relative;
    display: block;
    width: 100%;
    min-height: 132px;
    overflow: hidden;

    &:hover:after,
    &:focus:after {
      display: block;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 1080px) {
      min-height: 198px;
    }
    @media (max-width: 768px) {
      min-height: 160px;
    }
    @media (max-width: 620px) {
      min-height: 122px;
    }
    @media (max-width: 480px) {
      min-height: unset;
    }
  }
`;

const Title = styled.strong`
  display: block;
  padding: 10px;
  text-align: center;

  & > a:hover,
  & > a:focus {
    color: #9e9e9e;
  }
`;

const Info = styled.span<{ color?: number }>`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .score {
    margin-left: 4px;
    display: inline-block;
    color: #fff;
    padding: 0 4px;
    border-radius: 2px;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    background-color: ${(props) => {
      if (props.color) {
        if (props.color >= 90) {
          return `#2ecc71`;
        } else if (props.color < 90 && props.color >= 80) {
          return `#f1c40f`;
        } else if (props.color <= 80) {
          return `#e67e22`;
        }
      }
    }};
  }
`;

const Wrap = styled.li`
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);

    .img_link img {
      transform: scale(1.1);
    }
  }
  .link_type {
    position: absolute;
    padding: 3px 5px;
    top: 3px;
    right: 3px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.1);

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export default function Card({
  id,
  bgURL,
  name,
  released,
  metacritic,
  infoURL,
  domain,
}: ICard) {
  return (
    <>
      <Wrap>
        <Inner>
          <Link to={`/${infoURL}/${id}`} className="img_link" role="button">
            <Image
              src={bgURL ? bgURL : "images/no_image.png"}
              alt={`${name} images`}
            />
          </Link>
          <Title>
            <Link to={`/${infoURL}/${id}`} role="button">
              {name.length > 30 ? `${name.substring(0, 30)}...` : name}
            </Link>
            {metacritic ? (
              <Info className="metacritic" color={Number(metacritic)}>
                <span>MetaScore : </span>
                <span className="score">
                  {metacritic === undefined ? `` : `${metacritic}`}
                </span>
              </Info>
            ) : null}
            {released ? (
              <Info>{released === undefined ? `` : ` ${released}`}</Info>
            ) : null}
            {domain ? (
              <a
                href={`https://${domain}`}
                className="link_type"
                role="button"
                rel="noopener noreferrer"
                target="_blank"
              >
                {domain === undefined ? `` : `Link`}
              </a>
            ) : null}
          </Title>
        </Inner>
      </Wrap>
    </>
  );
}
