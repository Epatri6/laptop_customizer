import React from 'react';
import ReactDOM from 'react-dom';
import FeatureItem from './FeatureItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('Testing ShoppingCart Component', () => {

  const testProps = {
    id: '1',
    item:
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
    featureName: 'Processor',
    selectedFeature: 
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      },
    updateFeature: () => {},
    selectedFeatureAlt: 
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      }
  };

  const {id, item, featureName, selectedFeature, updateFeature, selectedFeatureAlt} = testProps;

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureItem id={id} item={item} featureName={featureName} selectedFeature={selectedFeature} updateFeature={updateFeature} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const wrapper = shallow(<FeatureItem id={id} item={item} featureName={featureName} 
      selectedFeature={selectedFeature} updateFeature={updateFeature} />);
    expect(toJson(wrapper)).toMatchSnapshot();  
    });
  
  it('renders as expected without props', () => {
    const wrapper = shallow(<FeatureItem />);
    expect(toJson(wrapper)).toMatchSnapshot();  
  });

  it('renders as expected when item is selected', () => {
    const wrapper = shallow(<FeatureItem id={id} item={item} featureName={featureName} 
      selectedFeature={selectedFeatureAlt} updateFeature={updateFeature} />);
    expect(toJson(wrapper)).toMatchSnapshot();  
    });
});