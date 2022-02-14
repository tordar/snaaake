let canvas = document.getElementById('canvas');

let highscore = document.getElementById('highscore')
function scorePoints(){
  console.log(x,y,r,t)
  if (x == r && y == t){
    highscore.innerText == q
  }
  q++
}
      
function draw(x, y, a, b) {
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.fillRect(x, y, a, b);
      scorePoints()
    }
  }

function clearCanvas(x, y, a, b) {
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(x, y, a, b);
    }
  }



let r = 50
let t = 50

function createSnacks() {
  function generateSnack(){
    let ctx = canvas.getContext('2d');
    ctx.fillRect(r, t, 20, 10)
    console.log(r, t)
  }
  generateSnack() 
}
createSnacks()

let x = 0
let y = 0
let a = 20
let b = 10
let q = 0
      
function redrawSnake(){
document.addEventListener('keydown', function move(e){

        if(e.code == "ArrowRight"){
            clearCanvas(x, y, a, b)
            x = x + 10
            draw(x, y, a, b)
            console.log(x,y)

          }
        if(e.code == "ArrowDown"){
            clearCanvas(x, y, a, b)
            y = y + 10
            draw(x, y, a, b)
            console.log(x,y)
          }    
          if(e.code == "ArrowUp"){
            clearCanvas(x, y, a, b)
            y = y - 10
            draw(x, y, a, b)
            console.log(canvas.getContext('2d').fillStyle)
          }    
          if(e.code == "ArrowLeft"){
            clearCanvas(x, y, a, b)
            x = x - 10
            draw(x, y, a, b)
            console.log(canvas.getContext('2d').fillStyle)
          }      
          if (x == r && y == t){
            r = Math.floor(Math.random() * 10) * 20
            t = Math.floor(Math.random() * 10) * 10
            
            createSnacks()

          }

    }
    
  )
  
}

redrawSnake()