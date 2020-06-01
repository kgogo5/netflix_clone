import React from "react";
import GenrePresenter from "./GenrePresenter";
import { GenresApi } from "api";

export default class extends React.Component {
  state = {
    genreLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: genreLists },
      } = await GenresApi.genreLists();
      this.setState({
        genreLists,
      });
    } catch {
      //작동하지 않을 때 catch부분에서 처리가 된다.
      this.setState({
        error: "Can't find genre information.",
      });
    } finally {
      //끝나게 되면 작동
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { genreLists, error, loading } = this.state;
    console.log(this.state);
    return (
      <GenrePresenter genreLists={genreLists} error={error} loading={loading} />
    );
  }
}
