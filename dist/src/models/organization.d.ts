import { DateTime } from '~types/common';
export interface Organization {
    acceptedTermsAt: DateTime | null;
    acceptedTermsIp: string | null;
    address1: string;
    address2: string | null;
    bannerUrl: string | null;
    brandPrimary: string | null;
    city: string;
    country: string;
    currency: string;
    description: string | null;
    descriptionHtml: string | null;
    discord: string | null;
    discordInviteUrl: string | null;
    email: string;
    googleAnalyticsAccountId: string | null;
    logoUrl: string | null;
    longName: string;
    minimumRegistrationFeeCents: number;
    phone: string;
    postalCode: string;
    primaryDomain: string;
    promoVideo: string | null;
    province: string;
    registrationFeePercentage: number;
    shortName: string;
    supportEmail: string;
    tagline: string | null;
    twitch: string | null;
    twitter: string | null;
    url: string;
    stripeConnectedAccount: {
        acceptedTermsAt: DateTime | null;
        acceptedTermsIp: string | null;
        accountId: string;
        chargesEnabled: boolean;
        linkedAt: DateTime | null;
        payoutsEnabled: boolean;
        syncedAt: DateTime | null;
    } | null;
}
//# sourceMappingURL=organization.d.ts.map