import React from 'react';
import USCurrencyFormat from '../util/USCurrencyFormat';
import './ShoppingItem.css';

export default class ShoppingItem extends React.Component {

  render() {
    const {id, feature, selectedOption} = this.props;
    return (
      <div className="summary__option" key={id}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(selectedOption.cost)}
      </div>
    </div>
    );
  }

  static defaultProps = {
    id: '',
    feature: '',
    selectedOption: {name: '', cost: 0}
  }

}