# ModerationDesk – Admin Panel Practice

ModerationDesk, React + TypeScript kullanılarak geliştirilmiş bir **admin panel pratiği** projesidir.  
Bu proje, REST API ile çalışan gerçek dünya admin panellerinde karşılaşılan temel problemleri çözmeye odaklanır.

Amaç; **Axios, service layer, CRUD işlemleri, optimistic UI ve state yönetimi** konularını pratik ederek öğrenmektir.

---

## 🚀 Features

- 🔄 **REST API Integration**
  - GET / PATCH / DELETE işlemleri
  - Axios ile API yönetimi

- 🧱 **Service Layer Architecture**
  - UI ve API logic birbirinden ayrılmıştır
  - Axios instance (`api.ts`) kullanımı

- ⏳ **Loading & Error Handling**
  - Global loading state
  - Kullanıcıya anlamlı hata mesajları

- 🗑️ **Delete Item**
  - Satır bazlı silme işlemi
  - İşlem sonrası liste yenileme

- ✏️ **Update Item (PATCH)**
  - Approve / Reject aksiyonları
  - Title güncelleme

- ⚡ **Optimistic UI Update**
  - Server cevabını beklemeden UI güncellenir
  - Hata durumunda rollback yapılır

- 🎯 **Row-level Pending State**
  - Sadece işlem yapılan satır disable edilir
  - Daha iyi kullanıcı deneyimi (UX)

---

## 🧠 Learned Concepts

Bu projede aşağıdaki kavramlar pratik edilmiştir:

- Axios vs Fetch farkları
- Axios instance (`axios.create`)
- Service layer pattern
- Async / await akışı
- HTTP status & error handling
- Optimistic update + rollback
- Immutable state update (`map`, spread operator)
- Row-level loading (`savingId` pattern)

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Axios**
- **Vite**

---

## 📂 Project Structure

src/
├─ api/
│ ├─ api.ts # Axios instance
│ └─ error.ts # Error normalize helper
├─ services/
│ └─ moderationService.ts
├─ App.tsx
└─ main.tsx

yaml


---

## ⚠️ Notes

- API olarak `jsonplaceholder.typicode.com` kullanılmıştır.
- JSONPlaceholder gerçek anlamda veri silmez/güncellemez;  
  bu proje **API akışı ve UI davranışını öğrenme amaçlıdır**.

---

## 🎯 Next Steps

Bu projeden sonra:
- Film API (TMDB) ile çalışan bir uygulama
- Firebase / Appwrite ile gerçek CRUD (Favorites)
- Search, debounce, abort controller
- Authentication & user-based data

gibi daha ileri seviye projelere geçilmiştir.

---

## 👤 Author

**Mehmet Höke**  
React & Frontend Development Practice Project
