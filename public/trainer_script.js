const row_size = 64;
const glyphs = [
    [{svg: "./elian/a.svg", alt: "A", length: 1}],
    [{svg: "./elian/b.svg", alt: "B", length: 1}],
    [{svg: "./elian/c.svg", alt: "C", length: 1}],
    [{svg: "./elian/d.svg", alt: "D", length: 1}],
    [{svg: "./elian/e.svg", alt: "E", length: 1}],
    [{svg: "./elian/f.svg", alt: "F", length: 1}],
    [{svg: "./elian/g.svg", alt: "G", length: 1}],
    [{svg: "./elian/h.svg", alt: "H", length: 1}],
    [{svg: "./elian/i.svg", alt: "I", length: 1}],
    [{svg: "./elian/j1.svg", alt: "J", length: 2}, {svg: "./elian/j2.svg", alt: "J", length: 1}],

    [{svg: "./elian/k1.svg", alt: "K", length: 1}, {svg: "./elian/k2.svg", alt: "K", length: 1}, {svg: "./elian/k3.svg", alt: "K", length: 1}],
    [{svg: "./elian/l1.svg", alt: "L", length: 1}, {svg: "./elian/l2.svg", alt: "L", length: 1}],
    [{svg: "./elian/m1.svg", alt: "M", length: 1}, {svg: "./elian/m2.svg", alt: "M", length: 1}, {svg: "./elian/m3.svg", alt: "M", length: 1}],
    [{svg: "./elian/n1.svg", alt: "N", length: 1}, {svg: "./elian/n2.svg", alt: "N", length: 1}, {svg: "./elian/n3.svg", alt: "N", length: 1}, {svg: "./elian/n4.svg", alt: "N", length: 1}, {svg: "./elian/n5.svg", alt: "N", length: 1}, {svg: "./elian/n6.svg", alt: "N", length: 1}, {svg: "./elian/n7.svg", alt: "N", length: 1}, {svg: "./elian/n8.svg", alt: "N", length: 1}],
    [{svg: "./elian/o1.svg", alt: "O", length: 1}, {svg: "./elian/o2.svg", alt: "O", length: 1}, {svg: "./elian/o3.svg", alt: "O", length: 1}],
    [{svg: "./elian/p1.svg", alt: "P", length: 1}, {svg: "./elian/p2.svg", alt: "J", length: 1}],
    [{svg: "./elian/q1.svg", alt: "Q", length: 1}, {svg: "./elian/q2.svg", alt: "Q", length: 1}, {svg: "./elian/q3.svg", alt: "Q", length: 1}],
    [{svg: "./elian/r1.svg", alt: "R", length: 1}, {svg: "./elian/r2.svg", alt: "R", length: 1}],
    [{svg: "./elian/s1.svg", alt: "S", length: 1}, {svg: "./elian/s2.svg", alt: "S", length: 1}],
    [{svg: "./elian/t1.svg", alt: "T", length: 1}, {svg: "./elian/t2.svg", alt: "T", length: 1}, {svg: "./elian/t3.svg", alt: "T", length: 1}],
    [{svg: "./elian/u1.svg", alt: "U", length: 1}, {svg: "./elian/u2.svg", alt: "U", length: 1}],
    [{svg: "./elian/v1.svg", alt: "V", length: 1}, {svg: "./elian/v2.svg", alt: "V", length: 1}, {svg: "./elian/v3.svg", alt: "V", length: 1}],
    [{svg: "./elian/w1.svg", alt: "W", length: 1}, {svg: "./elian/w2.svg", alt: "W", length: 1}, {svg: "./elian/w3.svg", alt: "W", length: 1}, {svg: "./elian/w4.svg", alt: "W", length: 1}, {svg: "./elian/w5.svg", alt: "W", length: 1}, {svg: "./elian/w6.svg", alt: "W", length: 1}, {svg: "./elian/w7.svg", alt: "W", length: 1}, {svg: "./elian/w8.svg", alt: "W", length: 1}],
    [{svg: "./elian/x1.svg", alt: "X", length: 1}, {svg: "./elian/x2.svg", alt: "X", length: 1}, {svg: "./elian/x3.svg", alt: "X", length: 1}],
    [{svg: "./elian/y1.svg", alt: "Y", length: 1}, {svg: "./elian/y2.svg", alt: "Y", length: 1}],
    [{svg: "./elian/z1.svg", alt: "Z", length: 1}, {svg: "./elian/z2.svg", alt: "Z", length: 1}, {svg: "./elian/z2.svg", alt: "Z", length: 1}],
];

