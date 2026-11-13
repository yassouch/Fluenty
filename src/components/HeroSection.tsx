import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PRESENTATION_COPY, type Language } from '../data/presentationContent';
import { FluentyMark } from './FluentyMark';
import { FADE_UP_EASE } from './MotionReveal';

interface HeroSectionProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onWhatsAppClick: () => void;
}

export function HeroSection({ lang, onChangeLang, onWhatsAppClick }: HeroSectionProps) {
  const t = PRESENTATION_COPY[lang];

  return (
    <section id="top" className="pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Top language switch row */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <p className="text-xs sm:text-sm font-semibold text-[#1E6BFF]">
            {lang === 'ar' ? 'Fluenty.services · موقع تعريفي' : 'Fluenty.services · Presentation'}
          </p>

          <div
            role="group"
            aria-label={lang === 'ar' ? 'تغيير اللغة' : 'Switch language'}
            className="inline-flex items-center gap-1 p-1 bg-white rounded-xl border border-[#D8E3F5]"
          >
            <button
              type="button"
              onClick={() => onChangeLang('ar')}
              aria-pressed={lang === 'ar'}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                lang === 'ar'
                  ? 'bg-[#0A1F44] text-white'
                  : 'text-[#4B5D80] hover:text-[#0A1F44]'
              }`}
            >
              العربية
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                lang === 'en'
                  ? 'bg-[#0A1F44] text-white'
                  : 'text-[#4B5D80] hover:text-[#0A1F44]'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Main PDF-style Navy-to-Blue Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: FADE_UP_EASE }}
          className="rounded-[24px] text-white p-7 sm:p-10 md:p-14 relative overflow-hidden border border-[#1B2F57]"
          style={{
            background: 'linear-gradient(135deg, #0A1F44 0%, #103A88 55%, #1E6BFF 100%)',
          }}
        >
          {/* Subtle glowing architectural arc echoing the PDF cover */}
          <div
            className="pointer-events-none absolute -top-36 -end-24 w-[440px] h-[440px] rounded-full border border-[#5CC8FF]/25"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text & Action Column */}
            <div className="lg:col-span-7 min-w-0">
              <p className="text-sm font-semibold text-[#5CC8FF] mb-3">{t.heroKicker}</p>

              <h1
                className="font-extrabold tracking-tight text-white leading-[1.1] mb-5"
                style={{
                  fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)',
                  textWrap: 'balance',
                }}
              >
                {t.heroTitle}
                <span className="text-[#22D3EE]">.</span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mb-8">
                {t.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0A1F44] bg-white hover:bg-[#EAF3FF] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <MessageCircle className="w-4 h-4 text-[#1E6BFF]" strokeWidth={1.75} aria-hidden="true" />
                  <span>{t.heroPrimaryCta}</span>
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-5 py-3.5 text-sm sm:text-base font-semibold text-white border border-white/30 hover:border-white hover:bg-white/10 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t.heroSecondaryCta}
                </a>
              </div>
            </div>

            {/* Visual Showcase Frame matching Page 3 of the PDF */}
            <div className="lg:col-span-5 min-w-0">
              <div className="rounded-[20px] bg-white/10 backdrop-blur-sm border border-white/20 p-6 sm:p-7 flex flex-col justify-between min-h-[260px]">
                <div className="flex items-center justify-between gap-3">
                  <FluentyMark variant="color" className="w-12 h-12" />
                  <span
                    dir="ltr"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                    className="text-lg font-extrabold tracking-tight text-white"
                  >
                    Fluenty<span className="font-normal text-[#5CC8FF]">.services</span>
                  </span>
                </div>

                <div className="my-6 py-4 border-y border-white/15 text-center">
                  <p className="text-sm font-medium text-white/85">{t.heroStagePlaceholder}</p>
                </div>

                {/* 3 crisp surface labels matching the PDF showcase tags */}
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  {t.heroStageTags.map((tag) => (
                    <div
                      key={tag}
                      className="py-2 px-3 rounded-xl bg-white text-[#0A1F44] text-xs sm:text-sm font-bold shadow-xs"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
