function getGithubRepoInfo() {
  fetch('https://api.github.com/users/wrryann/repos')
    .then(async res => {
      if (!res.ok){
        throw new Error(res.status);
      }

      let data = await res.json();
      console.log(data);

      for (let i = 0; 0 < data.length; i++) {
        let repo = data[i];
        insertHTMLrepo(repo.name, repo.description, repo.stargazers_count, repo.html_url, repo.language)
      }
    })
}

let projectsDiv = document.getElementById("projects-div");

function insertHTMLrepo(name, disc, starsCont, repoUrl, lang) {
  let projectHtml = document.createElement("div");
  projectHtml.classList.add("project");

  projectHtml.innerHTML = `
    <div class="info-project">
      <div>
          <h3><a href="${repoUrl}">${name}</a></h3>
          <p class="p-small">${disc}</p>
      </div>
      
      <div class="project-statistics">
          <span> <p>◉ ${lang}</p>    
          </span>
          
          <div>
              <span> <p>${starsCont}</p> 
                  <svg aria-hidden="true" height="18" viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" fill="gray">
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                  </svg>
              </span>
          </div>
      </div>
    </div>               
  `
  projectsDiv.appendChild(projectHtml)
}

getGithubRepoInfo()