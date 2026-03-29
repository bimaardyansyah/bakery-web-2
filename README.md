# La Fournée - Modern Vintage Bakery 🥐

A modern, responsive e-commerce website for an artisan bakery featuring a vintage aesthetic. Built with Laravel 12, React, Inertia.js, and styled with Tailwind CSS v4. Features smooth scroll animations powered by GSAP.

## ✨ Features

- **Vintage Aesthetic:** Warm color palette (cream, brown, pink, muted gold) with elegant serif typography.
- **Responsive Layout:** Mobile-first approach, fully responsive grid systems.
- **Refined Animations:** Smooth scroll trigger animations, elegant fade-ins, and interactive hover states using GSAP.
- **Complete Landing Page:** Includes Navbar, Hero, Products Showcase, About/Story, Testimonials, and Footer.

## 🛠️ Tech Stack

- **Backend:** Laravel 12
- **Bridge:** Inertia.js
- **Frontend:** React
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP (ScrollTrigger)
- **Database:** Configured for MySQL (XAMPP)

## 📂 Project Structure

All the magic happens in `resources/js/`:

- `Pages/Home.jsx`: The main landing page assembling all sections.
- `Components/`:
  - `Navbar.jsx`: Sticky navigation with an animated mobile menu.
  - `Hero.jsx`: Immersive hero section with gradient overlay & CTAs.
  - `Products.jsx`: Dynamic product grid with staggered GSAP entrances.
  - `About.jsx`: Split layout story section with bakery stats.
  - `Testimonials.jsx`: Elegant glassmorphism review cards.
  - `Footer.jsx`: Rich footer with wave divider and newsletter subscription.
- `resources/css/app.css`: Custom Tailwind v4 `@theme` configuration and global stylesheet.

## 🚀 Getting Started

### Prerequisites
- PHP 8.2+
- Composer
- Node.js & npm
- XAMPP (for MySQL database)

### Installation Guide

1. **Install PHP Dependencies:**
   ```bash
   composer install
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup (XAMPP):**
   - Start MySQL from the XAMPP Control Panel.
   - Create a database named `bakery_db` via phpMyAdmin.
   - Ensure your `.env` file reflects the connection:
     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=bakery_db
     DB_USERNAME=root
     DB_PASSWORD=
     ```

4. **Run Migrations:**
   ```bash
   php artisan migrate
   ```

5. **Start Development Servers:**
   You will need to run these commands in **two separate terminal windows**:

   *Terminal 1 (Frontend):*
   ```bash
   npm run dev
   ```

   *Terminal 2 (Backend):*
   ```bash
   php artisan serve
   ```

6. **View the Website:**
   Open your browser and visit: [http://localhost:8000](http://localhost:8000)

## 🎨 Design System Snapshot

- **Cream:** `#F5E6D3`
- **Brown:** `#6B4F3A`
- **Dusty Pink:** `#D8A7B1`
- **Muted Gold:** `#C9A66B`
- **Headings Font:** Playfair Display
- **Body Font:** Inter
