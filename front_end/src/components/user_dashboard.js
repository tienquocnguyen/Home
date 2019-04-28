import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  card: {
    width: 'auto',
    height: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
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
    backgroundColor: blue[500],
  },
  root: {
      flexGrow: 1,
  },
});


class UserDashboard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
    <Grid container spacing = {24}>
    <Grid item xs>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Bank" className={classes.avatar}>
              B
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Auto-Donation Bank Statement"
          //subheader="Wells Fargo"
        />
        <CardMedia
          className={classes.media}
          image = {require("../Wells_Fargo.jpg")}
          title="Wells Fargo"
        />
        <CardContent>
          <Typography component="p">
            View your donation total from your rounded transactions! 
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </CardActions>
        {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
              salt and pepper, and cook, stirring often until thickened and fragrant, about 10
              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse> */}
      </Card>
      </Grid>
      <Grid item xs>
      <Card className = {classes.card}>
      <CardHeader
          avatar={
            <Avatar aria-label="Donation" className={classes.avatar}>
              D
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Read Their Stories"
          //subheader="Local"
        />
        <CardMedia
          className={classes.media}
          image = {require("../Homeless.jpg")}
          title="Homeless"
        />
        <CardContent>
          <Typography component="p">
            Learn about homeless individuals and families in your area and you can help
          </Typography>
        </CardContent>
        {/* <CardActions className={classes.actions} disableActionSpacing>
        </CardActions> */}
      </Card>
      </Grid>
      <Grid item xs>
      <Card className = {classes.card}>
      <CardHeader
          avatar={
            <Avatar aria-label="Map" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Map of Donation Boxes"
          //subheader="Near your current location"
        />
        <CardMedia
          className={classes.media}
          image = {require("../Donation_Box.jpg")}
          title="Wells Fargo"
        />
        <CardContent>
          <Typography component="p">
            View donation boxes near your current location!
          </Typography>
        </CardContent>
        {/* <CardActions className={classes.actions} disableActionSpacing>
        </CardActions> */}
      </Card>
      </Grid>
      <Grid item xs>
      <Card className = {classes.card}>
      <CardHeader
          avatar={
            <Avatar aria-label="Shop" className={classes.avatar}>
              S
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shop"
          //subheader="Buy essential supplies for homeless care packages"
        />
        <CardMedia
          className={classes.media}
          image = {require("../CarePackage.jpg")}
          title="Care Package"
        />
        <CardContent>
          <Typography component="p">
            Shop our online catalog of needed items including clothes, food, and personal hygiene
          </Typography>
        </CardContent>
        {/* <CardActions className={classes.actions} disableActionSpacing>
        </CardActions> */}
      </Card>
      </Grid>
    </Grid>
    );
  }
}

UserDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDashboard);