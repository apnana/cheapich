import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            金額と容量を入力してください
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
};
