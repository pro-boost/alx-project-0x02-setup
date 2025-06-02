# Next.js Project Setup and Basics

## 📝 Introduction

Welcome to the **Next.js Project Setup and Basics** repository.  
This project serves as a practical introduction to building modern web applications using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It covers everything from initial setup to building reusable UI components, implementing routing, integrating APIs, and following best practices for a scalable and maintainable codebase.

---

## 🚀 Proje

This project is a comprehensive guide to setting up and working with:

- **Next.js** (React-based framework for building full-stack web apps)
- **TypeScript** (static typing for JavaScript)
- **Tailwind CSS** (utility-first CSS framework)

You’ll learn how to:

- Scaffold a Next.js app with TypeScript and Tailwind
- Implement routing with the Pages Router
- Build reusable UI components
- Manage props and state
- Fetch data from external APIs
- Organize your project using industry best practices

---

## 🎯 Learning Objectives

By completing this project, you will:

✅ Scaffold a Next.js application with TypeScript and Tailwind CSS  
✅ Implement basic routing using the Pages Router  
✅ Create reusable, typed components  
✅ Implement interactive elements like buttons and modals  
✅ Fetch and display data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)  
✅ Structure a scalable Next.js project  
✅ Work with props, interfaces, and local state  
✅ Build a responsive layout with navigation

---

## 🧰 Requirements

- Node.js (v16 or later)
- npm or yarn
- Basic React and TypeScript knowledge
- Familiarity with HTML and CSS
- Git + GitHub
- Code editor (VS Code recommended)

---

## 📁 Project Structure

alx-project-0x02/
├── components/
│ ├── common/ # Reusable UI elements
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/ # Layout components like Header
│ └── Header.tsx
├── interfaces/ # TypeScript interfaces
│ └── index.ts
├── pages/ # Page-based routing
│ ├── \_app.tsx
│ ├── \_document.tsx
│ ├── about.tsx
│ ├── home.tsx
│ ├── index.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/assets/images/
├── styles/ # Global styles
│ └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md

---

## 🛠️ Implementation Guide

1. **Project Setup**  
   Initialize the Next.js app with TypeScript and Tailwind CSS

2. **Routing**  
   Set up routing using the `pages/` directory

3. **Build Components**  
   Start with `Card`, `Button`, then move to `PostCard`, `UserCard`, and `Modal`

4. **Header**  
   Create a layout with a `Header` for navigation

5. **Fetch API Data**  
   Use `fetch()` or `useEffect` to get data from JSONPlaceholder and render it

6. **Test and Refactor**  
   Test each component and page incrementally

---

## 🧪 Best Practices

### 🧱 Structure

- Organize components by domain (common, layout, etc.)
- Store all interfaces in `interfaces/`
- Use page-based routing via `pages/`

### 🧩 Component Design

- Reusable, modular, typed with TypeScript
- Follow Single Responsibility Principle

### 🧼 Code Quality

- Use ESLint for linting
- Maintain consistent formatting
- Write clear comments where needed

### ⚡ Performance

- Optimize API calls
- Use lazy loading for modals/images
- Style with Tailwind’s utility classes

### 🧾 Documentation

- Maintain this README
- Document prop types and usage
- Use meaningful commit messages

---

## ✅ Expected Outcomes

By the end of this project, you will have:

- A fully functional and responsive Next.js application
- Clean, reusable UI components built with TypeScript
- Real data fetched from a mock REST API
- Proper routing and layout structure
- Production-ready project structure and practices

---

## 📎 License

This project is for educational purposes. Feel free to fork, clone, or build on top of it.

---

## 🙌 Contributing

Found a bug or want to improve something? Feel free to open an issue or pull request.

---

Let me know if you want to turn this into a GitHub template or add deployment instructions!
