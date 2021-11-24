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

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x
    mouse.y = event.y
})

// Gradient for text

let gradient = ctx.createLinearGradient(0, 0, 100, 100)
gradient.addColorStop(0, '#7161F5')
gradient.addColorStop(1, '#62F5E6')

// Drawing text

ctx.fillStyle = gradient
ctx.font = '700 50px Expansiva'
ctx.fillText('Ala ma kota', 0, 40)