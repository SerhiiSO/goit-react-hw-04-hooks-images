import React from 'react';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './imageGalleryItem.styled';
import propTypes from 'prop-types';

export default function ImageGalleryItem({ data, onClick }) {
  return data.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageGalleryItemStyle key={id}>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL, tags)}
      />
    </ImageGalleryItemStyle>
  ));
}

ImageGalleryItem.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      webformatURL: propTypes.string,
      tags: propTypes.string,
      largeImageURL: propTypes.string,
    })
  ),
};
