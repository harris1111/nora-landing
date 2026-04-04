# Imperial Palace Landing Page

Landing page for Imperial Palace (11 Le Thanh Tong, Hoan Kiem, Ha Noi) — luxury Indochine-style condotel project managed by Best Western International.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Slider | Swiper (fade, autoplay) |
| Lightbox | yet-another-react-lightbox |
| Forms | react-hook-form + zod |
| Toast | react-hot-toast |
| Deployment | Docker (nginx) |
| Form backend | Google Apps Script → Google Sheets |

## Project Structure

```
src/
├── components/
│   ├── form/           # ContactForm
│   ├── layout/         # Navbar, MobileMenu, Footer
│   ├── sections/       # HeroSection, OverviewSection, etc.
│   └── ui/             # Button, SectionTitle, SectionWrapper
├── data/               # Static content (navigation, amenities, etc.)
├── hooks/              # useScrollPosition, useInView
├── lib/                # Form validation schema, Google Sheets submit
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
npm run preview   # preview production build locally
```

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_GOOGLE_SHEETS_URL` | Google Apps Script Web App URL for form submissions |

## Google Sheets Setup

1. Create a new Google Sheet with headers: **Timestamp**, **Name**, **Phone**, **Email**, **Content**
2. Go to **Extensions → Apps Script**
3. Paste the contents of `google-apps-script/form-handler.gs`
4. Click **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL into your `.env` file as `VITE_GOOGLE_SHEETS_URL`

## Docker Deployment

### Quick Start

```bash
# Create .env with your Google Sheets URL
cp .env.example .env
# Edit .env with real values

# Build and run
docker compose up --build -d
```

The site is now available at [http://localhost](http://localhost).

### Configuration

**Change port** — edit `docker-compose.yml`:

```yaml
ports:
  - "8080:80"   # Change 8080 to desired port
```

**Custom domain with reverse proxy** — point your reverse proxy (Traefik, Caddy, nginx proxy manager) to the container on port 80. Example with Traefik labels:

```yaml
services:
  nora-landing:
    build:
      context: .
      args:
        VITE_GOOGLE_SHEETS_URL: ${VITE_GOOGLE_SHEETS_URL}
    ports:
      - "80:80"
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.nora.rule=Host(`yourdomain.com`)"
      - "traefik.http.routers.nora.tls.certresolver=letsencrypt"
```

### Docker Details

- **Multi-stage build**: Node 20 Alpine (build) → nginx Alpine (serve)
- **Image size**: ~25MB
- **Features**: SPA routing, gzip, 1-year cache for static assets, security headers (CSP, X-Frame-Options, X-Content-Type-Options)

### Verify Deployment

```bash
curl -I http://localhost          # Should return 200
curl -I http://localhost/any-path # Should return 200 (SPA routing)
```

## Sections

The landing page contains 12 sections in order:

1. **Navbar** — sticky, transparent-to-solid on scroll, mobile hamburger
2. **Hero** — full-screen image slider with CTA
3. **Overview** — project info grid (8 items)
4. **Introduction** — text + image about location
5. **Partnership** — Nora + Best Western International
6. **Amenities** — spa, pool, restaurant, gym
7. **Architecture** — Indochine design showcase
8. **Floor Plans** — tabbed view (7 floors)
9. **Gallery** — image grid with lightbox + video tab
10. **News** — 3 article cards
11. **Contact** — form with validation → Google Sheets
12. **Footer** — address, sitemap, social links

## Replacing Placeholder Assets

All images are referenced from `public/images/`. Replace these with real assets:

```
public/images/
├── hero/slide-{1,2,3}.webp       # Hero slider (1920x1080 recommended)
├── gallery/gallery-{1-6}.webp    # Gallery images
├── gallery/intro.webp            # Introduction section
├── gallery/architecture-1.webp   # Architecture section
├── floors/floor-{1-7}.webp       # Floor plan images
├── news/news-{1-3}.webp          # News thumbnails (800x500)
├── logo.png                      # Site logo
└── og-image.jpg                  # Open Graph image (1200x630)
```

Use **WebP** format for optimal performance. Rebuild Docker after replacing assets.

## Security

- **CSP header** configured in nginx
- **Form validation** with zod (max-length, regex for VN phone)
- **No secrets in code** — env vars only
- `.env` excluded from git and Docker image

> **Note**: The Google Sheets URL is baked into the client bundle at build time. For production with high traffic, consider adding reCAPTCHA or a server-side proxy with rate limiting.

## License

Private — All rights reserved.
