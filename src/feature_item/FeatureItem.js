import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import USCurrencyFormat from '../util/USCurrencyFormat';
import './FeatureItem.css';

export default class FeatureItem extends React.Component {

  render() {
    const {id, item, featureName, selectedFeature, updateFeature} = this.props;
    return (
      <div key={id} className="feature__item">
        <input
          type="radio"
          id={id}
          className="feature__option"
          name={slugify(featureName)}
          checked={item.name === selectedFeature.name}
          onChange={(e) => updateFeature(featureName, item)}
        />
        <label htmlFor={id} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }

  static defaultProps = {
    id: '',
    item: {},
    featureName: '',
    selectedFeature: {},
    updateFeature: () => {}
  }

}