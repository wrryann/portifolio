export const languages = {
  rust: {
    name: "Rust",
    color: 'rgba(237, 79, 26, 0.6)',
  },
  luau: {
    name: "Luau",
    color: 'rgba(50, 81, 149, 0.6)',
  },
  html: {
    name: "html",
    color: 'rgba(217, 137, 9, 0.6)',
  }
}

export function getYouTubeThumbnail(videoUrl) {
  const videoId = videoUrl.split("v=")[1]?.split("&")[0]; // extract the ID from the URL
  if (!videoId) return null;
  
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}


class Project {
  constructor(title, description, link, thumbnail, language) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.thumbnail = thumbnail;
    this.language = language;

  }

BuildHTML() {
    let parent = document.querySelector('#project-grid');

    let element = document.createElement('a');
    element.classList.add('project');
    parent.appendChild(element);

    element.href = this.link;
    element.target = "_blank"
    element.setAttribute("data-tool_tip", this.title + " | " + this.description);
    
    element.innerHTML = `
      <div class="image_div">
        <img src="${this.thumbnail}">
      </div>

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
