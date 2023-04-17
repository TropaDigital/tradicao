import Breadcrumbs from '../Breadcrumbs';
import { Container } from './styles';
import { PropsHeaderPage } from './types';

export default function HeaderPage({ children, title }: PropsHeaderPage) {
  return (
    <Container>
      <div className="titleWrapper">
        <h1 className="titleProductPage">{title}</h1>
        <div className="pathComponent">
          <Breadcrumbs />
        </div>
      </div>
      <span className="buttonWrapper">{children}</span>
    </Container>
  );
}
