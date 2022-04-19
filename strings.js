function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function reverse(str) {
  if (str.length > 2) return str.split('').reverse().join('');
  if (str.length === 1) {
    return str;
  }
  return '';
}

export { capitalize, reverse };
