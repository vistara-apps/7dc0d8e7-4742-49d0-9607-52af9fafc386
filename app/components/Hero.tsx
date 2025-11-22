'use client'

import { Brain, Shield, Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text">
            Verifiable Narrative Markets
          </h2>
          <p className="text-xl text-fg/80 max-w-2xl mx-auto leading-relaxed">
            Predict complex cultural phenomena with AI-powered verification and transparent on-chain settlement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="AI Judge"
            description="Transparent AI interpretation with verifiable on-chain logic"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Verification"
            description="Challenge outcomes with social consensus and earn reputation"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Social Native"
            description="Create and share markets directly in your Farcaster feed"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-surface rounded-lg p-6 card-glow transition-smooth hover:scale-105 border border-white/5">
      <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-fg">{title}</h3>
      <p className="text-sm text-fg/70 leading-relaxed">{description}</p>
    </div>
  )
}
