const canvas = document.getElementById('canvas-1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particleArray = []

// Mouse interactions
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
})

// Gradient for text

// const gradient = ctx.createLinearGradient(0, 0, 100, 100)
// gradient.addColorStop(0, 'rgba(113, 97, 245, 0.2)')
// gradient.addColorStop(1, 'rgba(98, 245, 230, 0.2)')

// Drawing text
ctx.fillStyle = 'rgb(113, 97, 245, 0.15)'
ctx.font = '700 150px Expansiva'
ctx.fillText('Piotr', canvas.width * .1, canvas.height * .3)
ctx.fillText('Bania', canvas.width * .1, canvas.height * .5)