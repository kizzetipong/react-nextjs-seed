import React, { useState } from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Menu, MenuItem, Drawer,
  List, ListItem, ListItemIcon, ListItemText, Button, Avatar } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Menu as MenuIcon, Search as SearchIcon, Mail as MailIcon, MoreVert as MoreIcon,
  Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon, KeyboardArrowLeft as ArrowIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: 312,
  },
  listItemFirst: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    marginBottom: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  hideMenuButton: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: 'translate(0, -50%)',
    color: theme.palette.secondary.main,
  },
}));

function MenuList({ menus, onMenuClose }) {
  const classes = useStyles();

  const _navigateTo = (path) => {
    Router.push(path).then(() => {
      if (typeof onMenuClose === 'function') {
        onMenuClose(true);
      }
      window.scrollTo(0, 0);
    })
  }

  return (
    <List disablePadding>
      <ListItem classes={{root: classes.listItemFirst}}>
        <ListItemIcon>
          <Avatar
            src={'https://orig00.deviantart.net/c591/f/2012/153/4/a/profile_picture_by_anonymous_noir-d51z873.png'}
          />
        </ListItemIcon>
        <ListItemText
          primary={<Typography variant='h6' noWrap style={{color: '#ffffff'}}>{'Mr. Anonymous'}</Typography>}
          secondary={
            <Button
              fontSize='small'
              disableFocusRipple
              onClick={() => Router.push('/logout')}
              variant='contained'
            >
              Logout
            </Button>
          }
        />
        <IconButton
          onClick={onMenuClose}
          className={classes.hideMenuButton}
          aria-label='hide menu'
          size='small'
        >
          <ArrowIcon fontSize='large'/>
        </IconButton>
      </ListItem>
      {menus.map(menu => (
        <ListItem
          button
          key={menu.menuId}
          onClick={() => {
            _navigateTo(menu.path);
          }}
        >
          <ListItemIcon>
            <div>
              <Avatar
                alt={menu.label}
              >
                {menu.label.charAt(0)}
              </Avatar>
            </div>
          </ListItemIcon>
          <ListItemText primary={menu.label} />
        </ListItem>
      ))}
    </List>
  );
}

function MenuBar({ menus }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function toggleDrawer(toggle) {
    setDrawerOpen(toggle);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => toggleDrawer(true)}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Smart Water Dashboard
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        classes={{paper: classes.drawerPaper}}
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <MenuList menus={menus} onMenuClose={() => toggleDrawer(false)}/>
      </Drawer>
    </div>
  );
}

export default MenuBar;