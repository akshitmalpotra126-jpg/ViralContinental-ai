'use client'

import { useState } from 'react'
import { Sparkles, Zap, Copy, Target, Volume2, Brain } from 'lucide-react'
import toast from 'react-hot-toast'

export default function GeneratePage() {
  const [loading, setLoading] = useState(false)
  const [platform, setPlatform] = useState('instagram')
  const [contentType, setContentType] = useState('reel')
  const [tone, setTone] = useState('aggressive')
  const [niche, setNiche] = useState('')
  const [result, setResult] = useState('')
  const [viralScore, setViralScore] = useState(0)

  const generateContent = async () => {
    if (!niche.trim()) {
      toast.error('Enter your niche or topic')
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform,
          contentType,
          niche,
          tone
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setResult(data.content)
        setViralScore(data.viralScore)
        toast.success('Nuclear-grade content generated!')
      } else {
        toast.error(data.error || 'Failed to generate')
      }
    } catch (error) {
      toast.error('Network error')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
    toast.success('Copied to clipboard!')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Nuclear Content Generator</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Panel */}
        <div className="lg:col-span-2 space-y-8">
          {/* Platform Selection */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Target className="h-6 w-6 mr-3 text-purple-500" />
              Select Platform
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {['instagram', 'youtube', 'linkedin', 'tiktok'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`p-4 rounded-xl border-2 capitalize ${
                    platform === p 
                      ? 'border-purple-500 bg-purple-500/10' 
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Content Type */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Sparkles className="h-6 w-6 mr-3 text-pink-500" />
              Content Type
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { id: 'reel', label: 'Reel Script', desc: '15-30s viral video' },
                { id: 'hook', label: 'Scroll-Stopping Hook', desc: 'First 3 seconds' },
                { id: 'caption', label: 'High-Engagement Caption', desc: 'Drives comments & saves' },
                { id: 'cta', label: 'Conversion CTA', desc: 'Call-to-action that converts' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setContentType(type.id)}
                  className={`p-6 rounded-xl border-2 text-left ${
                    contentType === type.id
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-lg mb-2">{type.label}</div>
                  <div className="text-gray-400 text-sm">{type.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selector */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Volume2 className="h-6 w-6 mr-3 text-blue-500" />
              Viral Tone
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {['aggressive', 'luxury', 'dark', 'authority', 'controversial', 'motivational'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`p-4 rounded-xl border-2 capitalize ${
                    tone === t
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Niche Input */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Brain className="h-6 w-6 mr-3 text-emerald-500" />
              Your Niche / Topic
            </h2>
            <textarea
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="e.g., fitness coaching, SaaS marketing, luxury branding..."
              className="w-full h-32 bg-gray-900 border border-gray-800 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generateContent}
            disabled={loading}
            className="w-full py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white text-xl font-bold rounded-2xl hover:opacity-90 disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Generating Nuclear Content...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Zap className="mr-3" />
                GENERATE VIRAL CONTENT
              </div>
            )}
          </button>
        </div>

        {/* Right Panel - Results */}
        <div>
          {result && (
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Generated Content</h2>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-800 rounded-lg"
                  title="Copy"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 whitespace-pre-wrap font-mono text-sm">
                {result}
              </div>

              {/* Viral Score */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Viral Score</span>
                  <span className="text-2xl font-bold text-green-500">{viralScore}/100</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${viralScore}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
