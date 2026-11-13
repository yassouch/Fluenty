export type Language = 'ar' | 'en';

export type ServiceId =
  | 'websites'
  | 'digital-products'
  | 'ads-marketing'
  | 'graphic-design'
  | 'video-production'
  | 'documents';

export interface PresentationService {
  id: ServiceId;
  code: string;
  ar: {
    title: string;
    subtitle: string;
    details: string;
  };
  en: {
    title: string;
    subtitle: string;
    details: string;
  };
}

export const SERVICES: PresentationService[] = [
  {
    id: 'websites',
    code: '01',
    ar: {
      title: 'تطوير المواقع',
      subtitle: 'مواقع سريعة وعصرية تناسب نشاطك.',
      details: 'مواقع تعريفية وتجارية بتصميم نظيف، سرعة تحميل عالية، وتجربة واضحة على الحاسوب والجوال.',
    },
    en: {
      title: 'Website Development',
      subtitle: 'Fast, modern websites built for your business.',
      details: 'Clean corporate and showcase websites engineered for speed, clarity, and responsive precision across desktop and mobile.',
    },
  },
  {
    id: 'digital-products',
    code: '02',
    ar: {
      title: 'المنتجات الرقمية',
      subtitle: 'حلول رقمية مصممة حسب حاجتك.',
      details: 'واجهات وتطبيقات ويب عملية بأسلوب موحّد يسهل استخدامه دون تعقيد.',
    },
    en: {
      title: 'Digital Products',
      subtitle: 'Digital solutions tailored to your needs.',
      details: 'Practical web applications and digital tools designed with clear workflows and unified visual structure.',
    },
  },
  {
    id: 'ads-marketing',
    code: '03',
    ar: {
      title: 'الإعلان والتسويق',
      subtitle: 'حملات واضحة تصل إلى جمهورك.',
      details: 'إعداد وتوجيه الحملات الإعلانية برسائل مباشرة وتصاميم متناسقة تعبّر عن علامتك.',
    },
    en: {
      title: 'Ads & Marketing',
      subtitle: 'Clear campaigns that reach your audience.',
      details: 'Focused campaign messaging and cohesive creatives designed to communicate your offer directly.',
    },
  },
  {
    id: 'graphic-design',
    code: '04',
    ar: {
      title: 'التصميم الغرافيكي',
      subtitle: 'هوية وتصاميم احترافية متناسقة.',
      details: 'شعارات، أنظمة ألوان وخطوط، وقوالب منصات التواصل الاجتماعي بروح بصرية واحدة.',
    },
    en: {
      title: 'Graphic Design',
      subtitle: 'Cohesive identities and professional visuals.',
      details: 'Logos, brand palettes, typography rules, and social templates built under one disciplined system.',
    },
  },
  {
    id: 'video-production',
    code: '05',
    ar: {
      title: 'المونتاج والإنتاج المرئي',
      subtitle: 'فيديوهات مؤثرة بجودة عالية.',
      details: 'مقاطع تعريفية وترويجية وإنتاج مرئي بإيقاع حديث يخدم رسالتك في الثواني الأولى.',
    },
    en: {
      title: 'Video & Motion Production',
      subtitle: 'Impactful videos crafted in high quality.',
      details: 'Promotional cuts, brand motion, and visual storytelling built to communicate clearly from the first frame.',
    },
  },
  {
    id: 'documents',
    code: '06',
    ar: {
      title: 'الوثائق الأكاديمية والمهنية',
      subtitle: 'إعداد وتنسيق المذكرات والعروض.',
      details: 'تنسيق احترافي للمذكرات الجامعية، العروض التقديمية، والملفات التجارية باللغات العربية والفرنسية والإنجليزية.',
    },
    en: {
      title: 'Academic & Executive Documents',
      subtitle: 'Prepared and formatted reports and decks.',
      details: 'Structured formatting for theses, pitch decks, and business documents with clean multilingual typography.',
    },
  },
];

