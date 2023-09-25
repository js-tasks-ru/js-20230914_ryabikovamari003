/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }
  if (string === '' || size === 0) {
    return ''
  }

  const splitArray = string.split('');
  let match = 0;
  let result = splitArray[0];

  splitArray.forEach((element, index)=>{
    const nextElement = splitArray[index + 1];

    if ( !nextElement) {return;}

    match =  element === nextElement? match + 1: 0

    if (match < size) {
      result+=nextElement
    }
  });
  return result

}
