# Freelance Portfolio (Next.js 15)

Modern, bileşen odaklı bir ürün mühendisliği portföyü. Vaka çalışmaları (projects), bölümler (sections) ve tek bir veri kaynağı (`src/app/data.js`) üzerinden içerik yönetimi sunar.

## Özellikler
- Next.js App Router (15) + React 19
- Tema değişimi ve CSS değişkenleriyle tutarlı tasarım
- Proje listeleme ve dinamik detay sayfaları (`/projects`, `/projects/[slug]`)
- Bölüm bazlı modüler mimari (Hero, Services, Experience, Testimonials vb.)

## Kurulum ve Çalıştırma
```bash
npm install
npm run dev    # geliştirici sunucusu (http://localhost:3000)
npm run build  # üretim derlemesi
npm start      # üretim sunucusu
npm run lint   # lint
```

## İçerik Düzenleme
- Genel veriler: `src/app/data.js`
  - `projects`: Proje/vaka içerikleri (slug, başlık, metrikler, etiketler...) 
  - `projectCategories`: Kategori filtreleri
  - `heroMetrics`, `services`, `skills`, `experiences`, `testimonials`, `contactChannels`, `faqs`, `socialLinks`
- Sayfalar: `src/app`
  - Anasayfa: `src/app/page.js`
  - İletişim: `src/app/contact/page.js`
  - Projeler: `src/app/projects/page.js`
  - Proje detayı: `src/app/projects/[slug]/page.js`
- Bileşenler: `src/components`
  - Bölümler: `src/components/sections/*`
  - Yerleşim: `src/components/layout/*`
  - UI: `src/components/ui/*` (SectionHeader, PillButton, IconPill)

## Kod Düzeni ve Stil
- Ortak UI parçaları küçük bileşenlere ayrıldı (tekrar eden kod azaltıldı).
- Kullanılmayan modüller temizlendi (ör. `Tag` bileşeni kaldırıldı, gereksiz ikon importları ayıklandı).
- Görsel/asset: `src/app/favicon.ico` dışındaki görsellere ihtiyaç yoktur.

## Notlar
- ESLint uyarısı (Next.js plugin autodetect) biliniyor; mevcut yapı ile `npm run lint` hatasız çalışır.
- Yeni proje eklemek için `src/app/data.js` içindeki `projects` listesine öğe ekleyin ve benzersiz `slug` verin.
