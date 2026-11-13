import { PRESENTATION_COPY, type Language } from '../data/presentationContent';
import { FadeInUp } from './MotionReveal';

interface ProcessSectionProps {
  lang: Language;
}

export function ProcessSection({ lang }: ProcessSectionProps) {
  const t = PRESENTATION_COPY[lang];

  return (
    <div className="space-y-0">
      {/* How We Work: 3 Simple Steps */}
      <section id="process" className="py-12 md:py-16 bg-white border-y border-[#D8E3F5]">
        <div className="max-w-[1160px] mx-auto px-6">
          <FadeInUp className="mb-10">
            <p className="text-sm font-semibold text-[#1E6BFF] mb-2">{t.processKicker}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A1F44]">
              {t.processTitle}
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((step, index) => (
              <FadeInUp
                key={step.code}
                delay={index * 0.08}
                className="rounded-[20px] bg-[#F6F9FF] border border-[#D8E3F5] p-6 sm:p-7 h-full"
              >
                <span className="font-display text-2xl font-extrabold text-[#1E6BFF] tabular-nums block mb-3">
                  {step.code}
                </span>
                <h3 className="text-lg font-bold text-[#0A1F44] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#4B5D80] leading-relaxed">{step.desc}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* About Us + Brand Pillars */}
      <section id="about" className="py-12 md:py-16">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <FadeInUp className="lg:col-span-5">
              <p className="text-sm font-semibold text-[#1E6BFF] mb-2">{t.aboutKicker}</p>
              <h2
                className="text-3xl font-extrabold tracking-tight text-[#0A1F44] leading-[1.18] mb-4"
                style={{ textWrap: 'balance' }}
              >
                {t.aboutTitle}
              </h2>
              <p className="text-base text-[#4B5D80] leading-relaxed">{t.aboutText}</p>
            </FadeInUp>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.values.map((val, index) => (
                <FadeInUp
                  key={val.code}
                  delay={index * 0.08}
                  className="rounded-[20px] bg-white border border-[#D8E3F5] p-6 h-full"
                >
                  <span className="font-mono text-xs font-semibold text-[#1E6BFF] tabular-nums block mb-2">
                    {val.code}
                  </span>
                  <h3 className="text-base font-bold text-[#0A1F44] mb-1.5">{val.title}</h3>
                  <p className="text-sm text-[#4B5D80] leading-relaxed">{val.desc}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio: Reserved Slots (Zero Fabricated Work) */}
      <section id="work" className="py-12 md:py-16 bg-white border-t border-[#D8E3F5]">
        <div className="max-w-[1160px] mx-auto px-6">
          <FadeInUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold text-[#1E6BFF] mb-2">{t.workKicker}</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0A1F44]">
                {t.workTitle}
              </h2>
            </div>
            <p className="text-sm text-[#4B5D80] max-w-md">{t.workSubtitle}</p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.workSlots.map((slot, index) => (
              <FadeInUp
                key={slot.code}
                delay={index * 0.08}
                className="rounded-[20px] border-2 border-dashed border-[#D8E3F5] bg-[#F6F9FF] p-8 min-h-[168px] flex flex-col items-center justify-center text-center h-full"
              >
                <span className="font-bold text-base text-[#0A1F44] mb-1.5">{slot.label}</span>
                <p className="text-xs text-[#4B5D80] max-w-xs leading-relaxed">{slot.note}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
