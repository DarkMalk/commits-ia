import { manageStagedFiles } from './manageStagedFiles.js'
import { getFilesToAdd } from './getFiles.js'
import { confirm } from '@clack/prompts'
import { messages } from '../consts/messages.js'

export const manageFiles = async () => {
  const filesInStage = await manageStagedFiles()
  let addFiles = true

  if (filesInStage?.length) {
    const confirmValue = await confirm({
      message: messages.manageStagedFiles.messageConfirmAddFiles,
      initialValue: false
    })

    addFiles = Boolean(confirmValue)
  }

  if (!addFiles) return

  await getFilesToAdd()
}
