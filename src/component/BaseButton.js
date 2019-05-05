import React from 'react';
import { Button } from '@material-ui/core';

export default class BaseButton extends React.Component {
  render() {
    const { title, onClick } = this.props
    return (
      <div style={contentColumn}>
        <Button
            variant="outlined"
            color="primary"
            style={buttonStyle}
            size="medium"
            type="outline"
            onClick={onClick}
        >
          {title}
        </Button>
      </div>
    )
  }
};

const contentColumn = {
  display: 'flex',
  flexDirection: 'column'
}

const buttonStyle = {
  marginTop: 10,
  marginBottom: 10,
  marginRight: 10,
  marginLeft: 10
}
