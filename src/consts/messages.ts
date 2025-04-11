import pc from 'picocolors'

export const messages = {
  welcome: pc.bold(`${pc.bgWhite(' Welcome to the app!')}${pc.bgBlue(' By @darkmalk ')}`),
  goodbye: pc.bold(`${pc.bgWhite(' Goodbye from the app! ')}`),
  goodbyeWithCommit: pc.bold(`${pc.bgWhite(' Goodbye, the commit was successful. ')}`),
  goodbyeWithoutCommit: pc.bold(`${pc.bgWhite(' Goodbye, The commit has not been made ')}`),
  noChangesAvailable: 'No changes available to commit',
  writeCommit: {
    message: pc.bold('Write commit message'),
    messageConfirm: pc.bold('Do you want to generate the commit message with IA?'),
    placeholder: 'Enter commit message',
    isEmpty: 'Commit message cannot be empty',
    isTooLong: 'Commit message is too long',
    spinner: {
      start: pc.yellow('Generating commit with IA...'),
      stop: pc.green('Commit generated'),
      stopError: pc.red('Error generating commit with IA')
    }
  },
  getFilesToAdd: {
    message: pc.bold('Select files to add'),
    messageConfirm: pc.bold('Do you want to add these files?')
  },
  manageStagedFiles: {
    noteTitle: pc.bold('Exists staged files'),
    messageConfirmToRemoveFiles: pc.bold('Do you want to remove staged files?'),
    messageFilesSelectedToRemove: pc.bold('Select files to remove from stage'),
    messageConfirmAddFiles: pc.bold('Do you want to add more files?')
  },
  noFilesToAdd: pc.bold('No files to add'),
  notGitRepository: pc.bold(pc.red('No Git repository found in current directory'))
}
