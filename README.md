# Angular Components Documentation Site

This is an Astro Starlight documentation site showcasing standalone Angular components, built with `@analogjs/astro-angular` integration.

## 🚀 Features

- **Astro Starlight** - Beautiful documentation framework
- **Angular 17** - Standalone components with modern Angular features
- **@analogjs/astro-angular** - Seamless Angular integration in Astro
- **Live Component Demos** - Interactive examples directly in documentation
- **Badge Component** - A versatile UI component with multiple variants

## 📦 Components

### Badge

A standalone Angular component for displaying badges with different visual styles:
- **Default**: Dark background with light text
- **Secondary**: Light gray background with dark text
- **Destructive**: Red background for errors or warnings
- **Outline**: Transparent background with a border

## 🛠️ Tech Stack

- **Astro** v4.15+
- **Angular** v17.3+
- **TypeScript** v5.4.5
- **@analogjs/astro-angular** v0.2.8+

## 🏃 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`

### Build

Build the static site:

```bash
npm run build
```

### Preview

Preview the built site:

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/         # Angular components
│   │   ├── badge.component.ts
│   │   └── badge-demo.component.ts
│   └── content/
│       └── docs/           # Documentation pages
│           ├── index.mdx
│           ├── guides/
│           │   └── introduction.md
│           └── components/
│               └── badge.mdx
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 📝 Notes

- **@spartan-ng/brain** was considered but removed due to Angular version compatibility issues (requires Angular 20+)
- The Badge component is built as a standalone Angular component following Spartan UI design principles
- Components use Angular's `OnPush` change detection strategy for optimal performance
- All components are fully typed with TypeScript

## 🤝 Contributing

Feel free to contribute additional components following the same pattern as the Badge component.

## 📄 License

MIT