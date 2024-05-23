/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  /** Limit custom scalar type */
  Limit: { input: any; output: any };
};

export enum AuthService {
  AuthZero = 'AUTH_ZERO',
  EmailPassword = 'EMAIL_PASSWORD',
  Firebase = 'FIREBASE'
}

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CommonMessageResponse = {
  __typename?: 'CommonMessageResponse';
  message?: Maybe<Scalars['String']['output']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type LoginInput = {
  device?: InputMaybe<UserDeviceInput>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MigrateLegacyAccountInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<CommonMessageResponse>;
  changePasswordAdmin?: Maybe<CommonMessageResponse>;
  forgotPassword?: Maybe<CommonMessageResponse>;
  forgotPasswordAdmin?: Maybe<CommonMessageResponse>;
  login?: Maybe<ValidateTokenResponse>;
  loginAdmin?: Maybe<ValidateTokenResponse>;
  logout?: Maybe<CommonMessageResponse>;
  logoutAdmin?: Maybe<CommonMessageResponse>;
  refreshToken?: Maybe<RefreshTokenResponse>;
  refreshTokenAdmin?: Maybe<RefreshTokenResponse>;
  resendOtp?: Maybe<CommonMessageResponse>;
  resendVerifyUser?: Maybe<CommonMessageResponse>;
  resendVerifyUserAdmin?: Maybe<CommonMessageResponse>;
  signUp?: Maybe<UserSignUpResponse>;
  updatePassword?: Maybe<CommonMessageResponse>;
  updatePasswordAdmin?: Maybe<CommonMessageResponse>;
  userForgetPasswordAdmin?: Maybe<CommonMessageResponse>;
  validateAdminToken?: Maybe<ValidateTokenResponse>;
  validateToken?: Maybe<ValidateTokenResponse>;
  verifyResetToken?: Maybe<CommonMessageResponse>;
  verifyResetTokenAdmin?: Maybe<CommonMessageResponse>;
  verifyUser?: Maybe<VerifyUserResponse>;
  verifyUserAdmin?: Maybe<VerifyUserResponse>;
  verifyUserContactNo?: Maybe<CommonMessageResponse>;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationChangePasswordAdminArgs = {
  data: ChangePasswordInput;
};

export type MutationForgotPasswordArgs = {
  data: ForgotPasswordInput;
};

export type MutationForgotPasswordAdminArgs = {
  data: ForgotPasswordInput;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationLoginAdminArgs = {
  data: LoginInput;
};

export type MutationRefreshTokenArgs = {
  data: RefreshTokenInput;
};

export type MutationRefreshTokenAdminArgs = {
  data: RefreshTokenInput;
};

export type MutationResendOtpArgs = {
  data: ResendOtpInput;
};

export type MutationResendVerifyUserArgs = {
  data: ResendVerifyUserInput;
};

export type MutationResendVerifyUserAdminArgs = {
  data: ResendVerifyUserAdminInput;
};

export type MutationSignUpArgs = {
  data: UserSignUpInput;
};

export type MutationUpdatePasswordArgs = {
  data: UpdatePasswordInput;
};

export type MutationUpdatePasswordAdminArgs = {
  data: UpdatePasswordInput;
};

export type MutationUserForgetPasswordAdminArgs = {
  data: UserForgetPasswordInput;
};

export type MutationValidateAdminTokenArgs = {
  data: ValidateTokenInput;
};

export type MutationValidateTokenArgs = {
  data: ValidateTokenInput;
};

export type MutationVerifyResetTokenArgs = {
  data: ResetTokenInput;
};

export type MutationVerifyResetTokenAdminArgs = {
  data: ResetTokenInput;
};

export type MutationVerifyUserArgs = {
  data: VerifyUserInput;
};

export type MutationVerifyUserAdminArgs = {
  data: VerifyUserInput;
};

export type MutationVerifyUserContactNoArgs = {
  data: VerifyUserContactNoInput;
};

export enum ProviderKey {
  AuthZero = 'AUTH_ZERO',
  Firebase = 'FIREBASE'
}

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ResendOtpInput = {
  contactNumber: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
};

export type ResendVerifyUserAdminInput = {
  appId: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type ResendVerifyUserInput = {
  email: Scalars['String']['input'];
  queryParams?: InputMaybe<Scalars['JSON']['input']>;
};

export type ResetTokenInput = {
  token: Scalars['String']['input'];
  uid: Scalars['ID']['input'];
};

export type SendResetPasswordEmailToLegacyUsersInput = {
  userIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SubscriptionPlanPermissionData = {
  __typename?: 'SubscriptionPlanPermissionData';
  allowed?: Maybe<Scalars['Boolean']['output']>;
  applyLimit?: Maybe<Scalars['Boolean']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorTitle?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  limitMessage?: Maybe<Scalars['String']['output']>;
  limitTitle?: Maybe<Scalars['String']['output']>;
};

export type UpdatePasswordInput = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
  uid: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  accountDeletedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<UserAddress>;
  assignedPlan?: Maybe<Scalars['String']['output']>;
  assignedPlanExpiry?: Maybe<Scalars['DateTime']['output']>;
  authService?: Maybe<AuthService>;
  authServiceId?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentPlan?: Maybe<Scalars['String']['output']>;
  effectivePlan?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isContactNumberVerified?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  profileImage?: Maybe<Scalars['String']['output']>;
  purchases?: Maybe<Array<Maybe<UserPurchase>>>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  submittedFormIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  subscriptionPlanPermissions?: Maybe<Array<Maybe<SubscriptionPlanPermissionData>>>;
  totalPrayerTime?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<UserType>;
  uid?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['ID']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type UserDeviceInput = {
  id: Scalars['String']['input'];
  model: Scalars['String']['input'];
  os?: InputMaybe<UserDeviceOsInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type UserDeviceOsInput = {
  name: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UserForgetPasswordInput = {
  appId: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type UserPurchase = {
  __typename?: 'UserPurchase';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<UserPurchaseType>;
};

export enum UserPurchaseType {
  OneTimeSubscription = 'ONE_TIME_SUBSCRIPTION'
}

export enum UserRole {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER',
  WorkspaceUser = 'WORKSPACE_USER'
}

export type UserSignUpInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['String']['input']>;
  queryParams?: InputMaybe<Scalars['JSON']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type UserSignUpResponse = {
  __typename?: 'UserSignUpResponse';
  message?: Maybe<Scalars['String']['output']>;
};

export enum UserType {
  Admin = 'ADMIN',
  User = 'USER'
}

export type ValidateTokenInput = {
  device?: InputMaybe<UserDeviceInput>;
  providerKey: ProviderKey;
  token: Scalars['String']['input'];
};

export type ValidateTokenResponse = {
  __typename?: 'ValidateTokenResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VerifyUserContactNoInput = {
  contactNumber: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type VerifyUserInput = {
  device?: InputMaybe<UserDeviceInput>;
  setPassword?: InputMaybe<Scalars['Boolean']['input']>;
  token: Scalars['String']['input'];
  uid: Scalars['ID']['input'];
};

export type VerifyUserResponse = {
  __typename?: 'VerifyUserResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  resetToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserFragmentFragment = {
  __typename?: 'User';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  profileImage?: string | null;
  roles?: Array<UserRole | null> | null;
  type?: UserType | null;
} & { ' $fragmentName'?: 'UserFragmentFragment' };

export type RefreshTokenMutationVariables = Exact<{
  data: RefreshTokenInput;
}>;

export type RefreshTokenMutation = {
  __typename?: 'Mutation';
  refreshToken?: {
    __typename?: 'RefreshTokenResponse';
    accessToken?: string | null;
    user?:
      | ({ __typename?: 'User' } & {
          ' $fragmentRefs'?: { UserFragmentFragment: UserFragmentFragment };
        })
      | null;
  } | null;
};

export const UserFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roles' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const RefreshTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RefreshToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'RefreshTokenInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'refreshToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFragment' } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserFragment' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'roles' } },
          { kind: 'Field', name: { kind: 'Name', value: 'type' } }
        ]
      }
    }
  ]
} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
