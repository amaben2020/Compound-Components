import React, { useEffect, useReducer } from 'react';
import Input2 from './Reusable/Input2';
import axios from 'axios';
import List from './Reusable/List';
import { ReactComponent as Check } from '../components/check.svg';
import './check.css';
const initialState = {
  data: [],
  loading: false,
  error: false,
};

const storiesReducer = (state, action) => {
  console.log(state);
  const { type, payload } = action;

  switch (type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        loading: true,
      };
    case 'SET_STORIES':
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case 'REMOVE_STORY':
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter((elem) => elem.id !== payload),
      };

    default:
      throw new Error();
  }
};

const UseReducer = ({ changer, term, handleSearchSubmit, url }) => {
  const API_ENDPOINT = url;
  const [story, dispatchStories] = useReducer(storiesReducer, initialState);

  //using useCallback for memoization
  const loadStories = React.useCallback(async () => {
    if (term === '') return;
    dispatchStories({ type: 'INITIAL_FETCH' });
    const value = await axios.get(API_ENDPOINT);
    console.log(value.data.hits);
    dispatchStories({ type: 'SET_STORIES', payload: value.data.hits });
  }, [API_ENDPOINT, term]);

  useEffect(() => {
    loadStories();
  }, [loadStories]);

  const handleRemoveStory = (id) => {
    return dispatchStories({ type: 'REMOVE_STORY', payload: id });
  };

  return (
    <div>
      {story.loading && <p style={{ color: 'red' }}> Loading...</p>}{' '}
      <>
        {story.data.map((s) => (
          <List key={s.id} s={s} handleRemoveStory={handleRemoveStory} />
        ))}

        <Input2
          term={term}
          changer={changer}
          submit="submit"
          handleSearchSubmit={handleSearchSubmit}
        />
        <button type="button" className="button button_small">
          <Check height="18px" width="18px" />
        </button>
        <Check height="38px" width="38px" />
      </>
    </div>
  );
};

export default UseReducer;
