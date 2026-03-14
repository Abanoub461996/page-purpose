# Purposeful Presence

Marketing website for Paige & Purpose, focused on founder advisory services, structured hiring, and team stability.

## Local development

Requirements:

- Node.js 18+ (or newer LTS)
- npm

Install and run:

```sh
npm install
npm run dev
```

The app runs on `http://localhost:8080`.

## Contact form email delivery

The contact form uses [FormSubmit](https://formsubmit.co/) (free tier) to send messages by email.

Create a local env file before running:

```sh
cp .env.example .env.local
```

Set your FormSubmit token in `.env.local` (recommended):

```sh
VITE_FORMSUBMIT_TOKEN=your_formsubmit_token_here
```

You can also use email directly as fallback:

```sh
VITE_CONTACT_EMAIL=hello@yourdomain.com
```

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
