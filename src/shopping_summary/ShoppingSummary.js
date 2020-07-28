import React from 'react';
import ShoppingItem from '../shopping_item/ShoppingItem';

export default class ShoppingSummary extends React.Component {

  //Prints the items selected
  summary = () => {
    const selectedFeatures = this.props.selectedFeatures;
    return Object.keys(selectedFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = selectedFeatures[feature];
      return (
        <ShoppingItem
          key={featureHash}
          id={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {this.summary()}
      </div>
    );
  }

  static defaultProps = {
    selectedFeatures: {}
  }
}
