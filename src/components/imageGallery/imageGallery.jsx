import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';
import { ImageGalleryStyle } from './imageGallery.styled';
import propTypes from 'prop-types';

export default function ImageGallery({ data, onClick }) {
  return (
    <ImageGalleryStyle>
      <ImageGalleryItem data={data} onClick={onClick} />
    </ImageGalleryStyle>
  );
}

ImageGallery.propTypes = {
  data: propTypes.arrayOf(propTypes.object),
  onClick: propTypes.func,
};
