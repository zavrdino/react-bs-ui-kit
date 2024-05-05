import { useEffect, useState } from "react";

interface IPaginationElement {
    icon?: string,
    title?: string,
    alt?: string,
    onClick(): void,
    disabled?: boolean,
    selected?: boolean,
    isCurrentIndicator?: boolean
}

export interface IUsePaginator {
    totalResults: number,
    setTotalResults(totalResults: number): void,
    limit: number,
    elements: IPaginationElement[],
    offset: number,
    setLimit(newLimit: number): void,
    setCurrentPage(newLimit: number): void,
    currentPage: number,
    totalPages: number,
}

export const usePaginator = (initialLimit = 30, initialOffset = 0, initialTotalResults = 0): IUsePaginator => {
    const [limit, setLimit] = useState(initialLimit)
    const [offset, setOffset] = useState(initialOffset)
    const [totalResults, setTotalResults] = useState(initialTotalResults)
    const [elements, setElements] = useState<IPaginationElement[]>([])

    const totalPages = Math.ceil(totalResults / limit)
    const currentPage = limit ? Math.floor((offset) / limit) + 1 : 1
    const hasMore = currentPage < totalPages
    const canGoPrev = currentPage > 1

    const firstPage = () => {
        if (currentPage > 1) {
            setOffset(0)
        }
    }

    const prevPage = () => {
        if (canGoPrev) setOffset(Number(offset) - Number(limit))
    }

    const nextPage = () => {
        if (hasMore) setOffset(Number(offset) + Number(limit))
    }

    const lastPage = () => {
        const lastPageOffset = totalPages > 1 ? (totalPages - 1) * limit : 1
        setOffset(Number(lastPageOffset))
    }

    const setCurrentPage = (newPage: number) => {
        setOffset((newPage - 1) * limit)
    }

    useEffect(() => {
        const firstPageBtn: IPaginationElement = {
            disabled: currentPage === 1,
            icon: "first_page",
            onClick: firstPage
        }

        const prevPageBtn: IPaginationElement = {
            disabled: currentPage === 1,
            icon: "skip_previous",
            onClick: prevPage
        }

        const skipBackTenPages: IPaginationElement = {
            disabled: !((currentPage - 10) >= 1),
            icon: "replay_10",
            onClick: () => setOffset(Number(offset - (limit * 10)))
        }

        const skipForwardTenPages: IPaginationElement = {
            disabled: !((currentPage + 10) < totalPages),
            icon: "forward_10",
            onClick: () => setOffset(Number(offset + (limit * 10)))
        }

        const currentPageBtn: IPaginationElement = {
            disabled: currentPage === totalPages,
            title: `${currentPage.toString()} / ${totalPages}`,
            alt: `Page ${currentPage} of ${totalPages}`,
            onClick: () => {},
            isCurrentIndicator: true
        }

        const nextPageBtn: IPaginationElement = {
            disabled: !hasMore,
            selected: true,
            icon: "skip_next",
            onClick: nextPage
        }

        const lastPageBtn: IPaginationElement = {
            disabled: !hasMore,
            icon: "last_page",
            onClick: lastPage
        }

        const result = [
            firstPageBtn,
            skipBackTenPages,
            prevPageBtn,
            currentPageBtn,
            nextPageBtn,
            skipForwardTenPages,
            lastPageBtn,
        ]

        setElements(result)
    }, [totalPages, currentPage, offset, limit])

    return {
        limit,
        offset,
        elements,
        setLimit,
        totalPages,
        currentPage,
        totalResults,
        setCurrentPage,
        setTotalResults,
    };
}
