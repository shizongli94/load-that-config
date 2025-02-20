import fs from 'fs'
import fsProm from 'fs/promises'
import yaml from 'yaml'
import json5 from 'json5'


export type Params_ParseForType<T> = Params_LoadThatConfig<T> & {
  fileContent: string
}
export function parseForType <T> (params: Params_ParseForType<T>) : T {

  const { configFilePath, fileContent, isCorrectType } = params

  let configObj : any = undefined
  if (configFilePath.endsWith('.yaml')) {

    // ^^ parsing yaml file
    configObj = yaml.parse(fileContent)
  } else if (configFilePath.endsWith('.json')) {

    // ^^ parsing json file
    configObj = JSON.parse(fileContent)
  } else if (configFilePath.endsWith('.json5')) {

    // ^^ parsing json5 file
    configObj = json5.parse(fileContent)
  }

  // ^^ check if correct type
  if (!configObj || !isCorrectType(configObj)) {
    throw new Error(`FATAL: bad config file at ${configFilePath}`)
  }

  return configObj 
}

export type Params_LoadThatConfig<T> = {
  configFilePath: string,
  isCorrectType: (obj: any) => obj is T,
}
export function loadThatConfigSync <T> (params: Params_LoadThatConfig<T>) : T {
  const { configFilePath } = params

  const fileContent = fs.readFileSync(configFilePath).toString('utf-8')

  return parseForType({ ...params, fileContent }) 
}
export async function loadThatConfig <T> (params: Params_LoadThatConfig<T>) : Promise<T> {
  const { configFilePath } = params

  const fileBuffer = await fsProm.readFile(configFilePath)
  const fileContent = fileBuffer.toString('utf-8')

  return parseForType({ ...params, fileContent })
}