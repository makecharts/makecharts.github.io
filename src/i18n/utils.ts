import { ui, defaultLang, languages, type SupportedLanguage, type TranslationKey } from './ui';

export { languages, defaultLang, type SupportedLanguage, type TranslationKey };

export const supportedLocales = Object.keys(languages) as SupportedLanguage[];

/**
 * Extracts language code from the current URL pathname.
 * Root '/' resolves to 'en'. Localized subpaths like '/es/', '/de/' resolve to their respective codes.
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns translation helper function for a specific locale with fallback to defaultLang.
 */
export function useTranslations(lang: SupportedLanguage) {
  return function t(key: TranslationKey): string {
    const localeDict = ui[lang] as Record<string, string>;
    if (localeDict && key in localeDict) {
      return localeDict[key];
    }
    const defaultDict = ui[defaultLang] as Record<string, string>;
    return defaultDict[key] || (key as string);
  };
}

/**
 * Strips any current language subpath from a pathname.
 */
export function stripLangPrefix(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[0] in languages) {
    parts.shift();
  }
  return parts.join('/');
}

/**
 * Constructs localized path for language switcher.
 * 'en' is placed at the root '/', while others are placed at '/[lang]/'.
 */
export function getLocalizedPath(targetLang: SupportedLanguage, currentPathname = '/'): string {
  const cleanSubpath = stripLangPrefix(currentPathname);
  const suffix = cleanSubpath ? `${cleanSubpath}/` : '';
  if (targetLang === defaultLang) {
    return `/${suffix}`;
  }
  return `/${targetLang}/${suffix}`;
}

export interface HreflangEntry {
  lang: string;
  href: string;
}

/**
 * Generates all 7 bidirectional hreflang alternate links (6 languages + x-default).
 */
export function getHreflangLinks(currentPathname: string, siteUrl = 'https://makecharts.github.io'): HreflangEntry[] {
  const cleanSubpath = stripLangPrefix(currentPathname);
  const pathSuffix = cleanSubpath ? `${cleanSubpath}/` : '';
  const baseUrl = siteUrl.replace(/\/+$/, '');

  const links: HreflangEntry[] = supportedLocales.map((locale) => {
    if (locale === defaultLang) {
      return {
        lang: locale,
        href: `${baseUrl}/${pathSuffix}`,
      };
    }
    return {
      lang: locale,
      href: `${baseUrl}/${locale}/${pathSuffix}`,
    };
  });

  // Add x-default pointing to the default language root
  links.push({
    lang: 'x-default',
    href: `${baseUrl}/${pathSuffix}`,
  });

  return links;
}
