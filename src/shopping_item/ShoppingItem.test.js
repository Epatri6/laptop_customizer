import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingItem from './ShoppingItem';
import renderer from 'react-test-renderer';

describe('Testing ShoppingCart Component', () => {

  const testProps = {
    id: '1',
    feature: 'Processor',
    selectedOption: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
  };

  const {id, feature, selectedOption} = testProps;

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShoppingItem id={id} feature={feature} selectedOption={selectedOption}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without props without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShoppingItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const tree = renderer
      .create(<ShoppingItem id={id} feature={feature} selectedOption={selectedOption}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
  
  it('renders as expected without props', () => {
    const tree = renderer
      .create(<ShoppingItem />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});