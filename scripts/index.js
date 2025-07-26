const languages = {
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

class Project {
  constructor(title, description, link, language,) {
    this.title = title;
    this.description = description;
    this.link = link;
    this.language = language;
    

  }

  BuildHTML() {
    
  }
}

const p1 = new Project("Ryan", 20);

export function greet(number) {
  return number + 65;
}