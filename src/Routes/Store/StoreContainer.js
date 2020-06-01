import React from "react";
import StorePresenter from "./StorePresenter";
import { StoreApi } from "api";

export default class extends React.Component {
  state = {
    storeLists: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: storeLists },
      } = await StoreApi.storeLists();
      this.setState({
        storeLists,
      });
    } catch {
      //작동하지 않을 때 catch부분에서 처리가 된다.
      this.setState({
        error: "Can't find store information.",
      });
    } finally {
      //끝나게 되면 작동
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { storeLists, error, loading } = this.state;
    console.log(this.state);
    return (
      <StorePresenter storeLists={storeLists} error={error} loading={loading} />
    );
  }
}
