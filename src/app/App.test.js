import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FeatureSelection from '../feature_selection/FeatureSelection';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('Testing ShoppingCart Component', () => {

  const testProps = {
    features: 
      {
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
        ],
        "Video Card": [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
          },
        ]
      }
  };

  const {features} = testProps;

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App features={features}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const wrapper = shallow(<App features={features} />);
    expect(toJson(wrapper)).toMatchSnapshot();  
    });
  
  it('renders as expected without props', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();  
  });

  //Event tests

  //Processor is changed
  it('updates item selected when item is clicked', () => {
    const wrapper = mount(<App features={features} />)
    const input = wrapper.find('input').at(1);
    input.simulate('change');
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});