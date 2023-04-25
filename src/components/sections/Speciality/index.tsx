// Next
import Image from 'next/image';

// Images
import brasaoImg from '../../../../public/images/completeBrasao.png';
import bancoCenterImg from '../../../../public/images/bancoCenterBrasilImg.png';
import abacEmpresaImg from '../../../../public/images/abacEmpresaImg.png';

// Styles
import { Container, GroupLogos } from './styles';

export default function Speciality() {
  return (
    <Container>
      <Image className="backgroundImage" src={brasaoImg} alt={'brasao'} />

        <GroupLogos>
          <div className="logos">
            <h3>Autorizada</h3>
            <Image 
              src={bancoCenterImg} 
              alt={'bancoCenterImg'} 
              width={240}
            />
          </div>
          <div className="logos">
            <h3>Afiliada</h3>
            <Image 
              src={abacEmpresaImg} 
              alt={'abacEmpresaImg'} 
              width={210}
            />
          </div>
        </GroupLogos>
    </Container> 
  );
}
