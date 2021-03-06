import React, { Component } from 'react'

import { fetchUser } from '../../services/user-data-service'
import UserInfo from '../components/user-info'

export default class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount () {
    fetchUser('jmdarling')
      .then(response => { this.setState(() => ({ user: response })) })
  }

  render () {
    return (
      <UserInfo color='#E385BB' user={this.state.user} />
    )
  }
}
