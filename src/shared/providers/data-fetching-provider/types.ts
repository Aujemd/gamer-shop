export type CachedDataResultType<Data = any, Error = any> = {
    data: Data | undefined;
    error: Error | undefined;
    isLoading: boolean;
};

export type DataFetchingContextType = <Data = any, Error = any>(
    key: string,
    fetcher: (key: string) => Promise<Data>
) => CachedDataResultType<Data, Error>;
