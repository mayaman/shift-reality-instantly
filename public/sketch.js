/* 
* ˚｡⋆ shift reality instantly ~ very powerful ⋆｡˚
* maya man (mayaontheinter.net)
*/
let chars = ["♡", "ꔫ", "♩", "♬", "•", "༶", "・", ".", "*", "✿", "✼", "*", "☆", "𐐪𐑂", "o", "✧", "❀", "✣", "+", "୭", "⋇", "✮", "𓏲", "❅", "☽", "✥", "✤", "✣", "♪", "∞", "❃", "✫", "⋆", "✩"];
let cursorChars = ["♥", "♡", "♬", "✿", "✼", "☆", "✧", "❀", "✮", "❅"];
let problematicPreviewChars = ["𐐪𐑂", "ꔫ", "༶", "𓏲",];
let charArray = [];

// 4 fun
let blacknwhite = ["#000000", "#ffffff"];
let silvers = ["#d1c6b5", "#aa9e8b", "#e3d9cd", "#ffffff", "#FFC8E3", "#38323a", "#113820"];
let girlblogger = ["#4D4137", "#E4D6D1", "#937C71", "#71594D", "#BBA79A", "#776652", "#9A9690", "#9A8A8D", "#BDABAC", "#EACDCF", "#DCBFB7", "#E9E6E1", "#FFFFFF"];

// sandy
let apple = ["#545665", "#dcc0cf", "#f4f4f4", "#fcf3f4", "#f4f4df"];
let polly = ["#da5748", "#744864", "#72242a", "#5f3f47", "#302c4d"];
let nussbaum = ["#959379", "#cbd0c8", "#414429", "#666d3f", "#5e5814", "#e2c9d0"];
let skate = ["#847c7c", "#040404", "#deaebc", "#14140c", "#14141c"];
let jelly = ["#84649c", "#8c5cb4", "#be81b4", "#7c3464", "#d4cedf"];
let collector = ["#d8d3d1", "#efece4", "#8c9cb4", "#ece4e6", "#fcfcf4", "#8c9cb4"];
let tuxedo = ["#c4cccf", "#252a34", "#363539", "#88b8dd", "#fcf4f8"];

// ashley
let armwarmers = ["#cc7689", "#f7c5c7", "#c0bfb7", "#e3d7e6", "#0c0c0f"];
let strawberries = ["#c9d4c3", "#f6f4e3", "#fc8cac", "#c9ecd0", "#dc7484"];
let sadteddies = ["#9f8180", "#a7b672", "#b6a770", "#ac8474"];
let patchwork = ["#e0a0a7", "#ada8cb", "#fcf1f1", "#eceded"];
let cardigan = ["#966a54", "#58855c", "#fa91a4", "#fc5484", "#c27c73"]; // Kind of ugly

// simone
let ruffle = ["#ececec", "#d6c1b9", "#7484b0", "#b7b4c0", "#dce0ee"];
let mint = ["#c0c2b5", "#dae2cf", "#767474", "#b4ccb4", "#ecf0e8"];
let peplum = ["#9c8c6c", "#f4f1eb", "#e5e4dc", "#ecf4ef", "#ecece4"];

// cecilie
let beth = ["#caae96", "#d1cfc2", "#d0e2e0", "#f4f4fc", "#f4fcf8"];
let alexandra = ["#322f30", "#717474", "#d1d4d6", "#e6ccc4", "#e9dcdc", "#d0857a", "#eca8a5"];
let gianna = ["#f4d4d3", "#f4d4dc", "#d49c74", "#dc7474", "#f4bcd4"];

// molly
let myla = ["#ead8dd", "#c11e3e", "#deb6b3", "#c42c64", "#f4f4ec"];
let luke = ["#d9cec0", "#997989", "#ece4e4", "#e6ccc4", "#f4ecef"];
let lewis = ["#80181f", "#2c4f30", "#fcebf0", "#ecece4", "#ececf4"];

let colorOptions = [girlblogger, myla, luke, lewis, gianna, alexandra, beth, mint, peplum, ruffle, cardigan, patchwork, sadteddies, silvers, blacknwhite, apple, polly, nussbaum, skate, jelly, collector, tuxedo, armwarmers, strawberries];
let backgroundColors = ["#D7D8C3", "#F6F4E3", "#F4BCD4", "#9C8C6C", "#5E5814", "#F9DDE2", "#FFFEF5", "#FFF3F8", "#ECE7DC", "#FFFFFF", "#140004", "#383200", "#CDCDCD"];
let backgroundColor;
let resetInterval = 222 + Math.floor(fxrand() * 999);
let sparkles2reset;
let grids = [];
let cursorChar = cursorChars[Math.floor(fxrand() * cursorChars.length)];
let backgroundColorString;
let myCanvas;
let timer = 0;
let scalar;
let code2000;
let notoemoji;

