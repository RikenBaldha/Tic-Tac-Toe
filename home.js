var move = document.querySelector("#main")
var cur = document.querySelector(".cursor")
var xw = document.querySelector(".x")
var ow = document.querySelector(".o")
var dr = document.querySelector(".d")
var play = document.getElementById("play")
var change = document.getElementById("reset")
var dark = document.getElementById("dark")
var mo = document.getElementById("mo")
var mf = document.getElementById("mf")

var body = document.querySelector("body")
var main= document.querySelector(".main")
mo.addEventListener("click", function () {
    main.play();
    main.volume = 0.2;
})
mf.addEventListener("click", function () {
    main.pause();
})

function changecolor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
}
dark.addEventListener("click", function () {
    changecolor();
})

var gameover = false;
let turn = "X"
var win;
var abc = document.querySelector(".audio")
var ab = document.querySelector(".winning")
var x_win = document.querySelector(".win")
var o_win = document.querySelector(".w")
var draw = document.querySelector(".draw")
var boxtext = document.getElementsByClassName("boxtext")
setTimeout(x_win, 5000);

function changeturn() {
    return turn === "X" ? "O" : "X"
}

var xm = 0;
function Xwin() {
    xm++
}

var om = 0;
function Owin() {
    om++
}

var dm = 0;
function DR() {
    dm++
}

function checkwin() {
    var boxtext = document.getElementsByClassName("boxtext")
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "")) {
            document.querySelector("#abc").innerText = boxtext[e[0]].innerText + " won";
            setTimeout(function () {
                if (boxtext[e[0]].innerText === "X") {
                    x_win.play();
                    Xwin();
                    xw.innerHTML = "X-Win:- " + xm;
                    setTimeout(function () {
                            clear();
                        }, 3000)
                }
                else {
                    o_win.play();
                    Owin();
                    ow.innerHTML = "O-Win:- " + om;
                    setTimeout(function () {
                        clear();
                    }, 3000)
                }
            }, 1000)
            e.forEach(index => {
                box[index].querySelector(".boxtext").classList.add("winning-box");
            });
            gameover = true;
        }
    })
    if (!gameover) {
        var allBoxesFilled = true;
        for (var i = 0; i < box.length; i++) {
            if (box[i].querySelector(".boxtext").innerText === "") {
                allBoxesFilled = false;
                break;
            }
        }
        if (allBoxesFilled) {
            document.querySelector("#abc").innerText = "It's a draw! Try Again";
            DR();
            dr.innerHTML = "DRAW:- " + dm;
            draw.play();
            gameover = true;
            setTimeout(function () {
                clear();
            }, 4000)
        }
    }
    else {
        gameover = true;
    }
}
// var riken = document.querySelector("#abc");
var x = window.matchMedia("(max-width: 500px)")
var y = window.matchMedia('(min-width:499px) and (max-width: 682px)')
var box = document.getElementsByClassName("box")
Array.from(box).forEach(element => {
    var boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", function () {
        if (x.matches) {
            boxtext.style.fontSize = "10rem"
            boxtext.style.fontWeight = "500"
        }
        else if (y.matches) {
            boxtext.style.fontSize = "10rem"
            boxtext.style.fontWeight = "500"
        }
        else {
            boxtext.style.fontSize = "10rem"
            boxtext.style.fontWeight = "500"
        }
        if (boxtext.innerHTML === "" && !gameover) {
            abc.play();
            boxtext.innerHTML = turn;
            turn = changeturn()
            checkwin();
            if (!gameover) {
                 document.querySelector("#abc").innerHTML = "Turn For " + turn;
            }
        }
    })
})
function clear(){
    var boxtextElements = document.getElementsByClassName("boxtext");
    Array.from(boxtextElements).forEach(boxtext => {
        boxtext.innerHTML = "";
        boxtext.style.fontSize = "";
        boxtext.style.fontWeight = "";
        boxtext.classList.remove("winning-box");
    });

    document.querySelector("#abc").innerText = "Turn For X";
    gameover = false;
    turn = "X";
    ab.pause();
    ab.currentTime = 0;
    abc.pause();
    m();
}
play.addEventListener("click", function () {
    clear();
})


