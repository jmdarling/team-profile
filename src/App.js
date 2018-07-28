import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding, faLink, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react'

import Profile from './profile/containers/profile'

library.add(faBuilding)
library.add(faLink)
library.add(faLocationArrow)

class App extends Component {
  render () {
    return (
      <Profile />
    )
  }
}

export default App
