import axios from "axios";
import Card, { ICard } from "../components/Card";
import Section from "../components/Section";
import { apiKey, apiUrl } from "../common/common";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../components/Skeleton";
import { memo } from "react";

function GenreComponent() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/genres?key=${apiKey}`);
      return response.data;
    },
  });
  const skeletonLists = Array(8).fill("");

  return (
    <Section title="Genre Lists">
      <ul>
        {isLoading && skeletonLists.map((_, index) => <Skeleton key={index} />)}
        {data?.results?.map((list: ICard) => (
          <Card
            key={list.id}
            id={list.id}
            bgURL={list.image_background}
            name={list.name}
            released={list.released}
            metacritic={list.metacritic}
            infoURL={"genre"}
          />
        ))}
        {error && <div>페이지를 불러올 수 없습니다.</div>}
      </ul>
    </Section>
  );
}

export const Genre = memo(GenreComponent);
