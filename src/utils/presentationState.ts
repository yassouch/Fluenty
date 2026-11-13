import type { Language, ServiceId } from '../data/presentationContent';

export function getDirectionForLang(lang: Language): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function getDocumentTitleForLang(lang: Language): string {
  return lang === 'ar'
    ? 'Fluenty.services — نجاحك هو مهمتنا'
    : 'Fluenty.services — Your success, our mission';
}

export function toggleSelectedService(
  current: ServiceId | null,
  clicked: ServiceId
): ServiceId | null {
  return current === clicked ? null : clicked;
}
