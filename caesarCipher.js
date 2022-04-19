function caesarCipher(str, num) {
  return str
    .split('')
    .map((char) => {
      if (!char.match(/[a-z]/i)) {
        return char;
      }
      return shift(char, num);
    })
    .join('');
}

function shift(char, shift) {
  const charCode = toCharCode(char);
  if (char === char.toLowerCase() && checkLowerCaseWrap(charCode, shift)) {
    return wrapAroundLowerCase(charCode, shift);
  }
  if (char === char.toUpperCase() && checkUpperCaseWrap(charCode, shift)) {
    return wrapAroundUpperCase(charCode, shift);
  }
  return toChar(charCode + shift);
}

function checkLowerCaseWrap(charCode, shift) {
  const max_lowercase = toCharCode('z');
  return charCode + shift > max_lowercase;
}

function wrapAroundLowerCase(charCode, shift) {
  const max_lowercase = toCharCode('z');
  const min_lowercase = toCharCode('a');
  return toChar(((charCode + shift - max_lowercase) % 26) + min_lowercase - 1);
}

function checkUpperCaseWrap(charCode, shift) {
  const max_uppercase = toCharCode('Z');
  return charCode + shift > max_uppercase;
}

function wrapAroundUpperCase(charCode, shift) {
  const max_uppercase = toCharCode('Z');
  const min_uppercase = toCharCode('z');
  return toChar(((charCode + shift - max_uppercase) % 26) + min_uppercase - 1);
}

function toCharCode(str) {
  return str.charCodeAt();
}

function toChar(code) {
  return String.fromCharCode(code);
}

export default caesarCipher;
