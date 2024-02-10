import axios from "axios";
import Card, { ICard } from "../components/Card";
import Section from "../components/Section";
import { apiKey, apiUrl } from "../common/common";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../components/Skeleton";
import { memo } from "react";
import { Helmet } from "react-helmet";

export default function GameComponent() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["game"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/games?key=${apiKey}`);
      return response.data;
    },
  });
  const skeletonLists = Array(20).fill("");

  return (
    <Section title="Game Lists">
      <>
        <Helmet>
          <title>Game | STEAMFLIX</title>
        </Helmet>
        <ul>
          {isLoading &&
            skeletonLists.map((_, index) => <Skeleton key={index} />)}
          {data?.results?.map((list: ICard) => (
            <Card
              key={list.id}
              id={list.id}
              bgURL={list.background_image}
              name={list.name}
              released={list.released}
              metacritic={list.metacritic}
              infoURL={"game"}
            />
          ))}
          {error && <div>페이지를 불러올 수 없습니다.</div>}
        </ul>
      </>
    </Section>
  );
}

export const Game = memo(GameComponent);
