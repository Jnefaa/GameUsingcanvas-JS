
const canvas = document.querySelector('canvas') 
const c  =  canvas.getContext('2d') 

canvas.width = 1024
canvas.height=576 
console.log(c) 
console.log(canvas) 
 

let y = 100 
function animate () { 
    c.fillStyle='white'
    c.fillRect(0,0,canvas.width,canvas.height) ;
    window.requestAnimationFrame(animate) 
    c.fillStyle='red' 
    c.fillRect(200 , y , 100 , 100) 
    y++ 
}
animate()