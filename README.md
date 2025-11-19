# SvelteKit Hybrid Rendering Template

A hybrid rendering demonstration project based on **SvelteKit 2** and **Svelte 5**, showcasing SSR, Prerender, Streaming, and other rendering strategies, built with modern web development best practices.

This template uses the **@edgeone/sveltekit** adapter for seamless deployment to **EdgeOne Pages** platform, enabling edge computing capabilities and global content delivery.

## ✨ Features

- 🚀 **Hybrid Rendering Strategies** - Demonstrates SSR, CSR, Prerender, Streaming rendering methods
- ⚡ **Modern Frontend** - SvelteKit 2 + Svelte 5 + TypeScript
- 🎨 **Interactive Demo** - Includes a Wordle-style game (Sverdle) to showcase SvelteKit capabilities
- 🔧 **Out-of-the-Box** - Preconfigured development environment and build process
- 🌐 **Edge-Ready** - Compatible with EdgeOne Pages deployment

## 🛠️ Technology Stack

### Frontend
- **SvelteKit 2.47.1** - Modern full-stack web framework
- **Svelte 5.41.0** - Reactive UI framework with runes
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.1.10** - Fast build tool and dev server

### Deployment
- **@edgeone/sveltekit** - SvelteKit adapter for EdgeOne Pages
- **EdgeOne Pages** - Edge computing platform with global CDN

## 🚀 Quick Start

### Environment Requirements

- Node.js 18.0 or higher version
- EdgeOne Pages account

### Install Dependencies

```bash
# Clone the project
git clone <your-repo-url>
cd sveltekit-mix-render-template

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
edgeone pages dev

# Access http://localhost:8088
```

### Build

```bash
# Build the production version
edgeone pages build
```

## 📚 Feature Demonstrations

### Hybrid Rendering Strategies

**SSR (Server-Side Rendering)**
- Path: `/ssr`
- Characteristics: Re-renders on the server for each request
- Suitable for: Dynamic content and personalized pages
- Implementation: Uses `+page.server.ts` with load function

**CSR (Client-Side Rendering)**
- Path: `/csr`
- Characteristics: Renders entirely in the browser
- Suitable for: Highly interactive apps and SPAs that don't need SEO
- Implementation: Set `export const ssr = false` in `+page.ts`

**Prerender (Static Site Generation)**
- Path: `/prerender`
- Characteristics: Pre-generates pages as static HTML at build time
- Suitable for: Marketing pages, blogs, and documentation
- Implementation: Set `export const prerender = true` in `+page.server.ts` or `+page.ts`

**Streaming (Streaming Rendering)**
- Path: `/streaming`
- Characteristics: Gradually renders page content, enhancing user experience
- Suitable for: Data-intensive pages with multiple async data sources
- Implementation: Return promises from load function and use `{#await}` blocks

### Interactive Demo

**Sverdle (Wordle Clone)**
- Path: `/sverdle`
- A fully functional Wordle-style word guessing game
- Demonstrates form handling, state management, and server-side validation
- Shows best practices for building interactive applications with SvelteKit

## 🗄️ Project Structure

```
sveltekit-mix-render-template/
├── src/                    # Source code directory
│   ├── routes/            # SvelteKit routes
│   │   ├── +layout.svelte # Root layout component
│   │   ├── +page.svelte   # Home page component
│   │   ├── Header.svelte  # Navigation header
│   │   ├── Counter.svelte # Interactive counter demo
│   │   ├── ssr/           # SSR demonstration pages
│   │   ├── csr/           # CSR demonstration pages
│   │   ├── prerender/     # Prerender demonstration pages
│   │   ├── streaming/     # Streaming demonstration pages
│   │   └── sverdle/       # Wordle game demo
│   ├── lib/               # Library code
│   │   ├── images/        # Image assets
│   └── app.html           # HTML template
├── static/                # Static assets
├── package.json           # Project configuration
├── svelte.config.js       # SvelteKit configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── eslint.config.js       # ESLint configuration
```

## 📄 License

This project uses the MIT License - View the [LICENSE](https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt) file for details.

## 🚀 One-Click Deployment

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=sveltekit-mix-render-template)
