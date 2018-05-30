function Utils() {

}

var seems = [
  [0, 123, 255],
  [255, 193, 6],
  [62, 167, 68],
  [255, 255, 255],
  [222, 72, 80]
];

//https://stackoverflow.com/questions/1484506/random-color-generator?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
Utils.prototype.getRandomColors = function(quantity, label) {
  let n1 = seems[BOROUGHS.indexOf(label)][0],
    n2 = seems[BOROUGHS.indexOf(label)][2],
    n3 = seems[BOROUGHS.indexOf(label)][3],
    sel = Math.round(Math.random() * 2),
    step = Math.round(255 / quantity);

  let colors = [];

  for (let i = 0; i < quantity; i++) {
    // if (sel == 0) {
    //   n1 = Math.round(i * step);
    //   if (n1 > 255) {
    //     n1 = 255;
    //   }
    // }
    // if (sel == 1) {
    //   n2 = Math.round(i * step);
    //   if (n2 > 255) {
    //     n2 = 255;
    //   }
    // }
    // if (sel == 2) {
    //   n3 = Math.round(i * step);
    //   if (n3 > 255) {
    //     n3 = 255;
    //   }
    // }

    colors.push(this.RGBtoHEX(n1, n2, n3));
  }

  return colors;
}

Utils.prototype.RGBtoHEX = function(a, b, c) {
  a = a.toString(16);
  if (a.length < 2) {
    a = "0" + a;
  }
  b = b.toString(16);
  if (b.length < 2) {
    b = "0" + b;
  }
  c = b.toString(16);
  if (c.length < 2) {
    c = "0" + c;
  }

  return "#" + a + b + c;
}
