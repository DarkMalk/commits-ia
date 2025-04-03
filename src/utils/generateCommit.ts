import OpenAI from 'openai'
import { prompt } from '../consts/messages.js'
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
        role: 'user',
        content: prompt + diffFiles
      }
    ]
  })

  let commit: string = completion.choices[0].message.content ?? ''
  commit = commit.trim().replace(/"/g, '').slice(0, 72)

  return commit
}
