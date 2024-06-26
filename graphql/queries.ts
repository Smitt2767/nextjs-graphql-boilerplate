import { gql } from '@/types/__generated__';

export const TOPICS = gql(`
  query Topics($filter: TopicsFilter, $sort: TopicsSort) {
    topics(filter: $filter, sort: $sort) {
      topics {
        id
        key
        name
      }
      count
    }
  }
`);
