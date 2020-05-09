import React from 'react';
import renderer from 'react-test-renderer';

import RootScreen from '../../src/screens/Root/RootScreen';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<RootScreen />).toJSON();
    expect(tree?.children?.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<RootScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
