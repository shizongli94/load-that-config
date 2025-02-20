import path from 'path';
import { loadThatConfig, loadThatConfigSync } from '../index';
import { describe, test, expect } from '@jest/globals';

type DummyType = {
  countries: {
    name: string,
    continent: string,
  }[]
}

function isDummyType (obj: any): obj is DummyType {
  return (
    obj && obj.countries && Array.isArray(obj.countries) &&
    obj.countries.every((item: any) => (
      item.name && typeof item.name === 'string' &&
      item.continent && typeof item.continent === 'string'
    ))
  )
}

const dummyConfigDir = path.join(process.cwd(), 'tests/assets') 

describe('loadThatConfigSync works as expected', () => {

  test('can load yaml synchronously', () => {
    const configFilePath = path.join(dummyConfigDir, 'abc.yaml')
    const result = loadThatConfigSync({
      configFilePath,
      isCorrectType: isDummyType,
    })
    const china = result.countries.find(item => item.name === 'China')
    const france = result.countries.find(item => item.name === 'France')

    expect(result).toBeDefined()
    expect(china).toBeDefined()
    expect(france).toBeDefined()
    expect(china?.continent).toBe('Asia')
    expect(france?.continent).toBe('Europe')
  });

  test('can load json synchronously', () => {
    const configFilePath = path.join(dummyConfigDir, 'abc.json')
    const result = loadThatConfigSync({
      configFilePath,
      isCorrectType: isDummyType,
    })
    const china = result.countries.find(item => item.name === 'China')
    const france = result.countries.find(item => item.name === 'France')

    expect(result).toBeDefined()
    expect(china).toBeDefined()
    expect(france).toBeDefined()
    expect(china?.continent).toBe('Asia')
    expect(france?.continent).toBe('Europe')
  });

  test('can load json5 synchronously', () => {
    const configFilePath = path.join(dummyConfigDir, 'abc.json5')
    const result = loadThatConfigSync({
      configFilePath,
      isCorrectType: isDummyType,
    })
    const china = result.countries.find(item => item.name === 'China')
    const france = result.countries.find(item => item.name === 'France')

    expect(result).toBeDefined()
    expect(china).toBeDefined()
    expect(france).toBeDefined()
    expect(china?.continent).toBe('Asia')
    expect(france?.continent).toBe('Europe')
  });

})

describe('loadThatConfig (Async) works as expected', () => {

  test('can load yaml asynchronously', async () => {
    const configFilePath = path.join(dummyConfigDir, 'abc.yaml')
    const result = await loadThatConfig({
      configFilePath,
      isCorrectType: isDummyType,
    })
    const china = result.countries.find(item => item.name === 'China')
    const france = result.countries.find(item => item.name === 'France')

    expect(result).toBeDefined()
    expect(china).toBeDefined()
    expect(france).toBeDefined()
    expect(china?.continent).toBe('Asia')
    expect(france?.continent).toBe('Europe')
  });

  test('can load json asynchronously', async () => {
    const configFilePath = path.join(dummyConfigDir, 'abc.json')
    const result = await loadThatConfig({
      configFilePath,
      isCorrectType: isDummyType,
    })
    const china = result.countries.find(item => item.name === 'China')
    const france = result.countries.find(item => item.name === 'France')

    expect(result).toBeDefined()
    expect(china).toBeDefined()
    expect(france).toBeDefined()
    expect(china?.continent).toBe('Asia')
    expect(france?.continent).toBe('Europe')
  });

  test('can load json5 asynchronously', async () => {
    const configFilePath = path.join(dummyConfigDir, 'abc.json5')
    const result = await loadThatConfig({
      configFilePath,
      isCorrectType: isDummyType,
    })
    const china = result.countries.find(item => item.name === 'China')
    const france = result.countries.find(item => item.name === 'France')

    expect(result).toBeDefined()
    expect(china).toBeDefined()
    expect(france).toBeDefined()
    expect(china?.continent).toBe('Asia')
    expect(france?.continent).toBe('Europe')
  });

})