import { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Megaphone,
  Monitor,
  Palette,
  PlaySquare,
  Smartphone,
} from 'lucide-react';
import {
  PRESENTATION_COPY,
  SERVICES,
  type Language,
  type ServiceId,
} from '../data/presentationContent';
import { toggleSelectedService } from '../utils/presentationState';
import { FADE_UP_EASE, FadeInUp } from './MotionReveal';

interface ServicesSectionProps {
  lang: Language;
}

const SERVICE_ICONS: Record<ServiceId, typeof Monitor> = {
  websites: Monitor,
  'digital-products': Smartphone,
  'ads-marketing': Megaphone,
  'graphic-design': Palette,
  'video-production': PlaySquare,
  documents: FileText,
};

export function ServicesSection({ lang }: ServicesSectionProps) {
  const [selectedId, setSelectedId] = useState<ServiceId | null>('websites');
  const t = PRESENTATION_COPY[lang];

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeInUp className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-[#1E6BFF] mb-2">{t.servicesKicker}</p>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A1F44] leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              {t.servicesTitle}
            </h2>
          </div>
          <p className="text-sm text-[#4B5D80] max-w-md leading-relaxed">{t.servicesNote}</p>
        </FadeInUp>

        {/* 6 Uniform Rounded-[20px] Service Cards with Consistent Stroke Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id];
            const loc = service[lang];
            const isSelected = selectedId === service.id;

            return (
              <motion.button
                key={service.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.06,
                  ease: FADE_UP_EASE,
                }}
                onClick={() => setSelectedId((prev) => toggleSelectedService(prev, service.id))}
                aria-expanded={isSelected}
                className={`text-start p-6 rounded-[20px] border transition-colors duration-150 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E6BFF] ${
                  isSelected
                    ? 'bg-[#0A1F44] text-white border-[#0A1F44]'
                    : 'bg-white text-[#0A1F44] border-[#D8E3F5] hover:border-[#1E6BFF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-white/10 text-[#5CC8FF]' : 'bg-[#EAF3FF] text-[#1E6BFF]'
                      }`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums ${
                        isSelected ? 'text-[#5CC8FF]' : 'text-[#4B5D80]'
                      }`}
                    >
                      {service.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight mb-2">{loc.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isSelected ? 'text-white/85' : 'text-[#4B5D80]'
                    }`}
                  >
                    {loc.subtitle}
                  </p>
                </div>

                {isSelected && (
                  <p className="mt-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-white/90 leading-relaxed">
                    {loc.details}
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
