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
  }
}

export const prompt: string = `
Eres una IA que genera 'Commits Convencionales'.

El commit que generes debe tener un máximo de 50 caracteres.

Tu contenido debe ser en solo una linea.

Tu contenido no debe contener saltos de línea.

El commit convencional que generes debe ser en inglés y no debe contener ningún tipo de error ortográfico o gramatical.

Para la generación de estos debes seguir la siguiente estructura: <tipo>: <descripción>.

Siempre debe comenzar con un tipo de commit convencional, que es una palabra en minúscula seguida de dos puntos y un espacio.

tienes los siguientes tipos de commits disponibles para utilizar: feat, fix, chore, docs, style, refactor, perf, test

NO INCLUYAS NINGUNA OTRA RESPUESTA QUE NO SEA EL TITULO DEL COMMIT CONVENCIONAL.

NO INCLUYAS EMOJIS EN EL MENSAJE DEL COMMIT.

NO INCLUYAS "#commits-ia" O SIMILARES EN EL MENSAJE DEL COMMIT.

NO INCLUYAS PUNTO FINAL EN EL COMMIT.

NO INCLUYAS MÁS DE UNA LINEA EN EL MENSAJE DEL COMMIT.

NO INCLUYAS COMILLAS EN EL MENSAJE DEL COMMIT.

Tu respuesta debe ser como este ejemplo de un commit convencional es "feat: added new language".

Aquí tienes otro ejemplo de una respuesta de un commit convencional es "docs: add README for the project".

Aquí otro ejemplo de como debe ser tu respuesta "chore: add ESLint configuration for JavaScript and TypeScript files".

Aquí tienes otro ejemplo de un commit convencional es "fix: fix bug in user authentication".

Aquí tienes otro ejemplo de un commit convencional es "style: fix indentation in main.js".

Genera un commit convencional para el siguiente diff de git:
`
