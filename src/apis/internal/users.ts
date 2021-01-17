import {OrganizationQueryData} from './organizations';

import {
  ApiErrors,
  RelationshipData,
  QueryData,
  PaginatedQuery,
} from '~types/common';
import {User} from '~models/user';

export interface UserQueryData extends QueryData<'user'> {
  attributes: Pick<
    User,
    | 'acceptsMarketing'
    | 'city'
    | 'country'
    | 'createdAt'
    | 'discord'
    | 'email'
    | 'emailVerified'
    | 'epicGames'
    | 'firstName'
    | 'gamertag'
    | 'lastName'
    | 'lastSignInAt'
    | 'lastSignInIp'
    | 'province'
    | 'psn'
    | 'role'
    | 'twitch'
    | 'twitter'
    | 'updatedAt'
    | 'xbox'
  >;
  relationships: {
    organization: RelationshipData<'organization'>[];
  };
  included: OrganizationQueryData[];
}

export interface UsersQuery extends PaginatedQuery {
  data?: UserQueryData[] | null;
}

export interface UserQuery {
  data?: UserQueryData | null;
}

export interface UserMutation {
  data?: UserQueryData | null;
  errors?: ApiErrors | null;
}
