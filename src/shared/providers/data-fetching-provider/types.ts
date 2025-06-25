import type { SWRConfiguration, SWRResponse } from "swr";

export type useCachedFetchProps<Data = any, K = any> = {
    key: K;
    fetcher: (key: K) => Promise<Data>;
    config?: SWRConfiguration;
};

export type DataFetchingContextType = {
    useCachedFetch: <Data = any, Error = any>(
        props: useCachedFetchProps
    ) => SWRResponse<Data, Error, SWRConfiguration | undefined>;
};
