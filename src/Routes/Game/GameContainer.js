import React, { useState, useEffect } from "react";
import GamePresenter from "./GamePresenter";
import { GamesApi } from "api";

const _ = () => {
  const [gameApi, setGameApi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  async function getGameLists() {
    try {
      const { data } = await GamesApi.gameLists();
      console.log(data);
      setGameApi(data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    getGameLists();
  }, []);

  return (
    <>
      <GamePresenter gameLists={gameApi} error={error} loading={loading} />
    </>
  );
};
export default _;
