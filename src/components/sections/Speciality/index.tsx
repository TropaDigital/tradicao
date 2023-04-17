import Image from 'next/image';
import brasaoImg from '../../../../public/images/completeBrasao.png';
import bancoCenterImg from '../../../../public/images/bancoCenterBrasilImg.png';
import abacEmpresaImg from '../../../../public/images/abacEmpresaImg.png';

import { Container, GroupLogos } from './styles';
import { ContainerDefault } from '@/components/UI/stylesDefault';

export default function Speciality() {
  return (
    <Container>
      <Image className="backgroundImage" src={brasaoImg} alt={'brasao'} />

      <ContainerDefault>
        <GroupLogos>
          <div className="logos">
            <h3>Autorizada</h3>
            <Image src={bancoCenterImg} alt={'bancoCenterImg'} />
          </div>
          <div className="logos">
            <h3>Afiliada</h3>
            <Image src={abacEmpresaImg} alt={'abacEmpresaImg'} />
          </div>
        </GroupLogos>
      </ContainerDefault>
    </Container>
  );
}
