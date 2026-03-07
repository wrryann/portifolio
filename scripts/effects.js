let phrases = [
    "hire me pls",
    "sup",
    "yo this guy called wrryann is so cool",
    "this website is so well coded",
    "i love you",
    "death grips",
    "my favorite song is hydr6c0don$",
    "i'm from brazil 🇧🇷🇧🇷🇧🇷",
    "104.244.72.115, does these numbers sound familiar to you?"
]

let nyan_cat = document.querySelector('#nyan_cat');

let right = Math.random() * (99 - 2) + 2
let topo = Math.random() * (99 - 2) + 2
let top_true = false
let right_true = false

function loop_nyan() {
    if (topo >= 92) {
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

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = " 🐱 hey, come back >:("
    let meow = new Audio("audio/meow.mp3")

    meow.play()
  } else {
    document.title = "wrryann | Portfolio"
  }
})

let dark_mode_button = document.querySelector('#dark_mode');

function set_dark(mode) {
    if (mode == "true") { // day
        localStorage.setItem("darkmode", "false")
        dark_mode_button.children[0].children[0].src = "imgs/night.png"

        document.documentElement.style.setProperty("--mainColor", "#0e0e0e3a")
        document.documentElement.style.setProperty("--secundaryColor", "#15151568")
        document.documentElement.style.setProperty("--backgroundImage", "url(https://i.pinimg.com/1200x/13/fc/39/13fc397ab4b0bdb473a8867165a379ca.jpg)")
        document.documentElement.style.setProperty("--specialColor", "#29ff0dff")
        document.documentElement.style.setProperty("--textColorMain", "#f7f7f7")
        document.documentElement.style.setProperty("--textColor", "#f1f1f1")
    } 
    else if (mode == "false") { // night
        localStorage.setItem("darkmode", "true")
        dark_mode_button.children[0].children[0].src = "imgs/day.jpg"

        document.documentElement.style.setProperty("--mainColor", "#a1a1a158")
        document.documentElement.style.setProperty("--secundaryColor", "#cdcdcd2c")
        document.documentElement.style.setProperty("--backgroundImage", "url(https://i.pinimg.com/1200x/dd/ff/f8/ddfff8f1a61a694107ba8813fc778b8a.jpg)")
        document.documentElement.style.setProperty("--specialColor", "#ff0000ff")
        document.documentElement.style.setProperty("--textColorMain", "#f8f8f8ff")
        document.documentElement.style.setProperty("--textColor", "#e9e9e9ff")
        
    }
}

dark_mode_button.addEventListener('click', () => {
    set_dark(localStorage.getItem("darkmode"))
})

let explosion_sfx = new Audio("audio/explosion.mp3")

function click_effect(x, y) {
    let element = document.createElement('div');
    document.body.appendChild(element);

    if (!explosion_sfx.paused) {
        explosion_sfx.pause()
        explosion_sfx.currentTime = 0
    }

    explosion_sfx.play()

    setTimeout(() => {
        element.remove();
    }, 1000);
      
    element.innerHTML = `
        <img src="imgs/explosion-deltarune.gif" alt="" style="
          position: fixed;
          left: ${x - 20}px;
          top: ${y - 20}px;
          justify-content: end;
          align-items: center;
          z-index: 10;
          width: 10px
          height: 10px;
          pointer-events: none;
          ">
    `
}

let tool_tip = document.querySelector('#tool_tip');
let tool_tip_text = tool_tip.children[0]

function tool_tip_eff(x, y) {
    let element = document.elementFromPoint(x, y)
    
    if (element.dataset.tool_tip) {
        tool_tip.style.left = x + 15 + "px"
        tool_tip.style.top = y + 10 + "px"
        tool_tip.style.visibility = "visible"
        tool_tip_text.textContent = element.dataset.tool_tip
    } else {
        tool_tip.style.visibility = "hidden"
    }
}

document.addEventListener('click', (e) => {
    click_effect(e.clientX, e.clientY)
})

document.addEventListener("mousemove", (e) => {
    tool_tip_eff(e.clientX, e.clientY)
})

if (localStorage.getItem("darkmode") == "true") {
    set_dark("false")
} else {
    set_dark("true")
}


loop_nyan()

