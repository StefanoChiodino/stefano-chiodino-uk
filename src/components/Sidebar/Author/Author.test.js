// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Author from './Author';

describe('Author', () => {
  const props = {
    author: {
      name: 'test',
<<<<<<< HEAD
      // photo: '/photo.jpg',
      // bio: 'test'
=======
      photo: '/photo.jpg',
      bio: 'test'
>>>>>>> lumen/master
    },
    isIndex: false
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
