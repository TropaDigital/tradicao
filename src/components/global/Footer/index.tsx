// Next
import Image from 'next/image';
import Link from 'next/link';

// Icons
import {
  BeAPartnerIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  TalkWithUsIcon,
  TikTokIcon,
  WhiteLogo,
  YoutubeIcon
} from '@/assets/icons';

// Components
import ReclameAquiSelo from '@/components/shared/ReclameAquiSelo';

// Styles
import {
  BottomFooter,
  Column,
  Container,
  Copyright,
  Divider,
  FooterWrapper,
  GreenButton,
  LeftSide,
  MidFooter,
  RightSide,
  SocialMedia,
  TextButton,
  TextField,
  TitleColumns,
  TopFooter
} from './styles';

// Images
import ReclameLogo from '../../../../public/images/ReclameAqui.svg';
import NoFrontiers from '../../../../public/images/NoFrontiers.png';
import AyrtonSenna from '../../../../public/images/AyrtonSenna.png';
import MamaRenascer from '../../../../public/images/mama_renascer.png';
import Apala from '../../../../public/images/apala.png';
import Tropa from '../../../../public/images/TropaLogo.svg';
import ButtonChatIa from '../ChatIA/ButtonChatIa';
import ChatIA from '../ChatIA/ChatIA';
import { useState } from 'react';

