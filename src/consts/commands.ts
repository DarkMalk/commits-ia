export const COMMANDS = {
  removeFilesInStageGit: (files: string[]) => `git restore --staged ${files.join(' ')}`,
  gitAdd: (files: string[]) => `git add ${files.join(' ')}`,
  gitCommit: (message: string) => `git commit -m "${message}"`,
  gitStatus: 'git status --porcelain --untracked-files',
  gitDiff: 'git diff --cached'
}