export const PRESENTATION_COPY = {
  ar: {
    nav: [
      { href: '#top', label: 'الرئيسية' },
      { href: '#services', label: 'خدماتنا' },
      { href: '#process', label: 'كيف نعمل' },
      { href: '#work', label: 'أعمالنا' },
      { href: '#about', label: 'من نحن' },
    ],
    navCta: 'واتساب',
    langSwitchLabel: 'English',
    heroKicker: 'خدمات رقمية وحلول إبداعية',
    heroTitle: 'نجاحك مهمتنا',
    heroSubtitle:
      'مواقع، تصميم، فيديو، إعلانات ووثائق أكاديمية. شريك رقمي واحد لكل ما تحتاجه.',
    heroPrimaryCta: 'راسلنا على واتساب',
    heroSecondaryCta: 'اكتشف خدماتنا',
    heroStagePlaceholder: 'عرض بصري للهوية والخدمات',
    heroStageTags: ['موقع', 'فيديو', 'تصميم'],
    servicesKicker: 'خدماتنا',
    servicesTitle: 'كل ما تحتاجه في مكان واحد',
    servicesNote: 'ستة مسارات متكاملة ضمن نظام بصري موحّد — اضغط على أي خدمة للاطلاع على تفاصيلها.',
    processKicker: 'كيف نعمل',
    processTitle: 'ثلاث خطوات فقط',
    steps: [
      {
        code: '01',
        title: 'أرسل رسالتك',
        desc: 'عبر واتساب، شاركنا فكرتك أو ما تحتاجه باختصار.',
      },
      {
        code: '02',
        title: 'نعمل عليه',
        desc: 'نُنجز مع مراجعتك وتأكيدك في كل مرحلة.',
      },
      {
        code: '03',
        title: 'تستلم النتيجة',
        desc: 'ملفات ومخرجات جاهزة ومنظمة بدقة.',
      },
    ],
    aboutKicker: 'من نحن',
    aboutTitle: 'شريكك الرقمي المتكامل، من الفكرة إلى التسليم',
    aboutText:
      'تجمع Fluenty.services بين تطوير الويب، المنتجات الرقمية، الإعلان، التصميم الغرافيكي، الإنتاج المرئي، والوثائق الأكاديمية والمهنية بأسلوب واضح، مباشر، احترافي وودود.',
    values: [
      { code: '01.', title: 'السلاسة', desc: 'تواصل مباشر دون تعقيد أو تشتت.' },
      { code: '02.', title: 'الموثوقية', desc: 'التزام بالمواعيد وجودة متسقة في كل تسليم.' },
      { code: '03.', title: 'النتائج', desc: 'مخرجات مصممة لتوصل رسالتك وتخدم أهدافك.' },
    ],
    workKicker: 'أعمالنا',
    workTitle: 'من أعمالنا',
    workSubtitle: 'مساحات عرض مخصّصة لنماذج الأعمال المعتمدة والحقيقية فقط.',
    workSlots: [
      { code: '01', label: 'عمل ١', note: 'مساحة مخصّصة لأول نموذج ويب أو هوية معتمد.' },
      { code: '02', label: 'عمل ٢', note: 'مساحة مخصّصة لإنتاج مرئي أو حملة فعلية.' },
      { code: '03', label: 'عمل ٣', note: 'مساحة مخصّصة لعرض تقديمي أو منتج رقمي حقيقي.' },
    ],
    ctaTitle: 'جاهز تبدأ؟',
    ctaSubtitle: 'تواصل معنا مباشرة وسنرد عليك بسرعة.',
    ctaButton: 'راسلنا على واتساب',
    whatsappPreviewTitle: 'التواصل المباشر عبر واتساب',
    whatsappPreviewText:
      'تم تجهيز واجهة العرض للربط المباشر مع رقم واتساب وحسابات التواصل فور اعتمادها.',
    footerLinks: [
      { href: '#top', label: 'الرئيسية' },
      { href: '#services', label: 'الخدمات' },
      { href: '#work', label: 'أعمالنا' },
      { href: '#about', label: 'من نحن' },
      { href: '#contact', label: 'اتصل بنا' },
    ],
    footerRights: '© 2026 Fluenty.services',
  },
  en: {
    nav: [
      { href: '#top', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'How We Work' },
      { href: '#work', label: 'Work' },
      { href: '#about', label: 'About' },
    ],
    navCta: 'WhatsApp',
    langSwitchLabel: 'العربية',
    heroKicker: 'Digital Services & Creative Solutions',
    heroTitle: 'Your success, our mission',
    heroSubtitle:
      'Websites, design, video, advertising, and academic & business documents. One digital partner for everything you need.',
    heroPrimaryCta: 'Message on WhatsApp',
    heroSecondaryCta: 'Explore Services',
    heroStagePlaceholder: 'Brand & Campaign Visual Showcase',
    heroStageTags: ['Website', 'Video', 'Design'],
    servicesKicker: 'Our Services',
    servicesTitle: 'Everything you need in one place',
    servicesNote: 'Six integrated disciplines under one cohesive visual system — select any card to read more.',
    processKicker: 'How We Work',
    processTitle: 'Just three clear steps',
    steps: [
      {
        code: '01',
        title: 'Send your message',
        desc: 'Reach out via WhatsApp and tell us briefly what you need.',
      },
      {
        code: '02',
        title: 'We build it',
        desc: 'We craft and review each stage closely with you.',
      },
      {
        code: '03',
        title: 'Receive the result',
        desc: 'Clean, organized files ready to launch and share.',
      },
    ],
    aboutKicker: 'About Us',
    aboutTitle: 'Your complete digital partner, from idea to delivery',
    aboutText:
      'Fluenty.services brings together websites, digital products, advertising, graphic design, video production, and academic & executive documents with a clear, direct, professional, and warm approach.',
    values: [
      { code: '01.', title: 'Fluidity', desc: 'One direct partner without fragmented handoffs.' },
      { code: '02.', title: 'Reliability', desc: 'Consistent craft and dependable delivery timelines.' },
      { code: '03.', title: 'Results', desc: 'Deliverables built to communicate clearly and perform.' },
    ],
    workKicker: 'Portfolio',
    workTitle: 'Selected Work',
    workSubtitle: 'Reserved showcase slots — only verified real client work will be published here.',
    workSlots: [
      { code: '01', label: 'Work 01', note: 'Reserved slot for a verified web or brand project.' },
      { code: '02', label: 'Work 02', note: 'Reserved slot for a real video or campaign piece.' },
      { code: '03', label: 'Work 03', note: 'Reserved slot for a digital product or deck.' },
    ],
    ctaTitle: 'Ready to connect?',
    ctaSubtitle: 'Reach out directly and we will respond quickly.',
    ctaButton: 'Message on WhatsApp',
    whatsappPreviewTitle: 'Direct WhatsApp & Social Links',
    whatsappPreviewText:
      'This presentation layout is ready to connect directly to your official WhatsApp number and social handles.',
    footerLinks: [
      { href: '#top', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    footerRights: '© 2026 Fluenty.services',
  },
} as const;
