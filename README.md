# Simple Next.js Test App!!

A simple multi-page Next.js application built for automated browser testing.

## Features

- **Multiple Pages**: Home, About, Contact, and Products pages
- **Test-Friendly**: All interactive elements have `data-testid` attributes for easy automation
- **Responsive Design**: Built with Tailwind CSS
- **TypeScript**: Full TypeScript support
- **Interactive Forms**: Contact form with validation and success feedback
- **Product Showcase**: Products page with card layout and add-to-cart buttons

## Pages

1. **Home** (`/`) - Landing page with app overview and features list
2. **About** (`/about`) - Information about the app with mission statement and key details
3. **Contact** (`/contact`) - Interactive contact form with client-side validation
4. **Products** (`/products`) - Product catalog with 4 sample products

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
simple-next-js-app/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Testing

All interactive elements include `data-testid` attributes for easy automated testing:

- Navigation links: `nav-home`, `nav-about`, `nav-contact`, `nav-products`
- Form inputs: `contact-name-input`, `contact-email-input`, `contact-message-input`
- Buttons: `contact-submit-button`, `add-to-cart-{id}`
- Content sections: Various test IDs on headings, cards, and product items

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- PostCSS

## License

ISC
