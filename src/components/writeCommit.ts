import { text, isCancel, outro, spinner, confirm } from '@clack/prompts'
import { generateCommit } from '../utils/generateCommit.js'
import { messages } from '../consts/messages.js'
import { getConfig } from '../utils/getConfig.js'

export const writeCommit = async ({ diffFiles }: { diffFiles: string }) => {
  const { model, server } = await getConfig()
  let initialValue: string | undefined

  if (model) {
    const confirmGenerateWithIA = await confirm({
      message: messages.writeCommit.messageConfirm,
      initialValue: false
    })

    if (isCancel(confirmGenerateWithIA)) {
      outro(messages.goodbye)
      process.exit(0)
    }

    if (confirmGenerateWithIA) {
      const loading = spinner({ indicator: 'timer' })
      loading.start(messages.writeCommit.spinner.start)

      try {
        initialValue = await generateCommit({ diffFiles, model, server })

        loading.stop(messages.writeCommit.spinner.stop)
      } catch {
        loading.stop(messages.writeCommit.spinner.stopError)
      }
    }
  }

  const message = await text({
    message: messages.writeCommit.message,
    placeholder: messages.writeCommit.placeholder,
    initialValue,
    validate: value => {
      if (value.length === 0) {
        return messages.writeCommit.isEmpty
      }

      if (value.length > 72) {
        return messages.writeCommit.isTooLong
      }
    }
  })

  if (isCancel(message)) {
    outro(messages.goodbye)
    process.exit(0)
  }

  return message.toString()
}
