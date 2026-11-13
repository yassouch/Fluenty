import { PRESENTATION_COPY, type Language } from '../data/presentationContent';

interface FooterProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export function Footer({ lang, onChangeLang }: FooterProps) {
  const t = PRESENTATION_COPY[lang];

  return (
    <footer className="bg-[#0A1F44] text-white border-t border-[#1B2F57]">
      <div className="max-w-[1160px] mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-4">
          <span
            dir="ltr"
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-lg font-extrabold tracking-tight"
          >
            Fluenty<span className="font-normal text-[#5CC8FF]">.services</span>
          </span>
          <span className="text-xs text-white/60">{t.footerRights}</span>
        </div>

        <nav
          aria-label={lang === 'ar' ? 'روابط التذييل' : 'Footer navigation'}
          className="flex flex-wrap items-center gap-5 text-sm text-white/80"
        >
          {t.footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div
          role="group"
          aria-label={lang === 'ar' ? 'تغيير اللغة' : 'Switch language'}
          className="inline-flex items-center gap-1 p-1 bg-[#060F24] rounded-xl border border-[#1B2F57]"
        >
          <button
            type="button"
            onClick={() => onChangeLang('ar')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              lang === 'ar' ? 'bg-[#1E6BFF] text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            العربية
          </button>
          <button
            type="button"
            onClick={() => onChangeLang('en')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              lang === 'en' ? 'bg-[#1E6BFF] text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            English
          </button>
        </div>
      </div>
    </footer>
  );
}
