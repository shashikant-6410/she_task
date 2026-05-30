# 🌟 SHE Foundation - Frontend Platform

A modern, highly responsive, and premium web application designed for the **SHE Foundation** to streamline communication, partnerships, and support requests. Built with React and Vite, featuring smooth animations, robust client-side validation, and instant feedback loops.

---

## 🚀 Live Deployment & Vercel Dashboard

The project is successfully deployed on **Vercel**! You can access the live application, track the build status, and view deployment analytics below:

| Feature | Link / Badge |
| :--- | :--- |
| **🌐 Live Application** | [![Website](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://she-task-w7t3.vercel.app/) |

---

## ✨ Features

- **💫 Premium UI/UX:** Stunning, elegant design matching the SHE Foundation brand identity, utilizing modern CSS variables, glassmorphism, responsive grids, and subtle interactive micro-animations.
- **🛡️ Real-Time Validation:** Smart error boundaries and instant input validation (for Name, Email, and Message) that guide users as they type.
- **✨ Shimmer & Loading States:** Built-in shimmer effects and an elegant custom loader to assure users that their submission is being processed.
- **🎉 Animated Success Screen:** A custom-designed SVG checkmark animation and thank you screen to provide a polished closing experience.
- **📱 Fully Responsive:** Adaptive layout designed to look exceptional on all devices, from high-resolution desktop monitors to smartphones.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** [React 19](https://react.dev/) & [Vite](https://vite.dev/) (For ultra-fast builds and HMR)
- **Styling:** Vanilla CSS Custom Variables (Premium HSL color palette, responsive design, custom animations)
- **Deployment Platform:** [Vercel](https://vercel.com/) (Serverless frontend hosting)

---

## 📦 Directory Structure

```text
react_app/            # React + Vite application
├── public/           # Static assets
├── src/
│   ├── components/
│   │   └── form.jsx  # Interactive Form Component
│   ├── App.jsx       # Root App Component
│   ├── App.css       # Layout styles
│   ├── index.css     # Global styles & design system tokens
│   └── main.jsx      # Vite entry point
├── index.html        # Main HTML skeleton
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

---

## 💻 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation & Run

1. **Navigate to the React App directory:**
   ```bash
   cd react_app
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   `http://localhost:5173` (or the port specified in your terminal)

---

## 🔮 Future Roadmap

- [ ] Connect form submission to database storage (Node.js/Express backend integration)
- [ ] Add support for attachments/documents
- [ ] Set up automated transactional emails using SendGrid/Nodemailer
- [ ] Integrate localization/internationalization support
