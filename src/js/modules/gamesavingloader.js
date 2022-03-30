import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load(salt) {
    try {
      if (salt != undefined) {
        throw new Error('Ошибка!')
      }
      const data = await read()
      const value = await json(data)
      return value
    } catch(e) {
      console.log('Ошибка')
    }
  }
}
