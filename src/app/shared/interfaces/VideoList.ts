import { Video } from "./Video";

export interface VideoList {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Video[];
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}