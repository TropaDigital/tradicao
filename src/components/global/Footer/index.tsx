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
import WizImage from '../../../../public/images/ImageWiz.svg';
import ReclameLogo from '../../../../public/images/ReclameAqui.svg';
import NoFrontiers from '../../../../public/images/NoFrontiers.svg';
import AyrtonSenna from '../../../../public/images/AyrtonSenna.svg';
import Tropa from '../../../../public/images/TropaLogo.svg';

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <TopFooter>
          <LeftSide>
            <WhiteLogo />
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
                href={
                  'https://www.youtube.com/channel/UCPn_simvsLHGMJGrQbkreMQ'
                }
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
          </LeftSide>

          <RightSide>
            <div className="correct">
              <Link
                href={'https://wiz.co/'}
                target="_blank"
                aria-label="Visite a pagina do parceiro Consórcio Tradição"
              >
                <Image
                  src={WizImage}
                  alt="Imagem de logo da empresa Wi3"
                  width={231}
                  height={86}
                />
              </Link>
            </div>
            <Link
              href={
                'https://www.reclameaqui.com.br/empresa/consorcio-nacional-tradicao/'
              }
              target="_blank"
              aria-label="Visite a pagina do Reclame Aqui do Consórcio Tradição"
            >
              <Image
                src={ReclameLogo}
                alt="Imagem de logo da empresa Reclame Aqui"
                width={175}
                height={64}
                className="reclame-logo"
              />
            </Link>
          </RightSide>
        </TopFooter>

        <MidFooter>
          <Column>
            <div style={{ marginBottom: '20px' }}>
              <TitleColumns>A Tradição</TitleColumns>
              <div style={{ marginTop: '10px' }}>
                <Link href={'/'}>
                  <TextButton>História</TextButton>
                </Link>

                <Link href={'/'}>
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
                  Se sinta a vontade para entrar em contato conosco. Entre em
                  contato por <span>este link</span> ou envie um e-mail para:{' '}
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
                    <Link href="/" className="text">
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

              <Link href={'/contato'}>
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
              <Link href={'/'}>
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
              <TextButton>Área do parceiro</TextButton>
            </div>

            <GreenButton>
              <div className="absolute">
                <div className="icon">
                  <BeAPartnerIcon />
                </div>
              </div>
              <div className="button">
                <div className="text">
                  <Link href="/" className="text">
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
                <Link
                  href={'tel:08008770020'}
                  style={{ color: 'var(--white)' }}
                >
                  0800 877 0020
                </Link>
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
          >
            <Image
              src={NoFrontiers}
              alt="Imagem de Logo do Fraternidade Sem Fronteiras"
              width={217}
              height={79}
            />
          </Link>
          <Link
            href={'https://institutoayrtonsenna.org.br/'}
            target={'_blank'}
            aria-label="Visite a pagina do instituto Ayrton Senna"
          >
            <Image
              src={AyrtonSenna}
              alt="Imagem de Logo do Instituto Ayrton Senna"
              width={177}
              height={79}
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
          Copyright © 2020 Consórcio Tradição. All Rights Reserved. | Developed
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
    </Container>
  );
}
