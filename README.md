This simple npm package loads config file, converts its content to JSON object, and checks for the object's type correctneess.

#### Supported formats: yaml, json, json5

#### Built-in typescript support






## Installation
Just plain old npm install command...

```bash
  npm i load-that-config
```
    
## Usage/Examples

```typescript
import { loadThatConfig, loadThatConfigSync } from 'load-that-config'

// load config file syncronously
// if parsing failed, an error will be thrown. (See Notice Below)
const configObj = loadThatConfigSync({

  // string: file path to the config file
  configFilePath,

  // type-guard function
  isCorrectType: isDummyType,
})

// load config file asyncronously
// if parsing failed, an error will be thrown. (See Notice Below)
const configObj = await loadThatConfig({

  // string: file path to the config file
  configFilePath,

  // type-guard function
  isCorrectType: isDummyType,
})

```


## Notice
If type checking failed (i.e. the content in the target config file is not of the expected type as specified by "isCorrectType"), an error will be thrown. Therefore, you should always enclose "loadThatConfig/loadThatConfigSync" in try-catch blocks. Or maybe a better way is to call "loadThatConfig/loadThatConfigSync" functions with another package I wrote: [fail-2b-good](https://www.npmjs.com/package/fail-2b-good), so you don't have to deal with the horrible try-catch thing. 
## Parameters

#### configFilePath

| Type     | Description                |
| :------- | :------------------------- |
| `string` | **Required**. file path to the config file (only the following file extensions are allowed: .yaml, .json, .json5) |

#### isCorrectType


| Type     | Description                |
| :------- | :------------------------- |
| `function` | **Required**. the type guard function to check that the config object parsed from file is of the expected type (so you don't deal with any) |

```typescript
<T> (obj: any) => obj is T
```