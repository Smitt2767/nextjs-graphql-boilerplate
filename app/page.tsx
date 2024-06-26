'use client';

import { TOPICS } from '@/graphql/queries';
import useInfiniteQuery from '@/hooks/useInfiniteQuery';
import { SortOrder, TopicsSortOn } from '@/types/__generated__/graphql';
import React from 'react';

const Page = () => {
  useInfiniteQuery(TOPICS, {
    variableSelector({ limit, skip }) {
      return {
        filter: {
          limit,
          skip,
          search: ''
        },
        sort: {
          sortOn: TopicsSortOn.CreatedAt,
          sortBy: SortOrder.Desc
        }
      };
    },
    dataKeys: {
      data: 'topics',
      records: 'topics',
      count: 'count'
    }
  });

  return <div>page</div>;
};

export default Page;
