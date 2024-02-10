import { Helmet } from "react-helmet";
import { Home } from "./home/Home";
import { Store } from "./home/Store";
import { Platform } from "./home/Platform";
import { Genre } from "./home/Genre";
import { Publisher } from "./home/Publisher";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Home | STEAMFLIX</title>
      </Helmet>
      <div>
        <Home />

        <Store />

        <Platform />

        <Genre />

        <Publisher />
      </div>
    </>
  );
}
