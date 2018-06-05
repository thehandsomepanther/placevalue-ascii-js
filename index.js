const placevalue = (fn, height, width, placevalue = 1, offsetY = 0) => {
  const rows = [];
  for (let y = 0; y < height - offsetY; y++) {
    let row = "";
    for (let x = 0; x < width; x++) {
      row += (fn(x, y) >> (placevalue - 1)) % 2 ? "*" : " ";
    }
    rows.push(row);
  }

  return rows.join("\n");
};

module.exports = placevalue;
module.exports.default = placevalue;
