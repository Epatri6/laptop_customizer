import React from 'react';
import './ShoppingCart.css'
import ShoppingSummary from '../shopping_summary/ShoppingSummary';
import ShoppingTotal from '../shopping_total/ShoppingTotal';

export default class ShoppingCart extends React.Component {

  render() {
    return (
      <section className="main__summary">
      <h2>Your cart</h2>
      <ShoppingSummary selectedFeatures={this.props.selectedFeatures} />
      <ShoppingTotal selectedFeatures={this.props.selectedFeatures} />
      </section>
    );
  }

  static defaultProps = {
    selectedFeatures: {},
  }
}