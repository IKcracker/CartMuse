# CartMuse

Independent editorial fashion discovery website built with Next.js 16, React 19 and Tailwind CSS 4.

## Start

Run `npm ci` and `npm run dev`. For checks, run `npm run lint` and `npm run build`.

## SHEIN sharing integration

The project now includes the website owner's SHEIN search code `S2AXVG7` and supplied public invitation URL `https://onelink.shein.com/57/65dw0jfxw8iz`.

- Main landing page shows an invitation card
- Dedicated discoverable `/shein-code` guide with copy-code interaction
- Deal finder displays the card and routes shoppers to the same public invitation
- Navigation and footer link to the dedicated guide
- Outbound referral links use `rel="sponsored noopener noreferrer"`
- Program disclosure explicitly describes possible affiliate earnings and the limits of coupon claims

**Important:** This is a shared invitation and app search code, *not* a verified direct product feed, API connection, or checkout coupon. The source share message advertises a 60% new-user coupon, but availability and eligibility have not been independently verified.

## Environment

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to your production domain. Optionally set `NEXT_PUBLIC_SHEIN_AFFILIATE_URL` to override the default public invitation URL if SHEIN rotates your tracking link.

## Features

Editorial storefront, responsive discovery filters, local saved looks, SHEIN sharing flow, guided deal finder, educational shopping guides, ZAR savings calculator, disclosure and privacy pages, metadata, sitemap and robots.

## Limitations

Curated images are editorial inspiration, not merchant items. Budget labels are examples, not validated prices. No backend offers administration, live SHEIN product feed, authenticated CRM, direct commission API, email notifications or AI service is included yet.

Before launch verify program terms, visual asset licensing, deployment domain, coupon availability and tracking attribution in the SHEIN affiliate dashboard.
