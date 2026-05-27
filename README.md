# TradeX: Premium Fintech Trading Platform 🚀

TradeX is a high-performance, enterprise-grade mock stock trading platform built with a modern tech stack. Designed with a premium "SaaS/Fintech" aesthetic, TradeX features dark mode glassmorphism, real-time simulated market data, interactive components, and smooth page transitions.

![TradeX Banner](https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 📸 Platform Previews
*(Please save your screenshots to `frontend/public/media/` to see them here)*

### Main Dashboard
![TradeX Main Page](./frontend/public/media/main.png)

### Secure Login
![TradeX Login](./frontend/public/media/login.png)

### Live Marketplace
![TradeX Marketplace](./frontend/public/media/marketplace.png)

### SaaS Pricing
![TradeX Pricing](./frontend/public/media/pricing.png)

## 🌟 Key Features

* **Login-First Architecture**: Secure gateway mimicking enterprise trading platforms with Google and Apple SSO mockups.
* **Live Market Simulation**: Custom hooks power a live `StockTicker` that randomly fluctuates stock prices, flashing red and green to simulate real-time websocket data.
* **Interactive Marketplace (`/product`)**: A functional mock trading floor. Click "Buy" or "Sell" to trigger dynamic animated toast notifications confirming simulated order executions.
* **SaaS Pricing Tier System (`/pricing`)**: A beautiful 3-tier subscription grid with an interactive Monthly/Annual billing toggle, glowing borders, and feature comparisons.
* **Dynamic Savings Calculator**: Adjust a sleek slider to calculate projected yearly savings vs traditional brokers.
* **Global Search Autocomplete**: The navbar features a real-time search filtering system that instantly queries matching stock symbols.
* **Floating AI Support Widget**: A persistent chat widget with simulated conversational auto-replies.
* **3D Founder Profile**: Features an impressive 3D tilt-hover effect profiling the platform's creation.

## 🛠 Tech Stack

**Frontend Framework**
* [Next.js 16](https://nextjs.org/) (App Router Architecture)
* [React 18](https://react.dev/)
* Server & Client Components (`"use client"`)

**Styling & UI**
* [Tailwind CSS v4](https://tailwindcss.com/)
* Custom Glassmorphism Utility Classes (`glass-card`, `text-gradient`)
* [Framer Motion](https://www.framer.com/motion/) (Scroll-reveal, staggering, and heavy UI micro-interactions)

**Backend Architecture**
* Node.js & Express (Port 3002)
* MongoDB (Mongoose)
* Graceful fallback mechanisms to ensure the frontend demo remains highly functional even if the database is offline.

## 🚀 Getting Started

### Prerequisites
* Node.js v18+
* npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayush200545/Stock-Trading-Platform.git
   cd Stock-Trading-Platform
   ```

2. **Start the Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   *The frontend will start on `http://localhost:3000`*

3. **Start the Backend (Optional)**
   ```bash
   cd backend
   npm install
   npm start
   ```
   *The backend runs on `http://localhost:3002`. The frontend is designed to run beautifully even without the backend for portfolio demonstration purposes.*

## 📁 Project Structure (App Router)

The project has been entirely migrated from standard React CRA to Next.js App Router for superior SEO and performance.

```text
frontend/
├── src/
│   ├── app/
│   │   ├── layout.js       # Global Root Layout (Ticker, Navbar, ChatWidget)
│   │   ├── globals.css     # Global Tailwind & Custom Utilities
│   │   ├── login/          # Entry Gate
│   │   ├── home/           # Main Dashboard
│   │   ├── about/          # Founder Profile
│   │   ├── product/        # Interactive Marketplace
│   │   └── pricing/        # SaaS Tiered Pricing
│   └── components/
│       ├── Navbar.js       # w/ Search Autocomplete
│       ├── StockTicker.js  # Live Simulation
│       ├── ChatWidget.js   # Floating support bot
│       └── home/           # Dashboard sub-components
```

## 🎨 Design Philosophy

TradeX rejects the "boring" standard associated with financial tools. It utilizes deep blacks (`#050511`), vibrant neon accents (electric blues and purples), and blurred translucent overlays to create depth and hierarchy, making financial data feel futuristic and engaging.

---

*Developed by Ayush Askar as a comprehensive showcase of modern frontend engineering.*
