# Form + Backend di Vercel (dengan Admin Password)

Project ini menambahkan **backend** ke halaman HTML biasa agar:
- Data form tersimpan online di **Vercel Postgres**.
- Ada halaman **/admin.html** untuk melihat data, dilindungi password (ENV `ADMIN_PASSWORD`).

## 1) Siapkan Akun & Tools
1. Buat akun di **vercel.com**.
2. (Opsional) Install **Vercel CLI**: `npm i -g vercel`

## 2) Buat Project di Vercel
1. Buat repo GitHub baru dan unggah isi folder ini **apa adanya**.
2. Di Vercel: **New Project** → import repo tersebut.
3. Tambahkan **Integration: Vercel Postgres** (akan membuat `POSTGRES_URL` otomatis).

## 3) Environment Variables
Di Vercel → Project Settings → Environment Variables, tambahkan:
- `ADMIN_PASSWORD` = password admin Anda (bebas).
- (Jika tidak pakai Integration) `POSTGRES_URL` = string koneksi Postgres.

## 4) Deploy
- Klik **Deploy** dari dashboard Vercel, atau jalankan di lokal:
  ```bash
  vercel
  vercel --prod
  ```

## 5) Uji Fitur
- Buka halaman utama: `https://<project>.vercel.app/`
- Isi form → **Submit** → akan tersimpan ke database → redirect ke `thanks.html`.
- Admin: buka `https://<project>.vercel.app/admin.html`, masukkan password → klik **Lihat Data**.

## 6) Struktur & File Penting
- `index.html`, `index.css`, `script.js` → Frontend statis (form).
- `api/submit.js` → Endpoint POST untuk menyimpan data.
- `api/list.js` → Endpoint GET untuk membaca data (butuh `ADMIN_PASSWORD`).
- `README.md` → Tutorial ini.
- `.env.example` → Contoh env.

## 7) Tips Keamanan
- Simpan password admin di **ENV** (bukan di kode).
- Ganti password berkala.
- Jika butuh role multi admin, buat tabel `admins` dan JWT, atau aktifkan **Password Protect** di Vercel Pro.

## 8) Migrasi dari halaman lama
- CSS Anda sudah disalin ke `index.css`.
- Pastikan link CSS di `index.html` menunjuk ke `index.css`.
- Tombol submit sekarang betul-betul **mengirim** data ke backend (`/api/submit`).

Selesai ✅
