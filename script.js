let canvas = document.getElementById('canvas');

function draw(x, y, a, b) {
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.fillRect(x, y, a, b);
    }
  }

function clearCanvas(x, y, a, b) {
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(x, y, a, b);
    }
  }

function createSnacks() {

  function generateSnack(){
    let ctx = canvas.getContext('2d');
    let r = Math.floor(Math.random() * 250)
    let t = Math.floor(Math.random() * 140)
    ctx.fillRect(r, t, 10, 5)
    if(ctx.fillStyle == "#000000"){
      console.log('black')
    }
  }

      generateSnack()
    
}
createSnacks()

let x = 0
let y = 0
let a = 20
let b = 10

function redrawSnake(){
document.addEventListener('keydown', function move(e){
        if(e.code == "ArrowRight"){
            clearCanvas(x, y, a, b)
            x = x + 10
            draw(x, y, a, b)
            canvas.getContext('2d').fillStyle = "red"
          }
        if(e.code == "ArrowDown"){
            clearCanvas(x, y, a, b)
            y = y + 10
            draw(x, y, a, b)
            console.log(canvas.getContext('2d').fillStyle)
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
    }
  )
}

redrawSnake()