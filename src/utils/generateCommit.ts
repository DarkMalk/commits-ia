import { prompt } from '../consts/messages.js'

type Props = {
  diffFiles: string
  model: string
  server: string
}

export const generateCommit = async ({ diffFiles, model, server }: Props) => {
  const response = await fetch(server, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: 'user',
          content: prompt + diffFiles
        }
      ]
    })
  })

  const json = await response.json()
  let commit: string = json.choices[0].message.content ?? ''
  commit = commit.trim().replace(/"/g, '').slice(0, 72)

  return commit
}
