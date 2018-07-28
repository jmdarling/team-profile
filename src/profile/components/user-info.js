import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import p from 'prop-types'
import React, { Fragment } from 'react'
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

  const AvatarPlacehoder = styled('div')`
    border-radius: 80px;
    height: 80px;
    width: 80px;

    background: #D8D8D8;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 50);
  `

  const Bio = styled('p')`
    margin: 20px 20px 0 20px;
  `

  const BioPlaceholder = styled('div')`
    height: 60px;
    margin: 20px 20px 0 20px;

    background: #D8D8D8;
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

  const HeaderPlaceholder = styled('div')`
    align-items: center;
    display: flex;
    padding: 20px;

    background: #828282;
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

  const MetadataTextPlaceholder = styled('div')`
    flex-grow: 1;
    height: 20px;

    background: #D8D8D8;
  `

  const Name = styled('h1')`
    flex-grow: 1;

    font-size: 20px;
    text-align: right;
  `

  const NamePlaceholder = styled('div')`
    flex-grow: 1;
    height: 30px;
    margin-left: 30px;

    background: #D8D8D8;
  `

  const UserName = styled('a')`
    display: block;
    margin-top: 5px;

    color: #FFFFFF;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  `

  if (user == null) {
    return (
      <Card>
        <HeaderPlaceholder>
          <AvatarPlacehoder />
          <NamePlaceholder />
        </HeaderPlaceholder>
        <BioPlaceholder />
        <Metadata><MetadataIcon color='#D8D8D8' icon='building' size='2x' /> <MetadataTextPlaceholder /></Metadata>
        <Metadata><MetadataIcon color='#D8D8D8' icon='location-arrow' size='2x' /> <MetadataTextPlaceholder /></Metadata>
        <Metadata><MetadataIcon color='#D8D8D8' icon='link' size='2x' /> <MetadataTextPlaceholder /></Metadata>
      </Card>
    )
  }

  return (
    <Card>
      <Header>
        <Avatar imageUrl={user.avatarUrl} />
        <Name>{user.name} <UserName href={user.pageUrl}>@{user.userName}</UserName></Name>
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
