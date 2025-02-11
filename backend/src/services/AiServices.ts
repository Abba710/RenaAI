import { zukiGPT4 } from '@/ai/models'
import { systemPrompt } from '@/ai/config/aiconfig'

type AIResponse = string | undefined

// The function of sending a request to AI
export async function queryAi(text: string): Promise<AIResponse> {
  try {
    const response = await zukiGPT4.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [systemPrompt, { role: 'user', content: text }],
    })

    const reply: AIResponse = response.choices[0]?.message?.content || undefined

    console.log(reply)
    return reply
  } catch (error) {
    console.error('AI query failed:', error)

    return undefined
  }
}
