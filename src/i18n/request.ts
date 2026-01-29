import {getRequestConfig} from 'next-intl/server';
import {defaultLocale} from './config';

export default getRequestConfig(async () => {
  const locale = defaultLocale;

  return {
    locale,
    timeZone: 'Europe/Vienna',
    messages: (await import(`../locales/${locale}.json`)).default
  };
});