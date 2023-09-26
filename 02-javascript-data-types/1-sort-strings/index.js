/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} ["asc", "desc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const sortAsc = (arr) => arr.sort((string1, string2) => string1.localeCompare(string2, 'en' || 'ru', { caseFirst: 'upper'}));
const sortDesc = (arr) => arr.sort((string1, string2) => string1.localeCompare(string2, 'en' || 'ru', { caseFirst: 'upper'})).reverse();


export function sortStrings(arr, param="asc") {
  const isValidStringArray = Array.isArray(arr) && arr.every(i => typeof i === "string")
  const isValidOption = ['asc', 'desc'].includes(param)

  if (isValidStringArray && isValidOption) {
    if (param === 'asc') {
      console.log(sortAsc(arr))
    } else if (param === 'desc') {
      console.log(sortDesc(arr))
    }
  }
  else console.log('Error')
}
