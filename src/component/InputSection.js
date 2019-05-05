import React from 'react';
import ValueInput from './ValueInput'

const mainStyle = {
  flex: 2,
  margin: 10
}

const titleStyle = {
  color: '#000',
  backgroundColor: '#F1F1F1',
  width: '100%',
  textAlign: 'center',
  marginBottom: 10,
  fontSize: 20
}

export default class InputSection extends React.Component {
  render() {
    const { ids, title, captions, values, onTextChange } = this.props
    return (
      <div style={mainStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <ValueInput
          id={ids[0]}
          title={captions[0]}
          value={values[0]}
          onTextChange={onTextChange}
        />
        <ValueInput
          id={ids[1]}
          title={captions[1]}
          value={values[1]}
          onTextChange={onTextChange}
        />
      </div>
    );
  }
};
