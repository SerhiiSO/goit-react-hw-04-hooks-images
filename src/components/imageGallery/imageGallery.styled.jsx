import styled from 'styled-components';

export const ImageGalleryStyle = styled.ul`
  display: grid;
  width: 98vw;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  grid-gap: 16px;
  margin: 0px auto;
  padding: 0;
`;
