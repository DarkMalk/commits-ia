import OpenAI from 'openai'
import { prompt } from '../consts/promptIa.js'
import { Settings } from './getConfig.js'

type Props = {
  diffFiles: string
} & Settings

export const generateCommit = async ({ diffFiles, model, server, apiKey }: Props) => {
  const client = new OpenAI({
    baseURL: server,
    apiKey
  })

  const completion = await client.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: prompt
      },
      {
        role: 'user',
        content: diffFiles
      }
    ],
    temperature: 0.2,
    max_tokens: 100
  })

  const commit: string = completion.choices[0].message.content ?? ''

  return commit.split('\n')[0].trim()
}
