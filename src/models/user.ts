import {DateTime} from '~types/common';

export type UserRole = 'admin' | 'organization_admin' | 'user';

export interface User {
  acceptsMarketing: boolean;
  city: string;
  country: string;
  createdAt: DateTime;
  discord: string | null;
  email: string;
  emailVerified: boolean;
  epicGames: string | null;
  firstName: string;
  gamertag: string | null;
  lastName: string;
  lastSignInAt: DateTime | null;
  lastSignInIp: string | null;
  province: string;
  psn: string | null;
  role: UserRole;
  twitch: string | null;
  twitter: string | null;
  updatedAt: DateTime;
  xbox: string | null;
}
