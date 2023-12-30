function binaryToText(binaryData: string): string {
  const binaryArray = binaryData.split(' ');
  let text = '';

  for (let i = 0; i < binaryArray.length; i++) {
    const binaryChar = binaryArray[i];
    const decimalValue = parseInt(binaryChar, 2);
    const char = String.fromCharCode(decimalValue);
    text += char;
  }

  return text;
}

const binaryData = '01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100';
const text = binaryToText(binaryData);
console.log(text);
