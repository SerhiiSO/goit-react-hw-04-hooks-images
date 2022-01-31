import React from 'react';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './searchBar.styled';
import propTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit" />

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputToFind"
        />
      </SearchForm>
    </Header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};
