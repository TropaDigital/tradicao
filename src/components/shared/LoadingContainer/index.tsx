import * as S from './styles';
import { DefaultLogo } from '../../../assets/icons';

const LoadingContainer = () => {
  return (
    <>
      <S.LoadingContainer>
        <div className="icon-container">
          <DefaultLogo />
        </div>
        <div className="loading-ball"></div>
      </S.LoadingContainer>
    </>
  );
};

export default LoadingContainer;
