import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './FeatureSelection.css';
import FeatureItem from '../feature_item/FeatureItem';

export default class FeatureSelection extends React.Component {

  render() {
    const {id, feature, featureName, selectedFeature, updateFeature} = this.props;
    const options = feature.map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return <FeatureItem key={itemHash} id={itemHash} item={item} featureName={featureName} selectedFeature={selectedFeature} updateFeature={updateFeature}/>;
    });

    return (
        <fieldset className="feature" key={id}>
          <legend className="feature__name">
            <h3>{featureName}</h3>
          </legend>
          {options}
        </fieldset>
    );
  }

  static defaultProps = {
    id: '',
    feature: [],
    featureName: '',
    selectedFeature: {},
    updateFeature: () => {},
  }

}