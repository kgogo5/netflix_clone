import React from "react";
import HomePresenter from "./HomePresenter";
import {
  GamesApi,
  PlatformsApi,
  GenresApi,
  TagApi,
  StoreApi,
  PublisherApi,
} from "api";

export default class extends React.Component {
  state = {
    gameLists: null,
    platformLists: null,
    genreLists: null,
    tagLists: null,
    storeLists: null,
    publisherLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: gameLists },
      } = await GamesApi.gameLists();
      const {
        data: { results: platformLists },
      } = await PlatformsApi.platformLists();
      const {
        data: { results: genreLists },
      } = await GenresApi.genreLists();
      const {
        data: { results: tagLists },
      } = await TagApi.tagLists();
      const {
        data: { results: storeLists },
      } = await StoreApi.storeLists();
      const {
        data: { results: publisherLists },
      } = await PublisherApi.publisherLists();
      this.setState({
        gameLists,
        platformLists,
        genreLists,
        tagLists,
        storeLists,
        publisherLists,
      });
    } catch {
      //작동하지 않을 때 catch부분에서 처리가 된다.
      this.setState({
        error: "Can't find game information.",
      });
      throw Error(`Can't find game information.`);
    } finally {
      //끝나게 되면 작동
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      gameLists,
      platformLists,
      genreLists,
      tagLists,
      storeLists,
      publisherLists,
      error,
      loading,
    } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        gameLists={gameLists}
        platformLists={platformLists}
        genreLists={genreLists}
        tagLists={tagLists}
        storeLists={storeLists}
        publisherLists={publisherLists}
        error={error}
        loading={loading}
      />
    );
  }
}
