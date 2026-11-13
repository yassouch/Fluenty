# Fluenty.services — Presentation Website

موقع العرض التقديمي الرسمي لوكالة **Fluenty.services** باللغتين **العربية (الافتراضية – RTL)** و**الإنجليزية (LTR)**.

---

## هيكل الملفات المنظّم (Project Structure)

```text
├── index.html                          # نقطة الدخول (RTL افتراضياً، خطوط Google Fonts، ووسوم SEO)
├── package.json                        # الحزم والأوامر (dev, build, lint, test)
├── public/
│   └── favicon.svg                     # أيقونة المتصفح لشعار Fluenty (F + point)
└── src/
    ├── main.tsx                        # تشغيل تطبيق React
    ├── index.css                       # إعدادات Tailwind CSS وألوان وخطوط الهوية البصرية
    ├── App.tsx                         # الهيكل الرئيسي وإدارة اللغة (ar / en) واتجاه الصفحة
    ├── data/
    │   └── presentationContent.ts      # جميع النصوص والخدمات والخطوات والأعمال (عربي / إنجليزي)
    ├── components/
    │   ├── FluentyMark.tsx             # شعار F + point بصيغة SVG
    │   ├── Header.tsx                  # شريط التنقل العلوي وقائمة الجوال
    │   ├── HeroSection.tsx             # الواجهة الرئيسية + مبدّل اللغة (العربية | English)
    │   ├── ServicesSection.tsx         # شبكة الخدمات الست (6 بطاقات متناسقة)
    │   ├── ProcessSection.tsx          # أقسام: كيف نعمل، من نحن، من أعمالنا
    │   ├── ContactBannerSection.tsx    # بانر التواصل المباشر عبر واتساب
    │   └── Footer.tsx                  # التذييل السفلي ومبدّل اللغة
    └── utils/
        ├── presentationState.ts        # دوال مساعدة لاتجاه الصفحة والعنوان وتحديد الخدمة
        └── presentationState.test.ts   # اختبارات الوحدات
```

---

## التعديل السريع قبل النشر

1. **تعديل النصوص أو إضافة الأعمال الحقيقية**: عدّل ملف `src/data/presentationContent.ts`.
2. **تفعيل رابط واتساب المباشر**: عدّل زر واتساب في `src/components/ContactBannerSection.tsx` ليرتبط برقمك الرسمي عبر `https://wa.me/...`.

---

## التشغيل والبناء محلياً (Local Development & Build)

```bash
# 1. تثبيت الحزم
npm install

# 2. تشغيل بيئة التطوير محلياً
npm run dev

# 3. تشغيل الاختبارات وفحص الأنواع
npm test
npm run lint

# 4. بناء ملفات الموقع النهائية الجاهزة للرفع (تنتج داخل مجلد dist/)
npm run build
```

يمكن رفع مجلد `dist/` الناتج مباشرة إلى أي استضافة مواقع ساكنة (مثل **Vercel** أو **Netlify** أو **Cloudflare Pages** أو **GitHub Pages** أو استضافة cPanel).
