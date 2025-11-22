'use client'

import { Calendar, Users, TrendingUp } from 'lucide-react'

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

interface MarketCardProps {
  market: Market
}

export function MarketCard({ market }: MarketCardProps) {
  const statusColors = {
    open: 'bg-green-500/20 text-green-400 border-green-500/30',
    settled: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    challenged: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  }

  return (
    <div className="bg-surface rounded-lg p-6 card-glow transition-smooth hover:scale-105 border border-white/5 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${statusColors[market.status]}`}>
          {market.status.toUpperCase()}
        </span>
        <div className="flex items-center gap-1 text-fg/60">
          <TrendingUp className="w-4 h-4" />
          <span className="text-xs font-medium">{market.yesPercentage}% YES</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-fg mb-2 line-clamp-2">
        {market.title}
      </h3>
      <p className="text-sm text-fg/70 mb-4 line-clamp-2">
        {market.description}
      </p>

      <div className="space-y-3">
        <div className="w-full bg-bg rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${market.yesPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-fg/60">
            <Calendar className="w-4 h-4" />
            <span>{new Date(market.endTime).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-fg/60">
            <Users className="w-4 h-4" />
            <span>{market.participants}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-white/5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-fg/60">Total Staked</span>
            <span className="text-sm font-semibold text-primary">{market.totalStaked}</span>
          </div>
        </div>
      </div>

      <button className="w-full mt-4 bg-primary hover:bg-accent text-white py-2 rounded-lg font-semibold transition-smooth">
        Predict Now
      </button>
    </div>
  )
}
