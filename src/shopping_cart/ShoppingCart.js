import React from 'react';
import './ShoppingCart.css'
import USCurrencyFormat from '../util/USCurrencyFormat';

export default class ShoppingCart extends React.Component {

  summary = () => {
    const selectedFeatures = this.props.selectedFeatures;
    return Object.keys(selectedFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = selectedFeatures[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
  }

  total = () => {
    const selectedFeatures = this.props.selectedFeatures;
    return Object.keys(selectedFeatures).reduce(
      (acc, curr) => acc + selectedFeatures[curr].cost,
      0
    );
  }

  render() {
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      {this.summary()}
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(this.total())}
        </div>
      </div>
      </section>
    );
  }

  static defaultProps = {
    selectedFeatures: '',
  }
}