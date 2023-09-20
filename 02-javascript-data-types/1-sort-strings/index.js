/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (arr.every(i => typeof i === "string") && param === 'asc' || param === 'desc') {
    if (param === 'asc') {
      return arr.sort();
    }
    else if (param === 'desc') {
      return arr.sort().reverse()
    }
  }
  else console.log('Error')
}
