import axios from "axios";
import Card, { ICard } from "../component/Card";
import Section from "../component/Section";
import { apiKey, apiUrl } from "../common/common";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../component/Skeleton";
import { memo } from "react";

function StoreComponent() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["stores"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/stores?key=${apiKey}`);
      return response.data;
    },
  });
  const skeletonLists = Array(8).fill("");

  return (
    <Section title="Stores List">
      <>
        <ul>
          {isLoading &&
            skeletonLists.map((_, index) => <Skeleton key={index} />)}
          {data?.results?.map((list: ICard) => (
            <Card
              key={list.id}
              id={list.id}
              bgURL={list.image_background}
              name={list.name}
              domain={list.domain}
              infoURL={"store"}
            />
          ))}
          {error && <div>페이지를 불러올 수 없습니다.</div>}
        </ul>
      </>
    </Section>
  );
}

export const Store = memo(StoreComponent);
