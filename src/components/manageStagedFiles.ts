import { confirm, isCancel, multiselect, note, outro } from '@clack/prompts'
import { getFilesInStage, removeFilesInStage } from '../utils/functions.js'
import { messages } from '../consts/messages.js'

export const manageStagedFiles = async () => {
  const filesInStage = await getFilesInStage()

  if (!filesInStage?.length) return

  note(filesInStage.join('\n'), messages.manageStagedFiles.noteTitle)

  const confirmToRemoveFiles = await confirm({
    message: messages.manageStagedFiles.messageConfirmToRemoveFiles,
    initialValue: false
  })

  if (!confirmToRemoveFiles) return filesInStage

  if (isCancel(confirmToRemoveFiles)) {
    outro(messages.goodbye)
    process.exit(0)
  }

  const filesSelectedToRemove = await multiselect<string>({
    message: messages.manageStagedFiles.messageFilesSelectedToRemove,
    options: filesInStage.map(file => ({ value: file, label: file })),
    required: true
  })

  if (isCancel(filesSelectedToRemove)) {
    outro(messages.goodbye)
    process.exit(0)
  }

  const filesToRemove = filesSelectedToRemove.toString().split(',')

  await removeFilesInStage(filesToRemove)

  return filesInStage.filter(file => !filesToRemove.includes(file))
}
