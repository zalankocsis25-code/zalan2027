# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are university baseball coaches and scouts reviewing a 2027 international recruit, often quickly and on a phone. Zalan and his family are secondary users who need to update media, verified measurements, and contact details.

## Product Purpose

Present Zalan Kocsis as a credible student-athlete prospect and help a coach understand his playing profile, verified performance, academic path, and contact options within minutes.

## Positioning

The site combines official European competition evidence, a multi-year baseball journey, and an international-school mechanical-engineering pathway in one direct recruiting profile.

## Operating Context

Coaches may arrive from an email or message, scan the first screen, watch recruiting footage, verify statistics through official external sources, review academic fit, and then make contact.

## Capabilities and Constraints

- Next.js, React, TypeScript, Tailwind CSS, Lucide React, and Motion.
- Primarily static content; no Firestore or account system initially.
- Keep all existing facts, statistics, organizations, dates, links, and placeholders unchanged unless Zalan supplies an update.
- The hero requires three real photographs: batting, catching, and first base. Placeholders remain until those photographs are supplied.
- Video, email, recruiting resume, and verified metric placeholders remain editable.
- Responsive web presentation is required.

## Brand Commitments

- Name: Zalan Kocsis.
- Voice: direct, factual, confident, and suitable for a university coach; avoid hype and generic AI-written phrasing.
- The overall presentation should be eye-catching but light, clear, and easy for a scout to assess.

## Evidence on Hand

- Official WBSC Europe player profile and 2026 U-18 European Championship statistics.
- Official FCBS 2026 Catalonia U19 statistics, including the third-highest batting average.
- Verified team and school links and the confirmed baseball and academic timelines already encoded in `src/data/profile.ts`.
- No real player photography, highlight-video URL, resume file, public contact email, or verified testing metrics have been supplied yet; these must not be fabricated.

## Product Principles

- Lead with what a coach needs to decide whether to keep evaluating the player.
- Separate verified evidence from placeholders and future additions.
- Make official sources easy to recognize and open.
- Keep baseball, academics, and engineering distinct but connected.
- Prefer clarity and credibility over decorative effects.
