import { gql } from '@/types/__generated__';

export const GET_NEW_TOKEN = gql(`
  mutation RefreshToken($data: RefreshTokenInput!) {
    refreshToken(data: $data) {
      accessToken
      user {
        ...UserFragment
      }
    }
  }
`);
