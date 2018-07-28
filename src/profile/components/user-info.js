import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import p from 'prop-types'
import React from 'react'
import styled from 'react-emotion'

export default function UserInfo ({ color, user }) {
  const Avatar = styled('div')`
    border-radius: 80px;
    height: 80px;
    width: 80px;

    background-image: url(${attributes => attributes.imageUrl});
    background-size: cover;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 50);
  `

  const Bio = styled('p')`
    margin: 20px 20px 0 20px;
  `

  const Card = styled('div')`
    width: 360px;
    padding-bottom: 20px;

    background: #FFFFFF;
    box-shadow: 2px 2px 4px #CFCFCF;
    color: rgba(0, 0, 0, 60);
  `

  const Header = styled('div')`
    align-items: center;
    display: flex;
    padding: 20px;

    background: ${color};
    color: white;
  `

  const Metadata = styled('div')`
    align-items: center;
    display: flex;
    margin: 20px 20px 0 20px;
  `

  const MetadataIcon = styled(Icon)`
    margin-right: 10px;
  `

  const MetadataLink = styled('a')`
    color: rgba(0, 0, 0, 60);
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  `

  const Name = styled('h1')`
    flex-grow: 1;

    font-size: 20px;
    text-align: right;
  `

  const UserName = styled('span')`
    display: block;
    margin-top: 5px;

    font-size: 18px;
  `

  return (
    <Card>
      <Header>
        <Avatar imageUrl={user.avatarUrl} />
        <Name>{user.name} <UserName>@{user.userName}</UserName></Name>
      </Header>
      <Bio>{user.bio}</Bio>
      <Metadata><MetadataIcon color={color} icon='building' size='2x' /> {user.company}</Metadata>
      <Metadata><MetadataIcon color={color} icon='location-arrow' size='2x' /> {user.location}</Metadata>
      <Metadata><MetadataIcon color={color} icon='link' size='2x' /> <MetadataLink href={user.website}>{user.website}</MetadataLink></Metadata>
    </Card>
  )
}

UserInfo.propTypes = {
  color: p.string,
  user: p.object
}
