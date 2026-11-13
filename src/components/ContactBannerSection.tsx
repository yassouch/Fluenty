import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PRESENTATION_COPY, type Language } from '../data/presentationContent';
import { FadeInUp } from './MotionReveal';

interface ContactBannerSectionProps {
  lang: Language;
}

export function ContactBannerSection({ lang }: ContactBannerSectionProps) {
  const [showChannelInfo, setShowChannelInfo] = useState(false);
  const t = PRESENTATION_COPY[lang];

  return (
    <section id="contact" className="pt-4 pb-16 md:pb-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeInUp>
          <div
            className="rounded-[24px] p-8 sm:p-10 md:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, #0A1F44 0%, #103A88 55%, #1E6BFF 100%)',
            }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                {t.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base text-white/85">{t.ctaSubtitle}</p>
            </div>

            <button
              type="button"
              onClick={() => setShowChannelInfo((prev) => !prev)}
              aria-expanded={showChannelInfo}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0A1F44] bg-white hover:bg-[#EAF3FF] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <MessageCircle className="w-4 h-4 text-[#1E6BFF]" strokeWidth={1.75} aria-hidden="true" />
              <span>{t.ctaButton}</span>
            </button>
          </div>
        </FadeInUp>

        {showChannelInfo && (
          <div
            data-testid="whatsapp-info-panel"
            className="mt-4 rounded-[20px] bg-[#EAF3FF] border border-[#D8E3F5] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-base font-bold text-[#0A1F44]">{t.whatsappPreviewTitle}</h3>
              <p className="text-sm text-[#4B5D80] mt-1">{t.whatsappPreviewText}</p>
            </div>
            <span dir="ltr" className="font-mono text-xs font-semibold text-[#1E6BFF] shrink-0">
              Fluenty.services · WhatsApp
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
