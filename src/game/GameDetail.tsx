import { useQuery } from "@tanstack/react-query";
import { Detail } from "../component/Detail";
import axios from "axios";
import { apiKey, apiUrl } from "../common/common";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function GameDetail() {
  const params = useParams();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["game", params.id],
    queryFn: async () => {
      const response = await axios.get(
        `${apiUrl}/games/${params.id}?key=${apiKey}`
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (params) {
      refetch();
    }
  }, [params, refetch]);

  return (
    <>
      <Detail result={data || []} loading={isLoading} error={error} />
    </>
  );
}
