import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Crewmember = {
  __typename?: 'Crewmember';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role?: Maybe<Role>;
  sailboat?: Maybe<Sailboat>;
  sailboatID: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  crewmember?: Maybe<Crewmember>;
  sailboat?: Maybe<Sailboat>;
  sailboats: Array<Maybe<Sailboat>>;
};


export type QueryCrewmemberArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySailboatArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySailboatsArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
};

export enum Role {
  Bosum = 'Bosum',
  Captain = 'Captain',
  Firstmate = 'Firstmate',
  Navigator = 'Navigator'
}

export type Sailboat = {
  __typename?: 'Sailboat';
  breadth?: Maybe<Scalars['Float']['output']>;
  callSign?: Maybe<Scalars['String']['output']>;
  crewmembers: Array<Crewmember>;
  id: Scalars['ID']['output'];
  loa?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  sailArea?: Maybe<Scalars['Float']['output']>;
};


export type SailboatCrewmembersArgs = {
  max?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Crewmember: ResolverTypeWrapper<Crewmember>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Sailboat: ResolverTypeWrapper<Sailboat>;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Crewmember: Crewmember;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Query: {};
  Sailboat: Sailboat;
  String: Scalars['String']['output'];
};

export type CrewmemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Crewmember'] = ResolversParentTypes['Crewmember']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  sailboat?: Resolver<Maybe<ResolversTypes['Sailboat']>, ParentType, ContextType>;
  sailboatID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  crewmember?: Resolver<Maybe<ResolversTypes['Crewmember']>, ParentType, ContextType, RequireFields<QueryCrewmemberArgs, 'id'>>;
  sailboat?: Resolver<Maybe<ResolversTypes['Sailboat']>, ParentType, ContextType, RequireFields<QuerySailboatArgs, 'id'>>;
  sailboats?: Resolver<Array<Maybe<ResolversTypes['Sailboat']>>, ParentType, ContextType, Partial<QuerySailboatsArgs>>;
};

export type SailboatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sailboat'] = ResolversParentTypes['Sailboat']> = {
  breadth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  callSign?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crewmembers?: Resolver<Array<ResolversTypes['Crewmember']>, ParentType, ContextType, Partial<SailboatCrewmembersArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  loa?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sailArea?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Crewmember?: CrewmemberResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sailboat?: SailboatResolvers<ContextType>;
};

