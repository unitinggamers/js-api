import {
  ApiErrors,
  RelationshipData,
  QueryData,
  PaginatedQuery,
} from '~types/common';
import {Organization} from '~models/organization';

export interface OrganizationQueryData extends QueryData<'organization'> {
  attributes: Pick<
    Organization,
    | 'acceptedTermsAt'
    | 'acceptedTermsIp'
    | 'address1'
    | 'address2'
    | 'bannerUrl'
    | 'brandPrimary'
    | 'city'
    | 'country'
    | 'currency'
    | 'description'
    | 'discordInviteUrl'
    | 'discord'
    | 'email'
    | 'googleAnalyticsAccountId'
    | 'logoUrl'
    | 'longName'
    | 'minimumRegistrationFeeCents'
    | 'phone'
    | 'postalCode'
    | 'primaryDomain'
    | 'promoVideo'
    | 'province'
    | 'registrationFeePercentage'
    | 'stripeConnectedAccount'
    | 'shortName'
    | 'supportEmail'
    | 'tagline'
    | 'twitch'
    | 'twitter'
    | 'url'
  >;
  relationships: {
    betaFlags: RelationshipData<'betaFlag'>[];
    leagues: RelationshipData<'league'>[];
  };
}

export interface OrganizationsQuery extends PaginatedQuery {
  data?: OrganizationQueryData[] | null;
}

export interface OrganizationQuery {
  data?: OrganizationQueryData | null;
}

export interface OrganizationMutation {
  data?: OrganizationQueryData | null;
  errors?: ApiErrors | null;
}
