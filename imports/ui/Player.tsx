import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { blue200, blue900 } from 'material-ui/styles/colors';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RaisedButton from 'material-ui/RaisedButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      display:'inline flow-root',
      backgroundColor: '#f03333',
      margin: 5,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    title: {
	    color: red[500],
    },
    subtitle: {
	    fontSize: 14,
	    color: green[900],
	    letterSpacing: 4,
	    margin: 3,
    },
    chip: {
    	margin: 4,
    	color: 'blue',
    	backgroundColor: green[600],
	},
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		'& > *': {
		    margin: theme.spacing(0.5),
		},
	button: {
		margin: 12,
	},
    },
);

export default function Player {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <Box bgcolor="green" justifyContent="space-between" display="flex" className="col s12 m7" >
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        title="Paella dish"
      />
      <CardContent>
     	<Box pl={5} color="purple" display="flex"><h1>Player</h1></Box>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
	<Card  className={classes.root}>
	  <CardMedia className={classes.media} style={{ height: '50%', }} alt="My cool img" image="/images/cards/7.png" children={
	  <CardContent>
        <Typography className={classes.title} component="h1">
          Emmanuel Henri
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle} component="p">
          Offense: 12 - Defense: 8
          <br />
    	</Typography>
      </CardContent>}/>
	  <CardContent>
		  <div className={classes.wrapper}>
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Ball manipulation"/>
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Kicking abilities"/>
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Passing abilities"/>
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Tackling abilities"/>
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Field speed coverage"/>
			<Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Blocking abilities"/>   
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Game strategy"/> 
		    <Chip backgroundColor={blue200} className={classes.chip}
			    avatar={<Avatar size={32} color={blue200} 
			    	backgroundColor={blue900}>2</Avatar>}
			    label="Playmaking risks"/> 
		  </div>
	  </CardContent>
	</Card>
  </Box>
  );
}
