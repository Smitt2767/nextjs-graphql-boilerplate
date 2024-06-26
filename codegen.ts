import { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: [
    {
      // [process.env.NEXT_PUBLIC_AUTH_SERVER_GRAPHQL_URL!]: {
      //   headers: {
      //     Authorization: Buffer.from('frc-dev:W3pQ4ceI9OO51H5JKCem3lyIGpDvdXBa').toString('base64'),
      //     'x-introspection-restriction-secret': 'Dz0hT4wuq6wAY9yX4aKXJk38VbJ3l7C2',
      //     'Content-Type': 'application/json'
      //   }
      // },
      [process.env.NEXT_PUBLIC_MAIN_SERVER_GRAPHQL_URL!]: {
        headers: {
          Authorization: Buffer.from('frc-dev:4a6euLxCJznMb43YubFxB68LO0OCkTuZ').toString('base64'),
          'x-introspection-restriction-secret': 'Dz0hT4wuq6wAY9yX4aKXJk38VbJ3l7C2',
          'Content-Type': 'application/json'
        }
      }
    }
  ],
  // documents: ['./graphql/*.ts'],
  documents: ['./graphql/queries.ts'],
  generates: {
    './types/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
