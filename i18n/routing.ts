import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'de', 'ru'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
});
