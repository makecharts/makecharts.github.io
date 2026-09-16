# MakeCharts (makecharts.github.io)

> **Free Online Pie & Bar Chart Generator**  
> An ultra-minimal, high-performance, 100% browser-based chart generator. Built with Astro 5, React 19, Recharts, and Tailwind CSS.

[![Deploy to GitHub Pages](https://github.com/makecharts/makecharts.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/makecharts/makecharts.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Support Developer](https://img.shields.io/badge/Support-Buy%20Me%20a%20Coffee-FFDD00?logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/kisharadilz)

---

## 🌟 Key Features

- **100% Client-Side & Private**: Zero server uploads, zero telemetry tracking. All calculations and graphics are rendered directly in the user's browser.
- **Dynamic Chart Types**: Instantly switch between **Pie**, **Donut**, **Vertical Bar**, and **Horizontal Bar** charts.
- **Vector SVG & High-Res PNG Export**:
  - **Export SVG**: Download pristine vector XML code via native `XMLSerializer`, ready for Adobe Illustrator, Figma, or web embedding.
  - **Export PNG**: Retina-grade PNG output powered by `html-to-image` for pitch decks, slides, and documents.
  - **Removable Watermark**: Easily toggle or click `✕` on the `makecharts.github.io` watermark to export 100% watermark-free charts.
- **CSV / TSV Direct Paste**: Copy tabular data straight from Microsoft Excel, Google Sheets, or CSV files and plot dozens of rows in one click.
- **6-Language Subpath Routing**: Complete native translations and bidirectional hreflang SEO tags for:
  - English (`/`)
  - Spanish (`/es/`)
  - Portuguese (`/pt/`)
  - German (`/de/`)
  - French (`/fr/`)
  - Japanese (`/ja/`)
- **Responsive Mobile & Tablet Navigation**:
  - **Mobile & Tablet (`< lg`)**: Controls automatically collapse into compact, aligned icon-only buttons (Language Flag, Theme Toggle, Support Coffee).
  - **Desktop (`≥ lg`)**: Expands to full text labels and tagline.
- **Custom Brand Color Theme**:
  - `#FF9D50` - Vibrant Coral Orange
  - `#FFF9D8` - Soft Butter Cream
  - `#1DCED8` - Electric Aqua Teal
  - `#55E07E` - Emerald Mint
- **Dark & Light Mode**: Instant anti-FOUC theme toggle with persistence in `localStorage`.
- **Rich Structured Data & Analytics**:
  - Embedded `WebApplication`, `HowTo`, and `FAQPage` JSON-LD schemas.
  - Google Analytics (`gtag.js` ID: `G-Z4CKBLCN0B`).

---

## 🛠 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation mode)
- **UI & Visualization**: [React 19](https://react.dev/) with [Recharts](https://recharts.org/)
- **Integration**: `@astrojs/react` (`^4.2.7`) with `@astrojs/tailwind` (`^6.0.2`) on Vite 6
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Export Engines**: Native `XMLSerializer` & [html-to-image](https://github.com/bubkoo/html-to-image)
- **Analytics**: Google Tag Manager (`gtag.js`)
- **Deployment**: [GitHub Pages](https://pages.github.com/) with GitHub Actions

---

## 🚀 Getting Started

### Prerequisites
- Node.js `20.x` or `22.x`+
- npm `10.x`+

### Installation
```bash
# Clone the repository
git clone https://github.com/makecharts/makecharts.github.io.git
cd makecharts.github.io

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build & Preview
```bash
# Build static site to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## ☕ Support the Developer

If you find MakeCharts useful, you can support further development by buying a coffee:  
👉 **[buymeacoffee.com/kisharadilz](https://buymeacoffee.com/kisharadilz)**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