const words = [
    [[0]],
    [[1], [1, 0, 1]],
    [[0, 2], [2, 0], [2, 0, 1]],
    [[3, 0, 1], [1, 0, 3], [2, 0, 3], [3, 0]],
    [[4, 0], [3, 4], [4, 3, 0], [0, 4]],
    [[5, 4, 3], [5, 4], [5, 0, 2], [0, 5]],
    [[6, 0, 1], [1, 0, 6], [6, 0], [0, 6]],
    [[7, 0], [7, 0, 6], [7, 0, 2], [1, 7]],
    [[8, 2, 4], [3, 8, 4], [5, 0, 2, 4], [0, 8, 3], [7, 8], [1, 0, 3], [2, 0, 1], [0, 6, 4], [1, 0, 6], [0, 2, 4], [5, 4, 3], [5, 0, 2, 4]],

    [[9,0,1], [9,0,6], [9,4,3], [9,8,6]],
    [[10,8,3], [10,4,6], [1,0,10,4], [2,0,10,4]],
    [[11,0,1], [11,4,3], [11,4,0,5], [3,4,0,11]],
    [[12,0,3], [12,4,0,11], [6,0,12,4], [12,0,10,4]],
    [[13,0,13], [2,0,13], [12,0,13], [6,0,8,13]],
    [[7,14,6], [3,14,6], [2,14,0,11], [11,14,0,3]],
    [[15,0,3], [15,4,15], [12,0,15], [15,0,11,4]],
    [[16,8], [16,0], [16,4],[16,11,4]],
    [[17,4,3], [17,14,0,3], [17,4,0,3], [2,0,17,4]],

    [[18,8,15], [18,0,3], [18,4,0,11], [18,0,6,4]],
    [[19,0,15], [19,4,13,19], [19,4,0], [19,0,11,4]],
    [[18,20,13], [18,20,8,19], [17,20,13], [5,20,13]],
    [[21,0,13], [21,0,18,4], [21,8,0,11], [21,14,19,4]],
    [[22,0,6], [22,0,18], [22,4,19], [22,0,11,11]],
    [[5,0,23], [18,8,23], [1,14,23], [12,8,23]],
    [[18,0,24], [1,0,24], [24,4,11,11], [24,14,6,0]],
    [[25,14,14], [25,0,15], [18,8,25,4], [12,0,25,4]]
];

let correct = 0;
let total = 0;

let display_glyphs = [];
let input = [];

let index = 0;
let line = 0;

let showPopup = false;

let word_limit = 250;
let selected = 2;
let source = chose_words(selected, word_limit);//[words[0], words[4], words[2], words[3], words[7]];
let text_lines = [[]];
let glyph_lines = [[]];
let current_line = 0;
let current_size = 0;

function updateScore() {
    let percent;
    if (total === 0) {
        percent = 0;
    } else {
        percent = Math.trunc((correct / total) * 100);
    }
    document.getElementById("score").textContent = percent + "% " + "(" + correct + "/" + total + ")";
}

function setCorrect(new_val) {
    correct = new_val;
    updateScore();
}

function setTotal(new_val) {
    total = new_val;
    updateScore();
}

function setIndex(new_val) {
    index = new_val;
    //document.getElementById("pos").textContent = index + ":" + line;
}

function setLine(new_val) {
    line = new_val;
    //document.getElementById("pos").textContent = index + ":" + line;
}

