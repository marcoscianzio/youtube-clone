import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  parentComment?: Maybe<Comment>;
  parentCommentId?: Maybe<Scalars['String']>;
  repliedUser?: Maybe<User>;
  repliedUserId?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Comment>>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<Video>;
  videoId: Scalars['String'];
  votes?: Maybe<Array<Vote>>;
};

export type CommentPagination = {
  __typename?: 'CommentPagination';
  comments: Array<Comment>;
  hasMore: Scalars['Boolean'];
};

export type CreateCommentInput = {
  content: Scalars['String'];
  parentCommentId?: InputMaybe<Scalars['String']>;
  repliedUserId?: InputMaybe<Scalars['String']>;
  videoId: Scalars['String'];
};

export type CreateVideoInput = {
  description?: InputMaybe<Scalars['String']>;
  duration: Scalars['Float'];
  file: Scalars['String'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
};

export type History = {
  __typename?: 'History';
  id: Scalars['String'];
  user: User;
  userId: Scalars['String'];
  video: Video;
  videoId: Scalars['String'];
  viewedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createVideo: Video;
  seeLater: Scalars['Boolean'];
  toggleSubscribe: Scalars['Boolean'];
  vote: Scalars['Boolean'];
};


export type MutationCreateCommentArgs = {
  values: CreateCommentInput;
};


export type MutationCreateVideoArgs = {
  values: CreateVideoInput;
};


export type MutationSeeLaterArgs = {
  id: Scalars['String'];
};


export type MutationToggleSubscribeArgs = {
  id: Scalars['String'];
};


export type MutationVoteArgs = {
  values: VoteInput;
};

export type Query = {
  __typename?: 'Query';
  commentReplies: CommentPagination;
  hello: Scalars['String'];
  me?: Maybe<User>;
  mySubscriptions: Array<User>;
  myVotes: Array<Video>;
  seeLater: VideoPagination;
  subsVideos?: Maybe<VideoPagination>;
  user: User;
  users: Array<User>;
  video: Video;
  videoComments: CommentPagination;
  videos: VideoPagination;
};


export type QueryCommentRepliesArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  parentCommentId: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeLaterArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySubsVideosArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryVideoArgs = {
  id: Scalars['String'];
};


export type QueryVideoCommentsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryVideosArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type SeeLater = {
  __typename?: 'SeeLater';
  addedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  video: Video;
  videoId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  banner?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  githubId: Scalars['String'];
  history?: Maybe<Array<History>>;
  location: Scalars['String'];
  pic?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Comment>>;
  seeLater?: Maybe<Array<SeeLater>>;
  subscribed?: Maybe<Array<User>>;
  subscribers?: Maybe<Array<User>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  verified: Scalars['Boolean'];
  videos?: Maybe<Array<Video>>;
  votes?: Maybe<Array<Vote>>;
};

export type Video = {
  __typename?: 'Video';
  author?: Maybe<User>;
  authorId: Scalars['String'];
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  duration: Scalars['Float'];
  file: Scalars['String'];
  history?: Maybe<Array<History>>;
  id: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  seeLater?: Maybe<Array<SeeLater>>;
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  views: Scalars['Float'];
  votes?: Maybe<Array<Vote>>;
};

export type VideoPagination = {
  __typename?: 'VideoPagination';
  hasMore: Scalars['Boolean'];
  videos: Array<Video>;
};

export type Vote = {
  __typename?: 'Vote';
  comment?: Maybe<Comment>;
  commentId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  value: Scalars['Float'];
  video?: Maybe<Video>;
  videoId?: Maybe<Scalars['String']>;
};

export type VoteInput = {
  commentId?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
  videoId?: InputMaybe<Scalars['String']>;
};

export type CreateVideoMutationVariables = Exact<{
  values: CreateVideoInput;
}>;


export type CreateVideoMutation = { __typename?: 'Mutation', createVideo: { __typename?: 'Video', id: string, file: string, title: string, createdAt: any, isPrivate: boolean, description?: string | null, views: number } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', githubId: string, username: string, email: string, displayName: string, verified: boolean, pic?: string | null, location: string, createdAt: any, updatedAt: any, banner?: string | null, description?: string | null } | null };

export type VideosQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type VideosQuery = { __typename?: 'Query', videos: { __typename?: 'VideoPagination', hasMore: boolean, videos: Array<{ __typename?: 'Video', id: string, file: string, title: string, createdAt: any, views: number, thumbnail: string, duration: number, author?: { __typename?: 'User', username: string, displayName: string, verified: boolean, pic?: string | null } | null }> } };


export const CreateVideoDocument = gql`
    mutation CreateVideo($values: CreateVideoInput!) {
  createVideo(values: $values) {
    id
    file
    title
    createdAt
    isPrivate
    description
    views
  }
}
    `;
export type CreateVideoMutationFn = Apollo.MutationFunction<CreateVideoMutation, CreateVideoMutationVariables>;

/**
 * __useCreateVideoMutation__
 *
 * To run a mutation, you first call `useCreateVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoMutation, { data, loading, error }] = useCreateVideoMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useCreateVideoMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideoMutation, CreateVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideoMutation, CreateVideoMutationVariables>(CreateVideoDocument, options);
      }
export type CreateVideoMutationHookResult = ReturnType<typeof useCreateVideoMutation>;
export type CreateVideoMutationResult = Apollo.MutationResult<CreateVideoMutation>;
export type CreateVideoMutationOptions = Apollo.BaseMutationOptions<CreateVideoMutation, CreateVideoMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    githubId
    username
    email
    displayName
    verified
    pic
    location
    createdAt
    updatedAt
    banner
    description
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const VideosDocument = gql`
    query Videos($take: Int, $cursor: String) {
  videos(take: $take, cursor: $cursor) {
    videos {
      id
      file
      title
      createdAt
      author {
        username
        displayName
        verified
        pic
      }
      views
      thumbnail
      duration
    }
    hasMore
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useVideosQuery(baseOptions?: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;