export interface locale {
  lang: string;
  name: string;
  dir: string;
  flag: string;
}

export const locales: locale[] = [
  { lang: 'ar', name: 'العربية', dir: 'rtl', flag: '🇸🇦' },
  { lang: 'en', name: 'English', dir: 'ltr', flag: '🇺🇸' }
]