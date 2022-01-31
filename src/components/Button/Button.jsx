import React from 'react';
import { ButtonStyled } from './Button.styled';
import propTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
}

Button.propTypes = {
  onClick: propTypes.func,
};
