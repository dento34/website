# 🚀 GITHUB'A YÜKLEME REHBERİ

## 1️⃣ **GitHub Repository Oluşturma**

### Adım 1: GitHub'a Giriş
1. https://github.com adresine gidin
2. Hesabınıza giriş yapın

### Adım 2: Yeni Repository Oluştur
1. Sağ üst köşedeki **+** butonuna tıklayın
2. **New repository** seçin
3. Repository bilgilerini doldurun:
   - **Repository name:** `website` veya `aylindagadasi-website`
   - **Description:** "Av. Aylin Dağadası Ünal Hukuk Bürosu Official Website"
   - ✅ **Public** seçin
   - ❌ **Initialize with README** seçmeyin (zaten var)
4. **Create repository** butonuna tıklayın

## 2️⃣ **Projeyi GitHub'a Yükleme**

### Terminal/PowerShell Komutları:

```bash
# Proje dizinine gidin
cd "C:\Users\mehme\OneDrive\Masaüstü\aylin-dagadasi-nextjs"

# Git repository başlat
git init

# Tüm dosyaları staging area'ya ekle
git add .

# İlk commit
git commit -m "Initial commit: Next.js website with SEO optimization"

# GitHub repository'i remote olarak ekle
git remote add origin https://github.com/KULLANICI_ADINIZ/website.git

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub'a push et
git push -u origin main
```

**⚠️ DİKKAT:** `KULLANICI_ADINIZ` kısmını kendi GitHub kullanıcı adınızla değiştirin!

## 3️⃣ **GitHub Pages Aktivasyonu**

### Adım 1: Repository Settings
1. GitHub repository'nizde **Settings** sekmesine gidin
2. Sol menüden **Pages** seçin

### Adım 2: Source Ayarları
1. **Source** bölümünde **GitHub Actions** seçin
2. Deploy action otomatik çalışacak

### Adım 3: Custom Domain (Opsiyonel)
Eğer özel domain kullanmak istiyorsanız:
1. **Custom domain** bölümüne domain adını yazın
2. **Enforce HTTPS** seçeneğini aktif edin

## 4️⃣ **Deployment Sonrası**

### Site URL'niz:
- **GitHub Pages URL:** `https://KULLANICI_ADINIZ.github.io/website/`
- **Custom Domain:** `https://www.aylindagadasi.com` (eğer ayarladıysanız)

### İlk Deployment:
- İlk push sonrası 5-10 dakika sürebilir
- **Actions** sekmesinden deployment durumunu izleyebilirsiniz

## 5️⃣ **Güncelleme Süreci**

Daha sonra değişiklik yapmak için:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Website güncelleme açıklaması"

# GitHub'a push et
git push
```

Her push sonrası site otomatik güncellenecek!

## 6️⃣ **Sorun Giderme**

### Deployment Başarısız Olursa:
1. **Actions** sekmesine gidin
2. Başarısız olan workflow'a tıklayın
3. Hata mesajlarını kontrol edin
4. Genellikle node_modules veya package-lock.json ile ilgili olur

### Site Açılmıyorsa:
1. 5-10 dakika bekleyin
2. GitHub Pages ayarlarını kontrol edin
3. Repository'nin public olduğundan emin olun

## 7️⃣ **SEO ve Analytics**

### Google Search Console:
1. https://search.google.com/search-console
2. Property ekleyin: `https://KULLANICI_ADINIZ.github.io`
3. Ownership verification yapın

### Google Analytics:
1. `src/app/layout.tsx` dosyasındaki GA kodunu güncelleyin
2. Gerçek tracking ID'nizi yazın

## 🎉 **TAMAMLANDI!**

Artık siteniz yayında! 

**Site URL:** `https://KULLANICI_ADINIZ.github.io/website/`

---

**Herhangi bir sorun yaşarsanız:**
📞 **0533 412 31 39** 
📧 **aylindagadasi@gmail.com**