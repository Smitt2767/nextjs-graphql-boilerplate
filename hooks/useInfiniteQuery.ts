import {
  type TypedDocumentNode,
  type DocumentNode,
  type OperationVariables,
  NetworkStatus,
  useLazyQuery
} from '@apollo/client';
import { get, isArray } from 'lodash';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

export type InferQueryType<T extends DocumentNode | TypedDocumentNode> =
  T extends TypedDocumentNode<infer TQuery> ? TQuery : never;

export type InferVariablesType<T extends DocumentNode | TypedDocumentNode> =
  T extends TypedDocumentNode<unknown, infer TVariables> ? TVariables : never;

type NonNullable<T> = Exclude<T, null | undefined>;

type ExtractDataKeys<TQuery extends DocumentNode | TypedDocumentNode> = Exclude<
  keyof NonNullable<InferQueryType<TQuery>[Exclude<keyof InferQueryType<TQuery>, '__typename'>]>,
  '__typename'
>;

type UseInfiniteQueryProps<
  TQuery extends DocumentNode | TypedDocumentNode,
  TDataKey extends Exclude<keyof InferQueryType<TQuery>, '__typename'>,
  TRecordsKey extends ExtractDataKeys<TQuery>,
  TCountKey extends ExtractDataKeys<TQuery>,
  TVariables extends Record<string, unknown>
> = {
  dataKeys: {
    data: TDataKey;
    records: TRecordsKey;
    count: TCountKey;
  };
  variableSelector: (
    variables: { skip: number; limit: number } & TVariables
  ) => InferVariablesType<TQuery>;
  variables?: TVariables;
  limit?: number;
  enabled?: boolean;
};

const DEFAULT_LIMIT = 10;

const useInfiniteQuery = <
  TQuery extends DocumentNode | TypedDocumentNode,
  TDataKey extends Exclude<keyof InferQueryType<TQuery>, '__typename'>,
  TRecordsKey extends ExtractDataKeys<TQuery>,
  TCountKey extends ExtractDataKeys<TQuery>,
  TVariables extends Record<string, unknown>
>(
  query: TQuery,
  {
    variableSelector,
    limit = DEFAULT_LIMIT,
    enabled = true,
    variables,
    dataKeys
  }: UseInfiniteQueryProps<TQuery, TDataKey, TRecordsKey, TCountKey, TVariables>
) => {
  type TDataArray = NonNullable<NonNullable<InferQueryType<TQuery>[TDataKey]>[TRecordsKey]>;
  type TData = TDataArray extends Array<infer T> ? T : never;

  const [networkStatus, setNetworkStatus] = useState(NetworkStatus.loading);
  const [count, setCount] = useState(0);
  const [data, setData] = useState<TData[]>([]);

  const variablesHandler = useRef(variableSelector);

  const handleResponse = useCallback(
    (res: Record<string, unknown>) => {
      setNetworkStatus(NetworkStatus.ready);
      const records = get(res, [dataKeys.data, dataKeys.records]) as TData;
      if (isArray(records)) setData(records);
      setCount(get(res, [dataKeys.data, dataKeys.count]) ?? 0);
    },
    [dataKeys]
  );

  const [fetchData] = useLazyQuery(query, {
    onError: () => {
      setNetworkStatus(NetworkStatus.ready);
    },
    onCompleted: handleResponse
  });

  const loading = [NetworkStatus.loading, NetworkStatus.refetch].includes(networkStatus);
  const loadingMore = networkStatus === NetworkStatus.fetchMore;
  const fetching = loading || loadingMore;
  const hasMore = data.length < count;
  const canFetch = hasMore && !fetching;
  const recordsLength = data.length;

  useLayoutEffect(() => {
    variablesHandler.current = variableSelector;
  }, [variableSelector]);

  const getVariables = useCallback(
    ({ skip, limit }: { skip: number; limit: number }) =>
      variablesHandler.current({
        skip,
        limit,
        ...variables
      } as {
        skip: number;
        limit: number;
      } & TVariables) as OperationVariables,
    [variables]
  );

  useEffect(() => {
    if (!enabled) return;
    setNetworkStatus(NetworkStatus.loading);

    fetchData({
      variables: getVariables({ skip: 0, limit })
    });
  }, [enabled, fetchData, limit, getVariables]);

  return {
    data,
    count,
    networkStatus,
    loading,
    loadingMore,
    fetchData,
    hasMore,
    canFetch,
    recordsLength
  };
};

export default useInfiniteQuery;
