import renderer from 'react-test-renderer';
import {
  Item,
  List,
  SearchForm,
  InputWithLabel,
} from './components/DataFetching/DataFetching';

describe('Item', () => {
  const item = {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  };

  it('renders all properties', () => {
    const component = renderer.create(<Item item={item} />);
    expect(component.root.findByType('a').props.href).toEqual(
      'https://reactjs.org/'
    );
    expect(component.root.findAllByType('span')[1].props.children).toEqual(
      'Jordan Walke'
    );
  });
});
