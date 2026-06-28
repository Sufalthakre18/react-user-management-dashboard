<div align="center">

# UserMgr

### A modern User Management CRUD application built with React + TypeScript + Tailwind CSS v4


## [https://react-user-management-dashboard-chi.vercel.app/](https://react-user-management-dashboard-chi.vercel.app/) 

</div>

---



## ✨ Features

- 📋 **Read** — Fetch and display all users from JSONPlaceholder API in a responsive card grid
- ➕ **Create** — Add new users via a validated modal form (POST request)
- ✏️ **Update** — Edit any user with pre-filled form data (PUT request)
- 🗑️ **Delete** — Remove users with a confirmation prompt (DELETE request)
- 🔀 **Routing** — Home view + individual User Detail page via React Router v6
- 💀 **Skeleton Loader** — Shimmer placeholders shown during API fetch *(bonus)*
- ⚠️ **Error Handling** — User-facing error banners on failed API calls
- ✅ **Form Validation** — Inline field-level error messages
- 📱 **Fully Responsive** — Mobile-first layout, looks great on all screen sizes
- 🔷 **TypeScript** — Fully typed throughout *(bonus)*

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19^ | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Type safety |
| [Vite](https://vitejs.dev/) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | **v4** | 
| [React Router DOM](https://reactrouter.com/) | v7 | Client-side routing |
| [Axios](https://axios-http.com/) | 1.x | HTTP requests |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | — | Mock REST API |

---

## 📁 Project Structure

```
user-management-app/
├── public/
├── src/
│   ├── api/
│   │   └── users.ts          # All Axios API calls (CRUD)
│   ├── components/
│   │   ├── Navbar.tsx         # Top navigation bar
│   │   ├── UserCard.tsx       # Individual user card with actions
│   │   ├── UserForm.tsx       # Reusable create/edit modal form
│   │   ├── SkeletonCard.tsx   # loading
│   ├── pages/
│   │   ├── Home.tsx           # User grid with all CRUD logic
│   │   └── UserDetail.tsx     # Single user detail view
│   ├── types/
│   │   └── user.ts            # TypeScript interfaces
│   ├── App.tsx                # Root component with router setup
│   ├── main.tsx               # React DOM entry point
│   └── index.css              # Tailwind 
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Sufalthakre18/react-user-management-dashboard
cd user-management-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open in browser**

```
http://localhost:5173
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Build for production into `/dist` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |



---

## 🔌 API Reference

All requests go to [JSONPlaceholder](https://jsonplaceholder.typicode.com/).  
Since it's a mock API, **no data is actually created or deleted** — responses are simulated.

| Action | Method | Endpoint |
|---|---|---|
| Get all users | `GET` | `/users` |
| Get single user | `GET` | `/users/:id` |
| Create user | `POST` | `/users` |
| Update user | `PUT` | `/users/:id` |
| Delete user | `DELETE` | `/users/:id` |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Mobile `< 640px` | 1-column card grid |
| Tablet `640px+` | 2-column card grid |
| Desktop `1024px+` | 3-column card grid |

---


## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/amazing-feature

# 3. Commit your changes
git commit -m 'feat: add amazing feature'

# 4. Push to the branch
git push origin feature/amazing-feature

# 5. Open a Pull Request
```




---

<div align="center">

Made with ❤️ using React + Tailwind CSS v4

</div>