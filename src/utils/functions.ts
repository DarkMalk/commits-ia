import { COMMANDS } from '../consts/commands.js'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execPromisify = async (command: string) => promisify(exec)(command)

export const getFiles = async () => {
  try {
    const { stdout } = await execPromisify(COMMANDS.gitStatus)

    return stdout
      .split('\n')
      .map(line => line.split(' ')[1])
      .filter(Boolean)
  } catch (error) {
    console.log(error)
  }
}

export const addFiles = async (files: string[]) => {
  try {
    await execPromisify(COMMANDS.gitAdd(files))
  } catch (error) {
    console.log(error)
  }
}

export const diffFiles = async () => {
  try {
    const { stdout } = await execPromisify(COMMANDS.gitDiff)
    return stdout.trim()
  } catch (error) {
    console.log(error)
  }
}

export const getFilesInStage = async () => {
  try {
    const { stdout } = await execPromisify(COMMANDS.gitStatus)

    const lines = stdout.split('\n').filter(Boolean)
    const stagedFiles = lines.filter(line => line.startsWith('A') || line.startsWith('M') || line.startsWith('D'))
    const files = stagedFiles.map(line => line.split(' ').filter(Boolean)[1])

    return files
  } catch (error) {
    console.log(error)
  }
}

export const removeFilesInStage = async (files: string[]) => {
  try {
    const { stdout } = await execPromisify(COMMANDS.removeFilesInStageGit(files))

    return { stdout }
  } catch (error) {
    console.error(error)
  }
}

export const commitFiles = async (message: string) => {
  try {
    await execPromisify(COMMANDS.gitCommit(message))
  } catch (error) {
    console.error(error)
  }
}
