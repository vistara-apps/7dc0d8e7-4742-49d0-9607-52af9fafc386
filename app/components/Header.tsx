'use client'

import { ConnectWallet } from '@coinbase/onchainkit/wallet'
import { TrendingUp } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Verifiable Narrative Markets</h1>
              <p className="text-xs text-fg/60">Verifiable predictions on Base</p>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </header>
  )
}
