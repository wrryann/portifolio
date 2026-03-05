let phrases = [
    "hire me pls",
    "sup",
    "yo this guy called wrryann is so cool"
]

let nyan_cat = document.querySelector('#nyan_cat');

let right = Math.random() * (99 - 2) + 2
let topo = Math.random() * (99 - 2) + 2
let top_true = false
let right_true = false

function loop_nyan() {
    if (topo >= 97) {
        top_true = false
    } else if (topo <= 0) {
        top_true = true
    }

    if (right >= 97) {
        right_true = false
        nyan_cat.style.transform = "scaleX(1)"
    } else if (right <= 0) {
        right_true = true
        nyan_cat.style.transform = "scaleX(-1)"
    }

    if (right_true) {
        right += 0.19 
    } else {
        right -= 0.21
    }

    if (top_true) {
        topo += 0.25
    } else {
        topo -= 0.28
    }

    nyan_cat.style.right = right + "vw"
    nyan_cat.style.top = topo + "vh"

    requestAnimationFrame(loop_nyan)
}

setInterval(() => {
  nyan_cat.querySelector("p").textContent = phrases[Math.floor(Math.random() * phrases.length)]
}, 10000)

loop_nyan()

