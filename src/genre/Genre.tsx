import { memo } from "react";
import { Helmet } from "react-helmet";
import { Genre as GenreComponent } from "../home/Genre";

const ExtendGenre = () => {
  return (
    <>
      <Helmet>
        <title>Genre | STEAMFLIX</title>
      </Helmet>
      <GenreComponent />
    </>
  );
};

export const Genre = memo(ExtendGenre);
