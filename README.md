# Kunj's Portfolio

A sleek, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features a live Discord status widget, project showcase, and professional design aesthetic.

## 🎨 Design Philosophy

**Minimal Brutalist Tech** - Clean, honest design with:
- Dark theme with cyan accents
- Professional typography (Playfair Display + Courier Prime)
- Asymmetrical layout with generous whitespace
- Smooth animations and visual depth
- Gradient overlays and backdrop blur effects

## ✨ Features

- **Live Discord Status** - Real-time Discord presence using Lanyard API
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Project Showcase** - Featured projects with quick links
- **Social Links** - Easy access to GitHub, LinkedIn, Email, and more
- **Smooth Interactions** - Micro-interactions and hover effects
- **No External Dependencies** - Pure React + Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Kp344/Kp344.github.io.git
cd Kp344.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
.
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable UI components
│   │   ├── App.tsx      # Main app component
│   │   ├── main.tsx     # Entry point
│   │   └── index.css    # Global styles
│   └── index.html       # HTML template
├── server/              # Express server (for deployment)
├── package.json         # Dependencies
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS config
└── tsconfig.json        # TypeScript config
```

## ⚙️ Configuration

### Discord Status Widget

To enable the live Discord status widget:

1. Get your Discord User ID (right-click profile → Copy User ID)
2. Open `client/src/pages/Home.tsx`
3. Find the line: `const userId = "780802313823584277";`
4. Replace with your Discord ID
5. Rebuild and deploy

The widget uses the free [Lanyard API](https://lanyard.rest/) - no authentication needed.

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Build tool
- **Wouter** - Client-side routing
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📦 Build & Deploy

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Deploy to GitHub Pages

The site automatically deploys when you push to the `main` branch. The built files are in the root directory (`index.html` and `assets/`).

## 🎯 Customization

### Colors
Edit `client/src/index.css` to customize the color palette:
- `--accent`: Cyan accent color
- `--background`: Dark background
- `--foreground`: Light text

### Typography
Fonts are loaded from Google Fonts in `client/index.html`:
- **Display**: Playfair Display (headings)
- **Body**: Courier Prime (text)

### Content
Update links and projects in `client/src/pages/Home.tsx`

## 📝 License

MIT - Feel free to use this as a template for your own portfolio!

## 🔗 Links

- [Live Portfolio](https://kp344.github.io)
- [GitHub](https://github.com/Kp344)
- [Discord](https://discord.com)

---

Built with intention. ✨
