export type UserItem = {
    name: string;
    id: number;
}

export interface PhotoListResponse {
    kind?: string;
    after?: any;
    dist?: number;
    modhash?: string;
    geo_filter?: string;
    before?: any;
    children?: any[]
}
