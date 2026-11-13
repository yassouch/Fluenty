import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { PRESENTATION_COPY, type Language } from '../data/presentationContent';

interface HeaderProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onWhatsAppClick: () => void;
}

export function Header({ lang, onChangeLang, onWhatsAppClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = PRESENTATION_COPY[lang];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F9FF]/95 backdrop-blur-md border-b border-[#D8E3F5]">
      <div className="max-w-[1160px] mx-auto px-6 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          dir="ltr"
          style={{ fontFamily: 'Sora, sans-serif' }}
          className="text-lg md:text-xl font-extrabold tracking-tight text-[#0A1F44] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E6BFF] rounded"
        >
          Fluenty<span className="font-normal text-[#1E6BFF]">.services</span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}
          className="hidden md:flex items-center gap-7"
        >
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4B5D80] hover:text-[#0A1F44] hover:underline underline-offset-4 decoration-[#1E6BFF] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E6BFF] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary WhatsApp CTA + mobile drawer button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onWhatsAppClick}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1E6BFF] hover:bg-[#0A1F44] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E6BFF]"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            <span>{t.navCta}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen
                ? lang === 'ar'
                  ? 'إغلاق القائمة'
                  : 'Close menu'
                : lang === 'ar'
                ? 'فتح القائمة'
                : 'Open menu'
            }
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#D8E3F5] bg-white text-[#0A1F44] hover:bg-[#EAF3FF] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E6BFF]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#D8E3F5] bg-white px-6 py-4">
          <nav
            aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile navigation'}
            className="flex flex-col gap-1"
          >
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-medium text-[#0A1F44] hover:text-[#1E6BFF] border-b border-[#EAF3FF] last:border-b-0"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex items-center justify-between gap-3">
              <div
                role="group"
                aria-label={lang === 'ar' ? 'تغيير اللغة' : 'Switch language'}
                className="inline-flex items-center gap-1 p-1 bg-[#F6F9FF] rounded-xl border border-[#D8E3F5]"
              >
                <button
                  type="button"
                  onClick={() => onChangeLang('ar')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    lang === 'ar' ? 'bg-[#0A1F44] text-white' : 'text-[#4B5D80]'
                  }`}
                >
                  عربي
                </button>
                <button
                  type="button"
                  onClick={() => onChangeLang('en')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    lang === 'en' ? 'bg-[#0A1F44] text-white' : 'text-[#4B5D80]'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onWhatsAppClick();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#1E6BFF] hover:bg-[#0A1F44] rounded-xl transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                <span>{t.navCta}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
