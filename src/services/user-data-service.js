export function fetchUser (username, baseUrl = 'https://api.github.com') {
  return window.fetch(`${baseUrl}/users/${username}`)
    .then(response => response.json())
    .then(userResponseData => {
      return Promise.all([fetchImage(userResponseData['avatar_url']), fetchOrganizations(userResponseData['organizations_url'])])
        .then(([ avatarUrl, organizations ]) => ({
          avatarUrl,
          bio: userResponseData.bio,
          company: userResponseData.company,
          id: userResponseData.id,
          location: userResponseData.location,
          name: userResponseData.name,
          pageUrl: userResponseData['html_url'],
          userName: userResponseData.login,
          website: userResponseData.blog,
          organizations
        }))
    })
}

function fetchOrganization (organizationUrl) {
  return window.fetch(organizationUrl)
    .then(response => response.json())
    .then(responseData => {
      return fetchImage(responseData['avatar_url'])
        .then(imageUrl => ({
          avatarUrl: imageUrl,
          description: responseData.description,
          id: responseData.id,
          name: responseData.name,
          pageUrl: responseData['html_url']
        }))
    })
}

function fetchOrganizations (organizationsUrl) {
  return window.fetch(organizationsUrl)
    .then(response => response.json())
    .then(responseData => Promise.all(responseData.map(organization => fetchOrganization(organization.url))))
}

function fetchImage (imageUrl) {
  return window.fetch(imageUrl)
    .then(response => response.blob())
    .then(imageBlob => new Promise((resolve, reject) => {
      const fileReader = new window.FileReader()
      fileReader.onloadend = () => resolve(fileReader.result)
      fileReader.onerror = reject
      fileReader.readAsDataURL(imageBlob)
    }))
}

/*
  {
    avatarUrl,
    bio,
    company,
    id,
    location,
    name,
    pageUrl,
    userName,
    website,
    organizations: [
      {
        avatarUrl,
        description,
        id,
        name,
        pageUrl
      }
    ]
  }
*/