function preload() {
  if (isFxpreview) {
    code2000 = loadFont('./CODE2000.TTF');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (isFxpreview) {
    for (let p = 0; p < problematicPreviewChars.length; p++) {
      let probChar = problematicPreviewChars[p];
      const index = chars.indexOf(probChar);
      if (index > -1) { // only splice array when item is found
        chars.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    textFont(code2000);
  }

  scalar = (width + height) / 2;
  sparkles2reset = 2 + Math.floor(fxrand() * scalar / 111);
  backgroundColorString = backgroundColors[Math.floor(fxrand() * backgroundColors.length)];
  backgroundColor = color(backgroundColorString);
  background(red(backgroundColor), green(backgroundColor), blue(backgroundColor));
  noCursor();
  let currentMaxX = 0;
  let currentMaxY = 0;
  let newOffset = height / 22;

  while (currentMaxY < height + newOffset) {
    let newHeight = height / 11 + fxrand() * height / 1.3;
    while (currentMaxX < width) {
      newOffset = scalar / 22 + fxrand() * scalar / 11;
      let newWidth = width / 11 + fxrand() * width / 1.3;
      grids.push(new Grid(currentMaxX, currentMaxY, newWidth, newHeight, newOffset));
      currentMaxX += (newWidth);
    }
    currentMaxX = 0;
    currentMaxY += (newHeight);
  }
}

function draw() {
  background(red(backgroundColor), green(backgroundColor), blue(backgroundColor), 30);
  for (const g of grids) {
    g.drawGrid();
  }

  textSize(36);
  stroke(255);
  strokeWeight(2);
  fill(0);
  text(cursorChar, mouseX, mouseY);

  if (millis() - timer > resetInterval) {
    for (let i = 0; i < sparkles2reset; i++) {
      resetSparkle();
    }
    timer = millis();
  }

}

function drawSparkles() {
  for (let y = 0; y < charArray.length; y++) {
    for (let x = 0; x < charArray[y].length; x++) {
      noStroke();
      charArray[y][x].draw();
    }
  }
}

function randomCoord(maxX, maxY) {
  let randomX = Math.floor(fxrand() * maxX);
  let randomY = Math.floor(fxrand() * maxY);
  return [randomX, randomY];
}

function resetSparkle() {
  for (const g of grids) {
    g.sparkle();
  }
}

class Grid {
  constructor(gx, gy, gWidth, gHeight, gOffset) {
    this.x = gx;
    this.y = gy;
    this.width = gWidth;
    this.height = gHeight;
    this.offset = gOffset;
    this.grid = [];
    let xVal;
    let yVal = 0;
    this.myColors = colorOptions[Math.floor(fxrand() * colorOptions.length)];
    for (let y = 0; y < this.height; y += this.offset) {
      this.grid[yVal] = [];
      xVal = 0;
      for (let x = 0; x < this.width; x += this.offset) {
        let newChar = chars[Math.floor(fxrand() * chars.length)];
        let newChar2 = chars[Math.floor(fxrand() * chars.length)];
        let patchColor = this.myColors[Math.floor(fxrand() * this.myColors.length)];
        this.grid[yVal][xVal] = new Patch(this.x + x, this.y + y, patchColor, newChar, newChar2, this.offset);
        xVal++;
      }
      yVal++;
    }

    this.maxX = xVal;
    this.maxY = yVal;
  }

  drawGrid() {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        noStroke();
        this.grid[y][x].draw();
      }
    }
  }

  sparkle() {
    let newCoord = randomCoord(this.maxX, this.maxY);
    let newChar = chars[Math.floor(fxrand() * chars.length)];
    let newChar2 = chars[Math.floor(fxrand() * chars.length)];
    this.grid[newCoord[1]][newCoord[0]].update(newChar, newChar2, this.myColors[Math.floor(fxrand() * this.myColors.length)]);
  }
}

class Patch {
  constructor(px, py, pColor, pChar1, pChar2, pOffset) {
    this.x = px;
    this.y = py;
    this.color = pColor;
    this.char1 = pChar1;
    this.char2 = pChar2;
    this.offset = pOffset;
    this.circleSizeX = width / 111 + fxrand() * width;
    this.circleSizeY = height / 111 + fxrand() * height;
    this.size = this.offset / 4;
  }

  draw() {
    const crossOffset = this.offset / 3;
    const xa = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    const ya = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    const ang = xa * (this.x / width) + ya * (this.y / height);
    const specialX = this.x + this.circleSizeX * cos(.222 * PI + ang);
    const specialY = this.y + this.circleSizeY * sin(.222 * PI + ang);

    textSize(this.size);
    fill(this.color);
    text(this.char1, specialX, specialY);
    text(this.char1, this.x, this.y);
    text(this.char1, this.x + crossOffset, this.y);
    text(this.char1, this.x + 2 * crossOffset, this.y);
    text(this.char1, this.x + crossOffset, this.y + crossOffset);
    text(this.char1, this.x + crossOffset, this.y - crossOffset);

    text(this.char2, this.x, this.y - crossOffset);
    text(this.char2, this.x, this.y + crossOffset);

    text(this.char2, this.x + 2 * crossOffset, this.y - crossOffset);
    text(this.char2, this.x + 2 * crossOffset, this.y + crossOffset);
  }

  update(newChar1, newChar2, newColor) {
    this.char1 = newChar1;
    this.char2 = newChar2;
    this.color = newColor;
  }

}

