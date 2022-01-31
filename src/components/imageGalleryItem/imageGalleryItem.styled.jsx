import styled from 'styled-components';

export const ImageGalleryItemStyle = styled.li`
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.2), 0px 2px 1px -1px rgba(0, 0, 0, 0.1);
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
