import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import ProTip from './ProTip';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import { Hello } from './Hello';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state={ player: [] } ;
	}
	
	componentWillMount() {
		this.setState({ players: [
	      {
	        _id: 1,
	        name: "Manny Henri",
	        ballManipulation: 2,
	        kickingAbilities: 3,
	        passingAbilities: 1,
	        duelTackling: 1,
	        fieldCoverage: 3,
	        blockingAbilities: 2,
	        gameStrategy: 3,
	        playmakingRisks: 2,
	      },
	      {
	        _id: 2,
	        name: "Speedy Gonz",
	        ballManipulation: 2,
	        kickingAbilities: 3,
	        passingAbilities: 1,
	        duelTackling: 1,
	        fieldCoverage: 3,
	        blockingAbilities: 2,
	        gameStrategy: 3,
	        playmakingRisks: 2,
	      },
	      {
	        _id: 3,
	        name: "Tracey Good",
	        ballManipulation: 2,
	        kickingAbilities: 3,
	        passingAbilities: 1,
	        duelTackling: 1,
	        fieldCoverage: 3,
	        blockingAbilities: 2,
	        gameStrategy: 3,
	        playmakingRisks: 2,
	      }
	    ]});
    }

	renderPlayers() {
	    return this.state.players.map((player) => (
	      <TeamList key={player._id} player={player} />
	    ));
	}
	render() {
		return (
		    <Container className="container">
		        <AppBar 
			        title="Soccer Application"
			        iconClassNameRight="muidocs-icon-navigation-expand-more"
			        showMenuIconButton={false}/>
		        <Box className="row">
			      	<Box display="flex" >
				        <Player />
			            <Box bgcolor="blue" color="red" style={{ minHeight: '220px', }}  className="col s12 m5" >
		                	<Box  justifyContent="center" alignItems="center" display="flex" ><h1>Team list</h1></Box>
			                <Divider/>	
			                <List style={{   width: '100%', maxWidth: 360, }}>
			                  {this.renderPlayers()}
			                </List>
			                <Divider/>
			            </Box>

		            </Box>	
		            <Box display="flex" >
				        <TeamStats />
				        <Hello />
				    </Box>    
		        </Box>
	            <Typography variant="h4" component="h1" gutterBottom>
		          Create React App v4-beta example with TypeScript
		        </Typography>
		        <ProTip />
      		    <Box bgcolor="red" minHeight="3vh"/>
		    </Container>
		);
	}	
}