'use client'

import { useEffect, useState } from 'react'
import { sdk } from '@farcaster/miniapp-sdk'
import { Hero } from './components/Hero'
import { MarketGrid } from './components/MarketGrid'
import { Header } from './components/Header'
import { LoadingScreen } from './components/LoadingScreen'

export default function Home() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready()
    setIsReady(true)
  }, [])

  if (!isReady) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <MarketGrid />
    </main>
  )
}
