import React from 'react';
import './CustomizeScreen.css';
import FeatureSelection from '../feature_selection/FeatureSelection';

export default class CustomizeScreen extends React.Component {
  listFeatures = () => {
    const {features, selectedFeatures, updateFeature} = this.props;
    return Object.keys(features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return <FeatureSelection key={featureHash} id={featureHash} feature={features[feature]} featureName={feature} selectedFeature={selectedFeatures[feature]} updateFeature={updateFeature}/>
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

  static defaultProps = {
    features: {},
    selectedFeatures: {},
    updateFeature: () => {}
  }
}
