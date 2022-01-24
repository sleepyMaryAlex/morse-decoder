const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let resultStr = "";
  for (let i = 0; i < expr.length / 10; i++) {
    let chunkStr = expr.substr(i * 10, 10);
    if (chunkStr.includes("*")) {
      resultStr += " ";
    } else {
      let morseStr = "";
      for (let j = 0; j < 5; j++) {
        let symbol = chunkStr.substr(j * 2, 2);
        switch (symbol) {
          case "10":
            morseStr += ".";
            break;
          case "11":
            morseStr += "-";
            break;
        }
      }
      resultStr += MORSE_TABLE[morseStr];
    }
  }
  return resultStr;
}

module.exports = {
  decode,
};
