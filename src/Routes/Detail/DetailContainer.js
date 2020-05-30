import React from "react";
import DetailPresenter from "./DetailPresenter";
import {
  GamesApi,
  PlatformsApi,
  GenresApi,
  TagApi,
  StoreApi,
  PublisherApi,
} from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isGame: pathname.includes("/game/"),
      isPlatform: pathname.includes("/platform/"),
      isGenre: pathname.includes("/genre/"),
      isTag: pathname.includes("/tag/"),
      isStore: pathname.includes("/store/"),
      isPublisher: pathname.includes("/publisher/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const {
      isGame,
      isPlatform,
      isGenre,
      isTag,
      isStore,
      isPublisher,
    } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null; //result 초기화
    try {
      if (isGame) {
        ({ data: result } = await GamesApi.gameDetails(parsedId));
      } else if (isPlatform) {
        ({ data: result } = await PlatformsApi.platformDetails(parsedId));
      } else if (isGenre) {
        ({ data: result } = await GenresApi.genreDetails(parsedId));
      } else if (isTag) {
        ({ data: result } = await TagApi.tagDetails(parsedId));
      } else if (isStore) {
        ({ data: result } = await StoreApi.storeDetails(parsedId));
      } else if (isPublisher) {
        ({ data: result } = await PublisherApi.publisherDetails(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find result" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { error, loading, result } = this.state;
    console.log(result);
    return <DetailPresenter error={error} loading={loading} result={result} />;
  }
}
