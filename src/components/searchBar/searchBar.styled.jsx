import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 8px 0px 8px 0px;
  background-color: #de3347;
  box-shadow: 0px 2px 4px 1px rgba(222, 51, 71, 0.4);
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 0px 50px 50px 0px;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 34px;
  height: 34px;
  border: none;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/de/OOjs_UI_icon_search-ltr.svg');
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.4;
  cursor: pointer;
  outline: none;
  :hover,
  :focus {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  width: 85%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: 4px;
  ::placeholder {
    font-size: 14px;
    opacity: 0.5;
  }
`;
