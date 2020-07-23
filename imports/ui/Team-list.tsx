import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';


export default class TeamList extends Component{
  render() {
    return (
     <ListItem alignItems="flex-start">
      {this.props.player.name} 
      <ListItemAvatar>
       <Avatar alt="Remy Sharp" src="/images/cards/7.png" />
      </ListItemAvatar>
      <Divider variant="inset" component="li" />
     </ListItem>
    );
  }
}