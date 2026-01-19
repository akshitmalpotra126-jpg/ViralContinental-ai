'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  Target,
  Brain,
  Lightning,
  Rocket
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { label: 'Creators Using', value: '12,543+' },
    { label: 'Viral Posts', value: '892K+' },
    { label: 'Avg. Growth', value: '317%' },
    { label: 'Satisfaction', value: '98.7%' }
  ]

  const features = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "MrBeast-Level Viral Engine",
      description: "AI trained on 10M+ viral posts. Creates content that stops scrolls in 0.8s.",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Psychology-Driven Hooks",
      description: "Uses curiosity loops, pattern interrupts, and status triggers.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Retention-Optimized Scripts",
      description: "Engineered for watch time, saves, shares, and comments.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Insider Growth Tactics",
      description: "Shadow marketing strategies used by top agencies.",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold text-gradient">ViralContent AI</span>
              <span className="px-2 py-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded text-xs text-emerald-300">
                PRO
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
              <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
              <Link 
                href="/signup" 
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 pt-32 pb-48 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="text-sm">The $1M AI Engine Used By Top Creators</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="block text-4xl md:text-5xl text-gray-400 mb-4">GO VIRAL WITH</span>
            <span className="text-gradient animate-gradient-shift bg-[length:200%_200%]">
              NUCLEAR-GRADE AI
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Generate Instagram Reels that get 1M+ views, scroll-stopping hooks, and high-conversion content. 
            <span className="text-pink-400 font-bold"> No generic advice. Only viral patterns.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-20">
            <Link 
              href="/signup"
              className="group px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center"
            >
              <Zap className="mr-3" />
              Start Free Trial (5 Generations)
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/generate"
              className="px-12 py-6 bg-white/5 border-2 border-white/10 text-white text-xl font-bold rounded-2xl hover:bg-white/10 transition"
            >
              Try Live Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-40 py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why This <span className="text-gradient">Isn't Another</span> AI Tool
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We reverse-engineered what actually makes content go viral. Not theories. Data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="text-purple-500 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-40 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 border-2 border-white/10 p-16">
            <Crown className="h-24 w-24 text-purple-500 mx-auto mb-8" />
            
            <h2 className="text-5xl font-bold mb-8">
              Ready To Go Nuclear?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the creators who are growing 10x faster with AI that thinks like MrBeast.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                href="/signup"
                className="px-14 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center">
                  <Sparkles className="mr-3" />
                  Start Free Trial
                  <ArrowRight className="ml-3" />
                </div>
                <div className="text-sm opacity-80 mt-2">5 free generations • No credit card</div>
              </Link>
              <Link 
                href="/pricing"
                className="px-14 py-6 bg-white text-black text-xl font-bold rounded-2xl hover:bg-gray-100 transition"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="h-6 w-6 text-yellow-500" />
            <span className="text-lg">© 2024 ViralContent AI. The $1M AI Engine.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
