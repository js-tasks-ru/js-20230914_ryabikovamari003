/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const splitArray = string.split('')
  const cache = {}
  let result = ''

  splitArray.forEach((element)=>{
    cache[element] = Number.isInteger(cache[element]) ? cache[element]: 0

    if (cache[element] < size) {
      cache[element]++
      result += element
    }
  })

  return result
}
