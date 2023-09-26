/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} ["asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const sortAsc = (arr) => [...arr].sort((string1, string2) => string1.localeCompare(string2, ['ru', 'en'], { caseFirst: 'upper'}));
const sortDesc = (arr) => [...arr].sort((string1, string2) => string2.localeCompare(string1, ['ru', 'en'], { caseFirst: 'upper'}));

export function sortStrings(arr, param = "asc") {
  return (param === 'asc') ?  sortAsc(arr) : sortDesc(arr);
}
