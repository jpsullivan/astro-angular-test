# Deployment Issues

## Current Status
❌ **Build failing** due to package incompatibilities

## Root Cause
`@analogjs/astro-angular@0.2.8` is designed for Angular 16 but this project uses Angular 17. The version mismatch causes the Angular compiler plugin to fail during builds with the error:
```
TypeError: Cannot read properties of undefined (reading 'minimalContext')
```

Additionally, `@astrojs/starlight` uses top-level await which conflicts with the esbuild configuration.

## Solutions

### Option 1: Full Upgrade (Recommended)
Upgrade to compatible versions:
```bash
npm install @angular/core@20 @angular/common@20 @analogjs/astro-angular@latest astro@5 @astrojs/starlight@latest --save --legacy-peer-deps
```

### Option 2: Remove Starlight
Use plain Astro with Angular components (no Starlight):
```bash
npm uninstall @astrojs/starlight
```
Then create custom documentation pages.

### Option 3: Remove Angular Integration
Keep Starlight but remove Angular components:
```bash
npm uninstall @analogjs/astro-angular @angular/core @angular/common
```
Document components with code examples only.

## Files Modified
- `astro.config.mjs` - Angular integration configuration
- `tsconfig.app.json` - Angular compiler settings
- `.npmrc` - Legacy peer deps flag
- `vercel.json` - Vercel deployment settings
