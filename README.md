# Malschule Susanne Merten

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-1.x-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Deployed on Coolify](https://img.shields.io/badge/Deployed_on-Coolify-6B16ED?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6Ii8+PC9zdmc+)](https://coolify.io/)
[![License: MIT](https://img.shields.io/badge/Code-MIT-green?style=flat)](LICENSE)
[![Content](https://img.shields.io/badge/Content-©_All_Rights_Reserved-red?style=flat)](LICENSE)

Website for **"Malen in der alten Dorfschule"** — an art school in Neuhof/Lamspringe offering individual painting courses for all age groups.

🌐 **Live Site:** [malschule-susanne-merten.de](https://www.malschule-susanne-merten.de)

## Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/) — fast dev server with HMR
- **Styling:** SCSS with custom fonts
- **SEO:** Open Graph, Twitter Cards, JSON-LD structured data

## Development

### Requirements

- Node.js 18+
- Yarn

### Install Dependencies

```bash
yarn install
```

### Development Server

```bash
yarn start
```

Opens at http://localhost:1337 with hot module replacement.

### Production Build

```bash
yarn build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
yarn preview
```

## Project Structure

```
├── public/           # Static assets (copied as-is)
│   ├── fonts/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── index.html    # Main page
│   ├── 404.html      # Error page
│   ├── js/main.js    # Entry point
│   └── scss/         # Styles
├── vite.config.js
└── package.json
```

## License

- **Code** (build config, JS, SCSS): [MIT License](LICENSE) — free to use
- **Content** (images, text, fonts): © Susanne Merten — All rights reserved
