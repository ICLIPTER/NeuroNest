# 🧠 NeuroNest - AI-Powered Image Object Remover

[![Vercel Deployment](https://img.shields.io/badge/Live-Demo-4A7AFF?style=for-the-badge&logo=vercel&logoColor=white)](https://neuro-nest-seven.vercel.app/)
[![License](https://img.shields.io/github/license/ICLIPTER/NeuroNest?style=for-the-badge)](https://github.com/ICLIPTER/NeuroNest/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/ICLIPTER/NeuroNest?style=for-the-badge)](https://github.com/ICLIPTER/NeuroNest/stargazers)

**NeuroNest** is a modern AI-driven web application that allows users to seamlessly **remove unwanted objects from images** using advanced machine learning techniques.

---

## ✨ Features

- 🧠 AI-powered object detection and removal
- 🔐 Secure authentication with [Clerk.dev](https://clerk.dev/)
- 🖼️ Simple UI for uploading images and specifying the object to remove
- ⚡ Real-time image processing with feedback
- 💾 Processed image preview and download
- 💬 Instant toast notifications for user interactions
- 🌐 Fully responsive & optimized for desktop and mobile

---

## 📺 Live Demo

🔗 [Visit the live site here](https://neuro-nest-seven.vercel.app/)

---

## 🚀 Tech Stack

### Frontend
- **React.js** + **Vite**
- **Tailwind CSS** for styling
- **Lucide Icons**
- **React Hot Toast** for notifications
- **Clerk** for authentication

### Backend
- **Node.js + Express**
- **PostgreSQL** with `pg` or `postgres.js`
- **AI API** for image object removal (e.g., ClipDrop, Replicate, etc.)
- **Vercel** for frontend deployment
- **Railway / Render / Supabase** (if used for backend/db)

---

## 🖼️ Screenshots

| Upload Image | After Object Removal |
|--------------|----------------------|
| ![upload](./public/screens/upload.png) | ![processed](./public/screens/processed.png) |

---

## 📦 Installation & Setup

### 🔧 Prerequisites
- Node.js v18+
- PostgreSQL database
- Clerk project with frontend and backend JWT configuration



## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ICLIPTER/NeuroNest.git
cd NeuroNest
```

### 2. Install dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 3. Set up environment variables

Create `.env` files in both `client` and `server` directories:

#### `client/.env`
```
VITE_BASE_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

#### `server/.env`
```
PORT=5000
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgresql_connection_string
```

### 4. Start the development servers

```bash
# Backend
cd server
npm run dev

# Frontend (in a new terminal)
cd client
npm run dev
```

---

## ✨ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to improve or add.

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](https://github.com/ICLIPTER/NeuroNest/blob/main/LICENSE) file for details.

---

## 🧩 Suggestions?

Let me know if you'd also like:

- A sample `.env` file committed with placeholder values  
- Deployment instructions for **Vercel** + **Railway/Render**  
- A `LICENSE` file auto-generated and linked  
- GitHub Actions setup for CI/CD

---


