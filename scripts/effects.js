let phrases = [
    "hire me pls",
    "sup",
    "yo this guy called wrryann is so cool",
    "this website is so well coded",
    "i love you"
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

let dark_mode_button = document.querySelector('#dark_mode');

function set_dark(mode) {
    if (mode == "true") {
        localStorage.setItem("darkmode", "false")
        dark_mode_button.children[0].children[0].src = "imgs/night.png"

        document.documentElement.style.setProperty("--mainColor", "#0e0e0e3a")
        document.documentElement.style.setProperty("--secundaryColor", "#15151568")
        document.documentElement.style.setProperty("--backgroundImage", "url(https://i.pinimg.com/1200x/13/fc/39/13fc397ab4b0bdb473a8867165a379ca.jpg)")
    } 
    else if (mode == "false") {
        localStorage.setItem("darkmode", "true")
        dark_mode_button.children[0].children[0].src = "imgs/day.jpg"

        document.documentElement.style.setProperty("--mainColor", "#a1a1a158")
        document.documentElement.style.setProperty("--secundaryColor", "#cdcdcd2c")
        document.documentElement.style.setProperty("--backgroundImage", "url(https://i.pinimg.com/736x/ae/9f/17/ae9f175555abf7ca4db3202e87fe62a9.jpg")
    }
}

dark_mode_button.addEventListener('click', () => {
    set_dark(localStorage.getItem("darkmode"))
    console.log(localStorage.getItem("darkmode"))
})

if (localStorage.getItem("darkmode") == "true") {
    set_dark("false")
} else {
    set_dark("true")
}


loop_nyan()

