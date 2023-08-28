console.log("hi keso ho")
var main = document.querySelector("#main")
var cur = document.querySelector(".cursor")

main.addEventListener("mousemove" , function(dets){
    cur.style.left = dets.x +'px'
    cur.style.top = dets.y +'px'
})

// document.querySelector("#abc").innerHTML = + " won" ;

var gameover = false;
let turn = "X"
var win;

// document.querySelector("#won").innerHTML =  + " won";


    var abc = document.querySelector(".audio")
  
    var winning = document.querySelector(".win")
    setTimeout(winning, 5000);
function changeturn() {
    return turn === "X" ? "0" : "X"
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
            // document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            document.querySelector("#abc").innerText = boxtext[e[0]].innerText + " won";
            winning.play();
            winning.currentTime = 0;
            setInterval(function(){
            if(winning.currentTime>5){
                winning.pause();
                
                }
            },1000)
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
            // document.querySelector(".info").innerText = "It's a draw! Try Again";
            document.querySelector("#abc").innerText = "It's a draw! Try Again";
            gameover = true;
        }

    }

}
// element.addEventListener("click", function (){
//     audio();
// })
var box = document.getElementsByClassName("box")
Array.from(box).forEach(element => {
    var boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", function () {
        
        if (boxtext.innerHTML === "") {
            abc.play();
            boxtext.innerHTML = turn;
            turn = changeturn()
            checkwin();
            if (!gameover) {
                document.querySelector("#abc").innerHTML = "Turn For " + turn;
            }

            // document.getElementsByClassName("info").innerHTML = "turn for" + turn ;
        }
    })
})


