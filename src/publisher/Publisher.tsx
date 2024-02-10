import { memo } from "react";
import { Helmet } from "react-helmet";
import { Publisher as PublisherComponent } from "../home/Publisher";

const ExtendPublisher = () => {
  return (
    <>
      <Helmet>
        <title>Publisher | STEAMFLIX</title>
      </Helmet>
      <PublisherComponent />
    </>
  );
};

export const Publisher = memo(ExtendPublisher);
