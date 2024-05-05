interface IPaginationElement {
    icon?: string;
    title?: string;
    alt?: string;
    onClick(): void;
    disabled?: boolean;
    selected?: boolean;
    isCurrentIndicator?: boolean;
}
export interface IUsePaginator {
    totalResults: number;
    setTotalResults(totalResults: number): void;
    limit: number;
    elements: IPaginationElement[];
    offset: number;
    setLimit(newLimit: number): void;
    setCurrentPage(newLimit: number): void;
    currentPage: number;
    totalPages: number;
}
export declare const usePaginator: (initialLimit?: number, initialOffset?: number, initialTotalResults?: number) => IUsePaginator;
export {};
//# sourceMappingURL=usePaginator.d.ts.map