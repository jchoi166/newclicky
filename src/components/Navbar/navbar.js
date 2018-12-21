import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Navbar extends Component  {

    state = {
        open: false
    }

    toggleDrawer = (changeOpen)  => {
    this.setState({open: changeOpen});
    // console.log('true')
};

render(){
  const { classes } = this.props;

  const sideList = (
    <div className={classes.list}>
      <List>
         <Link to='/' style={{color: 'black', textDecoration: 'none'}}>
          <ListItem button>
            <ListItemText primary='Home' />
          </ListItem>
         </Link> 
         <Link to='/Game' style={{color: 'black', textDecoration: 'none'}}>
          <ListItem button>
            <ListItemText primary='Game' />
          </ListItem>
         </Link> 
         <Link to='/Leaderboard' style={{color: 'black', textDecoration: 'none'}}>
          <ListItem button>
            <ListItemText primary='Leaderboard' />
          </ListItem>
         </Link> 
      </List>
      <Divider />

    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'orange'}}>
        <Toolbar>
          <IconButton onClick={() => this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Link to='/' style={{color:'white', textDecoration: 'none'}}>
              <Button color='inherit'> Home </Button>  
          </Link>
          <Link to='/Game' style={{color:'white', textDecoration: 'none'}}>
              <Button color='inherit'> Game </Button>
          </Link>
          <Link to='/Leaderboard' style={{color:'white', textDecoration: 'none'}}>
              <Button color='inherit'> Leaderboard </Button>
          </Link>


          <Drawer open={this.state.open} onClose={()=>this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={()=>this.toggleDrawer(false)}
            onKeyDown={()=>this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);