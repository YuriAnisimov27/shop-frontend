import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Cart from 'components/MainLayout/components/Cart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      marginRight: 16,
      height: 30,
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: 26,
      fontWeight: 'bold',
    },
    header: {
      background:
        'linear-gradient(to right, green 0%, green 33%, white 33%, white 66%, red 66%, red 100%);',
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const auth = true;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='relative' className={classes.header}>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          <Link className={classes.homeLink} to='/'>
            <img
              className={classes.logo}
              src='https://assets.ducati.com/dist/0.3.16/assets/img/ducati_id.png'
              alt='Ducati Logo'
            />
            Ducati
          </Link>
        </Typography>

        {auth && (
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'>
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}>
              <MenuItem
                component={Link}
                to='/admin/orders'
                onClick={handleClose}>
                Manage orders
              </MenuItem>
              <MenuItem
                component={Link}
                to='/admin/products'
                onClick={handleClose}>
                Manage products
              </MenuItem>
            </Menu>
          </div>
        )}
        <Cart />
      </Toolbar>
    </AppBar>
  );
}
