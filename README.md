# 🧱 Next.js Demo Blog Uygulaması

Bu proje, **SE 4458 - Software Architecture & Design of Modern Large-Scale Systems** dersi kapsamında hazırlanmıştır. Amaç, modern web sistemlerinde kullanılan Next.js framework'ünün temel mimari yeteneklerini tanıtmak ve çalışan bir örnekle göstermektir.

---

## 🚀 Proje Özeti

Bu uygulama, Next.js ile oluşturulmuş basit bir blog sistemidir.  
Kullanılan özellikler sayesinde projenin SEO uyumlu, hızlı ve modüler bir yapıya sahip olması sağlanmıştır.

---

## 🔧 Kullanılan Next.js Özellikleri

| Özellik | Açıklama |
|--------|----------|
| ✅ `getStaticProps()` | Anasayfada blog yazıları build sırasında statik olarak oluşturuluyor |
| ✅ `getStaticPaths()` | Dinamik detay sayfaları URL’ye göre üretiliyor |
| ✅ Dinamik Routing | `pages/posts/[id].js` → her yazı için detay sayfası |
| ✅ CSR (Client-Side Rendering) | Yorum ekleme alanı sadece tarayıcıda çalışıyor |
| ✅ API Routes | `/api/posts` → blog verilerini JSON olarak döndüren backend fonksiyonu |

---

## 🛠️ Projeyi Çalıştırmak

### 1. Gerekli Kurulum
```bash
npm install
npm run dev
http://localhost:3000

📁 Klasör Yapısı
nextjs-demo-blog/
├── pages/
│   ├── index.js           # Anasayfa (SSG ile blog listeleme)
│   ├── posts/[id].js      # Dinamik blog detay sayfası
│   └── api/posts.js       # API endpoint
├── data/posts.js          # Sahte blog veri dosyası
├── styles/                # Stil dosyaları (isteğe bağlı)
├── public/                # Statik dosyalar

👨‍💻 Geliştirici
Utku

Yaşar Üniversitesi – Software Engineering

GitHub: @utku1608
