import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import renderer from 'react-test-renderer';

describe('Testing Title Component', () => {

  //Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Snapshot test
  it('renders as expected', () => {
    const tree = renderer
      .create(<Title />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
});