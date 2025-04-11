import { commitFiles, diffFiles, isGitRepository } from './utils/functions.js'
import { intro, note, outro, confirm } from '@clack/prompts'
import { manageFiles } from './components/manageFiles.js'
import { writeCommit } from './components/writeCommit.js'
import { messages } from './consts/messages.js'

intro(messages.welcome)

if (!(await isGitRepository())) {
  outro(messages.notGitRepository)
  process.exit(1)
}

await manageFiles()

const diff = await diffFiles()

if (!diff) {
  note(messages.noChangesAvailable)
  outro(messages.goodbye)
  process.exit(0)
}

const commitMessage = await writeCommit({ diffFiles: diff })

const isConfirmed = await confirm({
  message: 'Are you sure you want to commit?',
  initialValue: true
})

if (!isConfirmed) {
  outro(messages.goodbyeWithoutCommit)
  process.exit(0)
}

await commitFiles(commitMessage)

outro(messages.goodbyeWithCommit)
