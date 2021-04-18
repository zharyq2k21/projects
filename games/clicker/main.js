// Global Variables
let game_score = document.querySelector(".score"),
    game_button = document.querySelector(".button"),
    game_reset = document.querySelector(".reset"),
    game_run = 0



///////////////// Game /////////////////
// click event
let i = parseInt(game_score.textContent)

game_button.addEventListener("click", function(e){
    i = i + 1
    game_score.innerHTML = i
    // console.log(i)
})
game_reset.addEventListener("click", function(e){
    game_score.innerHTML = 0
    i = 0
})

///////////////// End Game /////////////////