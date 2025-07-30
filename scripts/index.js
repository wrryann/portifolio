export const languages = {
  rust: {
    name: 'Rust',
    description: 'A programming language focused on safety and performance.',
    link: 'https://www.rust-lang.org/',
    color: 'rgba(237, 79, 26, 1)',
  },
  luau: {
    name: 'Luau',
    description: 'A programming language derived from Lua, used in Roblox.',
    link: 'https://luau-lang.org/',
    color: 'rgba(50, 81, 149, 1)',
  }
}

const type = {
  game: 'Game',
  build: 'Build',
  script: 'Script',
  design: 'Design',
  other: 'Other',
}

function getYouTubeThumbnail(videoUrl) {
  const videoId = videoUrl.split("v=")[1]?.split("&")[0]; // extract the ID from the URL
  if (!videoId) return null;
  
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}


class Project {
  constructor(title, description, link, language, type) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.language = language;
    this.type = type;
    this.thumbnail = getYouTubeThumbnail(link);
    

  }

  BuildHTML() {
    let parent = document.querySelector('#project-grid');

    let element = document.createElement('div');
    element.classList.add('project');
    parent.appendChild(element);
    
    element.innerHTML = `
      <img src="${this.thumbnail}" alt="">
        <div class="programming-language" style="background-color: ${this.language.color};"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          <p>${this.language.name}</p>
        </svg>

        </div>
        <h3>${this.title}</h3>
        <p>${this.description}</p>   
      `

      
  }
}


export function BuildProject(title, description, link, language, type) {
  let project = new Project(title, description, link, language, type);
  project.BuildHTML();
}
