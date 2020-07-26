import React from 'react';
import ReactDOM from 'react-dom';
import CustomizeScreen from './CustomizeScreen';
import renderer from 'react-test-renderer';

describe('Testing ShoppingCart Component', () => {

  const testProps = {
    features: {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      "Operating System": [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ]
    },
    selectedFeatures: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      }
    },
    updateFeature: () => {}
  };

  const {features, selectedFeatures, updateFeature} = testProps;

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomizeScreen features={features} selectedFeatures={selectedFeatures} updateFeature={updateFeature}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CustomizeScreen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const tree = renderer
      .create(<CustomizeScreen features={features} selectedFeatures={selectedFeatures} updateFeature={updateFeature}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
  
  it('renders as expected without props', () => {
    const tree = renderer
      .create(<CustomizeScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});