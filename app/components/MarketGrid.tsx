'use client'

import { useState } from 'react'
import { MarketCard } from './MarketCard'
import { Plus } from 'lucide-react'

interface Market {
  id: string
  title: string
  description: string
  endTime: string
  totalStaked: string
  participants: number
  status: 'open' | 'settled' | 'challenged'
  yesPercentage: number
}

const MOCK_MARKETS: Market[] = [
  {
    id: '1',
    title: 'Will AI-generated art dominate NFT sales by Q4 2024?',
    description: 'Prediction on whether AI-generated artwork will account for >50% of NFT marketplace volume',
    endTime: '2024-12-31',
    totalStaked: '12.5 ETH',
    participants: 234,
    status: 'open',
    yesPercentage: 67,
  },
  {
    id: '2',
    title: 'Will a major social platform integrate Farcaster frames?',
    description: 'Prediction on mainstream social media adoption of Farcaster frame technology',
    endTime: '2024-09-30',
    totalStaked: '8.3 ETH',
    participants: 156,
    status: 'open',
    yesPercentage: 42,
  },
  {
    id: '3',
    title: 'Will Base TVL exceed $10B by year end?',
    description: 'Total Value Locked on Base network reaching $10 billion milestone',
    endTime: '2024-12-31',
    totalStaked: '15.7 ETH',
    participants: 389,
    status: 'open',
    yesPercentage: 78,
  },
]

export function MarketGrid() {
  const [markets] = useState<Market[]>(MOCK_MARKETS)

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-fg mb-2">Active Markets</h2>
            <p className="text-fg/60">Explore and predict on cultural narratives</p>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-smooth">
            <Plus className="w-5 h-5" />
            Create Market
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>
    </section>
  )
}
