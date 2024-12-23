# SimplyMaid Booking Platform

### Built on [ShipFast](https://shipfa.st) ⚡️

A modern, scalable booking platform for [SimplyMaid](https://www.simplymaid.com.au) designed to revolutionize house cleaning services across **Sydney, Adelaide, Melbourne, Canberra, Brisbane, Perth**, and their major suburbs.

This project builds upon ShipFast’s robust foundation, featuring **DaisyUI components** and a modular architecture, optimized for performance, SEO, and future scalability. We aim to replace third-party tools like Launch27 with a fully integrated in-house solution.

---

## 🚀 Project Overview

1. **Purpose**:
   A seamless, modern booking platform that delivers:
   - An optimized user experience for clients to book, manage, and track cleaning services.
   - A powerful admin dashboard for managing cleaners and operations.
   - A scalable architecture for future features like dynamic pricing, cleaner dashboards, and AI-driven insights.

2. **Goals**:
   - **Phase 1: Booking Flow**
     - Multi-step booking forms integrated with Supabase.
     - Real-time availability and pricing.
     - Highly optimized lead capture forms with advanced UI/UX techniques.
   - **Phase 2: Marketing & SEO**
     - Deep content clusters for city/service-specific SEO.
     - Dynamic SEO metadata generation via OpenAI.
   - **Phase 3: Dashboards**
     - Customer dashboards for booking history and updates.
     - Cleaner dashboards for task tracking and availability.
     - Admin dashboards for CRM and performance metrics.

3. **Scalability**:
   - **Monolithic yet modular architecture** for simplicity.
   - Built with **DaisyUI** for rapid theme reconfiguration.
   - Focused on token efficiency and low complexity for long-term maintainability.
   - Designed for eventual multi-platform support (React Native, etc.).

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router, React, and Tailwind CSS (DaisyUI for components).
- **Backend**: Supabase (primary CMS, real-time subscriptions, and database).
- **Email & Marketing**: Bento for transactional and omnichannel campaigns.
- **SEO**: OpenAI-powered dynamic metadata and content strategies.
- **Hosting**: Vercel (frontend) and DigitalOcean (Supabase and backend services).
- **Other Tools**:
  - Drizzle Studio for schema management.
  - Puppeteer for scraping competitor pricing and insights.

---

## 🗂️ Project Structure

```
/src
├── /app                # Route-based architecture with dynamic segments.
│   ├── (booking)       # Booking pages (e.g., multi-step flow, confirmation).
│   ├── (marketing)     # SEO-optimized static pages (e.g., about, services).
│   ├── (dashboard)     # Customer, cleaner, and admin dashboards.
│   └── [city]/[suburb] # Dynamic routes for localized SEO content.
/components             # Reusable UI components (DaisyUI-based).
├── /lib                # Utility functions (e.g., SEO helpers, API clients).
├── /styles             # Global styles and Tailwind configuration.
/supabase               # Schema and database setup.
/api                    # Serverless functions and API handlers.
```

---

## ✨ Features

1. **Booking Flow**:
   - Multi-step form with Supabase integration for real-time pricing and cleaner availability.
   - Conversion-optimized design with dynamic inputs.
   - Magic links for abandoned carts and follow-ups.

2. **Marketing**:
   - City and service-specific pages using DaisyUI components.
   - OpenAI-powered dynamic SEO tags, A/B tested for optimal CTR and ranking.
   - Comprehensive guides and content clusters for customer education.

3. **Dashboards**:
   - Customer dashboards with past bookings, payment history, and updates.
   - Cleaner dashboards for task assignments, earnings, and schedules.
   - Admin dashboards for user management, analytics, and operations.

4. **Scalability**:
   - Modular architecture with reusable DaisyUI components for future-proofing.
   - Real-time features powered by Supabase subscriptions.
   - Easy theming and reconfiguration via DaisyUI tokens.

---

## 🚧 Current Priorities

### Phase 1: Booking Flow
- [ ] Implement Supabase integration for pricing and availability.
- [ ] Build lead capture forms (hero section) with conversion-focused design.
- [ ] Create dynamic confirmation emails with Bento.

### Phase 2: Marketing & SEO
- [ ] Develop city and service-specific static pages.
- [ ] Automate SEO metadata generation using OpenAI.
- [ ] Establish interlinking between content clusters and service guides.

### Phase 3: Dashboards
- [ ] Scaffold customer dashboards with booking history and updates.
- [ ] Add real-time cleaner dashboards for task management.
- [ ] Build admin dashboards for analytics and CRM.

---

## 📈 Future Roadmap

1. **Replace Launch27**:
   - Migrate all CRM, scheduling, and reporting features in-house.
   - Enable real-time cleaner-customer matchmaking.

2. **Advanced Features**:
   - AI-driven booking insights and recommendations.
   - Multi-language support for a wider audience.
   - React Native apps for iOS and Android.

3. **Scalable Architecture**:
   - Modularize features into plug-and-play components.
   - Optimize database queries and API calls for better performance.

---

## 🎯 How to Contribute

1. **Setup**:
   - Clone the repo: `git clone https://github.com/huyyy1/shipfast-supa-drizzle`
   - Install dependencies: `npm install`
   - Run the local server: `npm run dev`

2. **Contribute**:
   - Follow our [component conventions](./CONTRIBUTING.md).
   - Ensure all features align with DaisyUI’s theming and ShipFast’s architecture.
   - Test thoroughly before submitting PRs.

---

## 🧠 Additional Notes

- **Why ShipFast?**: Leveraging its speed and simplicity, we’ve adopted ShipFast as the foundation for SimplyMaid.
- **Why DaisyUI?**: Pre-built components for rapid development and reusability.
- **Why Bento?**: Seamless transactional emails and omnichannel marketing.

---

What do you think? Let me know if anything needs further refinement!