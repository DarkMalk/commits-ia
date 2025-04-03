import { multiselect, isCancel, outro, confirm } from '@clack/prompts'
import { addFiles, getFiles } from '../utils/functions.js'
import { messages } from '../consts/messages.js'

export const getFilesToAdd = async () => {
  const filesToAdd = await getFiles()

  const files = await multiselect<string>({
    message: messages.getFilesToAdd.message,
    options: filesToAdd?.map(file => ({ value: file, label: file })) ?? [],
    required: true
  })

  if (isCancel(files)) {
    outro(messages.goodbye)
    process.exit(0)
  }

  const confirmToAddFiles = await confirm({
    message: messages.getFilesToAdd.messageConfirm,
    initialValue: true
  })

  if (isCancel(confirmToAddFiles)) {
    outro(messages.goodbye)
    process.exit(0)
  }

  if (!confirmToAddFiles) {
    outro(messages.goodbye)
    process.exit(0)
  }

  const listFiles = files.toString().split(',')

  await addFiles(listFiles)
}
