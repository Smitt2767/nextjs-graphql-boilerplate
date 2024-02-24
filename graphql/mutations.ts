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
