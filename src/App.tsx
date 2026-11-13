/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ContactBannerSection } from './components/ContactBannerSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import type { Language } from './data/presentationContent';
import { getDirectionForLang, getDocumentTitleForLang } from './utils/presentationState';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = getDirectionForLang(lang);
    document.title = getDocumentTitleForLang(lang);
  }, [lang]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        dir={getDirectionForLang(lang)}
        className="min-h-screen flex flex-col bg-[#F6F9FF] text-[#0A1F44]"
      >
        <Header lang={lang} onChangeLang={setLang} onWhatsAppClick={scrollToContact} />
        <main className="flex-1">
          <HeroSection lang={lang} onChangeLang={setLang} onWhatsAppClick={scrollToContact} />
          <ServicesSection lang={lang} />
          <ProcessSection lang={lang} />
          <ContactBannerSection lang={lang} />
        </main>
        <Footer lang={lang} onChangeLang={setLang} />
      </div>
    </MotionConfig>
  );
}
