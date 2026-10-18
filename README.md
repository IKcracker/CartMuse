# CartMuse

Independent editorial fashion discovery website built with Next.js 16, React 19 and Tailwind CSS 4.

## Start
Run `npm ci` and `npm run dev`. For checks, run `npm run lint` and `npm run build`.

## SHEIN campaign integrations

Two distinct user-supplied public affiliate shares are configured in `lib/campaigns.ts`:

| Campaign | App search code | Shared link | Advertised promotion |
| --- | --- | --- | --- |
| Exclusive picks | S2AXVG7 | https://onelink.shein.com/57/65dw0jfxw8iz | 60% new-user coupon |
| Women's clothing sale | UQXQNT3 | https://onelink.shein.com/57/65dxq18p51jv | Up to 80% off |

Both codes are for the **SHEIN app search bar, not checkout**. No discount is independently verified, and actual savings, qualifying items and referral attribution depend on SHEIN terms.

Visitors can choose a campaign from `/shein-offers`, copy its code, open its unique affiliate link, and read instructions on `/shein-code` or `/shein-sale`. The homepage and deal finder display both; no campaign is silently replaced.

## Environment

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to your production domain. To rotate links later, override:
- `NEXT_PUBLIC_SHEIN_AFFILIATE_URL` for exclusive picks.
- `NEXT_PUBLIC_SHEIN_WOMENS_SALE_URL` for women's sale.

## Features

Editorial storefront, responsive discovery filters, local saved looks, SHEIN sharing flow, guided deal finder, educational shopping guides, ZAR savings calculator, disclosure and privacy pages, metadata, sitemap and robots.

## Limitations

Curated images are editorial inspiration, not merchant items. Budget labels are examples, not validated prices. No backend offers administration, live SHEIN product feed, authenticated CRM, direct commission API, email notifications or AI service is included yet.

Before launch verify program terms, visual asset licensing, deployment domain, coupon availability and tracking attribution in the SHEIN affiliate dashboard.
