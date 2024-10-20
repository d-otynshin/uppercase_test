import React, { FC } from "react";

import "./Pagination.css";
import cn from "classnames";

type BlockPagesProps = {
  currentPage: number;
  blockPages: number[];
  onPageChange: (
    type: "next page" | "previous page" | "change page",
    pageNumber?: number
  ) => void;
};

export const BlockPages: FC<BlockPagesProps> = ({
  currentPage,
  blockPages,
  onPageChange,
}) => {
  return (
    <ul className={"Pagination__pages__block"}>
      {blockPages.map((page, index) => (
        <li
          className={cn("Pagination__pages__item", {
            active: currentPage === page,
          })}
          key={index}
          onClick={() => onPageChange("change page", page)}
        >
          <span>{page}</span>
        </li>
      ))}
    </ul>
  );
};
