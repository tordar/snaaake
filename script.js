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

let r = Math.floor(Math.random() * 100)
let t = Math.floor(Math.random() * 100)

function createSnacks(r, t) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
   
    ctx.fillRect(r, t, 10, 5)
    console.log(r, t)
    console.log(ctx)
  }
}

createSnacks(r, t)

let x = 0
let y = 0
let a = 20
let b = 10

function redrawSnake(){
document.addEventListener('keydown', function move(e){
        console.log(e.code)
        let ctx = canvas.getContext('2d');
        if(e.code == "ArrowRight"){
            clearCanvas(x, y, a, b)
            x = x + 10
            draw(x, y, a, b)
            console.log(x, y, a, b)
          }
        if(e.code == "ArrowDown"){
            clearCanvas(x, y, a, b)
            y = y + 10
            draw(x, y, a, b)
            console.log(x, y, a, b)

          }    
          if(e.code == "ArrowUp"){
            clearCanvas(x, y, a, b)
            y = y - 10
            draw(x, y, a, b)
            console.log(x, y, a, b)

          }    
          if(e.code == "ArrowLeft"){
            clearCanvas(x, y, a, b)
            x = x - 10
            draw(x, y, a, b)
            console.log(x, y, a, b)
          }      
    }
    
)
}

redrawSnake()