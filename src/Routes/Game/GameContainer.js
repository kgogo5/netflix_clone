import React from "react";
import GamePresenter from "./GamePresenter";
import { GamesApi } from "api";

export default class extends React.Component {
  state = {
    gameLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: gameLists },
      } = await GamesApi.gameLists();
      this.setState({
        gameLists,
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
    const { gameLists, error, loading } = this.state;
    console.log(this.state);
    return (
      <GamePresenter gameLists={gameLists} error={error} loading={loading} />
    );
  }
}
