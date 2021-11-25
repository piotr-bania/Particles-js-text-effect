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

const data = ctx.getImageData(0, 0, canvas.width, canvas.height)

class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 3
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 5) + 1
    }
    draw() {
        ctx.fillStyle = 'rgb(113, 97, 245, 0.25)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }
    update() {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density

        if (distance < mouse.radius) {
            this.x -= directionX * 3
            this.y -= directionY * 3
        } else {
            this.size = 3
        }
    }
}

function init() {
    particleArray = []
    for (let i = 0; i < 500; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        particleArray.push(new Particle(x, y))
    }
}
init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw()
        particleArray[i].update()
    }
    requestAnimationFrame(animate)
}
animate()