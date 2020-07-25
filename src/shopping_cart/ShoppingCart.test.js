import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './ShoppingCart';
import renderer from 'react-test-renderer';

describe('Testing ShoppingCart Component', () => {

  const testProps = {
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    'Operating System': {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    }
  };

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShoppingCart selectedFeatures={testProps}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShoppingCart />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const tree = renderer
      .create(<ShoppingCart selectedFeatures={testProps}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
  
  it('renders as expected without props', () => {
    const tree = renderer
      .create(<ShoppingCart />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});