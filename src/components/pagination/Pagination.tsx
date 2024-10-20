/* eslint-disable valid-jsdoc */
import React, { FC, useEffect, useState } from "react";
import cn from "classnames";
import { BlockPages } from "./BlockPages.tsx";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

import "./Pagination.css";

export interface PaginationProps {
  selectedPage: number;
  pagesCount: number;
  isHideButtons?: boolean;
  changeEvent: (currentPage: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  isHideButtons = false,
  selectedPage,
  pagesCount,
  changeEvent,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(selectedPage);

  /**
   * Splits the page into 3 blocks that can be needed
   * to separate page numbers
   */
  const [firstBlockPages, setFirstBlockPages] = useState<number[]>([]);
  const [middleBlockPages, setMiddleBlockPages] = useState<number[]>([]);
  const [lastBlockPages, setLastBlockPages] = useState<number[]>([]);

  const NEG_STEP_FROM_CURRENT_PAGE: number = -3;
  const POS_STEP_FROM_CURRENT_PAGE: number = 2;
  const FIRST_PAGE_INDEX_FROM_END: number = -1;

  const MAX_PAGES_OFF_BLOCKS: number = 8;
  const MAX_PAGES_PER_BLOCK: number = 5;

  const SECOND_PAGE_INDEX: number = 1;
  const FIRST_PAGE_INDEX: number = 0;
  const FIRST_PAGE: number = 1;

  const pages: number[] = [];
  /**
   * indicates if current page is first page or last page
   */
  const isFirstPageSelected: boolean = currentPage === FIRST_PAGE;
  const isLastPageSelected: boolean = currentPage === pagesCount;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  /** set block pages depends on current page */
  const setBlocksIfCurrentInFirstBlock = () => {
    setFirstBlockPages(pages.slice(FIRST_PAGE_INDEX, MAX_PAGES_PER_BLOCK));
    setMiddleBlockPages([]);
    setLastBlockPages(pages.slice(FIRST_PAGE_INDEX_FROM_END));
  };

  const setBlocksIfCurrentInMiddleBlock = () => {
    setFirstBlockPages(pages.slice(FIRST_PAGE_INDEX, SECOND_PAGE_INDEX));
    setMiddleBlockPages(
      pages.slice(
        currentPage + NEG_STEP_FROM_CURRENT_PAGE,
        currentPage + POS_STEP_FROM_CURRENT_PAGE
      )
    );
    setLastBlockPages(pages.slice(FIRST_PAGE_INDEX_FROM_END));
  };

  const setBlocksIfCurrentInLastBlock = () => {
    setFirstBlockPages(pages.slice(FIRST_PAGE_INDEX, SECOND_PAGE_INDEX));
    setMiddleBlockPages([]);
    setLastBlockPages(pages.slice(-MAX_PAGES_PER_BLOCK));
  };

  /**
   * indicates visibility of dots after first pages block
   */
  const isFirstDotsShown: boolean =
    middleBlockPages.length <= MAX_PAGES_PER_BLOCK &&
    pages.length > MAX_PAGES_OFF_BLOCKS;

  /**
   * indicates visibility of dots after middle pages block.
   */
  const isSecondDotsShown: boolean = !!middleBlockPages.length;

  /**
   * indicates in which block current page
   */
  const isCurrentInFirstBlock: boolean = currentPage < MAX_PAGES_PER_BLOCK;
  const isCurrentInLastBlock: boolean =
    pages.length - currentPage < MAX_PAGES_PER_BLOCK - SECOND_PAGE_INDEX;

  /**
   * change page blocks reorganization depends
   * on current page
   */
  const isOneBlockRequired: boolean = pages.length <= MAX_PAGES_OFF_BLOCKS;

  const reorganizePagesBlock = () => {
    if (isOneBlockRequired) {
      return;
    }

    if (isCurrentInFirstBlock) {
      setBlocksIfCurrentInFirstBlock();

      return;
    }

    if (!isCurrentInFirstBlock && !isCurrentInLastBlock) {
      setBlocksIfCurrentInMiddleBlock();

      return;
    }

    if (isCurrentInLastBlock) {
      setBlocksIfCurrentInLastBlock();
    }
  };

  /**
   * indicates if dots delimiter is needed
   * to separate page numbers
   */
  const populatePages = () => {
    if (!pages.length) {
      return;
    }
    if (isOneBlockRequired) {
      setFirstBlockPages(pages.slice());
      setMiddleBlockPages([]);
      setLastBlockPages([]);

      return;
    }
    reorganizePagesBlock();
  };

  useEffect(() => {
    populatePages();
  }, [currentPage, pagesCount]);

  /**
   * Changes current page and sets pages block.
   * @param type - event on of 'next page' or 'previous page' or 'change page'
   * @param pageNumber - index of page
   */
  const onPageChange = (
    type: "next page" | "previous page" | "change page",
    pageNumber: number = currentPage
  ): void => {
    const STEP_FROM_CURRENT_PAGE = 1;

    switch (type) {
      case "next page":
        if (pageNumber < pages.length) {
          setCurrentPage(pageNumber + STEP_FROM_CURRENT_PAGE);
        }
        break;
      case "previous page":
        if (pageNumber > SECOND_PAGE_INDEX) {
          setCurrentPage(pageNumber - STEP_FROM_CURRENT_PAGE);
        }
        break;
      case "change page":
      default:
        setCurrentPage(pageNumber);
    }
    populatePages();
  };

  useEffect(() => {
    changeEvent(currentPage);
  }, [currentPage]);

  useEffect(() => {
    onPageChange("change page", selectedPage);
  }, [selectedPage]);

  return (
    <div className={"Pagination__wrapper"}>
      {!isHideButtons && (
        <button
          className={cn(
            "Pagination__button",
            "Pagination__button--prev",
            "Pagination__button--left"
          )}
          disabled={isFirstPageSelected}
          onClick={() => onPageChange("previous page")}
        >
          <img src={arrowLeft} alt='arrow left' />
        </button>
      )}
      <div className={"Pagination__pages"}>
        <BlockPages
          blockPages={firstBlockPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />

        {isFirstDotsShown && (
          <span className={"Pagination__pages__dots"}>...</span>
        )}

        <BlockPages
          blockPages={middleBlockPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />

        {isSecondDotsShown && (
          <span className={"Pagination__pages__dots"}>...</span>
        )}

        <BlockPages
          blockPages={lastBlockPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>

      {!isHideButtons && (
        <button
          className={cn("Pagination__button", "Pagination__button--right")}
          disabled={isLastPageSelected}
          onClick={() => onPageChange("next page")}
        >
          <img src={arrowRight} alt='arrow right' />
        </button>
      )}
    </div>
  );
};
