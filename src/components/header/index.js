import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1em',
    marginBottom: '1em',
  },
}));

const Header = ({ user = { firstName: 'John', lastName: 'Doe' }, pf }) => {
  const classes = useStyles();
  const { firstName, lastName } = user;
  return (
    <AppBar className={classes.row} position="static">
      <Typography variant="h4">MASSIVE ATTACK</Typography>
      <Typography variant="h4">{`==> ${pf}`}</Typography>

      <Typography variant="h6">{`${firstName} ${lastName}`}</Typography>
    </AppBar>
  );
};

export default Header;
Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
