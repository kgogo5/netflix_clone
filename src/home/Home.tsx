import axios from "axios";
import Card, { ICard } from "../component/Card";
import Section from "../component/Section";
import { apiKey, apiUrl } from "../common/common";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../component/Skeleton";
import { memo } from "react";

export default function HomeComponent() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/games?key=${apiKey}&page=20`);
      return response.data;
    },
  });
  const skeletonLists = Array(8).fill("");

  return (
    <Section title="Game Lists">
      <>
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

export const Home = memo(HomeComponent);
