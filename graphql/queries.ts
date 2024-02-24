import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './fragments';

export const CURRENT_USER = gql`
  ${USER_FRAGMENT}
  query CurrentUser {
    currentUser {
      ...UserFragment
    }
  }
`;

export const PAGE = gql`
  query Page($where: PageWhereInput!) {
    page(where: $where) {
      id
      slug
    }
  }
`;
