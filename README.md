# AidChain Admin

AidChain Admin is the platform administration console for AidChain. It is used to review and manage NGOs, campaigns, donors, beneficiaries, vendors, and system-level settings from a central web interface.

This repository is published as a clean portfolio snapshot. Project provenance is documented in [PROVENANCE.md](./PROVENANCE.md).

## What This App Does

- provides an administrative dashboard over core AidChain entities
- supports detail and listing views for NGOs, vendors, donors, beneficiaries, and campaigns
- integrates with the AidChain API for operational and reporting data
- centralizes platform settings and management workflows

## Tech Stack

- Nuxt 3
- Vue 3
- TypeScript
- Pinia
- Element Plus
- Tailwind CSS
- Chart.js / vue-chartjs
- SweetAlert2
- ESLint / Prettier

## Main Sections

The `pages/` directory exposes major admin sections:

- `Campaigns/`
- `NGOs/`
- `Vendors/`
- `Donors/`
- `Beneficiaries/`
- `Settings/`

Each section includes list and detail flows where applicable.

## Repository Layout

```text
pages/           route views
components/      reusable admin UI components
composables/     shared Vue composition logic
controllers/     local request/controller helpers
layouts/         app-level layouts
middleware/      route guards
plugins/         Nuxt plugins
store/           client state
assets/          styles and images
```

## Prerequisites

- Node.js 18+
- npm or yarn

## Installation

```bash
npm install
```

## Environment Setup

This app expects the backend API base URL to be configured locally.

Typical example:

```bash
BASE_URL=http://localhost:3000/v1
```

The published snapshot excludes runtime env files.

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Linting

```bash
npm run lint
npm run lintfix
```

## Platform Dependencies

This console depends on:

- `AidChainPlatform/aid-api`
- optionally `AidChainPlatform/aidchain-blockchain` through backend-mediated flows

## Notes

- This repo is a management console, not a public-facing landing site.
- The published org repository is a clean snapshot without prior git history.
