import fs from 'node:fs/promises'
import path from 'node:path'

type Settings = {
  model: string
  server: string
}

const API_LM_STUDIO_DEFAULT = 'http://127.0.0.1:1234/v1/chat/completions'

const DEFAULT_SETTINGS: Settings = {
  model: '',
  server: API_LM_STUDIO_DEFAULT
}

const DEFAULT_FOLDER_CONFIG =
  process.platform === 'win32'
    ? path.join(process.env.APPDATA ?? '', 'commits-ia') // windows
    : path.join(process.env.HOME || '', '.config', 'commits-ia') // macos and linux

const FILE_CONFIG_NAME = 'config.json'

export const getConfig = async (): Promise<Settings> => {
  try {
    const dir = await fs.readdir(DEFAULT_FOLDER_CONFIG)

    if (!dir.includes(FILE_CONFIG_NAME)) {
      await fs.writeFile(path.join(DEFAULT_FOLDER_CONFIG, FILE_CONFIG_NAME), JSON.stringify(DEFAULT_SETTINGS, null, 2))
    }

    const filePath = path.join(DEFAULT_FOLDER_CONFIG, FILE_CONFIG_NAME)
    const file = await fs.readFile(filePath, 'utf-8')

    return JSON.parse(file) || DEFAULT_SETTINGS
  } catch (error) {
    if ((error as { code: string }).code === 'ENOENT') {
      await fs.mkdir(DEFAULT_FOLDER_CONFIG, { recursive: true })
      await fs.writeFile(path.join(DEFAULT_FOLDER_CONFIG, FILE_CONFIG_NAME), JSON.stringify(DEFAULT_SETTINGS, null, 2))
    }

    return DEFAULT_SETTINGS
  }
}
