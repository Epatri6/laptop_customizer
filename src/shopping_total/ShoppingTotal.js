import React from 'react';
import USCurrencyFormat from '../util/USCurrencyFormat';
import './ShoppingTotal.css'

export default class ShoppingTotal extends React.Component {

  //calculates the price of selected items
  total = () => {
    const selectedFeatures = this.props.selectedFeatures;
    return Object.keys(selectedFeatures).reduce(
      (acc, curr) => acc + selectedFeatures[curr].cost,
      0
    );
  };

  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(this.total())}
        </div>
      </div>
    );
  }

  static defaultProps = {
    selectedFeatures: {}
  }
}
