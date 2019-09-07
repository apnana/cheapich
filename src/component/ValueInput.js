import React from 'react';
import { TextField } from '@material-ui/core';

export default class ValueInput extends React.Component {
  render() {
    const {id, title, value, onTextChange} = this.props;

    return (
      <div>
        <TextField
          {...this.props}
          label={title}
          variant="outlined"
          margin="normal"
          type="Number"
          value={value}
          onChange={e => onTextChange(id, e.target.value)}
          fullWidth
        />
      </div>
    )
  }
};
