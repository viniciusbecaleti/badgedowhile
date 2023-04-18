const socialMedias = {
  github: 'viniciusbecaleti',
  youtube: '@viniciusbecaleti',
  instagram: 'viniciusbecaleti',
  facebook: 'viniciusbecaleti',
  twitter: 'vbecaleti',
}

function changeSocialMediaLinks() {
  for (let a of socialLinks.children) {
    const className = a.getAttribute('class')
    a.href += socialMedias[className]
  }
}

changeSocialMediaLinks()

async function getGitHubProfileInfo() {
  const response = await fetch(`https://api.github.com/users/${socialMedias.github}`)
  const data = await response.json()

  fullname.textContent = data.name
  login.href += data.login
  login.querySelector('span').textContent = data.login
  avatar.src = data.avatar_url
  bio.textContent = data.bio
}

getGitHubProfileInfo()