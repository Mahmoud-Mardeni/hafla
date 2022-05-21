function blanks(n) {
  return new Array(n).join(" ");
}

function makeLine(width, i, frame) {
  return blanks(width + 1 - i) + frame + blanks(i * 2) + frame;
}

function printDiamond(character) {
  var a = "A".charCodeAt(),
    currentCharCode,
    width = character.toUpperCase().charCodeAt() - a,
    i = 0,
    lines = [];

  while (i++ < width) {
    currentCharCode = String.fromCharCode(a + i);
    lines.push(makeLine(width, i, currentCharCode));
  }
  if (lines.length) {
    lines.unshift(blanks(width + 1) + "A");
    lines = lines.concat(lines.slice(0, lines.length - 1).reverse());
  } else {
    lines.push("A");
  }
  return lines.join("\n");
}

module.exports.printDiamond = printDiamond;
