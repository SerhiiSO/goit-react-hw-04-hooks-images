import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';
export default function Loader() {
  return (
    <LoaderStyled>
      <ThreeDots color="rgba(222, 51, 71, 0.8)" />
    </LoaderStyled>
  );
}
