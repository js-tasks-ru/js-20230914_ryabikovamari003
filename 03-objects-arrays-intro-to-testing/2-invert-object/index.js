/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const makeArray = Object.entries(obj)
  const reverseArray = makeArray.map((array) => {
    return array.reverse()
  })
  return Object.fromEntries(reverseArray)
}
