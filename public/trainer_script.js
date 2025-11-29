const row_size = 64;
const glyphs = [
  [ { svg: "./elian/a.svg", length: 1 } ],
  [ { svg: "./elian/b.svg", length: 1 } ],
  [ { svg: "./elian/c.svg", length: 1 } ],
  [ { svg: "./elian/d.svg", length: 1 } ],
  [ { svg: "./elian/e.svg", length: 1 } ],
  [ { svg: "./elian/f.svg", length: 1 } ],
  [ { svg: "./elian/g.svg", length: 1 } ],
  [ { svg: "./elian/h.svg", length: 1 } ],
  [ { svg: "./elian/i.svg", length: 1 } ]
];

const words = [
  [ [0] ],
  [ [1], [1,0,1] ],
  [ [0,2], [2,0], [2,0,1] ],
  [ [3,0,1], [1,0,3], [2,0,3], [3,0] ],
  [ [4,0], [3,4], [4,3,0], [0,4] ],
  [ [5,4,3], [5,4], [5,0,2], [0,5] ],
  [ [6,0,1], [1,0,6], [6,0], [0,6] ],
  [ [7,0], [7,0,6], [7,0,2], [1,7] ],
  [ [8,2,4], [3,8,4], [5,0,2,4], [0,8,3], [7,8], [1, 0, 3], [2, 0, 1], [0, 6, 4], [1, 0, 6], [0, 2, 4], [5, 4, 3],[5, 0, 2, 4] ]
];
let correct = 0;
let total = 0;

let display_glyphs = [];
let input = [];

let index = 0;
let line = 0;

let showPopup = false;

let word_limit = 250;
let char_too = 2;
let source = chose_words(char_too, word_limit);//[words[0], words[4], words[2], words[3], words[7]];
let text_lines  = [[]];
let glyph_lines = [[]];
let current_line = 0;
let current_size = 0;


function setCorrect(new_val) {
  correct = new_val;
  document.getElementById("score").textContent = correct + "/" + total;
}

function setTotal(new_val) {
  total = new_val;
  document.getElementById("score").textContent = correct + "/" + total;
}

function setIndex(new_val) {
  index = new_val;
  document.getElementById("pos").textContent = index + ":" + line;
}

function setLine(new_val) {
  line = new_val;
  document.getElementById("pos").textContent = index + ":" + line;
}

function setDG(new_val) {
  console.log("DG", new_val);
  display_glyphs = new_val;
  let glyphsDiv = document.getElementById("glyphs");
  glyphsDiv.innerHTML = "";

  for (let i=0; i < display_glyphs.length; i++) {
    let newGlyph = document.createElement("img");
    newGlyph.src = display_glyphs[i].svg;
    newGlyph.id = "dg-" + i;
    glyphsDiv.appendChild(newGlyph);
    console.log(newGlyph.id);
  }
  document.getElementById("dg-0").classList.add("selected");
}

function updateInput() {
  let output = "";

  let nextLetter = document.createElement("img");
  nextLetter.src = glyphs[0][0].svg;

  document.getElementById("input").appendChild(nextLetter);
}

function chose_words(char_too, word_limit) {
  let list = [];

  for(let i=0; i < word_limit; i++) {
      let words_index = Math.floor(Math.random() * (char_too + 1));
      list.push(words[words_index][Math.floor(Math.random() * (words[words_index].length))]);
  }

  return list;
}

function togglePopup() {
    showPopup = !showPopup;
};

function update_current() {
    for(let i=0;i<source.length;i++) {
      let glyph_row = [];
      let glyph_length = 0;
      for(let ii=0;ii<source[i].length;ii++) {
        let seletion = glyphs[source[i][ii]];
        glyph_row.push(seletion[Math.floor(Math.random() * (seletion.length))]); // Change zero to random number 0 to length
        glyph_length += glyph_row[ii].length;
      }

      glyph_row.push( { svg: "./elian/blank.svg", length: 1 } );
      glyph_length += 1;

      if (current_size + glyph_length > row_size) {
        current_line += 1;
        current_size = 0;
        text_lines.push([]);
        glyph_lines.push([]);
      }

      current_size += glyph_length;
      text_lines[current_line].push(...source[i]);
      text_lines[current_line].push(32);
      glyph_lines[current_line].push(...glyph_row);
    }
}

function updateSelection(new_selcted) {
    char_too = new_selcted;
    source = chose_words(char_too, word_limit);
    text_lines = [[]];
    glyph_lines = [[]];
    update_current();
    setDG(glyph_lines[line]);
}

function handleKeyDown(event) {
      let code = event.keyCode;
      let answer;

      if(code > 96 && code < 123) { //lower
        answer = code;
      } else if (code > 64 && code < 91) { //upper
        answer = code+32;
      } else if (code == 8) { //Backspace
        if (index != 0) {
          //setIndex(index => index - 1);

          let oldLetter = document.getElementById("il-" + (index) + "-" + line);
          setIndex(index - 1);
          input.pop(input.length-1);
          setTotal(total - 1);
          oldLetter.remove();

        }
      } else if (code == 32) {
        answer = 32 + 97;
        
      }
      if(answer) {
        let cor = (answer - 97) == text_lines[line][index];
        if (cor) { setCorrect(correct + 1) }
        if ((index + 1) > row_size) {
          console.log(index)
          setIndex(0);

          setLine(line + 1);
          setDG(glyph_lines[line]);

        } else {
          setIndex(index + 1);
          console.log(index);
        }

        setTotal(total + 1);

        input.push({val: answer, correct: cor});
        //updateInput();
        let nextLetter = document.createElement("p");
        nextLetter.textContent = String.fromCharCode(answer);
        nextLetter.classList.add(cor ? "correct" : "incorrect");
        nextLetter.id = "il-" + index + "-" + line;

        document.getElementById("input").appendChild(nextLetter);
        document.getElementById("dg-" + index).classList.add("selected");
      }

    };

document.addEventListener('keydown', handleKeyDown);

update_current();
setDG(glyph_lines[0]);
console.log("test-test");
