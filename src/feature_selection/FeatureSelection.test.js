import React from 'react';
import ReactDOM from 'react-dom';
import FeatureSelection from './FeatureSelection';
import renderer from 'react-test-renderer';

describe('Testing ShoppingCart Component', () => {

  const testProps = {
    id: '1',
    feature: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      }
    ],
    featureName: 'Processor',
    selectedFeature: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    updateFeature: () => {},
  };

  const {id, feature, featureName, selectedFeature, updateFeature} = testProps;

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureSelection id={id} feature={feature} featureName={featureName} selectedFeature={selectedFeature} updateFeature={updateFeature} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureSelection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const tree = renderer
      .create(<FeatureSelection id={id} feature={feature} featureName={featureName} selectedFeature={selectedFeature} updateFeature={updateFeature} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
  
  it('renders as expected without props', () => {
    const tree = renderer
      .create(<FeatureSelection />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});