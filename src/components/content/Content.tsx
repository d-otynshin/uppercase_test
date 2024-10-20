import React from "react";
import { SearchInfo } from "../search-info/SearchInfo.tsx";
import { Cards } from "../cards/Cards.tsx";
import { Pagination } from "../pagination/Pagination.tsx";
import { getMovies } from "../../api/index.ts";
import { useQuery } from "@tanstack/react-query";

interface IContent {
  search: any;
  setSearch: (prevSearch: any) => void;
}

export const Content = ({ search, setSearch }: IContent) => {
  const { data, isFetching } = useQuery({
    queryKey: ["search", search.query, search.page],
    queryFn: async () => await getMovies(search.query, search.page),
    enabled: Boolean(search.query),
  });

  const handleChange = (page: number) => {
    setSearch((prevSearch) => ({ ...prevSearch, page }));
  };

  return (
    <>
      {search.query && (
        <SearchInfo
          searchedText={search.query}
          foundMoviesCount={data?.totalResults || 0}
        />
      )}
      <Cards
        query={search.query}
        movies={data?.Search}
        isFetching={isFetching}
      />

      {data?.Response === "True" && (
        <Pagination
          changeEvent={handleChange}
          pagesCount={Math.ceil(data?.totalResults / 10)}
          selectedPage={search.page}
          isHideButtons={false}
        />
      )}
    </>
  );
};
