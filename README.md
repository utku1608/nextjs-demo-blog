# 🧱 Next.js Demo Blog Uygulaması

Bu proje, **SE 4458 - Software Architecture & Design of Modern Large-Scale Systems** dersi kapsamında geliştirilmiştir. Amacı, modern web sistemlerinde yaygın olarak kullanılan **Next.js** framework'ünün temel mimari özelliklerini tanıtmak ve çalışan bir örnekle göstermektir.

## 🚀 Proje Özeti

Bu uygulama, Next.js ile geliştirilmiş basit ve modüler bir blog sistemidir. SEO uyumluluğu, hız ve kullanıcı deneyimi ön planda tutulmuştur. Hem statik hem de dinamik sayfa üretimi desteklenmiştir.

## 🔧 Kullanılan Next.js Özellikleri

- ✅ **`getStaticProps()`**: Anasayfadaki blog yazıları, build aşamasında statik olarak oluşturulur.
- ✅ **`getStaticPaths()`**: Dinamik URL’lere göre detay sayfaları oluşturulur.
- ✅ **Dinamik Routing**: `pages/posts/[id].js` dosyası ile her blog yazısı için ayrı detay sayfası sağlanır.
- ✅ **Client-Side Rendering (CSR)**: Yorum ekleme alanı yalnızca tarayıcı tarafında çalışır.
- ✅ **API Routes**: `pages/api/posts.js` üzerinden blog verileri JSON formatında sunulur.

## 🛠️ Projeyi Çalıştırmak

### Kurulum ve Çalıştırma Adımları

```bash
# 1. Gerekli bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```

### Uygulamayı Görüntüleme

Tarayıcınızdan aşağıdaki adresi ziyaret ederek uygulamayı görebilirsiniz:  
[http://localhost:3000](http://localhost:3000)

## 📁 Klasör Yapısı

```
nextjs-demo-blog/
├── pages/
│   ├── index.js           # Anasayfa (SSG ile blog listeleme)
│   ├── posts/[id].js      # Dinamik blog detay sayfası
│   └── api/posts.js       # API endpoint
├── data/
│   └── posts.js           # Sahte blog veri dosyası
├── styles/                # Stil dosyaları (isteğe bağlı)
├── public/                # Statik dosyalar (görseller, favicon vb.)
```

## 👨‍💻 Geliştirici

**Utku**  
Yaşar Üniversitesi – Computer Engineering  
GitHub: [@utku1608](https://github.com/utku1608)
