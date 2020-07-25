import React from 'react';
import USCurrencyFormat from '../util/USCurrencyFormat';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class CustomizeScreen extends React.Component {
  listFeatures = () => {
    const {features, selectedFeatures, updateFeature} = this.props;
    return Object.keys(features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === selectedFeatures[feature].name}
              onChange={(e) => updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
  };

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.listFeatures()}
      </form>
    );
  }
}