function setDG(new_val) {
    //console.log("DG", new_val);
    display_glyphs = new_val;
    let glyphsDiv = document.getElementById("glyphs");
    glyphsDiv.innerHTML = "";

    function addGlyph(src, alt, id, className) {
        let newGlyph = document.createElement("img");
        newGlyph.src = src;
        newGlyph.alt = alt;
        newGlyph.id = id;
        newGlyph.classList.add(className);
        glyphsDiv.appendChild(newGlyph);
    }

    //old
    if (line !== 0) {
        for (let i = 0; i < glyph_lines[line - 1].length; i++) {
            addGlyph(glyph_lines[line - 1][i].svg, glyph_lines[line - 1][i].alt, "odg-" + i, "NonCurrent");
        }
        for (let i = 0; i < (64 - glyph_lines[line - 1].length); i++) {
            addGlyph("./elian/blank.svg", "Blank " + " Glyphs", "odg-" + i, "NonCurrent");
        }
    }

    //current
    for (let i = 0; i < glyph_lines[line].length; i++) {
        addGlyph(glyph_lines[line][i].svg, glyph_lines[line][i].alt + " Glyphs", "dg-" + i, "Current");
        //console.log(newGlyph.id);
    }

    for (let i = 0; i < (64 - glyph_lines[line].length); i++) {
        addGlyph("./elian/blank.svg", "Blank " + " Glyphs", "ndg-" + i, "NonCurrent");
    }

    //next
        for (let i = 0; i < glyph_lines[line + 1].length; i++) {
            addGlyph(glyph_lines[line + 1][i].svg, glyph_lines[line + 1][i].alt, "ndg-" + i, "NonCurrent");
        }
        for (let i = 0; i < (64 - glyph_lines[line + 1].length); i++) {
            addGlyph("./elian/blank.svg", "Blank " + " Glyphs", "ndg-" + i, "NonCurrent");
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

    for (let i = 0; i < word_limit; i++) {
        let words_index = Math.floor(Math.random() * (char_too + 1));
        list.push(words[words_index][Math.floor(Math.random() * (words[words_index].length))]);
    }

    return list;
}

function appendButtons(ButtonGrid, base) {
    for (let i = 0; i < 3; i++) {
        for (let ii = 2; ii >= 0; ii--) {
            let button = document.createElement("p");
            let val = ((i * 3) + ii) + base;
            button.id = val;
            button.innerText = String.fromCharCode(97 + val);
            console.log(val, button.innerText);
            button.className = val <= selected ? "button-selected" : "button-notselected";
            ButtonGrid.appendChild(button);
        }
    }
}

function genButtonGrid() {
    let CharSel = document.createElement("div");
    CharSel.id = "charsel";
    for (let i = 0; i < 19; i += 9) {
        let ButtonGrid = document.createElement("div");
        ButtonGrid.id = "button-grid" + i;
        ButtonGrid.className = "button-grid";


        appendButtons(ButtonGrid, i);
        CharSel.appendChild(ButtonGrid);
    }
    return CharSel;
}

function setPopup(newval) {
    //console.log(selected);
    showPopup = newval;

    if (!showPopup) {
        document.getElementById("popup").innerHTML = "";
    } else {
        let Overlay = document.createElement("div");
        Overlay.className = "popup-overlay";

        let Content = document.createElement("div");
        Overlay.className = "popup-content";

        let Title = document.createElement("h2");
        Title.textContent = "OPTIONS";




        let SelectionDiv = document.createElement("div");

        let DownButton = document.createElement("button");
        DownButton.addEventListener("click", () => {
            if (selected != 0) {
                updateSelection(selected - 1)
            }
        });
        DownButton.innerText = "<";

        let UpButton = document.createElement("button");
        UpButton.addEventListener("click", () => {
            if (selected != 25) {
                updateSelection(selected + 1)
            }
        });
        UpButton.innerText = ">";

        SelectionDiv.appendChild(DownButton);
        SelectionDiv.appendChild(UpButton);

        let CloseButton = document.createElement("button");
        CloseButton.addEventListener("click", () => {
            setPopup(!showPopup)
        });
        CloseButton.innerText = "CLOSE";

        Content.appendChild(Title);
        Content.appendChild(genButtonGrid());
        Content.appendChild(SelectionDiv);
        Content.appendChild(SelectionDiv);
        Content.appendChild(CloseButton);

        Overlay.appendChild(Content);
        document.getElementById("popup").appendChild(Overlay);

    }
};

function update_current() {
    current_line = 0;
    current_size = 0;
    for (let i = 0; i < source.length; i++) {
        let glyph_row = [];
        let glyph_length = 0;
        for (let ii = 0; ii < source[i].length; ii++) {
            let seletion = glyphs[source[i][ii]];
            glyph_row.push(seletion[Math.floor(Math.random() * (seletion.length))]); // Change zero to random number 0 to length
            glyph_length += glyph_row[ii].length;
        }

        glyph_row.push({svg: "./elian/blank.svg", alt: "Blank", length: 1});
        glyph_length += 1;

        if (current_size + glyph_length > row_size) {
            current_line += 1;
            current_size = 0;
            text_lines.push([]);
            glyph_lines.push([]);
        }

        //console.log(i, current_line, text_lines, source);
        current_size += glyph_length;
        text_lines[current_line].push(...source[i]);
        text_lines[current_line].push(32);
        glyph_lines[current_line].push(...glyph_row);
    }
}

function updateSelection(new_selcted) {
    selected = new_selcted;
    source = chose_words(selected, word_limit);
    text_lines = [[]];
    glyph_lines = [[]];
    update_current();
    document.getElementById("input").innerHTML = "";
    //console.log(document.getElementById("input"));
    input = [];
    setIndex(0);
    if (showPopup) {
        let CharSel = document.getElementById("charsel");
        CharSel.innerHTML = "";
        CharSel.replaceWith(genButtonGrid(CharSel));
        //appendButtons(ButtonGrid, 0);
    }
    setDG(glyph_lines[line]);
}

function handleKeyDown(event) {
    let code = event.keyCode;
    let answer;

    if (code > 96 && code < 123) { //lower
        answer = code;
    } else if (code > 64 && code < 91) { //upper
        answer = code + 32;
    } else if (code == 8) { //Backspace
        if (index != 0) {
            //setIndex(index => index - 1);

            let oldLetter = document.getElementById("il-" + (index) + "-" + line);
            document.getElementById("dg-" + index).classList.remove("selected");
            if (input[input.length - 1].correct) {
                correct -= 1; //setTotal called later
            }
            setIndex(index - 1);
            input.pop(input.length - 1);
            setTotal(total - 1);
            oldLetter.remove();
            document.getElementById("dg-" + index).classList.add("selected");

        }
    } else if (code == 32) {
        answer = 32 + 97;
    }
    if (answer) {
        let cor = (answer - 97) == text_lines[line][index];
        if (cor) {
            setCorrect(correct + 1)
        }
        if ((index + 1) == display_glyphs.length) {
            for (let i = 0; i <= (64 - glyph_lines[line].length); i++) {
                let nextLetter = document.createElement("p");
                console.log("|||||" + "il-" + (index + i) + "-" + line)
                nextLetter.id = "il-" + (index + i) + "-" + line;
                input.push({val: null, correct: null});

                document.getElementById("input").appendChild(nextLetter);


            }

            /*for(let i = 1; i < 64; i++) {
                console.log("il-" + i + "-" + line);
                document.getElementById("il-" + i + "-" + line).remove();
            }*/
            document.getElementById("input").innerHTML = "";

            setIndex(0);
            setLine(line + 1);
            setDG(glyph_lines[line]);

        } else {
            setIndex(index + 1);
            //console.log(index);


            setTotal(total + 1);

            input.push({val: answer, correct: cor});
            let nextLetter = document.createElement("p");
            nextLetter.textContent = answer === (32 + 97) ? " " : String.fromCharCode(answer);
            nextLetter.classList.add(cor ? "correct" : "incorrect");
            nextLetter.id = "il-" + index + "-" + line;
            console.log("il-" + index + "-" + line);
            document.getElementById("input").appendChild(nextLetter);//.appendChild(nextLetter);
            document.getElementById("dg-" + (index - 1)).classList.remove("selected");
            document.getElementById("dg-" + index).classList.add("selected");
        }
    }

};

document.addEventListener('keydown', handleKeyDown);
document.getElementById("popup-button").addEventListener("click", () => {
    setPopup(!showPopup)
});

update_current();
setDG(glyph_lines[0]);
//console.log("test-test");
