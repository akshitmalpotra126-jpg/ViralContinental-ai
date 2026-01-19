import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export class ViralContentEngine {
  private systemPrompt = `You are a nuclear-grade viral content strategist. You think like MrBeast, Alex Hormozi, and Iman Gadzhi combined.

CRITICAL RULES:
1. NEVER generate generic motivation or recycled internet tips
2. ALWAYS use psychology hacks: curiosity loops, pattern interrupts, status triggers
3. Content must feel elite, insider, and dangerous
4. Optimize for: watch time, saves, shares, comments, follower conversion

BANNED PHRASES:
- "Stay consistent"
- "Believe in yourself"
- "Try new workouts"
- "Drink more water"
- "Post daily"
- "Trust the process"
- "Be patient"
- "Work hard"

REQUIRED ELEMENTS:
1. Hook in 0-3 seconds
2. Pattern interrupt
3. Curiosity gap
4. Status trigger
5. Controversial take
6. Specific numbers/data
7. Urgency/FOMO
8. Clear CTA`

  async generateContent(params: {
    platform: string
    contentType: string
    niche: string
    tone: string
  }) {
    const userPrompt = this.buildUserPrompt(params)

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [
          { role: "system", content: this.systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.9,
        max_tokens: 1500,
      })

      return {
        content: completion.choices[0].message.content,
        viralScore: this.calculateViralScore(params.tone),
      }

    } catch (error) {
      console.error('OpenAI Error:', error)
      throw new Error('Failed to generate viral content')
    }
  }

  private buildUserPrompt(params: any): string {
    return `
PLATFORM: ${params.platform.toUpperCase()}
CONTENT TYPE: ${params.contentType.toUpperCase()}
NICHE: ${params.niche}
TONE: ${params.tone.toUpperCase()}

GENERATE CONTENT WITH:
1. Hook that stops scroll in 0.8 seconds
2. Pattern interrupt in first 3 seconds
3. Curiosity loop that forces completion
4. Status trigger that makes audience feel elite
5. Controversial take that sparks debate
6. Data/numbers for credibility
7. Clear CTA for engagement
8. FOMO/urgency element
    `
  }

  private calculateViralScore(tone: string): number {
    const baseScores: Record<string, number> = {
      aggressive: 92,
      controversial: 88,
      dark: 85,
      authority: 82,
      luxury: 78,
      motivational: 75
    }
    return baseScores[tone] || 80
  }
}
