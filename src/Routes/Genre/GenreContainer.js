import React, { useState, useEffect } from "react";
import GenrePresenter from "./GenrePresenter";
import { GenresApi } from "api";

const _ = () => {
  const [genreLists, setGenreLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  async function getGenreLists() {
    try {
      const { data } = await GenresApi.genreLists();
      console.log(data);
      setGenreLists(data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    getGenreLists();
  }, []);

  return (
    <>
      <GenrePresenter genreLists={genreLists} error={error} loading={loading} />
    </>
  );
};
export default _;
