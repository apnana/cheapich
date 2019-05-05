import React from 'react';
import './App.css';

import BaseButton from './component/BaseButton';
import Header from './component/Header';
import InputSection from './component/InputSection';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      priceA: '',
      amountA: '',
      priceB: '',
      amountB: '',
      msg: ''
    }
  }

  _onClearValue = () => {
    this.setState({ 
      priceA: '',
      amountA: '',
      priceB: '',
      amountB: '',
      msg: ''
    })
  }

  _onTextChange = (id, text) => {
    if (id === 'priceA') {
      this.setState({ priceA: text });
    }
    else if (id === 'amountA') {
      this.setState({ amountA: text });
    }
    else if (id === 'priceB') {
      this.setState({ priceB: text });
    }
    else if (id === 'amountB') {
      this.setState({ amountB: text });
    }
    else {
      // do nothing
    }
  }

  _onCompare = () => {
    const price_per_unit_A = this.state.priceA / this.state.amountA;
    const price_per_unit_B = this.state.priceB / this.state.amountB;
    let winner = ''

    if (price_per_unit_A > price_per_unit_B) {
      winner = 'B'
    }
    else if (price_per_unit_A < price_per_unit_B) {
      winner = 'A'
    }
    else {
      winner = 'Both'
    }
    this.setState({ msg: winner !== 'Both' ? winner + 'の方がお得🎉' : 'どっちもお得😮' })
  }

  render() {
    const result = this.state.msg !== '' ? 
      <h1 style={resultStyle}>{this.state.msg}</h1> :
      <h1 />

    return (
      <div>
        <Header />
        <div style={containerStyle}>
          <InputSection
            ids={["priceA", "amountA"]}
            title="入力A"
            captions={["価格", "容量"]}
            values={[this.state.priceA, this.state.amountA]}
            onTextChange={this._onTextChange}
          />
          <InputSection
            ids={["priceB", "amountB"]}
            title="入力B"
            captions={["価格", "容量"]}
            values={[this.state.priceB, this.state.amountB]}
            onTextChange={this._onTextChange}
          />
        </div>
        {result}
        <BaseButton title="入力をクリア" onClick={this._onClearValue} />
        <BaseButton title="比較" onClick={this._onCompare} />
      </div>
    )
  }
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const resultStyle = {
  color: '#000',
  backgroundColor: '#EA7A6E',
  width: '100%',
  textAlign: 'center',
  fontSize: 20
}