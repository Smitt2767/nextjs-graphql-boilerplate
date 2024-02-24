import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './fragments';

export const GET_NEW_TOKEN = gql`
  ${USER_FRAGMENT}
  mutation RefreshToken($data: RefreshTokenInput!) {
    refreshToken(data: $data) {
      accessToken
      user {
        ...UserFragment
      }
    }
  }
`;

export const LOGIN = gql`
  ${USER_FRAGMENT}
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      refreshToken
      user {
        ...UserFragment
      }
    }
  }
`;
