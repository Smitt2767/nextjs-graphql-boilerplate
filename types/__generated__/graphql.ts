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
  Time: { input: any; output: any };
};

export enum AddRemovePlaylistItemAction {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type AddRemovePlaylistItemDataInput = {
  action: AddRemovePlaylistItemAction;
  instanceId: Scalars['ID']['input'];
  instanceType: PlaylistItemInstanceType;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  authService?: Maybe<AuthService>;
  authServiceId?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  profileImage?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<AdminUserRole>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminUserCreateInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles: Array<InputMaybe<AdminUserRole>>;
};

export type AdminUserCreateResponse = {
  __typename?: 'AdminUserCreateResponse';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AdminUser>;
};

export enum AdminUserRole {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  WorkspaceUser = 'WORKSPACE_USER'
}

export type AdminUserUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AdminUserUpdateInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<AdminUserRole>>>;
};

export type AdminUsersFilter = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  roles?: InputMaybe<Array<InputMaybe<AdminUserRole>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminUsersResponse = {
  __typename?: 'AdminUsersResponse';
  count?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<Maybe<AdminUser>>>;
};

export type AdminUsersSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<UsersSortOn>;
};

export enum Alignment {
  Center = 'CENTER',
  Justify = 'JUSTIFY',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type Answer = {
  __typename?: 'Answer';
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  questionId?: Maybe<Scalars['ID']['output']>;
};

export type AnswerBibleChapterQuestionInput = {
  answer: Scalars['String']['input'];
  questionId: Scalars['ID']['input'];
};

export type AnswerBibleChapterQuestionResponse = {
  __typename?: 'AnswerBibleChapterQuestionResponse';
  answer?: Maybe<Answer>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum AppCustomDomainStatus {
  Errored = 'ERRORED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Success = 'SUCCESS',
  VerificationPending = 'VERIFICATION_PENDING'
}

export type AppDeployment = {
  __typename?: 'AppDeployment';
  deployAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<AppDeploymentStatus>;
};

export enum AppDeploymentStatus {
  Errored = 'ERRORED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Success = 'SUCCESS'
}

export type Article = {
  __typename?: 'Article';
  allowedPlans?: Maybe<Array<Maybe<ArticleAllowedPlan>>>;
  authors?: Maybe<Array<Maybe<Contributor>>>;
  autoPublishAt?: Maybe<Scalars['DateTime']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  collectionSequence?: Maybe<Scalars['String']['output']>;
  collections?: Maybe<Array<Maybe<ArticleCollection>>>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  contentRating?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  iframe?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  imageThumbnail?: Maybe<Asset>;
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  prayerCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readCount?: Maybe<Scalars['Int']['output']>;
  relatedContent?: Maybe<Array<Maybe<ArticleRelatedContent>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sources?: Maybe<Array<Maybe<Source>>>;
  status?: Maybe<ArticleStatus>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Maybe<Topic>>>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoCount?: Maybe<Scalars['Int']['output']>;
};

export type ArticleAllowedPlan = {
  __typename?: 'ArticleAllowedPlan';
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export enum ArticleAutoGenerateSortBy {
  Random = 'RANDOM',
  Reads = 'READS',
  Recent = 'RECENT'
}

export type ArticleCarouselData = {
  __typename?: 'ArticleCarouselData';
  config?: Maybe<ArticleCarouselModuleConfigData>;
  settings?: Maybe<ArticleCarouselModuleSettingData>;
};

export type ArticleCarouselDataV2 = {
  __typename?: 'ArticleCarouselDataV2';
  config?: Maybe<ArticleCarouselModuleConfigData>;
  settings?: Maybe<ArticleCarouselModuleSettingData>;
};

export type ArticleCarouselInput = {
  config?: InputMaybe<ArticleCarouselModuleConfigInput>;
  settings?: InputMaybe<ArticleCarouselModuleSettingInput>;
};

export type ArticleCarouselInputV2 = {
  config?: InputMaybe<ArticleCarouselModuleConfigInput>;
  settings?: InputMaybe<ArticleCarouselModuleSettingInput>;
};

export type ArticleCarouselModuleConfigData = {
  __typename?: 'ArticleCarouselModuleConfigData';
  articles?: Maybe<Array<Maybe<Article>>>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<ArticleAutoGenerateSortBy>;
};

export type ArticleCarouselModuleConfigInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleSchemaInput>>>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<ArticleAutoGenerateSortBy>;
};

export type ArticleCarouselModuleSettingData = {
  __typename?: 'ArticleCarouselModuleSettingData';
  articleAuthor?: Maybe<Scalars['Boolean']['output']>;
  articleComment?: Maybe<Scalars['Boolean']['output']>;
  articlePrayer?: Maybe<Scalars['Boolean']['output']>;
  articleSave?: Maybe<Scalars['Boolean']['output']>;
  articleShare?: Maybe<Scalars['Boolean']['output']>;
  articleTag?: Maybe<Scalars['Boolean']['output']>;
  articleTimestamp?: Maybe<Scalars['Boolean']['output']>;
  articleTopic?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type ArticleCarouselModuleSettingInput = {
  articleAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  articleComment?: InputMaybe<Scalars['Boolean']['input']>;
  articlePrayer?: InputMaybe<Scalars['Boolean']['input']>;
  articleSave?: InputMaybe<Scalars['Boolean']['input']>;
  articleShare?: InputMaybe<Scalars['Boolean']['input']>;
  articleTag?: InputMaybe<Scalars['Boolean']['input']>;
  articleTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  articleTopic?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleCollection = {
  __typename?: 'ArticleCollection';
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum ArticleContributorType {
  Author = 'AUTHOR',
  Guest = 'GUEST'
}

export type ArticleListData = {
  __typename?: 'ArticleListData';
  config?: Maybe<ArticleListModuleConfigData>;
  settings?: Maybe<ArticleListModuleSettingData>;
};

export type ArticleListDataV2 = {
  __typename?: 'ArticleListDataV2';
  config?: Maybe<ArticleListModuleConfigData>;
  settings?: Maybe<ArticleListModuleSettingData>;
};

export type ArticleListInput = {
  config?: InputMaybe<ArticleListModuleConfigInput>;
  settings?: InputMaybe<ArticleListModuleSettingInput>;
};

export type ArticleListInputV2 = {
  config?: InputMaybe<ArticleListModuleConfigInput>;
  settings?: InputMaybe<ArticleListModuleSettingInput>;
};

export type ArticleListModuleConfigData = {
  __typename?: 'ArticleListModuleConfigData';
  articles?: Maybe<Array<Maybe<Article>>>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<ArticleAutoGenerateSortBy>;
};

export type ArticleListModuleConfigInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleSchemaInput>>>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<ArticleAutoGenerateSortBy>;
};

export type ArticleListModuleSettingData = {
  __typename?: 'ArticleListModuleSettingData';
  articleAuthor?: Maybe<Scalars['Boolean']['output']>;
  articleComment?: Maybe<Scalars['Boolean']['output']>;
  articlePrayer?: Maybe<Scalars['Boolean']['output']>;
  articleSave?: Maybe<Scalars['Boolean']['output']>;
  articleShare?: Maybe<Scalars['Boolean']['output']>;
  articleTag?: Maybe<Scalars['Boolean']['output']>;
  articleTimestamp?: Maybe<Scalars['Boolean']['output']>;
  articleTopic?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type ArticleListModuleSettingInput = {
  articleAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  articleComment?: InputMaybe<Scalars['Boolean']['input']>;
  articlePrayer?: InputMaybe<Scalars['Boolean']['input']>;
  articleSave?: InputMaybe<Scalars['Boolean']['input']>;
  articleShare?: InputMaybe<Scalars['Boolean']['input']>;
  articleTag?: InputMaybe<Scalars['Boolean']['input']>;
  articleTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  articleTopic?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleRelatedContent = Podcast | Video;

export type ArticleSchemaInput = {
  articleId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export enum ArticleStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type ArticleWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type ArticlesFilter = {
  contributorId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<ArticleStatus>;
  topicIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ArticlesResponse = {
  __typename?: 'ArticlesResponse';
  articles?: Maybe<Array<Maybe<Article>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<ArticlesSortOn>;
};

export enum ArticlesSortOn {
  CreatedAt = 'createdAt',
  ReadCount = 'readCount',
  Title = 'title'
}

export type Asset = {
  __typename?: 'Asset';
  blurhash?: Maybe<Scalars['String']['output']>;
  category?: Maybe<AssetCategory>;
  categoryKey?: Maybe<AssetCategoryEnum>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  information?: Maybe<AssetInformation>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Language>;
  languageCode?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  platform?: Maybe<WorkspacePlatform>;
  policy?: Maybe<AssetPolicy>;
  resolutionUrls?: Maybe<Array<Maybe<AssetResolutionUrl>>>;
  service?: Maybe<AssetService>;
  serviceAssetId?: Maybe<Scalars['String']['output']>;
  serviceImageThumbnail?: Maybe<Scalars['String']['output']>;
  serviceRefData?: Maybe<Scalars['JSON']['output']>;
  serviceTargetId?: Maybe<Scalars['String']['output']>;
  serviceTimelineThumbnail?: Maybe<Scalars['String']['output']>;
  serviceVideoThumbnail?: Maybe<Scalars['String']['output']>;
  status?: Maybe<AssetStatus>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AssetCategory = {
  __typename?: 'AssetCategory';
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum AssetCategoryEnum {
  Audio = 'AUDIO',
  Document = 'DOCUMENT',
  Icon = 'ICON',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type AssetGeneralResponse = {
  __typename?: 'AssetGeneralResponse';
  asset?: Maybe<Asset>;
  message?: Maybe<Scalars['String']['output']>;
};

export type AssetInformation = {
  __typename?: 'AssetInformation';
  bitRate?: Maybe<Scalars['Float']['output']>;
  durationInSeconds?: Maybe<Scalars['Float']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  frameRate?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  sizeInMb?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type AssetInformationInput = {
  bitRate?: InputMaybe<Scalars['Float']['input']>;
  durationInSeconds?: InputMaybe<Scalars['Float']['input']>;
  extension?: InputMaybe<Scalars['String']['input']>;
  frameRate?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  sizeInMb?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export enum AssetPolicy {
  Public = 'PUBLIC',
  Signed = 'SIGNED'
}

export type AssetResolutionUrl = {
  __typename?: 'AssetResolutionUrl';
  resolution?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum AssetService {
  Brightcove = 'BRIGHTCOVE',
  BunnyStream = 'BUNNY_STREAM',
  JwPlayer = 'JW_PLAYER',
  Manual = 'MANUAL',
  Mux = 'MUX',
  Peertube = 'PEERTUBE'
}

export enum AssetStatus {
  Errored = 'ERRORED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Ready = 'READY'
}

export type AssetWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type AssetsFilter = {
  categoryKey?: InputMaybe<AssetCategoryEnum>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetsResponse = {
  __typename?: 'AssetsResponse';
  assets?: Maybe<Array<Maybe<Asset>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type AssetsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<AssetsSortOn>;
};

export enum AssetsSortOn {
  CreatedAt = 'createdAt',
  Title = 'title'
}

export enum AudioAssetService {
  Manual = 'MANUAL',
  Peertube = 'PEERTUBE'
}

export enum AuthService {
  AuthZero = 'AUTH_ZERO',
  EmailPassword = 'EMAIL_PASSWORD',
  Firebase = 'FIREBASE'
}

export type AutoGenerateByData = Collection | Contributor | Source | Tag | Topic;

export enum AutoGenerateType {
  Collection = 'COLLECTION',
  Contributor = 'CONTRIBUTOR',
  Source = 'SOURCE',
  Tag = 'TAG',
  Topic = 'TOPIC'
}

export type BibleAnswer = {
  __typename?: 'BibleAnswer';
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  questionId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type BibleChapter = {
  __typename?: 'BibleChapter';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isComplete?: Maybe<Scalars['Boolean']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  questions?: Maybe<Array<Maybe<BibleQuestion>>>;
  title?: Maybe<Scalars['String']['output']>;
  verse?: Maybe<Scalars['String']['output']>;
  versions?: Maybe<Array<Maybe<BibleVersion>>>;
  videoThumbnailUrl?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type BibleChapterFilterInput = {
  date?: InputMaybe<Scalars['String']['input']>;
};

export type BibleChapterResponse = {
  __typename?: 'BibleChapterResponse';
  chapters?: Maybe<Array<Maybe<BibleChapter>>>;
  isJoined?: Maybe<Scalars['Boolean']['output']>;
};

export type BibleMonthlyReadingFilterInput = {
  month: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};

export type BibleQuestion = {
  __typename?: 'BibleQuestion';
  answers?: Maybe<Array<Maybe<BibleAnswer>>>;
  communityIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  order?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

export type BibleVersion = {
  __typename?: 'BibleVersion';
  audio?: Maybe<Asset>;
  passage?: Maybe<Scalars['String']['output']>;
  versionType?: Maybe<Scalars['String']['output']>;
};

export enum BiblicalNotificationPreferenceAction {
  Checked = 'CHECKED',
  Unchecked = 'UNCHECKED'
}

export type CtaBannerData = {
  __typename?: 'CTABannerData';
  config?: Maybe<CtaBannerModuleConfigData>;
};

export type CtaBannerInput = {
  config?: InputMaybe<CtaBannerModuleConfigInput>;
};

export type CtaBannerModuleConfigData = {
  __typename?: 'CTABannerModuleConfigData';
  asset?: Maybe<Asset>;
};

export type CtaBannerModuleConfigInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
};

export type CtaBannerModuleSettingData = {
  __typename?: 'CTABannerModuleSettingData';
  image?: Maybe<Scalars['Boolean']['output']>;
};

export type CtaBannerModuleSettingInput = {
  image?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaBannerWithTextActionData = {
  __typename?: 'CTABannerWithTextActionData';
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CtaBannerWithTextActionInput = {
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaBannerWithTextData = {
  __typename?: 'CTABannerWithTextData';
  config?: Maybe<CtaBannerWithTextModuleConfigData>;
  settings?: Maybe<CtaBannerWithTextModuleSettingData>;
};

export type CtaBannerWithTextInput = {
  config?: InputMaybe<CtaBannerWithTextModuleConfigInput>;
  settings?: InputMaybe<CtaBannerWithTextModuleSettingInput>;
};

export type CtaBannerWithTextModuleConfigData = {
  __typename?: 'CTABannerWithTextModuleConfigData';
  asset?: Maybe<Asset>;
  primaryAction?: Maybe<CtaBannerWithTextActionData>;
  theme?: Maybe<Scalars['String']['output']>;
};

export type CtaBannerWithTextModuleConfigInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  primaryAction?: InputMaybe<CtaBannerWithTextActionInput>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type CtaBannerWithTextModuleSettingData = {
  __typename?: 'CTABannerWithTextModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type CtaBannerWithTextModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaBlockActionData = {
  __typename?: 'CTABlockActionData';
  asset?: Maybe<Asset>;
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CtaBlockActionInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum CtaBlockActionType {
  External = 'EXTERNAL',
  Internal = 'INTERNAL'
}

export type CtaBlockData = {
  __typename?: 'CTABlockData';
  config?: Maybe<CtaBlockModuleConfigData>;
  settings?: Maybe<CtaBlockModuleSettingData>;
};

export type CtaBlockInput = {
  config?: InputMaybe<CtaBlockModuleConfigInput>;
  settings?: InputMaybe<CtaBlockModuleSettingInput>;
};

export type CtaBlockModuleConfigData = {
  __typename?: 'CTABlockModuleConfigData';
  asset?: Maybe<Asset>;
  eventDate?: Maybe<Scalars['String']['output']>;
  eventLocation?: Maybe<Scalars['String']['output']>;
  eventTime?: Maybe<Scalars['String']['output']>;
  primaryAction?: Maybe<CtaBlockActionData>;
  secondaryAction?: Maybe<CtaBlockActionData>;
  theme?: Maybe<Scalars['String']['output']>;
};

export type CtaBlockModuleConfigInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['String']['input']>;
  eventLocation?: InputMaybe<Scalars['String']['input']>;
  eventTime?: InputMaybe<Scalars['String']['input']>;
  primaryAction?: InputMaybe<CtaBlockActionInput>;
  secondaryAction?: InputMaybe<CtaBlockActionInput>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type CtaBlockModuleSettingData = {
  __typename?: 'CTABlockModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  eventDetails?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Scalars['Boolean']['output']>;
  secondaryAction?: Maybe<Scalars['Boolean']['output']>;
};

export type CtaBlockModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  eventDetails?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryAction?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CtaButtonListButtonType {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

export type CtaButtonListData = {
  __typename?: 'CTAButtonListData';
  config?: Maybe<CtaButtonListModuleConfigData>;
  settings?: Maybe<CtaButtonListModuleSettingData>;
};

export type CtaButtonListInput = {
  config?: InputMaybe<CtaButtonListModuleConfigInput>;
  settings?: InputMaybe<CtaButtonListModuleSettingInput>;
};

export type CtaButtonListItemData = {
  __typename?: 'CTAButtonListItemData';
  asset?: Maybe<Asset>;
  buttonType?: Maybe<CtaButtonListButtonType>;
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CtaButtonListItemInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  buttonType?: InputMaybe<CtaButtonListButtonType>;
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaButtonListModuleConfigData = {
  __typename?: 'CTAButtonListModuleConfigData';
  items?: Maybe<Array<Maybe<CtaButtonListItemData>>>;
};

export type CtaButtonListModuleConfigInput = {
  items?: InputMaybe<Array<InputMaybe<CtaButtonListItemInput>>>;
};

export type CtaButtonListModuleSettingData = {
  __typename?: 'CTAButtonListModuleSettingData';
  bottomSeparator?: Maybe<Scalars['Boolean']['output']>;
};

export type CtaButtonListModuleSettingInput = {
  bottomSeparator?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaCarouselData = {
  __typename?: 'CTACarouselData';
  config?: Maybe<CtaCarouselModuleConfigData>;
  settings?: Maybe<CtaCarouselModuleSettingData>;
};

export type CtaCarouselInput = {
  config?: InputMaybe<CtaCarouselModuleConfigInput>;
  settings?: InputMaybe<CtaCarouselModuleSettingInput>;
};

export type CtaCarouselItemData = {
  __typename?: 'CTACarouselItemData';
  asset?: Maybe<Asset>;
  description?: Maybe<Scalars['String']['output']>;
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CtaCarouselItemInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum CtaCarouselItemType {
  Button = 'BUTTON',
  Card = 'CARD'
}

export type CtaCarouselModuleConfigData = {
  __typename?: 'CTACarouselModuleConfigData';
  items?: Maybe<Array<Maybe<CtaCarouselItemData>>>;
  type?: Maybe<CtaCarouselItemType>;
};

export type CtaCarouselModuleConfigInput = {
  items?: InputMaybe<Array<InputMaybe<CtaCarouselItemInput>>>;
  type?: InputMaybe<CtaCarouselItemType>;
};

export type CtaCarouselModuleSettingData = {
  __typename?: 'CTACarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  itemImage?: Maybe<Scalars['Boolean']['output']>;
  itemTitle?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CtaCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  itemImage?: InputMaybe<Scalars['Boolean']['input']>;
  itemTitle?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaGridData = {
  __typename?: 'CTAGridData';
  config?: Maybe<CtaGridModuleConfigData>;
  settings?: Maybe<CtaGridModuleSettingData>;
};

export type CtaGridInput = {
  config?: InputMaybe<CtaGridModuleConfigInput>;
  settings?: InputMaybe<CtaGridModuleSettingInput>;
};

export type CtaGridItemData = {
  __typename?: 'CTAGridItemData';
  asset?: Maybe<Asset>;
  description?: Maybe<Scalars['String']['output']>;
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CtaGridItemInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum CtaGridItemType {
  Button = 'BUTTON',
  Card = 'CARD'
}

export type CtaGridModuleConfigData = {
  __typename?: 'CTAGridModuleConfigData';
  items?: Maybe<Array<Maybe<CtaGridItemData>>>;
  type?: Maybe<CtaGridItemType>;
};

export type CtaGridModuleConfigInput = {
  items?: InputMaybe<Array<InputMaybe<CtaGridItemInput>>>;
  type?: InputMaybe<CtaGridItemType>;
};

export type CtaGridModuleSettingData = {
  __typename?: 'CTAGridModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  itemImage?: Maybe<Scalars['Boolean']['output']>;
  itemTitle?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CtaGridModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  itemImage?: InputMaybe<Scalars['Boolean']['input']>;
  itemTitle?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearNotificationInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum CloudFrontClearCacheKey {
  Menu = 'MENU',
  OgImages = 'OG_IMAGES',
  UiLabels = 'UI_LABELS'
}

export type Collection = {
  __typename?: 'Collection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<CollectionStatus>;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum CollectionAutoGenerateSortBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type CollectionCarouselData = {
  __typename?: 'CollectionCarouselData';
  config?: Maybe<CollectionCarouselModuleConfigData>;
  settings?: Maybe<CollectionCarouselModuleSettingData>;
};

export type CollectionCarouselInput = {
  config?: InputMaybe<CollectionCarouselModuleConfigInput>;
  settings?: InputMaybe<CollectionCarouselModuleSettingInput>;
};

export type CollectionCarouselModuleConfigData = {
  __typename?: 'CollectionCarouselModuleConfigData';
  aspectRatio?: Maybe<Scalars['String']['output']>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<CollectionAutoGenerateSortBy>;
  collections?: Maybe<Array<Maybe<Collection>>>;
};

export type CollectionCarouselModuleConfigInput = {
  aspectRatio?: InputMaybe<Scalars['String']['input']>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<CollectionAutoGenerateSortBy>;
  collections?: InputMaybe<Array<InputMaybe<CollectionSchemaInput>>>;
};

export type CollectionCarouselModuleSettingData = {
  __typename?: 'CollectionCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfItems?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectionCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfItems?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionGridData = {
  __typename?: 'CollectionGridData';
  config?: Maybe<CollectionGridModuleConfigData>;
  settings?: Maybe<CollectionGridModuleSettingData>;
};

export type CollectionGridInput = {
  config?: InputMaybe<CollectionGridModuleConfigInput>;
  settings?: InputMaybe<CollectionGridModuleSettingInput>;
};

export type CollectionGridModuleConfigData = {
  __typename?: 'CollectionGridModuleConfigData';
  aspectRatio?: Maybe<Scalars['String']['output']>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<CollectionAutoGenerateSortBy>;
  collections?: Maybe<Array<Maybe<Collection>>>;
};

export type CollectionGridModuleConfigInput = {
  aspectRatio?: InputMaybe<Scalars['String']['input']>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<CollectionAutoGenerateSortBy>;
  collections?: InputMaybe<Array<InputMaybe<CollectionSchemaInput>>>;
};

export type CollectionGridModuleSettingData = {
  __typename?: 'CollectionGridModuleSettingData';
  collectionDescription?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfItems?: Maybe<Scalars['Boolean']['output']>;
  searchBar?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectionGridModuleSettingInput = {
  collectionDescription?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfItems?: InputMaybe<Scalars['Boolean']['input']>;
  searchBar?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  itemData?: Maybe<CollectionItemData>;
  order?: Maybe<Scalars['Int']['output']>;
  sequence?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CollectionItemType>;
};

export type CollectionItemCarouselData = {
  __typename?: 'CollectionItemCarouselData';
  config?: Maybe<CollectionItemCarouselModuleConfigData>;
  settings?: Maybe<CollectionItemCarouselModuleSettingData>;
};

export type CollectionItemCarouselInput = {
  config?: InputMaybe<CollectionItemCarouselModuleConfigInput>;
  settings?: InputMaybe<CollectionItemCarouselModuleSettingInput>;
};

export type CollectionItemCarouselModuleConfigData = {
  __typename?: 'CollectionItemCarouselModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Collection>;
  collectionItems?: Maybe<Array<Maybe<CollectionItem>>>;
};

export type CollectionItemCarouselModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['ID']['input'];
};

export type CollectionItemCarouselModuleSettingData = {
  __typename?: 'CollectionItemCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectionItemCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionItemData = Article | Form | Podcast | Video;

export type CollectionItemGridData = {
  __typename?: 'CollectionItemGridData';
  config?: Maybe<CollectionItemGridModuleConfigData>;
  settings?: Maybe<CollectionItemGridModuleSettingData>;
};

export type CollectionItemGridInput = {
  config?: InputMaybe<CollectionItemGridModuleConfigInput>;
  settings?: InputMaybe<CollectionItemGridModuleSettingInput>;
};

export type CollectionItemGridModuleConfigData = {
  __typename?: 'CollectionItemGridModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Collection>;
  collectionItems?: Maybe<Array<Maybe<CollectionItem>>>;
};

export type CollectionItemGridModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['ID']['input'];
};

export type CollectionItemGridModuleSettingData = {
  __typename?: 'CollectionItemGridModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectionItemGridModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionItemListData = {
  __typename?: 'CollectionItemListData';
  config?: Maybe<CollectionItemListModuleConfigData>;
  settings?: Maybe<CollectionItemListModuleSettingData>;
};

export type CollectionItemListInput = {
  config?: InputMaybe<CollectionItemListModuleConfigInput>;
  settings?: InputMaybe<CollectionItemListModuleSettingInput>;
};

export type CollectionItemListModuleConfigData = {
  __typename?: 'CollectionItemListModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Collection>;
  collectionItems?: Maybe<Array<Maybe<CollectionItem>>>;
};

export type CollectionItemListModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  collectionId: Scalars['ID']['input'];
};

export type CollectionItemListModuleSettingData = {
  __typename?: 'CollectionItemListModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectionItemListModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CollectionItemType {
  Article = 'ARTICLE',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Video = 'VIDEO'
}

export type CollectionItemsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionItemsResponse = {
  __typename?: 'CollectionItemsResponse';
  collectionItems?: Maybe<Array<Maybe<CollectionItem>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type CollectionListData = {
  __typename?: 'CollectionListData';
  config?: Maybe<CollectionListModuleConfigData>;
  settings?: Maybe<CollectionListModuleSettingData>;
};

export type CollectionListInput = {
  config?: InputMaybe<CollectionListModuleConfigInput>;
  settings?: InputMaybe<CollectionListModuleSettingInput>;
};

export type CollectionListModuleConfigData = {
  __typename?: 'CollectionListModuleConfigData';
  aspectRatio?: Maybe<Scalars['String']['output']>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<CollectionAutoGenerateSortBy>;
  collections?: Maybe<Array<Maybe<Collection>>>;
};

export type CollectionListModuleConfigInput = {
  aspectRatio?: InputMaybe<Scalars['String']['input']>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<CollectionAutoGenerateSortBy>;
  collections?: InputMaybe<Array<InputMaybe<CollectionSchemaInput>>>;
};

export type CollectionListModuleSettingData = {
  __typename?: 'CollectionListModuleSettingData';
  collectionDescription?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfItems?: Maybe<Scalars['Boolean']['output']>;
  separator?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type CollectionListModuleSettingInput = {
  collectionDescription?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfItems?: InputMaybe<Scalars['Boolean']['input']>;
  separator?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionSchemaInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export enum CollectionStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type CollectionUniqueInput = {
  id: Scalars['ID']['input'];
};

export type CollectionsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  pageModuleId?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CollectionsItemsCountResponse = {
  __typename?: 'CollectionsItemsCountResponse';
  collectionId: Scalars['ID']['output'];
  itemsCount: Scalars['Int']['output'];
};

export type CollectionsResponse = {
  __typename?: 'CollectionsResponse';
  collections?: Maybe<Array<Maybe<Collection>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type CollectionsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<CollectionsSortOn>;
};

export enum CollectionsSortOn {
  CreatedAt = 'createdAt',
  Status = 'status',
  Title = 'title'
}

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  flagsCount?: Maybe<Scalars['Int']['output']>;
  giphyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isFlagged?: Maybe<Scalars['Boolean']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  isStared?: Maybe<Scalars['Boolean']['output']>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  mediaDimensions?: Maybe<MediaDimensionsResponse>;
  mediaType?: Maybe<CommentMediaType>;
  mediaUrl?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<CommentThreadResponse>;
  replyCount?: Maybe<Scalars['Int']['output']>;
  starsCount?: Maybe<Scalars['Int']['output']>;
};

export type CommentRepliesArgs = {
  filter?: InputMaybe<CommentThreadRepliesFilter>;
  sort?: InputMaybe<CommentsSort>;
};

export type CommentImageUploadSignedUrlData = {
  fileName: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
  instanceType: CommentInstanceType;
};

export enum CommentInstanceType {
  Article = 'ARTICLE',
  Podcast = 'PODCAST',
  Post = 'POST',
  Video = 'VIDEO'
}

export enum CommentMediaType {
  Gif = 'GIF',
  Image = 'IMAGE'
}

export type CommentMutationResponse = {
  __typename?: 'CommentMutationResponse';
  comment?: Maybe<Comment>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CommentThreadFilter = {
  instanceId: Scalars['ID']['input'];
  instanceType: CommentInstanceType;
  limit?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentThreadRepliesFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentThreadResponse = {
  __typename?: 'CommentThreadResponse';
  comments?: Maybe<Array<Maybe<Comment>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type CommentWhereInput = {
  id: Scalars['ID']['input'];
};

export type CommentsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<CommentsSortOn>;
};

export enum CommentsSortOn {
  CreatedAt = 'createdAt',
  LikesCount = 'likesCount',
  StarsCount = 'starsCount'
}

export type CommonMessageResponse = {
  __typename?: 'CommonMessageResponse';
  message?: Maybe<Scalars['String']['output']>;
};

export type CommunitiesFilter = {
  alreadyMember?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  locationFilter?: InputMaybe<CommunityLocationFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  topicIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  visibility?: InputMaybe<CommunityVisibility>;
};

export type CommunitiesResponse = {
  __typename?: 'CommunitiesResponse';
  communities?: Maybe<Array<Maybe<Community>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type CommunitiesSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<CommunitiesSortOn>;
};

export enum CommunitiesSortOn {
  CreatedAt = 'createdAt',
  Title = 'title'
}

export type Community = {
  __typename?: 'Community';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastMonthMembersCount?: Maybe<Scalars['Int']['output']>;
  lastMonthPostCount?: Maybe<Scalars['Int']['output']>;
  locations?: Maybe<Array<Maybe<CommunityLocation>>>;
  memberRole?: Maybe<CommunityMemberRole>;
  memberStatus?: Maybe<CommunityMemberStatus>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
  todaysPostsCount?: Maybe<Scalars['Int']['output']>;
  topics?: Maybe<Array<Maybe<Topic>>>;
  type?: Maybe<CommunityType>;
  visibility?: Maybe<CommunityVisibility>;
};

export enum CommunityAutoGenerateSortBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type CommunityCarouselData = {
  __typename?: 'CommunityCarouselData';
  config?: Maybe<CommunityCarouselModuleConfigData>;
  settings?: Maybe<CommunityCarouselModuleSettingData>;
};

export type CommunityCarouselInput = {
  config?: InputMaybe<CommunityCarouselModuleConfigInput>;
  settings?: InputMaybe<CommunityCarouselModuleSettingInput>;
};

export type CommunityCarouselModuleConfigData = {
  __typename?: 'CommunityCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByMember?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<CommunityAutoGenerateSortBy>;
  communities?: Maybe<Array<Maybe<Community>>>;
};

export type CommunityCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateByMember?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<CommunityAutoGenerateSortBy>;
  communities?: InputMaybe<Array<InputMaybe<CommunitySchemaInput>>>;
};

export type CommunityCarouselModuleSettingData = {
  __typename?: 'CommunityCarouselModuleSettingData';
  communityDescription?: Maybe<Scalars['Boolean']['output']>;
  communityMemberCount?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type CommunityCarouselModuleSettingInput = {
  communityDescription?: InputMaybe<Scalars['Boolean']['input']>;
  communityMemberCount?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityGridData = {
  __typename?: 'CommunityGridData';
  config?: Maybe<CommunityGridModuleConfigData>;
  settings?: Maybe<CommunityGridModuleSettingData>;
};

export type CommunityGridInput = {
  config?: InputMaybe<CommunityGridModuleConfigInput>;
  settings?: InputMaybe<CommunityGridModuleSettingInput>;
};

export type CommunityGridModuleConfigData = {
  __typename?: 'CommunityGridModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByMember?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<CommunityAutoGenerateSortBy>;
  communities?: Maybe<Array<Maybe<Community>>>;
};

export type CommunityGridModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateByMember?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<CommunityAutoGenerateSortBy>;
  communities?: InputMaybe<Array<InputMaybe<CommunitySchemaInput>>>;
};

export type CommunityGridModuleSettingData = {
  __typename?: 'CommunityGridModuleSettingData';
  communityMemberCount?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  locationSort?: Maybe<Scalars['Boolean']['output']>;
  sortByTag?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type CommunityGridModuleSettingInput = {
  communityMemberCount?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  locationSort?: InputMaybe<Scalars['Boolean']['input']>;
  sortByTag?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommunityLocation = {
  __typename?: 'CommunityLocation';
  coordinates?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type CommunityLocationFilter = {
  coordinates?: InputMaybe<CoordinatesInput>;
  distance?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CommunityMember = {
  __typename?: 'CommunityMember';
  id?: Maybe<Scalars['ID']['output']>;
  member?: Maybe<User>;
  role?: Maybe<CommunityMemberRole>;
  status?: Maybe<CommunityMemberStatus>;
};

export enum CommunityMemberRole {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  User = 'USER'
}

export enum CommunityMemberStatus {
  Active = 'ACTIVE',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED'
}

export type CommunityMemberWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type CommunityMembersFilter = {
  communityId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CommunityMembersResponse = {
  __typename?: 'CommunityMembersResponse';
  communityMembers?: Maybe<Array<Maybe<CommunityMember>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type CommunityMembersSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<CommunityMembersSortOn>;
};

export enum CommunityMembersSortOn {
  CreatedAt = 'createdAt'
}

export type CommunitySchemaInput = {
  communityId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CommunityTagsInput = {
  order: Scalars['Int']['input'];
  tagId: Scalars['ID']['input'];
};

export type CommunityTopicsInput = {
  order: Scalars['Int']['input'];
  topicId: Scalars['ID']['input'];
};

export enum CommunityType {
  Custom = 'CUSTOM',
  LocationBased = 'LOCATION_BASED'
}

export enum CommunityVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CommunityWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type ContactInquiriesFilter = {
  key?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ContactInquiryStatus>;
};

export type ContactInquiriesResponse = {
  __typename?: 'ContactInquiriesResponse';
  contactInquiries?: Maybe<Array<Maybe<ContactInquiry>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ContactInquiry = {
  __typename?: 'ContactInquiry';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  inquiry?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ContactInquiryStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactInquiryGeneralResponse = {
  __typename?: 'ContactInquiryGeneralResponse';
  contactInquiry?: Maybe<ContactInquiry>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ContactInquiryStatus {
  Open = 'OPEN',
  Resolved = 'RESOLVED',
  Unresolved = 'UNRESOLVED'
}

export type ContactInquiryUniqueInput = {
  id: Scalars['ID']['input'];
};

export type ContactOfficial = {
  __typename?: 'ContactOfficial';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  prayerCount?: Maybe<Scalars['Int']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<Scalars['JSON']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type ContactOfficialCarouselData = {
  __typename?: 'ContactOfficialCarouselData';
  config?: Maybe<ContactOfficialCarouselModuleConfigData>;
  settings?: Maybe<ContactOfficialCarouselModuleSettingData>;
};

export type ContactOfficialCarouselInput = {
  settings?: InputMaybe<ContactOfficialCarouselModuleSettingInput>;
};

export type ContactOfficialCarouselModuleConfigData = {
  __typename?: 'ContactOfficialCarouselModuleConfigData';
  contactOfficials?: Maybe<Array<Maybe<ContactOfficial>>>;
};

export type ContactOfficialCarouselModuleSettingData = {
  __typename?: 'ContactOfficialCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactOfficialCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactOfficialsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactOfficialsResponse = {
  __typename?: 'ContactOfficialsResponse';
  contactOfficials?: Maybe<Array<Maybe<ContactOfficial>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ContactOfficialsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<ContactOfficialsSortOn>;
};

export enum ContactOfficialsSortOn {
  CreatedAt = 'createdAt',
  Name = 'name'
}

export type ContactUsCreateInput = {
  config?: InputMaybe<ContactUsModuleConfigCreateInput>;
  settings?: InputMaybe<ContactUsModuleSettingInput>;
};

export type ContactUsData = {
  __typename?: 'ContactUsData';
  config?: Maybe<ContactUsModuleConfigData>;
  settings?: Maybe<ContactUsModuleSettingData>;
};

export type ContactUsModuleConfigCreateInput = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUsModuleConfigData = {
  __typename?: 'ContactUsModuleConfigData';
  key?: Maybe<Scalars['String']['output']>;
};

export type ContactUsModuleSettingData = {
  __typename?: 'ContactUsModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type ContactUsModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactUsUpdateInput = {
  settings?: InputMaybe<ContactUsModuleSettingInput>;
};

export type Contributor = {
  __typename?: 'Contributor';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Asset>;
  lastName?: Maybe<Scalars['String']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  podcastsCount?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Asset>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videosCount?: Maybe<Scalars['Int']['output']>;
};

export enum ContributorAutoGenerateBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type ContributorCarouselData = {
  __typename?: 'ContributorCarouselData';
  config?: Maybe<ContributorCarouselModuleConfigData>;
  settings?: Maybe<ContributorCarouselModuleSettingData>;
};

export type ContributorCarouselInput = {
  config?: InputMaybe<ContributorCarouselModuleConfigInput>;
  settings?: InputMaybe<ContributorCarouselModuleSettingInput>;
};

export type ContributorCarouselModuleConfigData = {
  __typename?: 'ContributorCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<ContributorAutoGenerateBy>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
};

export type ContributorCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<ContributorAutoGenerateBy>;
  contributors?: InputMaybe<Array<InputMaybe<ContributorSchemaInput>>>;
};

export type ContributorCarouselModuleSettingData = {
  __typename?: 'ContributorCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfPodcasts?: Maybe<Scalars['Boolean']['output']>;
  numberOfVideos?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type ContributorCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfPodcasts?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfVideos?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributorGridData = {
  __typename?: 'ContributorGridData';
  config?: Maybe<ContributorGridModuleConfigData>;
  settings?: Maybe<ContributorGridModuleSettingData>;
};

export type ContributorGridInput = {
  config?: InputMaybe<ContributorGridModuleConfigInput>;
  settings?: InputMaybe<ContributorGridModuleSettingInput>;
};

export type ContributorGridModuleConfigData = {
  __typename?: 'ContributorGridModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<ContributorAutoGenerateBy>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
};

export type ContributorGridModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<ContributorAutoGenerateBy>;
  contributors?: InputMaybe<Array<InputMaybe<ContributorSchemaInput>>>;
};

export type ContributorGridModuleSettingData = {
  __typename?: 'ContributorGridModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfPodcasts?: Maybe<Scalars['Boolean']['output']>;
  numberOfVideos?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type ContributorGridModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfPodcasts?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfVideos?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributorListData = {
  __typename?: 'ContributorListData';
  config?: Maybe<ContributorListModuleConfigData>;
  settings?: Maybe<ContributorListModuleSettingData>;
};

export type ContributorListInput = {
  config?: InputMaybe<ContributorListModuleConfigInput>;
  settings?: InputMaybe<ContributorListModuleSettingInput>;
};

export type ContributorListModuleConfigData = {
  __typename?: 'ContributorListModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<ContributorAutoGenerateBy>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
};

export type ContributorListModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<ContributorAutoGenerateBy>;
  contributors?: InputMaybe<Array<InputMaybe<ContributorSchemaInput>>>;
};

export type ContributorListModuleSettingData = {
  __typename?: 'ContributorListModuleSettingData';
  contributorDescription?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfPodcasts?: Maybe<Scalars['Boolean']['output']>;
  numberOfVideos?: Maybe<Scalars['Boolean']['output']>;
  separator?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type ContributorListModuleSettingInput = {
  contributorDescription?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfPodcasts?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfVideos?: InputMaybe<Scalars['Boolean']['input']>;
  separator?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContributorSchemaInput = {
  contributorId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ContributorWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type ContributorsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContributorsResponse = {
  __typename?: 'ContributorsResponse';
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ContributorsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<ContributorsSortOn>;
};

export enum ContributorsSortOn {
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type ContributorsVideoCountResponse = {
  __typename?: 'ContributorsVideoCountResponse';
  contributorId: Scalars['ID']['output'];
  videoCount: Scalars['Int']['output'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type CoordinatesInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type CopyHeavyActionData = {
  __typename?: 'CopyHeavyActionData';
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CopyHeavyActionInput = {
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CopyHeavyData = {
  __typename?: 'CopyHeavyData';
  config?: Maybe<CopyHeavyModuleConfigData>;
  settings?: Maybe<CopyHeavyModuleSettingData>;
};

export type CopyHeavyHeroData = {
  __typename?: 'CopyHeavyHeroData';
  config?: Maybe<CopyHeavyHeroModuleConfigData>;
  settings?: Maybe<CopyHeavyHeroModuleSettingData>;
};

export type CopyHeavyHeroInput = {
  config?: InputMaybe<CopyHeavyHeroModuleConfigInput>;
  settings?: InputMaybe<CopyHeavyHeroModuleSettingInput>;
};

export type CopyHeavyHeroModuleConfigData = {
  __typename?: 'CopyHeavyHeroModuleConfigData';
  alignment?: Maybe<Alignment>;
  asset?: Maybe<Asset>;
  contributor?: Maybe<Contributor>;
  date?: Maybe<Scalars['String']['output']>;
  primaryAction?: Maybe<CopyHeavyActionData>;
  secondaryAction?: Maybe<CopyHeavyActionData>;
  text?: Maybe<Scalars['String']['output']>;
};

export type CopyHeavyHeroModuleConfigInput = {
  alignment?: InputMaybe<Alignment>;
  assetId?: InputMaybe<Scalars['ID']['input']>;
  contributorId?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  primaryAction?: InputMaybe<CopyHeavyActionInput>;
  secondaryAction?: InputMaybe<CopyHeavyActionInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CopyHeavyHeroModuleSettingData = {
  __typename?: 'CopyHeavyHeroModuleSettingData';
  contributor?: Maybe<Scalars['Boolean']['output']>;
  date?: Maybe<Scalars['Boolean']['output']>;
  primaryAction?: Maybe<Scalars['Boolean']['output']>;
  secondaryAction?: Maybe<Scalars['Boolean']['output']>;
  textFields?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type CopyHeavyHeroModuleSettingInput = {
  contributor?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['Boolean']['input']>;
  primaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  textFields?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CopyHeavyInput = {
  config?: InputMaybe<CopyHeavyModuleConfigInput>;
  settings?: InputMaybe<CopyHeavyModuleSettingInput>;
};

export type CopyHeavyModuleConfigData = {
  __typename?: 'CopyHeavyModuleConfigData';
  alignment?: Maybe<Alignment>;
  contributor?: Maybe<Contributor>;
  date?: Maybe<Scalars['String']['output']>;
  primaryAction?: Maybe<CopyHeavyActionData>;
  secondaryAction?: Maybe<CopyHeavyActionData>;
  text?: Maybe<Scalars['String']['output']>;
};

export type CopyHeavyModuleConfigInput = {
  alignment?: InputMaybe<Alignment>;
  contributorId?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  primaryAction?: InputMaybe<CopyHeavyActionInput>;
  secondaryAction?: InputMaybe<CopyHeavyActionInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CopyHeavyModuleSettingData = {
  __typename?: 'CopyHeavyModuleSettingData';
  contributor?: Maybe<Scalars['Boolean']['output']>;
  date?: Maybe<Scalars['Boolean']['output']>;
  primaryAction?: Maybe<Scalars['Boolean']['output']>;
  secondaryAction?: Maybe<Scalars['Boolean']['output']>;
  textFields?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type CopyHeavyModuleSettingInput = {
  contributor?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['Boolean']['input']>;
  primaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  textFields?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateAssetInput = {
  blurhash?: InputMaybe<Scalars['String']['input']>;
  categoryKey: AssetCategoryEnum;
  contentType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  information?: InputMaybe<AssetInformationInput>;
  key: Scalars['String']['input'];
  languageCode?: InputMaybe<Scalars['String']['input']>;
  platformId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateAudioAssetInput = {
  contentLength?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageAssetId?: InputMaybe<Scalars['ID']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  service: AudioAssetService;
  title: Scalars['String']['input'];
};

export type CreateAudioAssetResponse = {
  __typename?: 'CreateAudioAssetResponse';
  asset?: Maybe<Asset>;
  platformId?: Maybe<Scalars['ID']['output']>;
  signedUrl?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
};

export type CreateCommentInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  giphyId?: InputMaybe<Scalars['String']['input']>;
  instanceId: Scalars['ID']['input'];
  instanceType: CommentInstanceType;
  mediaDimensions?: InputMaybe<MediaDimensionsInput>;
  mediaType?: InputMaybe<CommentMediaType>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateCommunityInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<CommunityTagsInput>>>;
  title: Scalars['String']['input'];
  topics?: InputMaybe<Array<InputMaybe<CommunityTopicsInput>>>;
  visibility: CommunityVisibility;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDonationInput = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  coverTransactionFee?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  newsLetterOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  state: Scalars['String']['input'];
  type: DonationType;
  zipcode: Scalars['String']['input'];
};

export type CreateDonationResponse = {
  __typename?: 'CreateDonationResponse';
  donation?: Maybe<Donation>;
  message?: Maybe<Scalars['String']['output']>;
  paymentData?: Maybe<PaymentData>;
};

export type CreatePageInput = {
  appIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: PageType;
};

export type CreatePageModuleInput = {
  articleCarouselModule?: InputMaybe<ArticleCarouselInput>;
  articleCarouselModuleV2?: InputMaybe<ArticleCarouselInputV2>;
  articleListModule?: InputMaybe<ArticleListInput>;
  articleListModuleV2?: InputMaybe<ArticleListInputV2>;
  collectionCarouselModule?: InputMaybe<CollectionCarouselInput>;
  collectionGridModule?: InputMaybe<CollectionGridInput>;
  collectionItemCarouselModule?: InputMaybe<CollectionItemCarouselInput>;
  collectionItemGridModule?: InputMaybe<CollectionItemGridInput>;
  collectionItemListModule?: InputMaybe<CollectionItemListInput>;
  collectionListModule?: InputMaybe<CollectionListInput>;
  communityCarouselModule?: InputMaybe<CommunityCarouselInput>;
  communityGridModule?: InputMaybe<CommunityGridInput>;
  contactOfficialCarouselModule?: InputMaybe<ContactOfficialCarouselInput>;
  contactUsModule?: InputMaybe<ContactUsCreateInput>;
  contributorCarouselModule?: InputMaybe<ContributorCarouselInput>;
  contributorGridModule?: InputMaybe<ContributorGridInput>;
  contributorListModule?: InputMaybe<ContributorListInput>;
  copyHeavyHeroModule?: InputMaybe<CopyHeavyHeroInput>;
  copyHeavyModule?: InputMaybe<CopyHeavyInput>;
  ctaBannerModule?: InputMaybe<CtaBannerInput>;
  ctaBannerWithTextModule?: InputMaybe<CtaBannerWithTextInput>;
  ctaBlockModule?: InputMaybe<CtaBlockInput>;
  ctaButtonListModule?: InputMaybe<CtaButtonListInput>;
  ctaCarouselModule?: InputMaybe<CtaCarouselInput>;
  ctaGridModule?: InputMaybe<CtaGridInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  donationModule?: InputMaybe<DonationCreateInput>;
  faqModule?: InputMaybe<FaqInput>;
  featuredArticleModule?: InputMaybe<FeaturedArticleInput>;
  featuredArticleModuleV2?: InputMaybe<FeaturedArticleInputV2>;
  featuredCollectionModule?: InputMaybe<FeaturedCollectionInput>;
  featuredCollectionSliderModule?: InputMaybe<FeaturedCollectionSliderInput>;
  featuredCommunityModule?: InputMaybe<FeaturedCommunityInput>;
  featuredContributorModule?: InputMaybe<FeaturedContributorInput>;
  featuredPodcastModule?: InputMaybe<FeaturedPodcastInput>;
  featuredPodcastSliderModule?: InputMaybe<FeaturedPodcastSliderInput>;
  featuredTagModule?: InputMaybe<FeaturedTagInput>;
  featuredTopicModule?: InputMaybe<FeaturedTopicInput>;
  featuredVideoModule?: InputMaybe<FeaturedVideoInput>;
  featuredVideoSliderModule?: InputMaybe<FeaturedVideoSliderInput>;
  formCarouselModule?: InputMaybe<FormCarouselInput>;
  formDisplayModule?: InputMaybe<FormDisplayInput>;
  heroModule?: InputMaybe<HeroInput>;
  htmlTextBlockModule?: InputMaybe<HtmlTextBlockInput>;
  informationModule?: InputMaybe<InformationInput>;
  leadGenModule?: InputMaybe<LeadGenCreateInput>;
  liveVideoPlayerModule?: InputMaybe<LiveVideoPlayerInput>;
  order: Scalars['Int']['input'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  podcastCarouselModule?: InputMaybe<PodcastCarouselInput>;
  podcastContinueListeningCarouselModule?: InputMaybe<PodcastContinueListeningCarouselInput>;
  podcastGridModule?: InputMaybe<PodcastGridInput>;
  podcastListModule?: InputMaybe<PodcastListInput>;
  podcastListenLaterCarouselModule?: InputMaybe<PodcastListenLaterCarouselInput>;
  podcastPlayerModule?: InputMaybe<PodcastPlayerInput>;
  postCarouselModule?: InputMaybe<PostCarouselInput>;
  postDetailModule?: InputMaybe<PostDetailInput>;
  postListModule?: InputMaybe<PostListInput>;
  quoteModule?: InputMaybe<QuoteInput>;
  sourceCarouselModule?: InputMaybe<SourceCarouselInput>;
  sourceListModule?: InputMaybe<SourceListInput>;
  spacerModule?: InputMaybe<SpacerInput>;
  status?: InputMaybe<PageModuleStatus>;
  tagCarouselModule?: InputMaybe<TagCarouselInput>;
  tagCloudModule?: InputMaybe<TagCloudInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topicCarouselModule?: InputMaybe<TopicCarouselInput>;
  topicGridModule?: InputMaybe<TopicGridInput>;
  topicListModule?: InputMaybe<TopicListInput>;
  type: Scalars['String']['input'];
  videoCarouselModule?: InputMaybe<VideoCarouselInput>;
  videoContinueWatchingCarouselModule?: InputMaybe<VideoContinueWatchingCarouselInput>;
  videoGridModule?: InputMaybe<VideoGridInput>;
  videoListModule?: InputMaybe<VideoListInput>;
  videoPlayerModule?: InputMaybe<VideoPlayerInput>;
  videoPlayerModuleV2?: InputMaybe<VideoPlayerInputV2>;
  videoWatchLaterCarouselModule?: InputMaybe<VideoWatchLaterCarouselInput>;
};

export type CreatePageModuleWhereInput = {
  pageId: Scalars['ID']['input'];
};

export type CreatePaymentIntentData = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  type: DonationType;
};

export type CreatePlaylistInput = {
  name: Scalars['String']['input'];
};

export type CreatePodcastInput = {
  allowedPlans?: InputMaybe<Array<InputMaybe<PodcastAllowedPlanInput>>>;
  audioId: Scalars['ID']['input'];
  autoPublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  contentRating?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  imageThumbnailId?: InputMaybe<Scalars['ID']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug: Scalars['String']['input'];
  sources?: InputMaybe<Array<InputMaybe<PodcastSourcesInput>>>;
  speakers: Array<PodcastContributorsInput>;
  status?: InputMaybe<PodcastStatus>;
  tags?: InputMaybe<Array<InputMaybe<PodcastTagsInput>>>;
  title: Scalars['String']['input'];
  topics: Array<PodcastTopicsInput>;
};

export type CreatePostInput = {
  attachmentId?: InputMaybe<Scalars['ID']['input']>;
  communityId?: InputMaybe<Scalars['ID']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceType?: InputMaybe<PostInstanceType>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePrayerInput = {
  endTime: Scalars['DateTime']['input'];
  instanceId: Scalars['String']['input'];
  instanceType: PrayerInstanceType;
};

export type CreatePrayerResponse = {
  __typename?: 'CreatePrayerResponse';
  message?: Maybe<Scalars['String']['output']>;
  prayer?: Maybe<Prayer>;
};

export type CreateSearchHistoryData = {
  text: Scalars['String']['input'];
  type?: InputMaybe<SearchHistoryType>;
};

export type CreateTagInput = {
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

export type CreateUpdateCommunityResponse = {
  __typename?: 'CreateUpdateCommunityResponse';
  community?: Maybe<Community>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CreateUpdatePageModuleResponse = {
  __typename?: 'CreateUpdatePageModuleResponse';
  message?: Maybe<Scalars['String']['output']>;
  pageModule?: Maybe<PageModule>;
};

export type CreateUpdatePageResponse = {
  __typename?: 'CreateUpdatePageResponse';
  message?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Page>;
};

export type CreateUpdatePodcastResponse = {
  __typename?: 'CreateUpdatePodcastResponse';
  message?: Maybe<Scalars['String']['output']>;
  podcast?: Maybe<Podcast>;
};

export type CreateUpdatePostResponse = {
  __typename?: 'CreateUpdatePostResponse';
  message?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
};

export type CreateUpdateTagResponse = {
  __typename?: 'CreateUpdateTagResponse';
  message?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Tag>;
};

export type CreateUpdateVideoResponse = {
  __typename?: 'CreateUpdateVideoResponse';
  message?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Video>;
};

export type CreateVideoAssetInput = {
  contentLength?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateVideoAssetResponse = {
  __typename?: 'CreateVideoAssetResponse';
  asset?: Maybe<Asset>;
  platformId?: Maybe<Scalars['ID']['output']>;
  signedUrl?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
};

export type CreateVideoInput = {
  allowedPlans?: InputMaybe<Array<InputMaybe<VideoAllowedPlanInput>>>;
  audioTrackIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  autoPublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  contentRating?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  html?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  imageThumbnailId?: InputMaybe<Scalars['ID']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  liveStatus?: InputMaybe<VideoLiveStatus>;
  liveUrl?: InputMaybe<Scalars['String']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resources?: InputMaybe<Array<InputMaybe<VideoResourceInput>>>;
  slug: Scalars['String']['input'];
  sources?: InputMaybe<Array<InputMaybe<VideoSourcesInput>>>;
  speakers: Array<VideoContributorsInput>;
  status?: InputMaybe<VideoStatus>;
  tags?: InputMaybe<Array<InputMaybe<VideoTagsInput>>>;
  textTrackIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  timelineThumbnailId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  topics: Array<VideoTopicsInput>;
  videoId?: InputMaybe<Scalars['ID']['input']>;
  videoThumbnailId?: InputMaybe<Scalars['ID']['input']>;
};

export type DataCollectionKeysInput = {
  type: DataCollectionTypeKey;
};

export enum DataCollectionTypeKey {
  ContactInquiry = 'CONTACT_INQUIRY',
  NewsLetter = 'NEWS_LETTER'
}

export type DateRangeInput = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Day {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type DoNotShowContactOfficialInput = {
  hideCard: Scalars['Boolean']['input'];
};

export type DomainVerificationRecord = {
  __typename?: 'DomainVerificationRecord';
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Donation = {
  __typename?: 'Donation';
  amount?: Maybe<Scalars['Float']['output']>;
  coverTransactionFee?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  newsLetterOptIn?: Maybe<Scalars['Boolean']['output']>;
  paymentError?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<PaymentStatus>;
  retryAt?: Maybe<Scalars['DateTime']['output']>;
  subscriptionRenewalDate?: Maybe<Scalars['DateTime']['output']>;
  subscriptionStatus?: Maybe<SubscriptionStatus>;
  transactionId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<DonationType>;
  user?: Maybe<User>;
};

export type DonationAmount = {
  __typename?: 'DonationAmount';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  stripePriceId?: Maybe<Scalars['String']['output']>;
  stripeProductId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<DonationType>;
};

export type DonationAmountFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DonationAmountsResponse = {
  __typename?: 'DonationAmountsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  donationAmounts?: Maybe<Array<Maybe<DonationAmount>>>;
};

export type DonationCreateInput = {
  config?: InputMaybe<DonationModuleConfigCreateInput>;
  settings?: InputMaybe<DonationModuleSettingInput>;
};

export type DonationData = {
  __typename?: 'DonationData';
  config?: Maybe<DonationModuleConfigData>;
  settings?: Maybe<DonationModuleSettingData>;
};

export type DonationModuleConfigCreateInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  secondaryDescription?: InputMaybe<Scalars['String']['input']>;
  secondaryTitle?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type DonationModuleConfigData = {
  __typename?: 'DonationModuleConfigData';
  asset?: Maybe<Asset>;
  key?: Maybe<Scalars['String']['output']>;
  secondaryDescription?: Maybe<Scalars['String']['output']>;
  secondaryTitle?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
};

export type DonationModuleConfigUpdateInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  secondaryDescription?: InputMaybe<Scalars['String']['input']>;
  secondaryTitle?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type DonationModuleSettingData = {
  __typename?: 'DonationModuleSettingData';
  coverTransactionFee?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  newsLetterOptIn?: Maybe<Scalars['Boolean']['output']>;
  secondaryTitleAndDescription?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type DonationModuleSettingInput = {
  coverTransactionFee?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  newsLetterOptIn?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryTitleAndDescription?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DonationType {
  Annually = 'ANNUALLY',
  Monthly = 'MONTHLY',
  OneTime = 'ONE_TIME'
}

export type DonationUpdateInput = {
  config?: InputMaybe<DonationModuleConfigUpdateInput>;
  settings?: InputMaybe<DonationModuleSettingInput>;
};

export type DonationWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type DonationsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type DonationsResponse = {
  __typename?: 'DonationsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  donations?: Maybe<Array<Maybe<Donation>>>;
};

export type DonationsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<DonationsSortOn>;
};

export enum DonationsSortOn {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DonationType = 'donationType'
}

export type EditDonationData = {
  amount: Scalars['Float']['input'];
};

export type EditDonationResponse = {
  __typename?: 'EditDonationResponse';
  donation?: Maybe<Donation>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ExportJob = {
  __typename?: 'ExportJob';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ExportJobStatus>;
};

export enum ExportJobStatus {
  Completed = 'COMPLETED',
  Exporting = 'EXPORTING',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export enum ExportJobType {
  AdminUser = 'ADMIN_USER',
  User = 'USER'
}

export type ExportJobsFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type: ExportJobType;
};

export type ExportJobsResponse = {
  __typename?: 'ExportJobsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<ExportJob>>>;
};

export type FaqData = {
  __typename?: 'FAQData';
  config?: Maybe<FaqModuleConfigData>;
  settings?: Maybe<FaqModuleSettingData>;
};

export type FaqInput = {
  config?: InputMaybe<FaqModuleConfigInput>;
  settings?: InputMaybe<FaqModuleSettingInput>;
};

export type FaqModuleConfigData = {
  __typename?: 'FAQModuleConfigData';
  questions?: Maybe<Array<Maybe<FaqQuestionData>>>;
};

export type FaqModuleConfigInput = {
  questions?: InputMaybe<Array<InputMaybe<FaqQuestionInput>>>;
};

export type FaqModuleSettingData = {
  __typename?: 'FAQModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type FaqModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FaqQuestionData = {
  __typename?: 'FAQQuestionData';
  answer?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

export type FaqQuestionInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedArticleData = {
  __typename?: 'FeaturedArticleData';
  config?: Maybe<FeaturedArticleModuleConfigData>;
  settings?: Maybe<FeaturedArticleModuleSettingData>;
};

export type FeaturedArticleDataV2 = {
  __typename?: 'FeaturedArticleDataV2';
  config?: Maybe<FeaturedArticleModuleConfigData>;
  settings?: Maybe<FeaturedArticleModuleSettingData>;
};

export type FeaturedArticleInput = {
  config?: InputMaybe<FeaturedArticleModuleConfigInput>;
  settings?: InputMaybe<FeaturedArticleModuleSettingInput>;
};

export type FeaturedArticleInputV2 = {
  config?: InputMaybe<FeaturedArticleModuleConfigInput>;
  settings?: InputMaybe<FeaturedArticleModuleSettingInput>;
};

export type FeaturedArticleModuleConfigData = {
  __typename?: 'FeaturedArticleModuleConfigData';
  article?: Maybe<Article>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateSortBy?: Maybe<ArticleAutoGenerateSortBy>;
};

export type FeaturedArticleModuleConfigInput = {
  articleId?: InputMaybe<Scalars['String']['input']>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateSortBy?: InputMaybe<ArticleAutoGenerateSortBy>;
};

export type FeaturedArticleModuleSettingData = {
  __typename?: 'FeaturedArticleModuleSettingData';
  articleAuthor?: Maybe<Scalars['Boolean']['output']>;
  articleCTA?: Maybe<Scalars['Boolean']['output']>;
  articleComment?: Maybe<Scalars['Boolean']['output']>;
  articleDate?: Maybe<Scalars['Boolean']['output']>;
  articleHtml?: Maybe<Scalars['Boolean']['output']>;
  articlePrayer?: Maybe<Scalars['Boolean']['output']>;
  articleSave?: Maybe<Scalars['Boolean']['output']>;
  articleShare?: Maybe<Scalars['Boolean']['output']>;
  articleTag?: Maybe<Scalars['Boolean']['output']>;
  articleTopic?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  relatedContent?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedArticleModuleSettingInput = {
  articleAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  articleCTA?: InputMaybe<Scalars['Boolean']['input']>;
  articleComment?: InputMaybe<Scalars['Boolean']['input']>;
  articleDate?: InputMaybe<Scalars['Boolean']['input']>;
  articleHtml?: InputMaybe<Scalars['Boolean']['input']>;
  articlePrayer?: InputMaybe<Scalars['Boolean']['input']>;
  articleSave?: InputMaybe<Scalars['Boolean']['input']>;
  articleShare?: InputMaybe<Scalars['Boolean']['input']>;
  articleTag?: InputMaybe<Scalars['Boolean']['input']>;
  articleTopic?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  relatedContent?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedCollectionData = {
  __typename?: 'FeaturedCollectionData';
  config?: Maybe<FeaturedCollectionModuleConfigData>;
  settings?: Maybe<FeaturedCollectionModuleSettingData>;
};

export type FeaturedCollectionInput = {
  config?: InputMaybe<FeaturedCollectionModuleConfigInput>;
  settings?: InputMaybe<FeaturedCollectionModuleSettingInput>;
};

export type FeaturedCollectionModuleConfigData = {
  __typename?: 'FeaturedCollectionModuleConfigData';
  aspectRatio?: Maybe<Scalars['String']['output']>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateSortBy?: Maybe<CollectionAutoGenerateSortBy>;
  collection?: Maybe<Collection>;
};

export type FeaturedCollectionModuleConfigInput = {
  aspectRatio?: InputMaybe<Scalars['String']['input']>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateSortBy?: InputMaybe<CollectionAutoGenerateSortBy>;
  collectionId?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturedCollectionModuleSettingData = {
  __typename?: 'FeaturedCollectionModuleSettingData';
  collectionDescription?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfItems?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedCollectionModuleSettingInput = {
  collectionDescription?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfItems?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedCollectionSliderData = {
  __typename?: 'FeaturedCollectionSliderData';
  config?: Maybe<FeaturedCollectionSliderModuleConfigData>;
  settings?: Maybe<FeaturedCollectionSliderModuleSettingData>;
};

export type FeaturedCollectionSliderInput = {
  config?: InputMaybe<FeaturedCollectionSliderModuleConfigInput>;
  settings?: InputMaybe<FeaturedCollectionSliderModuleSettingInput>;
};

export type FeaturedCollectionSliderModuleConfigData = {
  __typename?: 'FeaturedCollectionSliderModuleConfigData';
  aspectRatio?: Maybe<Scalars['String']['output']>;
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<CollectionAutoGenerateSortBy>;
  collections?: Maybe<Array<Maybe<Collection>>>;
};

export type FeaturedCollectionSliderModuleConfigInput = {
  aspectRatio?: InputMaybe<Scalars['String']['input']>;
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<CollectionAutoGenerateSortBy>;
  collections?: InputMaybe<Array<InputMaybe<CollectionSchemaInput>>>;
};

export type FeaturedCollectionSliderModuleSettingData = {
  __typename?: 'FeaturedCollectionSliderModuleSettingData';
  collectionDescription?: Maybe<Scalars['Boolean']['output']>;
  collectionImage?: Maybe<Scalars['Boolean']['output']>;
  collectionTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedCollectionSliderModuleSettingInput = {
  collectionDescription?: InputMaybe<Scalars['Boolean']['input']>;
  collectionImage?: InputMaybe<Scalars['Boolean']['input']>;
  collectionTitle?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedCommunityData = {
  __typename?: 'FeaturedCommunityData';
  config?: Maybe<FeaturedCommunityModuleConfigData>;
  settings?: Maybe<FeaturedCommunityModuleSettingData>;
};

export type FeaturedCommunityInput = {
  config?: InputMaybe<FeaturedCommunityModuleConfigInput>;
  settings?: InputMaybe<FeaturedCommunityModuleSettingInput>;
};

export type FeaturedCommunityModuleConfigData = {
  __typename?: 'FeaturedCommunityModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateSortBy?: Maybe<CommunityAutoGenerateSortBy>;
  community?: Maybe<Community>;
};

export type FeaturedCommunityModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateSortBy?: InputMaybe<CommunityAutoGenerateSortBy>;
  communityId?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturedCommunityModuleSettingData = {
  __typename?: 'FeaturedCommunityModuleSettingData';
  communityDescription?: Maybe<Scalars['Boolean']['output']>;
  communityMemberCount?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedCommunityModuleSettingInput = {
  communityDescription?: InputMaybe<Scalars['Boolean']['input']>;
  communityMemberCount?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedContributorData = {
  __typename?: 'FeaturedContributorData';
  config?: Maybe<FeaturedContributorModuleConfigData>;
  settings?: Maybe<FeaturedContributorModuleSettingData>;
};

export type FeaturedContributorInput = {
  config?: InputMaybe<FeaturedContributorModuleConfigInput>;
  settings?: InputMaybe<FeaturedContributorModuleSettingInput>;
};

export type FeaturedContributorModuleConfigData = {
  __typename?: 'FeaturedContributorModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateSortBy?: Maybe<ContributorAutoGenerateBy>;
  contributor?: Maybe<Contributor>;
};

export type FeaturedContributorModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateSortBy?: InputMaybe<ContributorAutoGenerateBy>;
  contributorId?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedContributorModuleSettingData = {
  __typename?: 'FeaturedContributorModuleSettingData';
  contributorImage?: Maybe<Scalars['Boolean']['output']>;
  contributorName?: Maybe<Scalars['Boolean']['output']>;
  numberOfPodcasts?: Maybe<Scalars['Boolean']['output']>;
  numberOfVideos?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedContributorModuleSettingInput = {
  contributorImage?: InputMaybe<Scalars['Boolean']['input']>;
  contributorName?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfPodcasts?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfVideos?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedPodcastData = {
  __typename?: 'FeaturedPodcastData';
  config?: Maybe<FeaturedPodcastModuleConfigData>;
  settings?: Maybe<FeaturedPodcastModuleSettingData>;
};

export type FeaturedPodcastInput = {
  config?: InputMaybe<FeaturedPodcastModuleConfigInput>;
  settings?: InputMaybe<FeaturedPodcastModuleSettingInput>;
};

export type FeaturedPodcastModuleConfigData = {
  __typename?: 'FeaturedPodcastModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateSortBy?: Maybe<PodcastAutoGenerateSortBy>;
  podcast?: Maybe<Podcast>;
};

export type FeaturedPodcastModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['ID']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateSortBy?: InputMaybe<PodcastAutoGenerateSortBy>;
  podcastId?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedPodcastModuleSettingData = {
  __typename?: 'FeaturedPodcastModuleSettingData';
  collectionNames?: Maybe<Scalars['Boolean']['output']>;
  imageThumbnail?: Maybe<Scalars['Boolean']['output']>;
  podcastCTA?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastDescription?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedPodcastModuleSettingInput = {
  collectionNames?: InputMaybe<Scalars['Boolean']['input']>;
  imageThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  podcastCTA?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDescription?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedPodcastSliderData = {
  __typename?: 'FeaturedPodcastSliderData';
  config?: Maybe<FeaturedPodcastSliderModuleConfigData>;
  settings?: Maybe<FeaturedPodcastSliderModuleSettingData>;
};

export type FeaturedPodcastSliderInput = {
  config?: InputMaybe<FeaturedPodcastSliderModuleConfigInput>;
  settings?: InputMaybe<FeaturedPodcastSliderModuleSettingInput>;
};

export type FeaturedPodcastSliderModuleConfigData = {
  __typename?: 'FeaturedPodcastSliderModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<PodcastAutoGenerateSortBy>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type FeaturedPodcastSliderModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['ID']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<PodcastAutoGenerateSortBy>;
  podcasts?: InputMaybe<Array<InputMaybe<PodcastSchemaInput>>>;
};

export type FeaturedPodcastSliderModuleSettingData = {
  __typename?: 'FeaturedPodcastSliderModuleSettingData';
  carouselIndicator?: Maybe<Scalars['Boolean']['output']>;
  collectionNames?: Maybe<Scalars['Boolean']['output']>;
  imageThumbnail?: Maybe<Scalars['Boolean']['output']>;
  podcastCTA?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastDescription?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedPodcastSliderModuleSettingInput = {
  carouselIndicator?: InputMaybe<Scalars['Boolean']['input']>;
  collectionNames?: InputMaybe<Scalars['Boolean']['input']>;
  imageThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  podcastCTA?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDescription?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedTagData = {
  __typename?: 'FeaturedTagData';
  config?: Maybe<FeaturedTagModuleConfigData>;
  settings?: Maybe<FeaturedTagModuleSettingData>;
};

export type FeaturedTagInput = {
  config?: InputMaybe<FeaturedTagModuleConfigInput>;
  settings?: InputMaybe<FeaturedTagModuleSettingInput>;
};

export type FeaturedTagModuleConfigData = {
  __typename?: 'FeaturedTagModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateSortBy?: Maybe<TagAutoGenerateBy>;
  tag?: Maybe<Tag>;
};

export type FeaturedTagModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateSortBy?: InputMaybe<TagAutoGenerateBy>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturedTagModuleSettingData = {
  __typename?: 'FeaturedTagModuleSettingData';
  tagTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedTagModuleSettingInput = {
  tagTitle?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedTopicData = {
  __typename?: 'FeaturedTopicData';
  config?: Maybe<FeaturedTopicModuleConfigData>;
  settings?: Maybe<FeaturedTopicModuleSettingData>;
};

export type FeaturedTopicInput = {
  config?: InputMaybe<FeaturedTopicModuleConfigInput>;
  settings?: InputMaybe<FeaturedTopicModuleSettingInput>;
};

export type FeaturedTopicModuleConfigData = {
  __typename?: 'FeaturedTopicModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateSortBy?: Maybe<TopicAutoGenerateBy>;
  topic?: Maybe<Topic>;
};

export type FeaturedTopicModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateSortBy?: InputMaybe<TopicAutoGenerateBy>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturedTopicModuleSettingData = {
  __typename?: 'FeaturedTopicModuleSettingData';
  topicTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedTopicModuleSettingInput = {
  topicTitle?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedVideoData = {
  __typename?: 'FeaturedVideoData';
  config?: Maybe<FeaturedVideoModuleConfigData>;
  settings?: Maybe<FeaturedVideoModuleSettingData>;
};

export type FeaturedVideoInput = {
  config?: InputMaybe<FeaturedVideoModuleConfigInput>;
  settings?: InputMaybe<FeaturedVideoModuleSettingInput>;
};

export type FeaturedVideoModuleConfigData = {
  __typename?: 'FeaturedVideoModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateSortBy?: Maybe<VideoAutoGenerateSortBy>;
  video?: Maybe<Video>;
};

export type FeaturedVideoModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['ID']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateSortBy?: InputMaybe<VideoAutoGenerateSortBy>;
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedVideoModuleSettingData = {
  __typename?: 'FeaturedVideoModuleSettingData';
  collectionNames?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  videoCTA?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoDescription?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoSave?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedVideoModuleSettingInput = {
  collectionNames?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  videoCTA?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoDescription?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoSave?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedVideoSliderData = {
  __typename?: 'FeaturedVideoSliderData';
  config?: Maybe<FeaturedVideoSliderModuleConfigData>;
  settings?: Maybe<FeaturedVideoSliderModuleSettingData>;
};

export type FeaturedVideoSliderInput = {
  config?: InputMaybe<FeaturedVideoSliderModuleConfigInput>;
  settings?: InputMaybe<FeaturedVideoSliderModuleSettingInput>;
};

export type FeaturedVideoSliderModuleConfigData = {
  __typename?: 'FeaturedVideoSliderModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<VideoAutoGenerateSortBy>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type FeaturedVideoSliderModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['ID']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<VideoAutoGenerateSortBy>;
  videos?: InputMaybe<Array<InputMaybe<VideoSchemaInput>>>;
};

export type FeaturedVideoSliderModuleSettingData = {
  __typename?: 'FeaturedVideoSliderModuleSettingData';
  carouselIndicator?: Maybe<Scalars['Boolean']['output']>;
  collectionNames?: Maybe<Scalars['Boolean']['output']>;
  videoCTA?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoDescription?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type FeaturedVideoSliderModuleSettingInput = {
  carouselIndicator?: InputMaybe<Scalars['Boolean']['input']>;
  collectionNames?: InputMaybe<Scalars['Boolean']['input']>;
  videoCTA?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoDescription?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FlagCommentAction {
  Flag = 'FLAG',
  Unflag = 'UNFLAG'
}

export type FlagCommentData = {
  action?: InputMaybe<FlagCommentAction>;
};

export enum FlagPostAction {
  Flag = 'FLAG',
  Unflag = 'UNFLAG'
}

export type FlagPostInput = {
  action?: InputMaybe<FlagPostAction>;
};

export type Form = {
  __typename?: 'Form';
  allowedPlans?: Maybe<Array<Maybe<FormAllowedPlan>>>;
  collectionSequence?: Maybe<Scalars['String']['output']>;
  collections?: Maybe<Array<Maybe<FormCollection>>>;
  createdBy?: Maybe<User>;
  ctas?: Maybe<Array<Maybe<FormCta>>>;
  description?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Maybe<FormField>>>;
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<Maybe<FormMessage>>>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  prayerCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<FormStatus>;
  submitCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FormType>;
};

export type FormAllowedPlan = {
  __typename?: 'FormAllowedPlan';
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export enum FormAutoGenerateByType {
  Collection = 'COLLECTION'
}

export enum FormAutoGenerateSortBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type FormCarouselData = {
  __typename?: 'FormCarouselData';
  config?: Maybe<FormCarouselModuleConfigData>;
  settings?: Maybe<FormCarouselModuleSettingData>;
};

export type FormCarouselInput = {
  config?: InputMaybe<FormCarouselModuleConfigInput>;
  settings?: InputMaybe<FormCarouselModuleSettingInput>;
};

export type FormCarouselModuleConfigData = {
  __typename?: 'FormCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<FormAutoGenerateByType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<FormAutoGenerateSortBy>;
  formLimit?: Maybe<Scalars['Int']['output']>;
  forms?: Maybe<Array<Maybe<Form>>>;
  sortBy?: Maybe<FormModuleSortBy>;
  type?: Maybe<FormType>;
};

export type FormCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<FormAutoGenerateByType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<FormAutoGenerateSortBy>;
  formLimit?: InputMaybe<Scalars['Int']['input']>;
  forms?: InputMaybe<Array<InputMaybe<FormSchemaInput>>>;
  sortBy?: InputMaybe<FormModuleSortBy>;
  type?: InputMaybe<FormType>;
};

export type FormCarouselModuleSettingData = {
  __typename?: 'FormCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  formPrayer?: Maybe<Scalars['Boolean']['output']>;
  formShare?: Maybe<Scalars['Boolean']['output']>;
  formTitle?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type FormCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  formPrayer?: InputMaybe<Scalars['Boolean']['input']>;
  formShare?: InputMaybe<Scalars['Boolean']['input']>;
  formTitle?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormCollection = {
  __typename?: 'FormCollection';
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FormCta = {
  __typename?: 'FormCta';
  action?: Maybe<FormCtaAction>;
  actionUrl?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FormCtaType>;
};

export enum FormCtaAction {
  External = 'EXTERNAL',
  Submit = 'SUBMIT'
}

export enum FormCtaType {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

export type FormDisplayData = {
  __typename?: 'FormDisplayData';
  config?: Maybe<FormDisplayModuleConfigData>;
  settings?: Maybe<FormDisplayModuleSettingData>;
};

export type FormDisplayInput = {
  config?: InputMaybe<FormDisplayModuleConfigInput>;
  settings?: InputMaybe<FormDisplayModuleSettingInput>;
};

export type FormDisplayModuleConfigData = {
  __typename?: 'FormDisplayModuleConfigData';
  autoFillForm?: Maybe<Scalars['Boolean']['output']>;
  form?: Maybe<Form>;
};

export type FormDisplayModuleConfigInput = {
  autoFillForm?: InputMaybe<Scalars['Boolean']['input']>;
  formId?: InputMaybe<Scalars['String']['input']>;
};

export type FormDisplayModuleSettingData = {
  __typename?: 'FormDisplayModuleSettingData';
  formDescription?: Maybe<Scalars['Boolean']['output']>;
  formTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type FormDisplayModuleSettingInput = {
  formDescription?: InputMaybe<Scalars['Boolean']['input']>;
  formTitle?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormField = {
  __typename?: 'FormField';
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<FormFieldOption>>>;
  order?: Maybe<Scalars['Float']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<FormFieldType>;
};

export type FormFieldOption = {
  __typename?: 'FormFieldOption';
  key?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
};

export enum FormFieldType {
  Dropdown = 'dropdown',
  Email = 'email',
  Number = 'number',
  String = 'string',
  Text = 'text'
}

export type FormMessage = {
  __typename?: 'FormMessage';
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum FormMessageType {
  Failed = 'FAILED',
  Submitted = 'SUBMITTED',
  Success = 'SUCCESS'
}

export enum FormModuleSortBy {
  FormCompletion = 'FORM_COMPLETION',
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type FormSchemaInput = {
  formId?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type FormSubmission = {
  __typename?: 'FormSubmission';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  formId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  submission?: Maybe<Scalars['JSON']['output']>;
  submitter?: Maybe<User>;
};

export type FormTemplate = {
  __typename?: 'FormTemplate';
  ctas?: Maybe<Array<Maybe<FormCta>>>;
  fields?: Maybe<Array<Maybe<FormField>>>;
  messages?: Maybe<Array<Maybe<FormMessage>>>;
  type?: Maybe<FormTemplateType>;
};

export enum FormTemplateType {
  ContactUs = 'CONTACT_US',
  Other = 'OTHER',
  Petition = 'PETITION'
}

export enum FormType {
  ContactUs = 'CONTACT_US',
  Other = 'OTHER',
  Petition = 'PETITION'
}

export type FormWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type FormsResponse = {
  __typename?: 'FormsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  forms?: Maybe<Array<Maybe<Form>>>;
};

export type GetAssetUploadSignedUrlInput = {
  assetType: AssetCategoryEnum;
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

export type GetAssetUploadSignedUrlResponse = {
  __typename?: 'GetAssetUploadSignedUrlResponse';
  key?: Maybe<Scalars['String']['output']>;
  platformId?: Maybe<Scalars['ID']['output']>;
  signedUrl?: Maybe<Scalars['String']['output']>;
};

export type GetProfileImageUploadSignedUrlInput = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};

export type GetVideoSignedUrlResponse = {
  __typename?: 'GetVideoSignedUrlResponse';
  signedUrl?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
};

export type HeroActionData = {
  __typename?: 'HeroActionData';
  asset?: Maybe<Asset>;
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type HeroActionInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type HeroData = {
  __typename?: 'HeroData';
  config?: Maybe<HeroModuleConfigData>;
  settings?: Maybe<HeroModuleSettingData>;
};

export type HeroInput = {
  config?: InputMaybe<HeroModuleConfigInput>;
  settings?: InputMaybe<HeroModuleSettingInput>;
};

export type HeroModuleConfigData = {
  __typename?: 'HeroModuleConfigData';
  alignment?: Maybe<Alignment>;
  asset?: Maybe<Asset>;
  eventDate?: Maybe<Scalars['String']['output']>;
  eventLocation?: Maybe<Scalars['String']['output']>;
  eventTime?: Maybe<Scalars['String']['output']>;
  primaryAction?: Maybe<HeroActionData>;
  secondaryAction?: Maybe<HeroActionData>;
};

export type HeroModuleConfigInput = {
  alignment?: InputMaybe<Alignment>;
  assetId?: InputMaybe<Scalars['String']['input']>;
  eventDate?: InputMaybe<Scalars['String']['input']>;
  eventLocation?: InputMaybe<Scalars['String']['input']>;
  eventTime?: InputMaybe<Scalars['String']['input']>;
  primaryAction?: InputMaybe<HeroActionInput>;
  secondaryAction?: InputMaybe<HeroActionInput>;
};

export type HeroModuleSettingData = {
  __typename?: 'HeroModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  primaryAction?: Maybe<Scalars['Boolean']['output']>;
  secondaryAction?: Maybe<Scalars['Boolean']['output']>;
  textFields?: Maybe<Scalars['Boolean']['output']>;
};

export type HeroModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  primaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  textFields?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HtmlTextBlockData = {
  __typename?: 'HtmlTextBlockData';
  config?: Maybe<HtmlTextBlockModuleConfigData>;
  settings?: Maybe<HtmlTextBlockModuleSettingData>;
};

export type HtmlTextBlockInput = {
  config?: InputMaybe<HtmlTextBlockModuleConfigInput>;
  settings?: InputMaybe<HtmlTextBlockModuleSettingInput>;
};

export type HtmlTextBlockModuleConfigData = {
  __typename?: 'HtmlTextBlockModuleConfigData';
  content?: Maybe<Scalars['String']['output']>;
};

export type HtmlTextBlockModuleConfigInput = {
  content?: InputMaybe<Scalars['String']['input']>;
};

export type HtmlTextBlockModuleSettingData = {
  __typename?: 'HtmlTextBlockModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type HtmlTextBlockModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InformationActionData = {
  __typename?: 'InformationActionData';
  asset?: Maybe<Asset>;
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type InformationActionInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InformationData = {
  __typename?: 'InformationData';
  config?: Maybe<InformationModuleConfigData>;
  settings?: Maybe<InformationModuleSettingData>;
};

export enum InformationImageOrientation {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum InformationImageType {
  Landscape = 'LANDSCAPE',
  Portrait = 'PORTRAIT',
  Square = 'SQUARE'
}

export type InformationInput = {
  config?: InputMaybe<InformationModuleConfigInput>;
  settings?: InputMaybe<InformationModuleSettingInput>;
};

export type InformationModuleConfigData = {
  __typename?: 'InformationModuleConfigData';
  alignment?: Maybe<Alignment>;
  asset?: Maybe<Asset>;
  imageOrientation?: Maybe<InformationImageOrientation>;
  imageType?: Maybe<InformationImageType>;
  primaryAction?: Maybe<InformationActionData>;
  secondaryAction?: Maybe<InformationActionData>;
  theme?: Maybe<Scalars['String']['output']>;
};

export type InformationModuleConfigInput = {
  alignment?: InputMaybe<Alignment>;
  assetId?: InputMaybe<Scalars['String']['input']>;
  imageOrientation?: InputMaybe<InformationImageOrientation>;
  imageType?: InputMaybe<InformationImageType>;
  primaryAction?: InputMaybe<InformationActionInput>;
  secondaryAction?: InputMaybe<InformationActionInput>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type InformationModuleSettingData = {
  __typename?: 'InformationModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  primaryAction?: Maybe<Scalars['Boolean']['output']>;
  secondaryAction?: Maybe<Scalars['Boolean']['output']>;
};

export type InformationModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  primaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryAction?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InviteMembersInCommunityInput = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JoinBibleReadingInput = {
  notificationPreferences: UpsertBiblicalNotificationPreferenceInput;
};

export type Language = {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LanguageFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LanguageSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<LanguageSortOn>;
};

export enum LanguageSortOn {
  Code = 'code',
  Name = 'name'
}

export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  count?: Maybe<Scalars['Int']['output']>;
  languages?: Maybe<Array<Maybe<Language>>>;
};

export type LeadGenCreateInput = {
  config?: InputMaybe<LeadGenModuleConfigCreateInput>;
  settings?: InputMaybe<LeadGenModuleSettingInput>;
};

export type LeadGenData = {
  __typename?: 'LeadGenData';
  config?: Maybe<LeadGenModuleConfigData>;
  settings?: Maybe<LeadGenModuleSettingData>;
};

export type LeadGenModuleConfigCreateInput = {
  alignment?: InputMaybe<Alignment>;
  assetId?: InputMaybe<Scalars['String']['input']>;
  completionDescription?: InputMaybe<Scalars['String']['input']>;
  completionTitle?: InputMaybe<Scalars['String']['input']>;
  iconAssetId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type LeadGenModuleConfigData = {
  __typename?: 'LeadGenModuleConfigData';
  alignment?: Maybe<Alignment>;
  asset?: Maybe<Asset>;
  completionDescription?: Maybe<Scalars['String']['output']>;
  completionTitle?: Maybe<Scalars['String']['output']>;
  iconAsset?: Maybe<Asset>;
  key?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
};

export type LeadGenModuleConfigUpdateInput = {
  alignment?: InputMaybe<Alignment>;
  assetId?: InputMaybe<Scalars['String']['input']>;
  completionDescription?: InputMaybe<Scalars['String']['input']>;
  completionTitle?: InputMaybe<Scalars['String']['input']>;
  iconAssetId?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type LeadGenModuleSettingData = {
  __typename?: 'LeadGenModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type LeadGenModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LeadGenUpdateInput = {
  config?: InputMaybe<LeadGenModuleConfigUpdateInput>;
  settings?: InputMaybe<LeadGenModuleSettingInput>;
};

export enum LikeCommentAction {
  Like = 'LIKE',
  Unlike = 'UNLIKE'
}

export type LikeCommentData = {
  action?: InputMaybe<LikeCommentAction>;
};

export enum LikePostAction {
  Like = 'LIKE',
  Unlike = 'UNLIKE'
}

export type LikePostInput = {
  action?: InputMaybe<LikePostAction>;
};

export type LiveVideoPlayerActionData = {
  __typename?: 'LiveVideoPlayerActionData';
  internalPageType?: Maybe<MenuInternalPageType>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<CtaBlockActionType>;
  url?: Maybe<Scalars['String']['output']>;
};

export type LiveVideoPlayerActionInput = {
  internalPageType?: InputMaybe<MenuInternalPageType>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CtaBlockActionType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type LiveVideoPlayerData = {
  __typename?: 'LiveVideoPlayerData';
  config?: Maybe<LiveVideoPlayerModuleConfigData>;
  settings?: Maybe<LiveVideoPlayerModuleSettingData>;
};

export type LiveVideoPlayerInput = {
  config?: InputMaybe<LiveVideoPlayerModuleConfigInput>;
  settings?: InputMaybe<LiveVideoPlayerModuleSettingInput>;
};

export type LiveVideoPlayerModuleConfigData = {
  __typename?: 'LiveVideoPlayerModuleConfigData';
  primaryAction?: Maybe<LiveVideoPlayerActionData>;
  timer?: Maybe<LiveVideoPlayerTimerData>;
  video?: Maybe<Video>;
};

export type LiveVideoPlayerModuleConfigInput = {
  primaryAction?: InputMaybe<LiveVideoPlayerActionInput>;
  timer?: InputMaybe<LiveVideoPlayerTimerInput>;
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type LiveVideoPlayerModuleSettingData = {
  __typename?: 'LiveVideoPlayerModuleSettingData';
  primaryAction?: Maybe<Scalars['Boolean']['output']>;
  timer?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoDescription?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type LiveVideoPlayerModuleSettingInput = {
  primaryAction?: InputMaybe<Scalars['Boolean']['input']>;
  timer?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoDescription?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LiveVideoPlayerTimerData = {
  __typename?: 'LiveVideoPlayerTimerData';
  endDate?: Maybe<Scalars['DateTime']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type LiveVideoPlayerTimerInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type MarkBibleChapterAsCompleteInput = {
  chapterId: Scalars['ID']['input'];
};

export type MediaDimensionsInput = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type MediaDimensionsResponse = {
  __typename?: 'MediaDimensionsResponse';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export enum MenuInternalPageType {
  Article = 'ARTICLE',
  Collection = 'COLLECTION',
  Community = 'COMMUNITY',
  Contributor = 'CONTRIBUTOR',
  Custom = 'CUSTOM',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Static = 'STATIC',
  Tag = 'TAG',
  Topic = 'TOPIC',
  Video = 'VIDEO'
}

export type Mutation = {
  __typename?: 'Mutation';
  addPodcastPlayLater?: Maybe<CommonMessageResponse>;
  addRemovePlaylistItem?: Maybe<CommonMessageResponse>;
  addVideoWatchLater?: Maybe<CommonMessageResponse>;
  answerBibleChapterQuestion?: Maybe<AnswerBibleChapterQuestionResponse>;
  cancelDonation?: Maybe<CommonMessageResponse>;
  clearNotification?: Maybe<CommonMessageResponse>;
  createAdminUser?: Maybe<AdminUserCreateResponse>;
  createAsset?: Maybe<AssetGeneralResponse>;
  createAudioAsset?: Maybe<CreateAudioAssetResponse>;
  createComment?: Maybe<CommentMutationResponse>;
  createCommunity?: Maybe<CreateUpdateCommunityResponse>;
  createDonation?: Maybe<CreateDonationResponse>;
  createPage?: Maybe<CreateUpdatePageResponse>;
  createPageModule?: Maybe<CreateUpdatePageModuleResponse>;
  createPlaylist?: Maybe<PlaylistMutationResponse>;
  createPodcast?: Maybe<CreateUpdatePodcastResponse>;
  createPost?: Maybe<CreateUpdatePostResponse>;
  createPrayer?: Maybe<CreatePrayerResponse>;
  createSearchHistory?: Maybe<CommonMessageResponse>;
  createSubscription?: Maybe<SubscriptionPlanGeneralResponse>;
  createTag?: Maybe<CreateUpdateTagResponse>;
  createUser?: Maybe<UserCreateResponse>;
  createVideo?: Maybe<CreateUpdateVideoResponse>;
  createVideoAsset?: Maybe<CreateVideoAssetResponse>;
  deleteComment?: Maybe<CommentMutationResponse>;
  deleteCommunity?: Maybe<CommonMessageResponse>;
  deletePage?: Maybe<CommonMessageResponse>;
  deletePageModule?: Maybe<CommonMessageResponse>;
  deletePlaylist?: Maybe<PlaylistMutationResponse>;
  deletePost?: Maybe<CommonMessageResponse>;
  deleteSearchHistory?: Maybe<CommonMessageResponse>;
  doNotShowContactOfficial?: Maybe<CommonMessageResponse>;
  editDonation?: Maybe<EditDonationResponse>;
  flagComment?: Maybe<CommentMutationResponse>;
  flagPost?: Maybe<CreateUpdatePostResponse>;
  invalidateCloudFrontCache?: Maybe<CommonMessageResponse>;
  inviteMembersInCommunity?: Maybe<CommonMessageResponse>;
  joinBibleReading?: Maybe<CommonMessageResponse>;
  joinCommunity?: Maybe<CommonMessageResponse>;
  leaveCommunity?: Maybe<CommonMessageResponse>;
  likeComment?: Maybe<CommentMutationResponse>;
  likePost?: Maybe<CreateUpdatePostResponse>;
  markBibleChapterAsComplete?: Maybe<CommonMessageResponse>;
  processPayment?: Maybe<CommonMessageResponse>;
  purgeAndUpdateConfig?: Maybe<CommonMessageResponse>;
  purgePageCache?: Maybe<CommonMessageResponse>;
  removeCommunityMember?: Maybe<CommonMessageResponse>;
  removePodcastPlayLater?: Maybe<CommonMessageResponse>;
  removeVideoWatchLater?: Maybe<CommonMessageResponse>;
  requestAdminUsersExport?: Maybe<RequestExportJobResponse>;
  requestUsersExport?: Maybe<RequestExportJobResponse>;
  retryDonation?: Maybe<CommonMessageResponse>;
  sendDeleteAccountOtp?: Maybe<CommonMessageResponse>;
  starComment?: Maybe<CommentMutationResponse>;
  submitContactInquiry?: Maybe<CommonMessageResponse>;
  submitForm?: Maybe<CommonMessageResponse>;
  subscribeToNewsLetter?: Maybe<CommonMessageResponse>;
  transferCommunityOwnership?: Maybe<CommonMessageResponse>;
  updateAdminUser?: Maybe<UserUpdateAdminResponse>;
  updateArticleReadCount?: Maybe<CommonMessageResponse>;
  updateAudioAssetStatus?: Maybe<UpdateAudioAssetResponse>;
  updateComment?: Maybe<CommentMutationResponse>;
  updateCommunity?: Maybe<CreateUpdateCommunityResponse>;
  updateCommunityMember?: Maybe<CommonMessageResponse>;
  updateContactInquiry?: Maybe<ContactInquiryGeneralResponse>;
  updateCurrentUser?: Maybe<UserUpdateResponse>;
  updateCurrentUserAdmin?: Maybe<UserUpdateAdminResponse>;
  updatePage?: Maybe<CreateUpdatePageResponse>;
  updatePageModule?: Maybe<CreateUpdatePageModuleResponse>;
  updatePageModuleOrder?: Maybe<CommonMessageResponse>;
  updatePageStatus?: Maybe<CreateUpdatePageResponse>;
  updatePlaylist?: Maybe<PlaylistMutationResponse>;
  updatePlaylistItemOrder?: Maybe<CommonMessageResponse>;
  updatePodcast?: Maybe<CreateUpdatePodcastResponse>;
  updatePodcastPlayCount?: Maybe<CommonMessageResponse>;
  updatePost?: Maybe<CreateUpdatePostResponse>;
  updateTag?: Maybe<CreateUpdateTagResponse>;
  updateUser?: Maybe<UserUpdateResponse>;
  updateVideo?: Maybe<CreateUpdateVideoResponse>;
  updateVideoAssetStatus?: Maybe<UpdateVideoAssetResponse>;
  updateVideoViewCount?: Maybe<CommonMessageResponse>;
  upsertPodcastPlayTime?: Maybe<CommonMessageResponse>;
  upsertVideoWatchTime?: Maybe<CommonMessageResponse>;
  verifyDeleteAccountOtp?: Maybe<CommonMessageResponse>;
};

export type MutationAddPodcastPlayLaterArgs = {
  where: PodcastWhereUniqueInput;
};

export type MutationAddRemovePlaylistItemArgs = {
  data: AddRemovePlaylistItemDataInput;
  where: PlaylistWhereUniqueInput;
};

export type MutationAddVideoWatchLaterArgs = {
  where: VideoWhereUniqueInput;
};

export type MutationAnswerBibleChapterQuestionArgs = {
  data: AnswerBibleChapterQuestionInput;
};

export type MutationCancelDonationArgs = {
  where: DonationWhereUniqueInput;
};

export type MutationClearNotificationArgs = {
  where: ClearNotificationInput;
};

export type MutationCreateAdminUserArgs = {
  data: AdminUserCreateInput;
};

export type MutationCreateAssetArgs = {
  data: CreateAssetInput;
};

export type MutationCreateAudioAssetArgs = {
  data: CreateAudioAssetInput;
};

export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};

export type MutationCreateCommunityArgs = {
  data: CreateCommunityInput;
};

export type MutationCreateDonationArgs = {
  data: CreateDonationInput;
};

export type MutationCreatePageArgs = {
  data: CreatePageInput;
};

export type MutationCreatePageModuleArgs = {
  data: CreatePageModuleInput;
  where: CreatePageModuleWhereInput;
};

export type MutationCreatePlaylistArgs = {
  data: CreatePlaylistInput;
};

export type MutationCreatePodcastArgs = {
  data: CreatePodcastInput;
};

export type MutationCreatePostArgs = {
  data: CreatePostInput;
};

export type MutationCreatePrayerArgs = {
  data: CreatePrayerInput;
};

export type MutationCreateSearchHistoryArgs = {
  data: CreateSearchHistoryData;
};

export type MutationCreateSubscriptionArgs = {
  where: SubscriptionPlanWhereInput;
};

export type MutationCreateTagArgs = {
  data: CreateTagInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateVideoArgs = {
  data: CreateVideoInput;
};

export type MutationCreateVideoAssetArgs = {
  data: CreateVideoAssetInput;
};

export type MutationDeleteCommentArgs = {
  where: CommentWhereInput;
};

export type MutationDeleteCommunityArgs = {
  where: CommunityWhereUniqueInput;
};

export type MutationDeletePageArgs = {
  where: PageUniqueInput;
};

export type MutationDeletePageModuleArgs = {
  where: PageModuleUniqueInput;
};

export type MutationDeletePlaylistArgs = {
  where: PlaylistWhereUniqueInput;
};

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationDeleteSearchHistoryArgs = {
  where: SearchHistoryWhereInput;
};

export type MutationDoNotShowContactOfficialArgs = {
  data: DoNotShowContactOfficialInput;
};

export type MutationEditDonationArgs = {
  data: EditDonationData;
  where: DonationWhereUniqueInput;
};

export type MutationFlagCommentArgs = {
  data: FlagCommentData;
  where: CommentWhereInput;
};

export type MutationFlagPostArgs = {
  data: FlagPostInput;
  where: PostWhereUniqueInput;
};

export type MutationInvalidateCloudFrontCacheArgs = {
  key: CloudFrontClearCacheKey;
};

export type MutationInviteMembersInCommunityArgs = {
  data: InviteMembersInCommunityInput;
  where: CommunityWhereUniqueInput;
};

export type MutationJoinBibleReadingArgs = {
  data: JoinBibleReadingInput;
};

export type MutationJoinCommunityArgs = {
  where: CommunityWhereUniqueInput;
};

export type MutationLeaveCommunityArgs = {
  where: CommunityWhereUniqueInput;
};

export type MutationLikeCommentArgs = {
  data: LikeCommentData;
  where: CommentWhereInput;
};

export type MutationLikePostArgs = {
  data: LikePostInput;
  where: PostWhereUniqueInput;
};

export type MutationMarkBibleChapterAsCompleteArgs = {
  data: MarkBibleChapterAsCompleteInput;
};

export type MutationProcessPaymentArgs = {
  data: ProcessPaymentData;
  where: ProcessPaymentWhereInput;
};

export type MutationPurgePageCacheArgs = {
  where: PurgePageCacheInput;
};

export type MutationRemoveCommunityMemberArgs = {
  where: RemoveCommunityMemberWhereUniqueInput;
};

export type MutationRemovePodcastPlayLaterArgs = {
  where: PodcastWhereUniqueInput;
};

export type MutationRemoveVideoWatchLaterArgs = {
  where: VideoWhereUniqueInput;
};

export type MutationRequestAdminUsersExportArgs = {
  filter?: InputMaybe<RequestAdminUsersExportFilter>;
};

export type MutationRequestUsersExportArgs = {
  filter?: InputMaybe<RequestUsersExportFilter>;
};

export type MutationRetryDonationArgs = {
  where: DonationWhereUniqueInput;
};

export type MutationStarCommentArgs = {
  data: StarCommentData;
  where: CommentWhereInput;
};

export type MutationSubmitContactInquiryArgs = {
  data: SubmitContactInquiryInput;
};

export type MutationSubmitFormArgs = {
  data: SubmitFormInput;
  where: FormWhereUniqueInput;
};

export type MutationSubscribeToNewsLetterArgs = {
  data: SubscribeToNewsLetterInput;
};

export type MutationTransferCommunityOwnershipArgs = {
  where: TransferCommunityInput;
};

export type MutationUpdateAdminUserArgs = {
  data: AdminUserUpdateInput;
  where: AdminUserUniqueInput;
};

export type MutationUpdateArticleReadCountArgs = {
  where: ArticleWhereUniqueInput;
};

export type MutationUpdateAudioAssetStatusArgs = {
  data: UpdateAudioAssetStatusInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateCommentArgs = {
  data: UpdateCommentInput;
  where: CommentWhereInput;
};

export type MutationUpdateCommunityArgs = {
  data: UpdateCommunityInput;
  where: CommunityWhereUniqueInput;
};

export type MutationUpdateCommunityMemberArgs = {
  data: UpdateCommunityMemberData;
  where: CommunityMemberWhereUniqueInput;
};

export type MutationUpdateContactInquiryArgs = {
  data: UpdateContactInquiryData;
  where: ContactInquiryUniqueInput;
};

export type MutationUpdateCurrentUserArgs = {
  data: UpdateCurrentUserInput;
};

export type MutationUpdateCurrentUserAdminArgs = {
  data: UpdateCurrentUserAdminInput;
};

export type MutationUpdatePageArgs = {
  data: UpdatePageInput;
  where: PageUniqueInput;
};

export type MutationUpdatePageModuleArgs = {
  data: UpdatePageModuleInput;
  where: PageModuleWhereUniqueInput;
};

export type MutationUpdatePageModuleOrderArgs = {
  data: UpdatePageModuleOrderInput;
  where: PageModuleWhereUniqueInput;
};

export type MutationUpdatePageStatusArgs = {
  data: UpdatePageStatusInput;
  where: PageUniqueInput;
};

export type MutationUpdatePlaylistArgs = {
  data: UpdatePlaylistInput;
  where: PlaylistWhereUniqueInput;
};

export type MutationUpdatePlaylistItemOrderArgs = {
  data: UpdatePlaylistItemOrderDataInput;
  where: PlaylistWhereUniqueInput;
};

export type MutationUpdatePodcastArgs = {
  data: UpdatePodcastInput;
  where: PodcastWhereUniqueInput;
};

export type MutationUpdatePodcastPlayCountArgs = {
  where: PodcastWhereUniqueInput;
};

export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
  where: PostWhereUniqueInput;
};

export type MutationUpdateTagArgs = {
  data: UpdateTagInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserUniqueInput;
};

export type MutationUpdateVideoArgs = {
  data: UpdateVideoInput;
  where: VideoWhereUniqueInput;
};

export type MutationUpdateVideoAssetStatusArgs = {
  data: UpdateVideoAssetStatusInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateVideoViewCountArgs = {
  where: VideoWhereUniqueInput;
};

export type MutationUpsertPodcastPlayTimeArgs = {
  data: UpsertPodcastPlayTimeInput;
};

export type MutationUpsertVideoWatchTimeArgs = {
  data: UpsertVideoWatchTimeInput;
};

export type MutationVerifyDeleteAccountOtpArgs = {
  data: VerifyDeleteAccountOtpInput;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  moduleData?: Maybe<Scalars['JSON']['output']>;
  moduleType?: Maybe<NotificationModuleType>;
  template?: Maybe<NotificationTemplate>;
  templateId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum NotificationModuleType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
  Community = 'COMMUNITY',
  Post = 'POST',
  User = 'USER'
}

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotificationsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NotificationsResponse = {
  __typename?: 'NotificationsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
};

export type NotificationsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<NotificationsSortOn>;
};

export enum NotificationsSortOn {
  CreatedAt = 'createdAt'
}

export type Page = {
  __typename?: 'Page';
  allowDelete?: Maybe<Scalars['Boolean']['output']>;
  apps?: Maybe<Array<Maybe<WorkspaceApp>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Maybe<PageModule>>>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<PageStatus>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PageType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageAdminInputData = {
  applySettings?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageFilterInput = {
  moduleIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  skipPermissionModules?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageInstance = {
  __typename?: 'PageInstance';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageModule = {
  __typename?: 'PageModule';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefaultModule?: Maybe<Scalars['Boolean']['output']>;
  moduleData?: Maybe<PageModuleData>;
  order?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<PageModuleStatus>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageModuleData =
  | ArticleCarouselData
  | ArticleCarouselDataV2
  | ArticleListData
  | ArticleListDataV2
  | CtaBannerData
  | CtaBannerWithTextData
  | CtaBlockData
  | CtaButtonListData
  | CtaCarouselData
  | CtaGridData
  | CollectionCarouselData
  | CollectionGridData
  | CollectionItemCarouselData
  | CollectionItemGridData
  | CollectionItemListData
  | CollectionListData
  | CommunityCarouselData
  | CommunityGridData
  | ContactOfficialCarouselData
  | ContactUsData
  | ContributorCarouselData
  | ContributorGridData
  | ContributorListData
  | CopyHeavyData
  | CopyHeavyHeroData
  | DonationData
  | FaqData
  | FeaturedArticleData
  | FeaturedArticleDataV2
  | FeaturedCollectionData
  | FeaturedCollectionSliderData
  | FeaturedCommunityData
  | FeaturedContributorData
  | FeaturedPodcastData
  | FeaturedPodcastSliderData
  | FeaturedTagData
  | FeaturedTopicData
  | FeaturedVideoData
  | FeaturedVideoSliderData
  | FormCarouselData
  | FormDisplayData
  | HeroData
  | HtmlTextBlockData
  | InformationData
  | LeadGenData
  | LiveVideoPlayerData
  | PodcastCarouselData
  | PodcastContinueListeningCarouselData
  | PodcastGridData
  | PodcastListData
  | PodcastListenLaterCarouselData
  | PodcastPlayerData
  | PostCarouselData
  | PostDetailData
  | PostListData
  | QuoteData
  | SourceCarouselData
  | SourceListData
  | SpacerData
  | TagCarouselData
  | TagCloudData
  | TopicCarouselData
  | TopicGridData
  | TopicListData
  | VideoCarouselData
  | VideoContinueWatchingCarouselData
  | VideoGridData
  | VideoListData
  | VideoPlayerData
  | VideoPlayerDataV2
  | VideoWatchLaterCarouselData;

export enum PageModuleStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type PageModuleType = {
  __typename?: 'PageModuleType';
  category?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PageModuleUniqueInput = {
  id: Scalars['ID']['input'];
};

export type PageModuleV2 = {
  __typename?: 'PageModuleV2';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefaultModule?: Maybe<Scalars['Boolean']['output']>;
  moduleData?: Maybe<PageModuleData>;
  order?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  showSkeleton?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<PageModuleStatus>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageModuleWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export enum PageStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export enum PageType {
  Article = 'ARTICLE',
  Collection = 'COLLECTION',
  Community = 'COMMUNITY',
  Contributor = 'CONTRIBUTOR',
  Custom = 'CUSTOM',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Post = 'POST',
  Tag = 'TAG',
  Topic = 'TOPIC',
  Video = 'VIDEO'
}

export type PageUniqueInput = {
  id: Scalars['ID']['input'];
};

export type PageV2 = {
  __typename?: 'PageV2';
  allowDelete?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  modules?: Maybe<Array<Maybe<PageModuleV2>>>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<PageStatus>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PageType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageWhereInput = {
  slug: Scalars['String']['input'];
  type: PageType;
};

export type PagesAdminFilter = {
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PagesFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PagesResponse = {
  __typename?: 'PagesResponse';
  count?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Array<Maybe<Page>>>;
};

export type PagesSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<PagesSortOn>;
};

export enum PagesSortOn {
  CreatedAt = 'createdAt',
  Status = 'status',
  Title = 'title'
}

export type ParentComment = {
  __typename?: 'ParentComment';
  id?: Maybe<Scalars['ID']['output']>;
};

export type PaymentData = {
  __typename?: 'PaymentData';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export enum PaymentStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Success = 'SUCCESS'
}

export type Permission = {
  __typename?: 'Permission';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionsResponse = {
  __typename?: 'PermissionsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

export type PlayLaterPodcastsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Playlist = {
  __typename?: 'Playlist';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isItemSaved?: Maybe<Scalars['Boolean']['output']>;
  itemsCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Asset>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlaylistItem = {
  __typename?: 'PlaylistItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  instance?: Maybe<PlaylistItemInstance>;
  instanceId?: Maybe<Scalars['ID']['output']>;
  instanceType?: Maybe<PlaylistItemInstanceType>;
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlaylistItemInstance = Article | Form | Podcast | Post | Video;

export enum PlaylistItemInstanceType {
  Article = 'ARTICLE',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Post = 'POST',
  Video = 'VIDEO'
}

export type PlaylistItemsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PlaylistItemsResponse = {
  __typename?: 'PlaylistItemsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<PlaylistItem>>>;
};

export type PlaylistMutationResponse = {
  __typename?: 'PlaylistMutationResponse';
  message?: Maybe<Scalars['String']['output']>;
  playlist?: Maybe<Playlist>;
};

export type PlaylistWhereUniqueInput = {
  slug: Scalars['String']['input'];
};

export type PlaylistsDataInput = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceType?: InputMaybe<PlaylistItemInstanceType>;
};

export type PlaylistsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PlaylistsResponse = {
  __typename?: 'PlaylistsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  playlists?: Maybe<Array<Maybe<Playlist>>>;
};

export type PlaylistsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<PlaylistsSortOn>;
};

export enum PlaylistsSortOn {
  CreatedAt = 'createdAt',
  Name = 'name'
}

export type Podcast = {
  __typename?: 'Podcast';
  allowedPlans?: Maybe<Array<Maybe<PodcastAllowedPlan>>>;
  audio?: Maybe<Asset>;
  autoPublishAt?: Maybe<Scalars['DateTime']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  collectionSequence?: Maybe<Scalars['String']['output']>;
  collections?: Maybe<Array<Maybe<PodcastCollection>>>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  contentRating?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Asset>;
  imageThumbnail?: Maybe<Asset>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  playCount?: Maybe<Scalars['Int']['output']>;
  playTime?: Maybe<Scalars['Float']['output']>;
  prayerCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sources?: Maybe<Array<Maybe<Source>>>;
  speakers?: Maybe<Array<Maybe<Contributor>>>;
  status?: Maybe<PodcastStatus>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Maybe<Topic>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PodcastAllowedPlan = {
  __typename?: 'PodcastAllowedPlan';
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export type PodcastAllowedPlanInput = {
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  key: Scalars['String']['input'];
};

export enum PodcastAutoGenerateSortBy {
  Plays = 'PLAYS',
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type PodcastCarouselData = {
  __typename?: 'PodcastCarouselData';
  config?: Maybe<PodcastCarouselModuleConfigData>;
  settings?: Maybe<PodcastCarouselModuleSettingData>;
};

export type PodcastCarouselInput = {
  config?: InputMaybe<PodcastCarouselModuleConfigInput>;
  settings?: InputMaybe<PodcastCarouselModuleSettingInput>;
};

export type PodcastCarouselModuleConfigData = {
  __typename?: 'PodcastCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<PodcastAutoGenerateSortBy>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type PodcastCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<PodcastAutoGenerateSortBy>;
  podcasts?: InputMaybe<Array<InputMaybe<PodcastSchemaInput>>>;
};

export type PodcastCarouselModuleSettingData = {
  __typename?: 'PodcastCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  imageThumbnail?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastProgressBar?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PodcastCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  imageThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastProgressBar?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastCollection = {
  __typename?: 'PodcastCollection';
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PodcastContinueListeningCarouselData = {
  __typename?: 'PodcastContinueListeningCarouselData';
  config?: Maybe<PodcastContinueListeningCarouselModuleConfigData>;
  settings?: Maybe<PodcastContinueListeningCarouselModuleSettingData>;
};

export type PodcastContinueListeningCarouselInput = {
  config?: InputMaybe<PodcastContinueListeningCarouselModuleConfigInput>;
  settings?: InputMaybe<PodcastContinueListeningCarouselModuleSettingInput>;
};

export type PodcastContinueListeningCarouselModuleConfigData = {
  __typename?: 'PodcastContinueListeningCarouselModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type PodcastContinueListeningCarouselModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type PodcastContinueListeningCarouselModuleSettingData = {
  __typename?: 'PodcastContinueListeningCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PodcastContinueListeningCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastContributorsInput = {
  contributorId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type PodcastDurationRangeFilter = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type PodcastGridData = {
  __typename?: 'PodcastGridData';
  config?: Maybe<PodcastGridModuleConfigData>;
  settings?: Maybe<PodcastGridModuleSettingData>;
};

export type PodcastGridInput = {
  config?: InputMaybe<PodcastGridModuleConfigInput>;
  settings?: InputMaybe<PodcastGridModuleSettingInput>;
};

export type PodcastGridModuleConfigData = {
  __typename?: 'PodcastGridModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<PodcastAutoGenerateSortBy>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type PodcastGridModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<PodcastAutoGenerateSortBy>;
  podcasts?: InputMaybe<Array<InputMaybe<PodcastSchemaInput>>>;
};

export type PodcastGridModuleSettingData = {
  __typename?: 'PodcastGridModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  imageThumbnail?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastProgressBar?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
  searchFilter?: Maybe<Scalars['Boolean']['output']>;
  tagsFilter?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PodcastGridModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  imageThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastProgressBar?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
  searchFilter?: InputMaybe<Scalars['Boolean']['input']>;
  tagsFilter?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastListData = {
  __typename?: 'PodcastListData';
  config?: Maybe<PodcastListModuleConfigData>;
  settings?: Maybe<PodcastListModuleSettingData>;
};

export type PodcastListInput = {
  config?: InputMaybe<PodcastListModuleConfigInput>;
  settings?: InputMaybe<PodcastListModuleSettingInput>;
};

export type PodcastListModuleConfigData = {
  __typename?: 'PodcastListModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<PodcastAutoGenerateSortBy>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type PodcastListModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<PodcastAutoGenerateSortBy>;
  podcasts?: InputMaybe<Array<InputMaybe<PodcastSchemaInput>>>;
};

export type PodcastListModuleSettingData = {
  __typename?: 'PodcastListModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  imageThumbnail?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastDescription?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastProgressBar?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
  searchFilter?: Maybe<Scalars['Boolean']['output']>;
  separator?: Maybe<Scalars['Boolean']['output']>;
  tagsFilter?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PodcastListModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  imageThumbnail?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDescription?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastProgressBar?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
  searchFilter?: InputMaybe<Scalars['Boolean']['input']>;
  separator?: InputMaybe<Scalars['Boolean']['input']>;
  tagsFilter?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastListenLaterCarouselData = {
  __typename?: 'PodcastListenLaterCarouselData';
  config?: Maybe<PodcastListenLaterCarouselModuleConfigData>;
  settings?: Maybe<PodcastListenLaterCarouselModuleSettingData>;
};

export type PodcastListenLaterCarouselInput = {
  config?: InputMaybe<PodcastListenLaterCarouselModuleConfigInput>;
  settings?: InputMaybe<PodcastListenLaterCarouselModuleSettingInput>;
};

export type PodcastListenLaterCarouselModuleConfigData = {
  __typename?: 'PodcastListenLaterCarouselModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type PodcastListenLaterCarouselModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type PodcastListenLaterCarouselModuleSettingData = {
  __typename?: 'PodcastListenLaterCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PodcastListenLaterCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastPlayerData = {
  __typename?: 'PodcastPlayerData';
  config?: Maybe<PodcastPlayerModuleConfigData>;
  settings?: Maybe<PodcastPlayerModuleSettingData>;
};

export type PodcastPlayerInput = {
  config?: InputMaybe<PodcastPlayerModuleConfigInput>;
  settings?: InputMaybe<PodcastPlayerModuleSettingInput>;
};

export type PodcastPlayerModuleConfigData = {
  __typename?: 'PodcastPlayerModuleConfigData';
  podcast?: Maybe<Podcast>;
};

export type PodcastPlayerModuleConfigInput = {
  podcastId?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastPlayerModuleSettingData = {
  __typename?: 'PodcastPlayerModuleSettingData';
  podcastDate?: Maybe<Scalars['Boolean']['output']>;
  podcastDescription?: Maybe<Scalars['Boolean']['output']>;
  podcastOrder?: Maybe<Scalars['Boolean']['output']>;
  podcastSpeaker?: Maybe<Scalars['Boolean']['output']>;
  podcastTag?: Maybe<Scalars['Boolean']['output']>;
  podcastTimestamp?: Maybe<Scalars['Boolean']['output']>;
  podcastTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type PodcastPlayerModuleSettingInput = {
  podcastDate?: InputMaybe<Scalars['Boolean']['input']>;
  podcastDescription?: InputMaybe<Scalars['Boolean']['input']>;
  podcastOrder?: InputMaybe<Scalars['Boolean']['input']>;
  podcastSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTag?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  podcastTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastSchemaInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  podcastId?: InputMaybe<Scalars['ID']['input']>;
};

export type PodcastSourcesInput = {
  order: Scalars['Int']['input'];
  sourceId: Scalars['ID']['input'];
};

export enum PodcastStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type PodcastTagsInput = {
  order: Scalars['Int']['input'];
  tagId: Scalars['ID']['input'];
};

export type PodcastTopicsInput = {
  order: Scalars['Int']['input'];
  topicId: Scalars['ID']['input'];
};

export type PodcastWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type PodcastsFilter = {
  collectionId?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<PodcastDurationRangeFilter>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
  speakerId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<PodcastStatus>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
  topicIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type PodcastsOptions = {
  includePlayTime?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PodcastsProgressResponse = {
  __typename?: 'PodcastsProgressResponse';
  playTime: Scalars['Float']['output'];
  podcastId: Scalars['ID']['output'];
};

export type PodcastsResponse = {
  __typename?: 'PodcastsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type PodcastsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<PodcastsSortOn>;
};

export enum PodcastsSortOn {
  CreatedAt = 'createdAt',
  PlayCount = 'playCount',
  Title = 'title'
}

export type Post = {
  __typename?: 'Post';
  attachment?: Maybe<Asset>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  community?: Maybe<PostCommunity>;
  communityId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  flagCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  instance?: Maybe<PostInstance>;
  instanceId?: Maybe<Scalars['String']['output']>;
  instanceType?: Maybe<PostInstanceType>;
  isFlagged?: Maybe<Scalars['Boolean']['output']>;
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  likeCount?: Maybe<Scalars['Int']['output']>;
  prayerCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<PostStatus>;
  text?: Maybe<Scalars['String']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
};

export type PostAutoGenerateByData = Community;

export enum PostAutoGenerateType {
  Community = 'COMMUNITY'
}

export type PostCarouselData = {
  __typename?: 'PostCarouselData';
  config?: Maybe<PostCarouselModuleConfigData>;
  settings?: Maybe<PostCarouselModuleSettingData>;
};

export type PostCarouselInput = {
  config?: InputMaybe<PostCarouselModuleConfigInput>;
  settings?: InputMaybe<PostCarouselModuleSettingInput>;
};

export type PostCarouselModuleConfigData = {
  __typename?: 'PostCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<PostAutoGenerateByData>;
  autoGenerateById?: Maybe<Scalars['ID']['output']>;
  autoGenerateByType?: Maybe<PostAutoGenerateType>;
};

export type PostCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['ID']['input']>;
  autoGenerateByType?: InputMaybe<PostAutoGenerateType>;
};

export type PostCarouselModuleSettingData = {
  __typename?: 'PostCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  postComment?: Maybe<Scalars['Boolean']['output']>;
  postPray?: Maybe<Scalars['Boolean']['output']>;
  postShare?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PostCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  postComment?: InputMaybe<Scalars['Boolean']['input']>;
  postPray?: InputMaybe<Scalars['Boolean']['input']>;
  postShare?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCommunity = {
  __typename?: 'PostCommunity';
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PostDetailData = {
  __typename?: 'PostDetailData';
  config?: Maybe<PostDetailModuleConfigData>;
  settings?: Maybe<PostDetailModuleSettingData>;
};

export type PostDetailInput = {
  config?: InputMaybe<PostDetailModuleConfigInput>;
  settings?: InputMaybe<PostDetailModuleSettingInput>;
};

export type PostDetailModuleConfigData = {
  __typename?: 'PostDetailModuleConfigData';
  post?: Maybe<Post>;
};

export type PostDetailModuleConfigInput = {
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type PostDetailModuleSettingData = {
  __typename?: 'PostDetailModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
};

export type PostDetailModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostInstance = Article | Form | Podcast | Post | Video;

export enum PostInstanceType {
  Article = 'ARTICLE',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Post = 'POST',
  Video = 'VIDEO'
}

export type PostListData = {
  __typename?: 'PostListData';
  config?: Maybe<PostListModuleConfigData>;
  settings?: Maybe<PostListModuleSettingData>;
};

export type PostListInput = {
  config?: InputMaybe<PostListModuleConfigInput>;
  settings?: InputMaybe<PostListModuleSettingInput>;
};

export type PostListModuleConfigData = {
  __typename?: 'PostListModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<PostAutoGenerateByData>;
  autoGenerateById?: Maybe<Scalars['ID']['output']>;
  autoGenerateByType?: Maybe<PostAutoGenerateType>;
};

export type PostListModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['ID']['input']>;
  autoGenerateByType?: InputMaybe<PostAutoGenerateType>;
};

export type PostListModuleSettingData = {
  __typename?: 'PostListModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  postComment?: Maybe<Scalars['Boolean']['output']>;
  postPray?: Maybe<Scalars['Boolean']['output']>;
  postShare?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type PostListModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  postComment?: InputMaybe<Scalars['Boolean']['input']>;
  postPray?: InputMaybe<Scalars['Boolean']['input']>;
  postShare?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PostStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type PostWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type PostsFilter = {
  communityId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type PostsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<PostsSortOn>;
};

export enum PostsSortOn {
  CreatedAt = 'createdAt',
  FlagCount = 'flagCount',
  LikeCount = 'likeCount'
}

export type Prayer = {
  __typename?: 'Prayer';
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  instanceId?: Maybe<Scalars['String']['output']>;
  instanceType?: Maybe<PrayerInstanceType>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<PrayerStatus>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['String']['output']>;
};

export type PrayerInput = {
  instanceId: Scalars['String']['input'];
  instanceType: PrayerInstanceType;
  startTime: Scalars['DateTime']['input'];
};

export enum PrayerInstanceType {
  Article = 'ARTICLE',
  ContactOfficial = 'CONTACT_OFFICIAL',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Post = 'POST',
  Video = 'VIDEO'
}

export type PrayerResponse = {
  __typename?: 'PrayerResponse';
  count?: Maybe<Scalars['Int']['output']>;
  prayers?: Maybe<Array<Maybe<Prayer>>>;
};

export enum PrayerStatus {
  Completed = 'COMPLETED',
  Paused = 'PAUSED',
  Started = 'STARTED'
}

export type ProcessPaymentData = {
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cvv?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type ProcessPaymentWhereInput = {
  id: Scalars['ID']['input'];
};

export type Provider = {
  __typename?: 'Provider';
  config?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ProviderType>;
};

export enum ProviderType {
  Audio = 'AUDIO',
  Authentication = 'AUTHENTICATION',
  Custom = 'CUSTOM',
  Email = 'EMAIL',
  Moderation = 'MODERATION',
  Payment = 'PAYMENT',
  PushNotification = 'PUSH_NOTIFICATION',
  Sms = 'SMS',
  SmsOtp = 'SMS_OTP',
  Storage = 'STORAGE',
  UserAudio = 'USER_AUDIO',
  UserVideo = 'USER_VIDEO',
  Video = 'VIDEO'
}

export type PurgePageCacheInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PageType>;
};

export type Query = {
  __typename?: 'Query';
  adminUser?: Maybe<AdminUser>;
  adminUsers?: Maybe<AdminUsersResponse>;
  article?: Maybe<Article>;
  articles?: Maybe<ArticlesResponse>;
  asset?: Maybe<Asset>;
  bibleChapter?: Maybe<BibleChapterResponse>;
  bibleMonthlyReadingProgress?: Maybe<Array<Maybe<BibleChapter>>>;
  collection?: Maybe<Collection>;
  collectionItems?: Maybe<CollectionItemsResponse>;
  collections?: Maybe<CollectionsResponse>;
  collectionsItemsCount?: Maybe<Array<Maybe<CollectionsItemsCountResponse>>>;
  comment?: Maybe<Comment>;
  commentThread?: Maybe<CommentThreadResponse>;
  communities?: Maybe<CommunitiesResponse>;
  community?: Maybe<Community>;
  communityMembers?: Maybe<CommunityMembersResponse>;
  contactInquiries?: Maybe<ContactInquiriesResponse>;
  contactInquiry?: Maybe<ContactInquiry>;
  contactOfficials?: Maybe<ContactOfficialsResponse>;
  contributor?: Maybe<Contributor>;
  contributors?: Maybe<ContributorsResponse>;
  contributorsVideoCount?: Maybe<Array<Maybe<ContributorsVideoCountResponse>>>;
  dataCollectionKeys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  donation?: Maybe<Donation>;
  donationAmounts?: Maybe<DonationAmountsResponse>;
  donations?: Maybe<DonationsResponse>;
  exportJobs?: Maybe<ExportJobsResponse>;
  form?: Maybe<Form>;
  formSubmission?: Maybe<FormSubmission>;
  getAdminProfileImageUploadSignedUrl?: Maybe<GetAssetUploadSignedUrlResponse>;
  getApplicationRootDomain?: Maybe<Scalars['String']['output']>;
  getAssetUploadSignedUrl?: Maybe<GetAssetUploadSignedUrlResponse>;
  getCommentImageUploadSignedUrl?: Maybe<GetAssetUploadSignedUrlResponse>;
  getProfileImageUploadSignedUrl?: Maybe<GetAssetUploadSignedUrlResponse>;
  languages?: Maybe<LanguagesResponse>;
  notifications?: Maybe<NotificationsResponse>;
  page?: Maybe<Page>;
  pageAdmin?: Maybe<Page>;
  pageModuleTypes?: Maybe<Array<Maybe<PageModuleType>>>;
  pageV2?: Maybe<PageV2>;
  pages?: Maybe<PagesResponse>;
  pagesAdmin?: Maybe<PagesResponse>;
  permissions?: Maybe<PermissionsResponse>;
  playLaterPodcasts?: Maybe<PodcastsResponse>;
  playlist?: Maybe<Playlist>;
  playlistItems?: Maybe<PlaylistItemsResponse>;
  playlists?: Maybe<PlaylistsResponse>;
  podcast?: Maybe<Podcast>;
  podcastAdmin?: Maybe<Podcast>;
  podcasts?: Maybe<PodcastsResponse>;
  podcastsAdmin?: Maybe<PodcastsResponse>;
  podcastsProgress?: Maybe<Array<Maybe<PodcastsProgressResponse>>>;
  post?: Maybe<Post>;
  posts?: Maybe<PostsResponse>;
  prayers?: Maybe<PrayerResponse>;
  recentlyPlayedPodcasts?: Maybe<PodcastsResponse>;
  recentlyWatchedVideos?: Maybe<VideosResponse>;
  search?: Maybe<SearchResponse>;
  searchHistories?: Maybe<SearchHistoriesResponse>;
  searchPodcasts?: Maybe<PodcastsResponse>;
  searchVideos?: Maybe<VideosResponse>;
  slugs?: Maybe<SlugsResponse>;
  source?: Maybe<Source>;
  sources?: Maybe<SourcesResponse>;
  statesByCountry?: Maybe<StatesResponse>;
  statistics?: Maybe<StatisticsResponse>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
  subscriptionPlans?: Maybe<SubscriptionPlansResponse>;
  tag?: Maybe<Tag>;
  tagAdmin?: Maybe<Tag>;
  tags?: Maybe<TagsResponse>;
  tagsAdmin?: Maybe<TagsResponse>;
  testPerformance?: Maybe<Scalars['JSON']['output']>;
  topic?: Maybe<Topic>;
  topics?: Maybe<TopicsResponse>;
  user?: Maybe<User>;
  users?: Maybe<UsersResponse>;
  validateSubscriptionPlanPermission?: Maybe<ValidateSubscriptionPlanPermissionResponse>;
  video?: Maybe<Video>;
  videoAdmin?: Maybe<Video>;
  videos?: Maybe<VideosResponse>;
  videosAdmin?: Maybe<VideosResponse>;
  videosProgress?: Maybe<Array<Maybe<VideosProgressResponse>>>;
  watchLaterVideos?: Maybe<VideosResponse>;
};

export type QueryAdminUserArgs = {
  where: AdminUserUniqueInput;
};

export type QueryAdminUsersArgs = {
  filter?: InputMaybe<AdminUsersFilter>;
  sort?: InputMaybe<AdminUsersSort>;
};

export type QueryArticleArgs = {
  where: ArticleWhereUniqueInput;
};

export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  sort?: InputMaybe<ArticlesSort>;
};

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type QueryBibleChapterArgs = {
  filter: BibleChapterFilterInput;
};

export type QueryBibleMonthlyReadingProgressArgs = {
  filter?: InputMaybe<BibleMonthlyReadingFilterInput>;
};

export type QueryCollectionArgs = {
  where: CollectionUniqueInput;
};

export type QueryCollectionItemsArgs = {
  filter?: InputMaybe<CollectionItemsFilter>;
  where: CollectionUniqueInput;
};

export type QueryCollectionsArgs = {
  filter?: InputMaybe<CollectionsFilter>;
  sort?: InputMaybe<CollectionsSort>;
};

export type QueryCollectionsItemsCountArgs = {
  collectionIds: Array<Scalars['ID']['input']>;
};

export type QueryCommentArgs = {
  where: CommentWhereInput;
};

export type QueryCommentThreadArgs = {
  filter: CommentThreadFilter;
  sort?: InputMaybe<CommentsSort>;
};

export type QueryCommunitiesArgs = {
  filter?: InputMaybe<CommunitiesFilter>;
  sort?: InputMaybe<CommunitiesSort>;
};

export type QueryCommunityArgs = {
  where: CommunityWhereUniqueInput;
};

export type QueryCommunityMembersArgs = {
  filter: CommunityMembersFilter;
  sort?: InputMaybe<CommunityMembersSort>;
};

export type QueryContactInquiriesArgs = {
  filters?: InputMaybe<ContactInquiriesFilter>;
};

export type QueryContactInquiryArgs = {
  where: ContactInquiryUniqueInput;
};

export type QueryContactOfficialsArgs = {
  filter?: InputMaybe<ContactOfficialsFilter>;
  sort?: InputMaybe<ContactOfficialsSort>;
};

export type QueryContributorArgs = {
  where: ContributorWhereUniqueInput;
};

export type QueryContributorsArgs = {
  filter?: InputMaybe<ContributorsFilter>;
  sort?: InputMaybe<ContributorsSort>;
};

export type QueryContributorsVideoCountArgs = {
  contributorIds: Array<Scalars['ID']['input']>;
};

export type QueryDataCollectionKeysArgs = {
  data: DataCollectionKeysInput;
};

export type QueryDonationArgs = {
  where: DonationWhereUniqueInput;
};

export type QueryDonationAmountsArgs = {
  filter?: InputMaybe<DonationAmountFilter>;
};

export type QueryDonationsArgs = {
  filter?: InputMaybe<DonationsFilter>;
  sort?: InputMaybe<DonationsSort>;
};

export type QueryExportJobsArgs = {
  filter: ExportJobsFilter;
};

export type QueryFormArgs = {
  where: FormWhereUniqueInput;
};

export type QueryFormSubmissionArgs = {
  where: FormWhereUniqueInput;
};

export type QueryGetAdminProfileImageUploadSignedUrlArgs = {
  data: GetProfileImageUploadSignedUrlInput;
};

export type QueryGetAssetUploadSignedUrlArgs = {
  data: GetAssetUploadSignedUrlInput;
};

export type QueryGetCommentImageUploadSignedUrlArgs = {
  data?: InputMaybe<CommentImageUploadSignedUrlData>;
};

export type QueryGetProfileImageUploadSignedUrlArgs = {
  data: GetProfileImageUploadSignedUrlInput;
};

export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilter>;
  sort?: InputMaybe<LanguageSort>;
};

export type QueryNotificationsArgs = {
  filter?: InputMaybe<NotificationsFilter>;
  sort?: InputMaybe<NotificationsSort>;
};

export type QueryPageArgs = {
  where: PageWhereInput;
};

export type QueryPageAdminArgs = {
  data?: InputMaybe<PageAdminInputData>;
  where: PageUniqueInput;
};

export type QueryPageV2Args = {
  filter?: InputMaybe<PageFilterInput>;
  where: PageWhereInput;
};

export type QueryPagesArgs = {
  filter?: InputMaybe<PagesFilter>;
  sort?: InputMaybe<PagesSort>;
};

export type QueryPagesAdminArgs = {
  filter?: InputMaybe<PagesAdminFilter>;
  sort?: InputMaybe<PagesSort>;
};

export type QueryPlayLaterPodcastsArgs = {
  filter?: InputMaybe<PlayLaterPodcastsFilter>;
};

export type QueryPlaylistArgs = {
  where: PlaylistWhereUniqueInput;
};

export type QueryPlaylistItemsArgs = {
  filter?: InputMaybe<PlaylistItemsFilter>;
  where: PlaylistWhereUniqueInput;
};

export type QueryPlaylistsArgs = {
  data?: InputMaybe<PlaylistsDataInput>;
  filter?: InputMaybe<PlaylistsFilter>;
  sort?: InputMaybe<PlaylistsSort>;
};

export type QueryPodcastArgs = {
  where: PodcastWhereUniqueInput;
};

export type QueryPodcastAdminArgs = {
  where: PodcastWhereUniqueInput;
};

export type QueryPodcastsArgs = {
  filter?: InputMaybe<PodcastsFilter>;
  options?: InputMaybe<PodcastsOptions>;
  sort?: InputMaybe<PodcastsSort>;
};

export type QueryPodcastsAdminArgs = {
  filter?: InputMaybe<PodcastsFilter>;
  sort?: InputMaybe<PodcastsSort>;
};

export type QueryPodcastsProgressArgs = {
  podcastIds: Array<Scalars['ID']['input']>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryPostsArgs = {
  filter: PostsFilter;
  sort?: InputMaybe<PostsSort>;
};

export type QueryPrayersArgs = {
  data: PrayerInput;
};

export type QueryRecentlyPlayedPodcastsArgs = {
  filter?: InputMaybe<PlayLaterPodcastsFilter>;
};

export type QueryRecentlyWatchedVideosArgs = {
  filter?: InputMaybe<WatchVideosFilter>;
};

export type QuerySearchArgs = {
  filter?: InputMaybe<SearchFilter>;
};

export type QuerySearchHistoriesArgs = {
  filters: SearchHistoriesFilter;
};

export type QuerySearchPodcastsArgs = {
  filter?: InputMaybe<PodcastsFilter>;
  sort?: InputMaybe<PodcastsSort>;
};

export type QuerySearchVideosArgs = {
  filter?: InputMaybe<VideosFilter>;
  sort?: InputMaybe<VideosSort>;
};

export type QuerySlugsArgs = {
  filters: SlugFilter;
  sort?: InputMaybe<SlugSort>;
};

export type QuerySourceArgs = {
  where: SourceWhereUniqueInput;
};

export type QuerySourcesArgs = {
  filter?: InputMaybe<SourcesFilter>;
  sort?: InputMaybe<SourcesSort>;
};

export type QueryStatesByCountryArgs = {
  filter?: InputMaybe<StatesByCountryFilter>;
};

export type QueryStatisticsArgs = {
  filters?: InputMaybe<StatisticsFilter>;
};

export type QuerySubscriptionPlanArgs = {
  where: SubscriptionPlanWhereInput;
};

export type QuerySubscriptionPlansArgs = {
  filter?: InputMaybe<SubscriptionPlansFilter>;
  sort?: InputMaybe<SubscriptionPlansSort>;
};

export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};

export type QueryTagAdminArgs = {
  where: TagWhereUniqueInput;
};

export type QueryTagsArgs = {
  filter?: InputMaybe<TagsFilter>;
  sort?: InputMaybe<TagsSort>;
};

export type QueryTagsAdminArgs = {
  filter?: InputMaybe<TagsFilter>;
  sort?: InputMaybe<TagsSort>;
};

export type QueryTestPerformanceArgs = {
  data?: InputMaybe<TestPerformanceData>;
};

export type QueryTopicArgs = {
  where: TopicUniqueInput;
};

export type QueryTopicsArgs = {
  filter?: InputMaybe<TopicsFilter>;
  sort?: InputMaybe<TopicsSort>;
};

export type QueryUserArgs = {
  where: UserUniqueInput;
};

export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilter>;
  sort?: InputMaybe<UsersSort>;
};

export type QueryValidateSubscriptionPlanPermissionArgs = {
  where: ValidateSubscriptionPlanPermissionWhereInput;
};

export type QueryVideoArgs = {
  where: VideoWhereUniqueInput;
};

export type QueryVideoAdminArgs = {
  where: VideoWhereUniqueInput;
};

export type QueryVideosArgs = {
  filter?: InputMaybe<VideosFilter>;
  options?: InputMaybe<VideosOptions>;
  sort?: InputMaybe<VideosSort>;
};

export type QueryVideosAdminArgs = {
  filter?: InputMaybe<VideosFilter>;
  sort?: InputMaybe<VideosSort>;
};

export type QueryVideosProgressArgs = {
  videoIds: Array<Scalars['ID']['input']>;
};

export type QueryWatchLaterVideosArgs = {
  filter?: InputMaybe<WatchVideosFilter>;
};

export type QuoteAuthorData = {
  __typename?: 'QuoteAuthorData';
  asset?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  subTitle?: Maybe<Scalars['String']['output']>;
};

export type QuoteAuthorInput = {
  assetId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subTitle?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteConfigQuoteData = {
  __typename?: 'QuoteConfigQuoteData';
  author?: Maybe<QuoteAuthorData>;
  text?: Maybe<Scalars['String']['output']>;
};

export type QuoteConfigQuoteInput = {
  author?: InputMaybe<QuoteAuthorInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteData = {
  __typename?: 'QuoteData';
  config?: Maybe<QuoteModuleConfigData>;
  settings?: Maybe<QuoteModuleSettingData>;
};

export type QuoteInput = {
  config?: InputMaybe<QuoteModuleConfigInput>;
  settings?: InputMaybe<QuoteModuleSettingInput>;
};

export type QuoteModuleConfigData = {
  __typename?: 'QuoteModuleConfigData';
  quotes?: Maybe<Array<Maybe<QuoteConfigQuoteData>>>;
};

export type QuoteModuleConfigInput = {
  quotes?: InputMaybe<Array<InputMaybe<QuoteConfigQuoteInput>>>;
};

export type QuoteModuleSettingData = {
  __typename?: 'QuoteModuleSettingData';
  authorName?: Maybe<Scalars['Boolean']['output']>;
  authorSubTitle?: Maybe<Scalars['Boolean']['output']>;
  indicators?: Maybe<Scalars['Boolean']['output']>;
};

export type QuoteModuleSettingInput = {
  authorName?: InputMaybe<Scalars['Boolean']['input']>;
  authorSubTitle?: InputMaybe<Scalars['Boolean']['input']>;
  indicators?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveCommunityMemberWhereUniqueInput = {
  communityId: Scalars['ID']['input'];
  communityMemberId: Scalars['ID']['input'];
};

export type RequestAdminUsersExportFilter = {
  roles?: InputMaybe<Array<InputMaybe<AdminUserRole>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RequestExportJobResponse = {
  __typename?: 'RequestExportJobResponse';
  jobId?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type RequestUsersExportFilter = {
  legacyUsers?: InputMaybe<Scalars['Boolean']['input']>;
  migratedAccount?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserRole>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SearchFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SearchHistoriesFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<SearchHistoryType>;
};

export type SearchHistoriesResponse = {
  __typename?: 'SearchHistoriesResponse';
  count?: Maybe<Scalars['Int']['output']>;
  searchHistories?: Maybe<Array<Maybe<SearchHistory>>>;
};

export type SearchHistory = {
  __typename?: 'SearchHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SearchHistoryType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum SearchHistoryType {
  Article = 'ARTICLE',
  Form = 'FORM',
  Podcast = 'PODCAST',
  Post = 'POST',
  Video = 'VIDEO'
}

export type SearchHistoryWhereInput = {
  id: Scalars['ID']['input'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  count?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<SearchResult>>>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  data?: Maybe<SearchResultType>;
  type?: Maybe<SearchHistoryType>;
};

export type SearchResultType = Article | Form | Podcast | Post | Video;

export type SlugData = {
  __typename?: 'SlugData';
  slug?: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  pageType: PageType;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SlugSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<SlugsSortOn>;
};

export type SlugsResponse = {
  __typename?: 'SlugsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Array<Maybe<SlugData>>>;
};

export enum SlugsSortOn {
  Slug = 'slug'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Source = {
  __typename?: 'Source';
  articlesCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Asset>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  podcastsCount?: Maybe<Scalars['Int']['output']>;
  shortCode?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videosCount?: Maybe<Scalars['Int']['output']>;
};

export enum SourceAutoGenerateBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type SourceCarouselData = {
  __typename?: 'SourceCarouselData';
  config?: Maybe<SourceCarouselModuleConfigData>;
  settings?: Maybe<SourceCarouselModuleSettingData>;
};

export type SourceCarouselInput = {
  config?: InputMaybe<SourceCarouselModuleConfigInput>;
  settings?: InputMaybe<SourceCarouselModuleSettingInput>;
};

export type SourceCarouselModuleConfigData = {
  __typename?: 'SourceCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<SourceAutoGenerateBy>;
  sources?: Maybe<Array<Maybe<Source>>>;
};

export type SourceCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<SourceAutoGenerateBy>;
  sources?: InputMaybe<Array<InputMaybe<SourceSchemaInput>>>;
};

export type SourceCarouselModuleSettingData = {
  __typename?: 'SourceCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfArticles?: Maybe<Scalars['Boolean']['output']>;
  numberOfPodcasts?: Maybe<Scalars['Boolean']['output']>;
  numberOfVideos?: Maybe<Scalars['Boolean']['output']>;
  sourceDescription?: Maybe<Scalars['Boolean']['output']>;
  sourceImage?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type SourceCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfArticles?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfPodcasts?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfVideos?: InputMaybe<Scalars['Boolean']['input']>;
  sourceDescription?: InputMaybe<Scalars['Boolean']['input']>;
  sourceImage?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SourceListData = {
  __typename?: 'SourceListData';
  config?: Maybe<SourceListModuleConfigData>;
  settings?: Maybe<SourceListModuleSettingData>;
};

export type SourceListInput = {
  config?: InputMaybe<SourceListModuleConfigInput>;
  settings?: InputMaybe<SourceListModuleSettingInput>;
};

export type SourceListModuleConfigData = {
  __typename?: 'SourceListModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<SourceAutoGenerateBy>;
  sources?: Maybe<Array<Maybe<Source>>>;
};

export type SourceListModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<SourceAutoGenerateBy>;
  sources?: InputMaybe<Array<InputMaybe<SourceSchemaInput>>>;
};

export type SourceListModuleSettingData = {
  __typename?: 'SourceListModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  numberOfArticles?: Maybe<Scalars['Boolean']['output']>;
  separator?: Maybe<Scalars['Boolean']['output']>;
  sourceDescription?: Maybe<Scalars['Boolean']['output']>;
  sourceImage?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type SourceListModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfArticles?: InputMaybe<Scalars['Boolean']['input']>;
  separator?: InputMaybe<Scalars['Boolean']['input']>;
  sourceDescription?: InputMaybe<Scalars['Boolean']['input']>;
  sourceImage?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SourceSchemaInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
};

export type SourceWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type SourcesFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SourcesResponse = {
  __typename?: 'SourcesResponse';
  count?: Maybe<Scalars['Int']['output']>;
  sources?: Maybe<Array<Maybe<Source>>>;
};

export type SourcesSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<SourcesSortOn>;
};

export enum SourcesSortOn {
  CreatedAt = 'createdAt',
  Name = 'name'
}

export type SourcesWhereInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SpacerData = {
  __typename?: 'SpacerData';
  config?: Maybe<SpacerModuleConfigData>;
};

export type SpacerInput = {
  config?: InputMaybe<SpacerModuleConfigInput>;
};

export type SpacerModuleConfigData = {
  __typename?: 'SpacerModuleConfigData';
  desktop?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  tablet?: Maybe<Scalars['String']['output']>;
  tv?: Maybe<Scalars['String']['output']>;
};

export type SpacerModuleConfigInput = {
  desktop?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  tablet?: InputMaybe<Scalars['String']['input']>;
  tv?: InputMaybe<Scalars['String']['input']>;
};

export enum StarCommentAction {
  Star = 'STAR',
  Unstar = 'UNSTAR'
}

export type StarCommentData = {
  action?: InputMaybe<StarCommentAction>;
};

export type State = {
  __typename?: 'State';
  name?: Maybe<Scalars['String']['output']>;
};

export type StatesByCountryFilter = {
  country: Scalars['String']['input'];
};

export type StatesResponse = {
  __typename?: 'StatesResponse';
  count?: Maybe<Scalars['Int']['output']>;
  states?: Maybe<Array<Maybe<State>>>;
};

export type StatisticsFilter = {
  dateRange?: InputMaybe<DateRangeInput>;
};

export type StatisticsResponse = {
  __typename?: 'StatisticsResponse';
  migratedUsers?: Maybe<Scalars['Int']['output']>;
  newContactInquiries?: Maybe<Scalars['Int']['output']>;
  newDonations?: Maybe<Scalars['Int']['output']>;
  newTables?: Maybe<Scalars['Int']['output']>;
  newUsers?: Maybe<Scalars['Int']['output']>;
};

export type SubmitContactInquiryInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  inquiry: Scalars['String']['input'];
  key: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitFormInput = {
  submission?: InputMaybe<Scalars['JSON']['input']>;
};

export type SubscribeToNewsLetterInput = {
  email: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  amount?: Maybe<SubscriptionPlanAmount>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<SubscriptionPlanFrequency>;
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Float']['output']>;
  permissions?: Maybe<Array<Maybe<SubscriptionPlanPermissionData>>>;
  showOnPaywall?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<SubscriptionPlanType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubscriptionPlanAmount = {
  __typename?: 'SubscriptionPlanAmount';
  usd?: Maybe<SubscriptionPlanAmountCurrency>;
};

export type SubscriptionPlanAmountCurrency = {
  __typename?: 'SubscriptionPlanAmountCurrency';
  price?: Maybe<Scalars['Float']['output']>;
};

export enum SubscriptionPlanFrequency {
  Annually = 'ANNUALLY',
  Monthly = 'MONTHLY'
}

export type SubscriptionPlanGeneralResponse = {
  __typename?: 'SubscriptionPlanGeneralResponse';
  message?: Maybe<Scalars['String']['output']>;
  subscriptionPlan?: Maybe<SubscriptionPlan>;
};

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

export enum SubscriptionPlanType {
  OneTime = 'ONE_TIME',
  Recurring = 'RECURRING'
}

export type SubscriptionPlanWhereInput = {
  key: Scalars['String']['input'];
};

export type SubscriptionPlansFilter = {
  frequency?: InputMaybe<SubscriptionPlanFrequency>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SubscriptionPlansResponse = {
  __typename?: 'SubscriptionPlansResponse';
  count?: Maybe<Scalars['Int']['output']>;
  subscriptionPlans?: Maybe<Array<Maybe<SubscriptionPlan>>>;
};

export type SubscriptionPlansSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<SubscriptionPlansSortOn>;
};

export enum SubscriptionPlansSortOn {
  Name = 'name',
  Order = 'order'
}

export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  PaymentDue = 'PAYMENT_DUE',
  Pending = 'PENDING'
}

export type Tag = {
  __typename?: 'Tag';
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export enum TagAutoGenerateBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type TagCarouselData = {
  __typename?: 'TagCarouselData';
  config?: Maybe<TagCarouselModuleConfigData>;
  settings?: Maybe<TagCarouselModuleSettingData>;
};

export type TagCarouselInput = {
  config?: InputMaybe<TagCarouselModuleConfigInput>;
  settings?: InputMaybe<TagCarouselModuleSettingInput>;
};

export type TagCarouselModuleConfigData = {
  __typename?: 'TagCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<TagAutoGenerateBy>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TagCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<TagAutoGenerateBy>;
  tags?: InputMaybe<Array<InputMaybe<TagSchemaInput>>>;
};

export type TagCarouselModuleSettingData = {
  __typename?: 'TagCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type TagCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagCloudData = {
  __typename?: 'TagCloudData';
  config?: Maybe<TagCloudModuleConfigData>;
  settings?: Maybe<TagCloudModuleSettingData>;
};

export type TagCloudInput = {
  config?: InputMaybe<TagCloudModuleConfigInput>;
  settings?: InputMaybe<TagCloudModuleSettingInput>;
};

export type TagCloudModuleConfigData = {
  __typename?: 'TagCloudModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<TagAutoGenerateBy>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TagCloudModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<TagAutoGenerateBy>;
  tags?: InputMaybe<Array<InputMaybe<TagSchemaInput>>>;
};

export type TagCloudModuleSettingData = {
  __typename?: 'TagCloudModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type TagCloudModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TagSchemaInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
};

export type TagWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type TagsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TagsResponse = {
  __typename?: 'TagsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TagsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<TagsSortOn>;
};

export enum TagsSortOn {
  CreatedAt = 'createdAt',
  Name = 'name'
}

export type TestPerformanceData = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceType?: InputMaybe<Scalars['String']['input']>;
  platformId?: InputMaybe<Scalars['ID']['input']>;
  platformType?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<TestPerformanceSource>;
  type?: InputMaybe<TestPerformanceType>;
};

export enum TestPerformanceSource {
  Db = 'DB',
  ElasticSearch = 'ELASTIC_SEARCH',
  NodeCache = 'NODE_CACHE',
  Redis = 'REDIS'
}

export enum TestPerformanceType {
  Comment = 'COMMENT',
  Prayer = 'PRAYER'
}

export type Topic = {
  __typename?: 'Topic';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum TopicAutoGenerateBy {
  Random = 'RANDOM',
  Recent = 'RECENT'
}

export type TopicCarouselData = {
  __typename?: 'TopicCarouselData';
  config?: Maybe<TopicCarouselModuleConfigData>;
  settings?: Maybe<TopicCarouselModuleSettingData>;
};

export type TopicCarouselInput = {
  config?: InputMaybe<TopicCarouselModuleConfigInput>;
  settings?: InputMaybe<TopicCarouselModuleSettingInput>;
};

export type TopicCarouselModuleConfigData = {
  __typename?: 'TopicCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<TopicAutoGenerateBy>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type TopicCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<TopicAutoGenerateBy>;
  topics?: InputMaybe<Array<InputMaybe<TopicSchemaInput>>>;
};

export type TopicCarouselModuleSettingData = {
  __typename?: 'TopicCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  topicTitle?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type TopicCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  topicTitle?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicGridData = {
  __typename?: 'TopicGridData';
  config?: Maybe<TopicGridModuleConfigData>;
  settings?: Maybe<TopicGridModuleSettingData>;
};

export type TopicGridInput = {
  config?: InputMaybe<TopicGridModuleConfigInput>;
  settings?: InputMaybe<TopicGridModuleSettingInput>;
};

export type TopicGridModuleConfigData = {
  __typename?: 'TopicGridModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<TopicAutoGenerateBy>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type TopicGridModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<TopicAutoGenerateBy>;
  topics?: InputMaybe<Array<InputMaybe<TopicSchemaInput>>>;
};

export type TopicGridModuleSettingData = {
  __typename?: 'TopicGridModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  topicTitle?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type TopicGridModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  topicTitle?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicListData = {
  __typename?: 'TopicListData';
  config?: Maybe<TopicListModuleConfigData>;
  settings?: Maybe<TopicListModuleSettingData>;
};

export type TopicListInput = {
  config?: InputMaybe<TopicListModuleConfigInput>;
  settings?: InputMaybe<TopicListModuleSettingInput>;
};

export type TopicListModuleConfigData = {
  __typename?: 'TopicListModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<TopicAutoGenerateBy>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type TopicListModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<TopicAutoGenerateBy>;
  topics?: InputMaybe<Array<InputMaybe<TopicSchemaInput>>>;
};

export type TopicListModuleSettingData = {
  __typename?: 'TopicListModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  topicTitle?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type TopicListModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  topicTitle?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicSchemaInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type TopicUniqueInput = {
  id: Scalars['ID']['input'];
};

export type TopicsFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TopicsResponse = {
  __typename?: 'TopicsResponse';
  count?: Maybe<Scalars['Int']['output']>;
  topics?: Maybe<Array<Maybe<Topic>>>;
};

export type TopicsSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<TopicsSortOn>;
};

export enum TopicsSortOn {
  CreatedAt = 'createdAt',
  Key = 'key',
  Name = 'name'
}

export type TransferCommunityInput = {
  communityMemberId: Scalars['ID']['input'];
};

export type UpdateAssetInput = {
  blurhash?: InputMaybe<Scalars['String']['input']>;
  categoryKey?: InputMaybe<AssetCategoryEnum>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  information?: InputMaybe<AssetInformationInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAudioAssetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAudioAssetResponse = {
  __typename?: 'UpdateAudioAssetResponse';
  asset?: Maybe<Asset>;
  message?: Maybe<Scalars['String']['output']>;
};

export type UpdateAudioAssetStatusInput = {
  peertubeUUID: Scalars['ID']['input'];
  platformId: Scalars['ID']['input'];
};

export type UpdateCommentInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  giphyId?: InputMaybe<Scalars['String']['input']>;
  mediaDimensions?: InputMaybe<MediaDimensionsInput>;
  mediaType?: InputMaybe<CommentMediaType>;
  mediaUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommunityInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<CommunityTagsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Array<InputMaybe<CommunityTopicsInput>>>;
  visibility?: InputMaybe<CommunityVisibility>;
};

export type UpdateCommunityMemberData = {
  status?: InputMaybe<UpdateCommunityStatus>;
};

export enum UpdateCommunityStatus {
  Accept = 'ACCEPT',
  Reject = 'REJECT'
}

export type UpdateContactInquiryData = {
  status?: InputMaybe<ContactInquiryStatus>;
};

export type UpdateCurrentUserAdminInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCurrentUserInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  zipCode: Scalars['String']['input'];
};

export type UpdatePageInput = {
  appIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePageModuleInput = {
  articleCarouselModule?: InputMaybe<ArticleCarouselInput>;
  articleCarouselModuleV2?: InputMaybe<ArticleCarouselInputV2>;
  articleListModule?: InputMaybe<ArticleListInput>;
  articleListModuleV2?: InputMaybe<ArticleListInputV2>;
  collectionCarouselModule?: InputMaybe<CollectionCarouselInput>;
  collectionGridModule?: InputMaybe<CollectionGridInput>;
  collectionItemCarouselModule?: InputMaybe<CollectionItemCarouselInput>;
  collectionItemGridModule?: InputMaybe<CollectionItemGridInput>;
  collectionItemListModule?: InputMaybe<CollectionItemListInput>;
  collectionListModule?: InputMaybe<CollectionListInput>;
  communityCarouselModule?: InputMaybe<CommunityCarouselInput>;
  communityGridModule?: InputMaybe<CommunityGridInput>;
  contactOfficialCarouselModule?: InputMaybe<ContactOfficialCarouselInput>;
  contactUsModule?: InputMaybe<ContactUsUpdateInput>;
  contributorCarouselModule?: InputMaybe<ContributorCarouselInput>;
  contributorGridModule?: InputMaybe<ContributorGridInput>;
  contributorListModule?: InputMaybe<ContributorListInput>;
  copyHeavyHeroModule?: InputMaybe<CopyHeavyHeroInput>;
  copyHeavyModule?: InputMaybe<CopyHeavyInput>;
  ctaBannerModule?: InputMaybe<CtaBannerInput>;
  ctaBannerWithTextModule?: InputMaybe<CtaBannerWithTextInput>;
  ctaBlockModule?: InputMaybe<CtaBlockInput>;
  ctaButtonListModule?: InputMaybe<CtaButtonListInput>;
  ctaCarouselModule?: InputMaybe<CtaCarouselInput>;
  ctaGridModule?: InputMaybe<CtaGridInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  donationModule?: InputMaybe<DonationUpdateInput>;
  faqModule?: InputMaybe<FaqInput>;
  featuredArticleModule?: InputMaybe<FeaturedArticleInput>;
  featuredArticleModuleV2?: InputMaybe<FeaturedArticleInputV2>;
  featuredCollectionModule?: InputMaybe<FeaturedCollectionInput>;
  featuredCollectionSliderModule?: InputMaybe<FeaturedCollectionSliderInput>;
  featuredCommunityModule?: InputMaybe<FeaturedCommunityInput>;
  featuredContributorModule?: InputMaybe<FeaturedContributorInput>;
  featuredPodcastModule?: InputMaybe<FeaturedPodcastInput>;
  featuredPodcastSliderModule?: InputMaybe<FeaturedPodcastSliderInput>;
  featuredTagModule?: InputMaybe<FeaturedTagInput>;
  featuredTopicModule?: InputMaybe<FeaturedTopicInput>;
  featuredVideoModule?: InputMaybe<FeaturedVideoInput>;
  featuredVideoSliderModule?: InputMaybe<FeaturedVideoSliderInput>;
  formCarouselModule?: InputMaybe<FormCarouselInput>;
  formDisplayModule?: InputMaybe<FormDisplayInput>;
  heroModule?: InputMaybe<HeroInput>;
  htmlTextBlockModule?: InputMaybe<HtmlTextBlockInput>;
  informationModule?: InputMaybe<InformationInput>;
  leadGenModule?: InputMaybe<LeadGenUpdateInput>;
  liveVideoPlayerModule?: InputMaybe<LiveVideoPlayerInput>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  podcastCarouselModule?: InputMaybe<PodcastCarouselInput>;
  podcastContinueListeningCarouselModule?: InputMaybe<PodcastContinueListeningCarouselInput>;
  podcastGridModule?: InputMaybe<PodcastGridInput>;
  podcastListModule?: InputMaybe<PodcastListInput>;
  podcastListenLaterCarouselModule?: InputMaybe<PodcastListenLaterCarouselInput>;
  podcastPlayerModule?: InputMaybe<PodcastPlayerInput>;
  postCarouselModule?: InputMaybe<PostCarouselInput>;
  postDetailModule?: InputMaybe<PostDetailInput>;
  postListModule?: InputMaybe<PostListInput>;
  quoteModule?: InputMaybe<QuoteInput>;
  sourceCarouselModule?: InputMaybe<SourceCarouselInput>;
  sourceListModule?: InputMaybe<SourceListInput>;
  spacerModule?: InputMaybe<SpacerInput>;
  status?: InputMaybe<PageModuleStatus>;
  tagCarouselModule?: InputMaybe<TagCarouselInput>;
  tagCloudModule?: InputMaybe<TagCloudInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topicCarouselModule?: InputMaybe<TopicCarouselInput>;
  topicGridModule?: InputMaybe<TopicGridInput>;
  topicListModule?: InputMaybe<TopicListInput>;
  videoCarouselModule?: InputMaybe<VideoCarouselInput>;
  videoContinueWatchingCarouselModule?: InputMaybe<VideoContinueWatchingCarouselInput>;
  videoGridModule?: InputMaybe<VideoGridInput>;
  videoListModule?: InputMaybe<VideoListInput>;
  videoPlayerModule?: InputMaybe<VideoPlayerInput>;
  videoPlayerModuleV2?: InputMaybe<VideoPlayerInputV2>;
  videoWatchLaterCarouselModule?: InputMaybe<VideoWatchLaterCarouselInput>;
};

export type UpdatePageModuleOrderInput = {
  order: Scalars['Int']['input'];
};

export type UpdatePageStatusInput = {
  status: PageStatus;
};

export type UpdatePlaylistInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlaylistItemOrderDataInput = {
  itemId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type UpdatePodcastInput = {
  allowedPlans?: InputMaybe<Array<InputMaybe<PodcastAllowedPlanInput>>>;
  audioId?: InputMaybe<Scalars['ID']['input']>;
  autoPublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  code: Scalars['String']['input'];
  contentRating?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  imageThumbnailId?: InputMaybe<Scalars['ID']['input']>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<InputMaybe<PodcastSourcesInput>>>;
  speakers: Array<PodcastContributorsInput>;
  status?: InputMaybe<PodcastStatus>;
  tags?: InputMaybe<Array<InputMaybe<PodcastTagsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics: Array<PodcastTopicsInput>;
};

export type UpdatePostInput = {
  attachmentId?: InputMaybe<Scalars['ID']['input']>;
  instanceId?: InputMaybe<Scalars['String']['input']>;
  instanceType?: InputMaybe<PostInstanceType>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTagInput = {
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVideoAssetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVideoAssetResponse = {
  __typename?: 'UpdateVideoAssetResponse';
  asset?: Maybe<Asset>;
  message?: Maybe<Scalars['String']['output']>;
};

export type UpdateVideoAssetStatus = {
  peertubeUUID: Scalars['ID']['input'];
  platformId: Scalars['ID']['input'];
};

export type UpdateVideoAssetStatusInput = {
  peertubeUUID: Scalars['ID']['input'];
  platformId: Scalars['ID']['input'];
};

export type UpdateVideoInput = {
  allowedPlans?: InputMaybe<Array<InputMaybe<VideoAllowedPlanInput>>>;
  audioTrackIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  autoPublishAt?: InputMaybe<Scalars['DateTime']['input']>;
  contentRating?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  html?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  imageThumbnailId?: InputMaybe<Scalars['ID']['input']>;
  liveStatus?: InputMaybe<VideoLiveStatus>;
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  metaFooter?: InputMaybe<Scalars['String']['input']>;
  metaHeader?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resources?: InputMaybe<Array<InputMaybe<VideoResourceInput>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<InputMaybe<VideoSourcesInput>>>;
  speakers: Array<VideoContributorsInput>;
  status?: InputMaybe<VideoStatus>;
  tags?: InputMaybe<Array<InputMaybe<VideoTagsInput>>>;
  textTrackIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  timelineThumbnailId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topics: Array<VideoTopicsInput>;
  videoId?: InputMaybe<Scalars['ID']['input']>;
  videoThumbnailId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpsertBiblicalNotificationPreferenceInput = {
  email: BiblicalNotificationPreferenceAction;
  sms: BiblicalNotificationPreferenceAction;
};

export type UpsertPodcastPlayTimeInput = {
  playTime: Scalars['Float']['input'];
  podcastId: Scalars['ID']['input'];
};

export type UpsertVideoWatchTimeInput = {
  videoId: Scalars['ID']['input'];
  watchTime: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
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
  oneTimePlans?: Maybe<Array<Maybe<UserOneTimePlan>>>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  profileImage?: Maybe<Scalars['String']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
  submittedFormIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  totalPrayerTime?: Maybe<Scalars['Int']['output']>;
  uid?: Maybe<Scalars['Int']['output']>;
  uidStatus?: Maybe<UserUidStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
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

export type UserCreateInput = {
  appId: Scalars['String']['input'];
  assignedPlan?: InputMaybe<Scalars['String']['input']>;
  assignedPlanExpiry?: InputMaybe<Scalars['DateTime']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  oneTimePlans?: InputMaybe<Array<InputMaybe<UserOneTimePlanInput>>>;
  roles: Array<InputMaybe<UserRole>>;
  username?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserOneTimePlan = {
  __typename?: 'UserOneTimePlan';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export type UserOneTimePlanInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  isActive: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
};

export enum UserRole {
  User = 'USER'
}

export enum UserUidStatus {
  Completed = 'COMPLETED',
  Duplicate = 'DUPLICATE',
  Errored = 'ERRORED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED'
}

export type UserUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateAdminResponse = {
  __typename?: 'UserUpdateAdminResponse';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AdminUser>;
};

export type UserUpdateInput = {
  assignedPlan?: InputMaybe<Scalars['String']['input']>;
  assignedPlanExpiry?: InputMaybe<Scalars['DateTime']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  oneTimePlans?: InputMaybe<Array<InputMaybe<UserOneTimePlanInput>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserRole>>>;
  username?: InputMaybe<Scalars['String']['input']>;
  zipCode: Scalars['String']['input'];
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersFilter = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  legacyUsers?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  migratedAccount?: InputMaybe<Scalars['Boolean']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserRole>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  count?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type UsersSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<UsersSortOn>;
};

export enum UsersSortOn {
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  LastName = 'lastName'
}

export type ValidateSubscriptionPlanPermissionResponse = {
  __typename?: 'ValidateSubscriptionPlanPermissionResponse';
  allowed?: Maybe<Scalars['Boolean']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorTitle?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  limitExceeded?: Maybe<Scalars['Boolean']['output']>;
};

export type ValidateSubscriptionPlanPermissionWhereInput = {
  key: Scalars['String']['input'];
};

export type VerifyDeleteAccountOtpInput = {
  otp: Scalars['String']['input'];
};

export type Video = {
  __typename?: 'Video';
  allowedPlans?: Maybe<Array<Maybe<VideoAllowedPlan>>>;
  audioTracks?: Maybe<Array<Maybe<Asset>>>;
  autoPublishAt?: Maybe<Scalars['DateTime']['output']>;
  collectionSequence?: Maybe<Scalars['String']['output']>;
  collections?: Maybe<Array<Maybe<VideoCollection>>>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  contentRating?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Array<Maybe<Asset>>>;
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Asset>;
  imageThumbnail?: Maybe<Asset>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  liveStatus?: Maybe<VideoLiveStatus>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  metaFooter?: Maybe<Scalars['String']['output']>;
  metaHeader?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  prayerCount?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  resources?: Maybe<Array<Maybe<VideoResource>>>;
  slug?: Maybe<Scalars['String']['output']>;
  sources?: Maybe<Array<Maybe<Source>>>;
  speakers?: Maybe<Array<Maybe<Contributor>>>;
  status?: Maybe<VideoStatus>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  textTracks?: Maybe<Array<Maybe<Asset>>>;
  timelineThumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Maybe<Topic>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  videoAsset?: Maybe<Asset>;
  videoThumbnail?: Maybe<Asset>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  watchTime?: Maybe<Scalars['Float']['output']>;
};

export type VideoAllowedPlan = {
  __typename?: 'VideoAllowedPlan';
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export type VideoAllowedPlanInput = {
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  key: Scalars['String']['input'];
};

export enum VideoAutoGenerateSortBy {
  Random = 'RANDOM',
  Recent = 'RECENT',
  Views = 'VIEWS'
}

export type VideoCarouselData = {
  __typename?: 'VideoCarouselData';
  config?: Maybe<VideoCarouselModuleConfigData>;
  settings?: Maybe<VideoCarouselModuleSettingData>;
};

export type VideoCarouselInput = {
  config?: InputMaybe<VideoCarouselModuleConfigInput>;
  settings?: InputMaybe<VideoCarouselModuleSettingInput>;
};

export type VideoCarouselModuleConfigData = {
  __typename?: 'VideoCarouselModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<VideoAutoGenerateSortBy>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type VideoCarouselModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<VideoAutoGenerateSortBy>;
  videos?: InputMaybe<Array<InputMaybe<VideoSchemaInput>>>;
};

export type VideoCarouselModuleSettingData = {
  __typename?: 'VideoCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoProgressBar?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type VideoCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoProgressBar?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoCollection = {
  __typename?: 'VideoCollection';
  id?: Maybe<Scalars['ID']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type VideoContinueWatchingCarouselData = {
  __typename?: 'VideoContinueWatchingCarouselData';
  config?: Maybe<VideoContinueWatchingCarouselModuleConfigData>;
  settings?: Maybe<VideoContinueWatchingCarouselModuleSettingData>;
};

export type VideoContinueWatchingCarouselInput = {
  config?: InputMaybe<VideoContinueWatchingCarouselModuleConfigInput>;
  settings?: InputMaybe<VideoContinueWatchingCarouselModuleSettingInput>;
};

export type VideoContinueWatchingCarouselModuleConfigData = {
  __typename?: 'VideoContinueWatchingCarouselModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type VideoContinueWatchingCarouselModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoContinueWatchingCarouselModuleSettingData = {
  __typename?: 'VideoContinueWatchingCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type VideoContinueWatchingCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoContributorsInput = {
  contributorId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type VideoDurationRangeFilter = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoGridData = {
  __typename?: 'VideoGridData';
  config?: Maybe<VideoGridModuleConfigData>;
  settings?: Maybe<VideoGridModuleSettingData>;
};

export type VideoGridInput = {
  config?: InputMaybe<VideoGridModuleConfigInput>;
  settings?: InputMaybe<VideoGridModuleSettingInput>;
};

export type VideoGridModuleConfigData = {
  __typename?: 'VideoGridModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<VideoAutoGenerateSortBy>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type VideoGridModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<VideoAutoGenerateSortBy>;
  videos?: InputMaybe<Array<InputMaybe<VideoSchemaInput>>>;
};

export type VideoGridModuleSettingData = {
  __typename?: 'VideoGridModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  searchFilter?: Maybe<Scalars['Boolean']['output']>;
  tagsFilter?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoProgressBar?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type VideoGridModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  searchFilter?: InputMaybe<Scalars['Boolean']['input']>;
  tagsFilter?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoProgressBar?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoListData = {
  __typename?: 'VideoListData';
  config?: Maybe<VideoListModuleConfigData>;
  settings?: Maybe<VideoListModuleSettingData>;
};

export type VideoListInput = {
  config?: InputMaybe<VideoListModuleConfigInput>;
  settings?: InputMaybe<VideoListModuleSettingInput>;
};

export type VideoListModuleConfigData = {
  __typename?: 'VideoListModuleConfigData';
  autoGenerate?: Maybe<Scalars['Boolean']['output']>;
  autoGenerateByData?: Maybe<AutoGenerateByData>;
  autoGenerateByType?: Maybe<AutoGenerateType>;
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  autoGenerateSortBy?: Maybe<VideoAutoGenerateSortBy>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type VideoListModuleConfigInput = {
  autoGenerate?: InputMaybe<Scalars['Boolean']['input']>;
  autoGenerateById?: InputMaybe<Scalars['String']['input']>;
  autoGenerateByType?: InputMaybe<AutoGenerateType>;
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
  autoGenerateSortBy?: InputMaybe<VideoAutoGenerateSortBy>;
  videos?: InputMaybe<Array<InputMaybe<VideoSchemaInput>>>;
};

export type VideoListModuleSettingData = {
  __typename?: 'VideoListModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  searchFilter?: Maybe<Scalars['Boolean']['output']>;
  separator?: Maybe<Scalars['Boolean']['output']>;
  tagsFilter?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoDescription?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoProgressBar?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type VideoListModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  searchFilter?: InputMaybe<Scalars['Boolean']['input']>;
  separator?: InputMaybe<Scalars['Boolean']['input']>;
  tagsFilter?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoDescription?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoProgressBar?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VideoLiveStatus {
  Completed = 'COMPLETED',
  Live = 'LIVE',
  Paused = 'PAUSED',
  Pending = 'PENDING'
}

export type VideoPlayerData = {
  __typename?: 'VideoPlayerData';
  config?: Maybe<VideoPlayerModuleConfigData>;
  settings?: Maybe<VideoPlayerModuleSettingData>;
};

export type VideoPlayerDataV2 = {
  __typename?: 'VideoPlayerDataV2';
  config?: Maybe<VideoPlayerModuleConfigData>;
  settings?: Maybe<VideoPlayerModuleSettingData>;
};

export type VideoPlayerInput = {
  config?: InputMaybe<VideoPlayerModuleConfigInput>;
  settings?: InputMaybe<VideoPlayerModuleSettingInput>;
};

export type VideoPlayerInputV2 = {
  config?: InputMaybe<VideoPlayerModuleConfigInput>;
  settings?: InputMaybe<VideoPlayerModuleSettingInput>;
};

export type VideoPlayerModuleConfigData = {
  __typename?: 'VideoPlayerModuleConfigData';
  video?: Maybe<Video>;
};

export type VideoPlayerModuleConfigInput = {
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export type VideoPlayerModuleSettingData = {
  __typename?: 'VideoPlayerModuleSettingData';
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoDescription?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
};

export type VideoPlayerModuleSettingInput = {
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoDescription?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoResource = {
  __typename?: 'VideoResource';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<VideoResourceType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VideoResourceInput = {
  content: Scalars['String']['input'];
  type: VideoResourceType;
};

export enum VideoResourceType {
  Links = 'LINKS',
  Questions = 'QUESTIONS',
  Quotes = 'QUOTES',
  Scripture = 'SCRIPTURE'
}

export type VideoSchemaInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  videoId?: InputMaybe<Scalars['ID']['input']>;
};

export type VideoSourcesInput = {
  order: Scalars['Int']['input'];
  sourceId: Scalars['ID']['input'];
};

export enum VideoStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type VideoTagsInput = {
  order: Scalars['Int']['input'];
  tagId: Scalars['ID']['input'];
};

export type VideoTopicsInput = {
  order: Scalars['Int']['input'];
  topicId: Scalars['ID']['input'];
};

export type VideoWatchLaterCarouselData = {
  __typename?: 'VideoWatchLaterCarouselData';
  config?: Maybe<VideoWatchLaterCarouselModuleConfigData>;
  settings?: Maybe<VideoWatchLaterCarouselModuleSettingData>;
};

export type VideoWatchLaterCarouselInput = {
  config?: InputMaybe<VideoWatchLaterCarouselModuleConfigInput>;
  settings?: InputMaybe<VideoWatchLaterCarouselModuleSettingInput>;
};

export type VideoWatchLaterCarouselModuleConfigData = {
  __typename?: 'VideoWatchLaterCarouselModuleConfigData';
  autoGenerateLimit?: Maybe<Scalars['Int']['output']>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type VideoWatchLaterCarouselModuleConfigInput = {
  autoGenerateLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoWatchLaterCarouselModuleSettingData = {
  __typename?: 'VideoWatchLaterCarouselModuleSettingData';
  description?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['Boolean']['output']>;
  videoDate?: Maybe<Scalars['Boolean']['output']>;
  videoOrder?: Maybe<Scalars['Boolean']['output']>;
  videoSpeaker?: Maybe<Scalars['Boolean']['output']>;
  videoTag?: Maybe<Scalars['Boolean']['output']>;
  videoTimestamp?: Maybe<Scalars['Boolean']['output']>;
  videoTopic?: Maybe<Scalars['Boolean']['output']>;
  viewAll?: Maybe<Scalars['Boolean']['output']>;
};

export type VideoWatchLaterCarouselModuleSettingInput = {
  description?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  videoDate?: InputMaybe<Scalars['Boolean']['input']>;
  videoOrder?: InputMaybe<Scalars['Boolean']['input']>;
  videoSpeaker?: InputMaybe<Scalars['Boolean']['input']>;
  videoTag?: InputMaybe<Scalars['Boolean']['input']>;
  videoTimestamp?: InputMaybe<Scalars['Boolean']['input']>;
  videoTopic?: InputMaybe<Scalars['Boolean']['input']>;
  viewAll?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type VideosFilter = {
  collectionId?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<VideoDurationRangeFilter>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Limit']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sourceId?: InputMaybe<Scalars['ID']['input']>;
  speakerId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<VideoStatus>;
  tagId?: InputMaybe<Scalars['ID']['input']>;
  topicIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type VideosOptions = {
  includeWatchTime?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideosProgressResponse = {
  __typename?: 'VideosProgressResponse';
  videoId: Scalars['ID']['output'];
  watchTime: Scalars['Float']['output'];
};

export type VideosResponse = {
  __typename?: 'VideosResponse';
  count?: Maybe<Scalars['Int']['output']>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type VideosSort = {
  sortBy?: InputMaybe<SortOrder>;
  sortOn?: InputMaybe<VideosSortOn>;
};

export enum VideosSortOn {
  CreatedAt = 'createdAt',
  Title = 'title',
  ViewCount = 'viewCount'
}

export type WatchVideosFilter = {
  limit?: InputMaybe<Scalars['Limit']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkSpaceAppConfigData = {
  __typename?: 'WorkSpaceAppConfigData';
  dataType?: Maybe<Scalars['String']['output']>;
  fonts?: Maybe<Array<Maybe<WorkSpaceAppFontData>>>;
  key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type WorkSpaceAppFontData = {
  __typename?: 'WorkSpaceAppFontData';
  font?: Maybe<Asset>;
  style?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type WorkspaceApp = {
  __typename?: 'WorkspaceApp';
  config?: Maybe<Array<Maybe<WorkSpaceAppConfigData>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creator?: Maybe<AdminUser>;
  customDomain?: Maybe<Scalars['String']['output']>;
  deployment?: Maybe<AppDeployment>;
  description?: Maybe<Scalars['String']['output']>;
  domainStatus?: Maybe<AppCustomDomainStatus>;
  domainVerificationRecords?: Maybe<Array<Maybe<DomainVerificationRecord>>>;
  favicon?: Maybe<Scalars['String']['output']>;
  faviconKey?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  imageKey?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  metaData?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<WorkspaceAppType>;
  typeKey?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type WorkspaceAppType = {
  __typename?: 'WorkspaceAppType';
  image?: Maybe<Scalars['String']['output']>;
  imageKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type WorkspacePlatform = {
  __typename?: 'WorkspacePlatform';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  isEditable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Provider>;
  type?: Maybe<ProviderType>;
};

export type TopicsQueryVariables = Exact<{
  filter?: InputMaybe<TopicsFilter>;
  sort?: InputMaybe<TopicsSort>;
}>;

export type TopicsQuery = {
  __typename?: 'Query';
  topics?: {
    __typename?: 'TopicsResponse';
    count?: number | null;
    topics?: Array<{
      __typename?: 'Topic';
      id?: string | null;
      key?: string | null;
      name?: string | null;
    } | null> | null;
  } | null;
};

export const TopicsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Topics' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicsFilter' } }
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'TopicsSort' } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'topics' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filter' } }
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topics' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } }
                    ]
                  }
                },
                { kind: 'Field', name: { kind: 'Name', value: 'count' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<TopicsQuery, TopicsQueryVariables>;
