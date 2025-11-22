# Narrative Markets - Base Mini App

Verifiable prediction markets for cultural narratives on Base.

## Features

- 🤖 AI-powered market resolution with transparent verification
- 🔗 Native Farcaster integration with Frames
- 💎 On-chain reputation and social incentives
- ⚡ Gasless transactions via OnchainKit Paymaster
- 🎨 Modern, responsive UI with BASE theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key to `.env.local`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Project Structure

```
app/
├── components/     # React components
├── page.tsx       # Main page
├── layout.tsx     # Root layout
└── globals.css    # Global styles

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Integrations

- **OnchainKit**: Wallet connection, transactions, identity
- **Farcaster SDK**: Mini App context, notifications, social actions
- **Base Network**: Smart contracts, gas sponsorship

## Learn More

- [Base Mini Apps Docs](https://docs.base.org/mini-apps)
- [OnchainKit Docs](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz)
