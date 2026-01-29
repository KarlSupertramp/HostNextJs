export const locales = ['en', 'de'] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = 'en';
export const localeCookieName = 'locale';