export default function Footer() {
  const [modalChat, setModalChat] = useState(false);

  return (
    <Container>
      <FooterWrapper>
        <TopFooter>
          <LeftSide>
            <Image
              src="/images/logo-branca.png"
              alt="Logo consórcio tradição"
              width={379}
              height={111}
            />
          </LeftSide>

          <SocialMedia>
            <Link
              href={'https://www.facebook.com/ConsorcioTradicao/'}
              target="_blank"
              aria-label="Visite a pagina no Facebook do Consórcio Tradição"
            >
              <FacebookIcon />
            </Link>

            <Link
              href={'https://www.instagram.com/consorciotradicao/?hl=pt-br'}
              target="_blank"
              aria-label="Visite a pagina no Instagram do Consórcio Tradição"
            >
              <InstagramIcon />
            </Link>

            <Link
              href={'https://www.youtube.com/channel/UCPn_simvsLHGMJGrQbkreMQ'}
              target="_blank"
              aria-label="Visite a pagina no Youtube do Consórcio Tradição"
            >
              <YoutubeIcon />
            </Link>

            <Link
              href={'https://www.tiktok.com/@consorciotradicao'}
              target="_blank"
              aria-label="Visite a pagina no Tik Tok do Consórcio Tradição"
            >
              <TikTokIcon />
            </Link>

            <Link
              href={'https://www.linkedin.com/company/consorciotradicao/'}
              target="_blank"
              aria-label="Visite a pagina no Linkedin do Consórcio Tradição"
            >
              <LinkedinIcon />
            </Link>
          </SocialMedia>

          <RightSide>
            <div id="reputation-ra">
              <ReclameAquiSelo />
            </div>
          </RightSide>
        </TopFooter>

        <MidFooter>
          <Column>
            <div style={{ marginBottom: '20px' }}>
              <TitleColumns>A Tradição</TitleColumns>
              <div style={{ marginTop: '10px' }}>
                <Link
                  href={'https://www.youtube.com/watch?v=wNRruL96RYI'}
                  target="_blank"
                >
                  <TextButton>História</TextButton>
                </Link>

                <Link href={'/unidades'}>
                  <TextButton>Parceiros</TextButton>
                </Link>

                <Link href={'/trabalhe-conosco'}>
                  <TextButton>Trabalhe Conosco</TextButton>
                </Link>
              </div>
            </div>

            <div>
              <TitleColumns>Está com dúvidas?</TitleColumns>
              <div style={{ marginTop: '10px', marginBottom: '25px' }}>
                <TextField>
                  Se sinta à vontade para entrar em contato conosco. Envie um
                  e-mail para:
                  <span>sac@consorciotradicao.com.br</span>
                </TextField>
              </div>

              <GreenButton>
                <div className="absolute">
                  <div className="icon">
                    <TalkWithUsIcon />
                  </div>
                </div>
                <div className="button">
                  <div className="text">
                    <Link href="/contato" className="text">
                      Fale Conosco
                    </Link>
                  </div>
                </div>
              </GreenButton>
            </div>
          </Column>

          <Column>
            <TitleColumns>Consórcios</TitleColumns>
            <div style={{ marginTop: '10px', marginBottom: '26px' }}>
              <Link href={'/pesados'}>
                <TextButton>Consórcio de Pesados</TextButton>
              </Link>

              <Link href={'/servicos'}>
                <TextButton>Consórcio de Serviços</TextButton>
              </Link>

              <Link href={'/imoveis'}>
                <TextButton>Consórcio de Imóveis</TextButton>
              </Link>

              <Link href={'/automoveis'}>
                <TextButton>Consórcio de Automóveis</TextButton>
              </Link>

              {/* <Link href={'/'}>
                <TextButton>Simulador de Consórcio</TextButton>
              </Link> */}

              <Link
                href={'https://api.whatsapp.com/send?phone=551129284855'}
                target="_blank"
              >
                <TextButton>Fale com um Especialista</TextButton>
              </Link>

              <Link href={'/relatorios-de-ouvidoria'}>
                <TextButton>Relatórios de Ouvidoria</TextButton>
              </Link>
            </div>

            <TitleColumns>Ouvidoria</TitleColumns>
            <div style={{ marginTop: '6px' }}>
              <TextButton>ouvidoria@consorciotradicao.com.br</TextButton>
              <Link href={'tel:08008770020'}>
                <TextButton>0800 877 0020</TextButton>
              </Link>
            </div>
          </Column>

          <Column>
            <TitleColumns>Entenda o Consórcio</TitleColumns>
            <div style={{ marginTop: '10px', marginBottom: '18px' }}>
              <Link
                href={'https://www.youtube.com/watch?v=EMsarv8WQCs'}
                target="_blank"
              >
                <TextButton>O que é um consórcio</TextButton>
              </Link>

              <Link href={'/'}>
                <TextButton>Contemplação</TextButton>
              </Link>

              <Link href={'/'}>
                <TextButton>Cotas</TextButton>
              </Link>

              <Link href={'/'}>
                <TextButton>Lance</TextButton>
              </Link>

              <Link href={'/'}>
                <TextButton>Pagamento</TextButton>
              </Link>
            </div>

            <TitleColumns>Parceria</TitleColumns>
            <div style={{ marginTop: '10px', marginBottom: '6px' }}>
              <Link
                href={'http://consorciotradicao.ddns.com.br:8090/newconplus/'}
              >
                <TextButton>Área do parceiro</TextButton>
              </Link>
            </div>

            <GreenButton>
              <div className="absolute">
                <div className="icon">
                  <BeAPartnerIcon />
                </div>
              </div>
              <div className="button">
                <div className="text">
                  <Link href="/seja-um-parceiro" className="text">
                    Seja um Parceiro
                  </Link>
                </div>
              </div>
            </GreenButton>
          </Column>

          <Column>
            <TitleColumns>Contato</TitleColumns>
            <div style={{ marginTop: '10px', marginBottom: '30px' }}>
              <TextField>
                Alameda Rio Negro, 1084 <br />
                Alphaville Industrial, Barueri/SP <br />
                CEP: 06454-000{' '}
              </TextField>
              <Link href={'tel:11 40035090'}>
                <TextButton>
                  <PhoneIcon />
                  (11) 4003 5090
                </TextButton>
              </Link>
              <Link href={'tel:11 29284800'}>
                <TextButton>
                  <PhoneIcon />
                  (11) 2928-4800
                </TextButton>
              </Link>
            </div>

            <TitleColumns>LGPD</TitleColumns>

            <Link href={'/'}>
              <TextButton>Portal da Privacidade</TextButton>
            </Link>

            <Link href={'/'}>
              <TextButton>Portal do Titular</TextButton>
            </Link>

            <Link href={'/'}>
              <TextButton>Consentimentos</TextButton>
            </Link>

            <Link href={'/'}>
              <TextButton>Pedidos dos Titulares</TextButton>
            </Link>
          </Column>
        </MidFooter>

        <Divider />

        <BottomFooter>
          <div className="text">O Consórcio Tradição Apoia:</div>
          <Link
            href={'https://www.fraternidadesemfronteiras.org.br/'}
            target={'_blank'}
            aria-label="Site Fraternidade Sem Fronteiras"
            className="square-image"
          >
            <Image
              src={NoFrontiers}
              alt="Imagem de Logo do Fraternidade Sem Fronteiras"
              width={120}
              height={70}
            />
          </Link>
          <Link
            href={'https://institutoayrtonsenna.org.br/'}
            target={'_blank'}
            aria-label="Visite a pagina do instituto Ayrton Senna"
            className="square"
          >
            <Image
              src={AyrtonSenna}
              alt="Imagem de Logo do Instituto Ayrton Senna"
              width={177}
              height={70}
            />
          </Link>
          <Link
            href={'https://www.instagram.com/mamarenascer/'}
            target={'_blank'}
            aria-label="Visite a pagina do instituto Mama Renascer"
            className="square"
          >
            <Image
              src={MamaRenascer}
              alt="Imagem de Logo da Ong Mama Renascer"
              width={177}
              height={70}
            />
          </Link>
          <Link
            href={'https://www.apala.org.br/'}
            target={'_blank'}
            aria-label="Visite a pagina do instituto Apala"
            className="square"
          >
            <Image
              src={Apala}
              alt="Imagem de Logo da Ong Apala"
              width={177}
              height={70}
            />
          </Link>
        </BottomFooter>
      </FooterWrapper>

      <Copyright>
        <div className="text">
          A TRADIÇÃO ADMINISTRADORA DE CONSÓRCIO LTDA, CNPJ: 59.956.185/0001-55,
          fiscalizada e autorizada pelo Banco Central do Brasil, através do
          Certificado de Autorização n° 03/00/210/89 de 13/11/1989 não
          comercializa cotas contempladas ou fornece datas específicas para
          contemplação.
        </div>

        <div className="developed">
          Copyright © 2023 Consórcio Tradição. All Rights Reserved. | Developed
          By:
          <Link
            href={'https://tropa.digital/'}
            target={'_blank'}
            aria-label="Conheça a empresa que desenvolveu este site"
          >
            <Image
              src={Tropa}
              alt="Imagem de Logo da Tropa Digital"
              width={130}
              height={16}
            />
          </Link>
        </div>
      </Copyright>

      {/* <ChatIA opened={modalChat} onClose={() => setModalChat(false)} /> */}
      {/* <ButtonChatIa onClick={() => setModalChat(true)} color="0, 54, 198" /> */}
    </Container>
  );
}
