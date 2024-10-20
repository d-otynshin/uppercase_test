import React from "react";
import { SearchInfo } from "../search-info/SearchInfo.tsx";
import { Cards } from "../cards/Cards.tsx";
import { Pagination } from "../pagination/Pagination.tsx";
import { getMovies } from "../../api/index.ts";
import { useQuery } from "@tanstack/react-query";

interface IContent {
  query: string;
  page: number;
  setPage: (page: number) => void;
}

export const Content = ({ query, page, setPage }: IContent) => {
  const { data, isFetching } = useQuery({
    queryKey: ["search", query, page],
    queryFn: async () => await getMovies(query, page),
    enabled: Boolean(query),
  });

  return (
    <>
      {query && (
        <SearchInfo
          searchedText={query}
          foundMoviesCount={data?.totalResults || 0}
        />
      )}

      <Cards query={query} movies={data?.Search} isFetching={isFetching} />

      {data?.Response === "True" && (
        <Pagination
          changeEvent={setPage}
          pagesCount={Math.ceil(data?.totalResults / 10)}
          selectedPage={page}
          isHideButtons={false}
        />
      )}
    </>
  );
};
