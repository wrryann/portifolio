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

if (nyan_cat) {
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
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = " 🐱 hey, come back >:("
    let meow = new Audio("/audio/meow.mp3")

    meow.play()
  } else {
    document.title = "wrryann | Portfolio"
  }
})

let dark_mode_button = document.querySelector('#dark_mode');

function set_dark(mode) {
    if (mode == "true") { // day
        localStorage.setItem("darkmode", "false")
        if (dark_mode_button) {
            dark_mode_button.children[0].children[0].src = "imgs/night.png"
        }

        document.documentElement.style.setProperty("--mainColor", "#c9c9c91a")
        document.documentElement.style.setProperty("--secundaryColor", "linear-gradient(339deg,rgba(36, 36, 36, 0.16) 0%, rgba(248, 248, 248, 0.31) 100%)")
        document.documentElement.style.setProperty("--backgroundImage", "url(https://i.pinimg.com/736x/7f/55/8a/7f558a987c8a057bc2ea87bd3c7a94d4.jpg)")        
        document.documentElement.style.setProperty("--specialColor", "rgb(255, 238, 0)")
        document.documentElement.style.setProperty("--textColorMain", "#ffffff")
        document.documentElement.style.setProperty("--textColor", "#f0f0f0")
    }
    else if (mode == "false") { // night
        localStorage.setItem("darkmode", "true")
        if (dark_mode_button) {
            dark_mode_button.children[0].children[0].src = "imgs/day.jpg"
        }

        document.documentElement.style.setProperty("--mainColor", "linear-gradient(339deg,rgba(24, 24, 24, 0.43) 20%, rgba(140, 140, 140, 0.47) 100%)")
        document.documentElement.style.setProperty("--secundaryColor", "#cdcdcd2c")
        document.documentElement.style.setProperty("--backgroundImage", "url(https://i.pinimg.com/1200x/dd/ff/f8/ddfff8f1a61a694107ba8813fc778b8a.jpg)")
        document.documentElement.style.setProperty("--specialColor", "#ff0000ff")
        document.documentElement.style.setProperty("--textColorMain", "#f8f8f8ff")
        document.documentElement.style.setProperty("--textColor", "#e9e9e9ff")
        
    }
}


if (dark_mode_button) {
    dark_mode_button.addEventListener('click', () => {
        set_dark(localStorage.getItem("darkmode"))
    })
}

let explosion_sfx = new Audio("/audio/explosion.mp3")

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
        <img src="/imgs/explosion-deltarune.gif" alt="" style="
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

let tool_tip = document.createElement("div");

tool_tip.id = "tool_tip";
tool_tip.className = "flyer";
tool_tip.innerHTML = "<p></p>"

let tool_tip_text = tool_tip.children[0]

document.body.appendChild(tool_tip);

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

let carouselExampleDark = document.querySelector('#carouselExampleDark');

if (carouselExampleDark) {
    let ImageScrollPreset = [
        {
            url: "https://i.redd.it/wdx5zgrrbz6a1.png",
            title: "1",
            description: "asdasdasasdasdasdd"
        },
        {
            url: "https://i.ytimg.com/vi/wtdMskV0OiE/maxresdefault.jpg",
            title: "2",
            description: "asdasd"
        },
        {
            url: "https://i.ytimg.com/vi/7LbrqPM7T-o/maxresdefault.jpg",
            title: "3",
            description: "adad"
        }
    ];

    let ImgIndex = 0;

    function ChangeImage(index) {

        if (index < 0) {
            index = ImageScrollPreset.length - 1;
        } 
        else if (index >= ImageScrollPreset.length) { 
            index = 0;
        }

        ImgIndex = index;

        carouselExampleDark.children[0].src = ImageScrollPreset[index].url;
        carouselExampleDark.children[1].textContent = ImageScrollPreset[index].title;
        carouselExampleDark.children[2].textContent = ImageScrollPreset[index].description;

    }

    // here the code loads the first image
    ChangeImage(0);

    // here the code goes to the previous image
    carouselExampleDark.children[3].addEventListener("click", () => {
        ChangeImage(ImgIndex - 1);
    });

    // here the code goes to the next image
    carouselExampleDark.children[4].addEventListener("click", () => {
        ChangeImage(ImgIndex + 1);
    });
}

