import { useState } from 'react';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './searchBar.styled';
import propTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [inputToFind, setInputToFind] = useState('');

  const handleInputChange = event => {
    setInputToFind(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputToFind.toLowerCase().trim() === '') {
      return;
    }
    onSubmit(inputToFind);
    setInputToFind('');
  };
  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" />

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputToFind"
          onChange={handleInputChange}
          value={inputToFind}
        />
      </SearchForm>
    </Header>
  );
}

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};
