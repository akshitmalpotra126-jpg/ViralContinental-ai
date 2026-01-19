'use client'

import { useEffect, useState } from 'react'
import { 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Clock,
  Target,
  Brain,
  Crown,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import toast from 'react-hot-toast'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    credits: 5,
    generations: 0,
    viralScore: 87,
    timeSaved: 0
  })

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)

    // Fetch user stats
    const { data: generations } = await supabase
      .from('generations')
      .select('*')
      .eq('user_id', user?.id)

    setStats(prev => ({
      ...prev,
      generations: generations?.length || 0,
      credits: 5 - (generations?.length || 0)
    }))
  }

  const generateContent = () => {
    if (stats.credits <= 0) {
      toast.error('No credits remaining. Upgrade to pro.')
      return
    }
    window.location.href = '/generate'
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome back, Creator! 🚀</h1>
        <p className="text-gray-400">Here's what's happening with your viral content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Daily Credits', value: `${stats.credits}/5`, icon: <Zap />, color: 'text-yellow-500' },
          { label: 'Viral Score', value: `${stats.viralScore}/100`, icon: <TrendingUp />, color: 'text-green-500' },
          { label: 'Content Generated', value: stats.generations, icon: <Sparkles />, color: 'text-purple-500' },
          { label: 'Time Saved', value: `${stats.timeSaved}h`, icon: <Clock />, color: 'text-blue-500' }
        ].map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.color} bg-opacity-20`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Generate Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Brain className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold">Generate Viral Content</h2>
          </div>
          <p className="text-gray-400 mb-8">Create Instagram Reels, hooks, and captions that actually go viral</p>
          <button 
            onClick={generateContent}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:opacity-90"
          >
            <Zap className="mr-3" />
            Generate Now
            <ArrowRight className="ml-3" />
          </button>
        </div>

        {/* Analytics Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold">Performance Analytics</h2>
          </div>
          <p className="text-gray-400 mb-8">Track what content performs best and optimize your strategy</p>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Avg. Retention</span>
              <span className="font-bold text-green-500">89%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Share Rate</span>
              <span className="font-bold text-purple-500">3.7x</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Card */}
      {stats.credits <= 2 && (
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <Crown className="h-6 w-6 mr-3 text-yellow-500" />
                🚀 Upgrade to Pro
              </h3>
              <p className="text-gray-300">Get unlimited generations, advanced analytics, and priority support</p>
            </div>
            <Link 
              href="/pricing"
              className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:opacity-90"
            >
              Upgrade Now - $30 Lifetime
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
