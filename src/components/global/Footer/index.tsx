// Next
import Image from 'next/image';
import Link from 'next/link';

// Icons
import {
  BeAPartnerIcon,
  PhoneIcon,
  TalkWithUsIcon,
  WhatsappIcon
} from '@/assets/icons';
import { FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

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
  TextButtonH3,
  TextField,
  TitleColumns,
  TopFooter
} from './styles';

// Images
import NoFrontiers from '../../../../public/images/NoFrontiers.png';
import AyrtonSenna from '../../../../public/images/AyrtonSenna.png';
import MamaRenascer from '../../../../public/images/mama_renascer.png';
import Apala from '../../../../public/images/apala.png';
import Tropa from '../../../../public/images/TropaLogo.svg';
import TradMaxLogo from '../../../../public/images/logo_tradmax.png';

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
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
                  Se sinta à vontade para entrar em contato conosco. <br />
                  Envie um e-mail para: <br />
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
            <TitleColumns>Consórcio</TitleColumns>
            <div
              style={{
                marginTop: '10px',
                marginBottom: '26px'
              }}
            >
              <TextButtonH3>
                <Link style={{ all: 'inherit' }} href={'/servicos'}>
                  Consórcio de Serviços
                </Link>
              </TextButtonH3>

              <TextButtonH3>
                <Link style={{ all: 'inherit' }} href={'/imoveis'}>
                  Consórcio de Imóveis
                </Link>
              </TextButtonH3>

              <TextButtonH3>
                <Link style={{ all: 'inherit' }} href={'/automoveis'}>
                  Consórcio de Automóveis
                </Link>
              </TextButtonH3>

              <TextButtonH3>
                <Link style={{ all: 'inherit' }} href={'/pesados'}>
                  Consórcio de Pesados
                </Link>
              </TextButtonH3>
            </div>

            <TitleColumns>Ouvidoria:</TitleColumns>
            <div style={{ marginBottom: '15px' }}>
              <Link href={'/relatorios-de-ouvidoria'}>
                <TextButton>Relatório de Ouvidoria</TextButton>
              </Link>
            </div>

            <TitleColumns>LGPD</TitleColumns>

            <Link href={'/aviso-de-privacidade'}>
              <TextButton>Portal da Privacidade</TextButton>
            </Link>

            <Link
              href={
                'https://titulares.becompliance.com/?client=f091c8ff-b0ca-4aff-bbea-5ae6f14822b3&form=dad46e5b-247f-4dd5-925e-c142c7dfef2d'
              }
              target="_blank"
            >
              <TextButton>Portal dos Titulares</TextButton>
            </Link>
          </Column>

          <Column>
            <TitleColumns>Entenda o Consórcio</TitleColumns>
            <Link
              href={'https://www.youtube.com/watch?v=EMsarv8WQCs'}
              target="_blank"
            >
              <TextButton>O que é um consórcio</TextButton>
            </Link>

            <TitleColumns>Contato</TitleColumns>
            <div style={{ marginTop: '10px', marginBottom: '15px' }}>
              <TextField>
                Alameda Rio Negro, 1084 <br />
                Alphaville Industrial, Barueri/SP <br />
                CEP: 06454-000{' '}
              </TextField>
              <Link href={'tel:40035090'}>
                <TextButton>
                  <PhoneIcon />
                  4003 5090
                </TextButton>
              </Link>
              <Link
                href={'https://api.whatsapp.com/send?phone=551129284804'}
                target={'_blank'}
              >
                <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
                  <WhatsappIcon width={256 * 0.07} height={258 * 0.07} />
                  <TextField>(11) 2928-4804</TextField>
                </div>
              </Link>
            </div>

            <TitleColumns>Parceria</TitleColumns>
            <div style={{ marginBottom: '6px' }}>
              <Link
                href={'http://consorciotradicao.ddns.com.br:8090/newconplus/'}
              >
                <TextButton>Área do parceiro</TextButton>
              </Link>

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
            </div>
          </Column>
        </MidFooter>

        <Divider />

        <BottomFooter>
          <div>
            <div className="partnerWrapper" style={{ marginBottom: '22px' }}>
              <Link href={'https://tradimax.com.br'} target="_blank">
                <Image
                  src="/images/logo_tradimax.png"
                  className="partner-logo"
                  alt="Logo Tradmax"
                  height={124 * 0.4}
                  width={451 * 0.4}
                />
              </Link>

              <Link href={'https://tradimais.com.br'} target="_blank">
                <Image
                  src="/images/logo_trad+.png"
                  className="partner-logo"
                  alt="Logo Tradmax"
                  height={124 * 0.4}
                  width={451 * 0.4}
                />
              </Link>
            </div>

            <div className="text" style={{ marginBottom: '15px' }}>
              Apoiamos:
            </div>

            <div className="apoiamos-wrapper">
              <Link
                href={'https://www.fraternidadesemfronteiras.org.br/'}
                target={'_blank'}
                aria-label="Site Fraternidade Sem Fronteiras"
                className="square-image"
              >
                <Image
                  src={NoFrontiers}
                  alt="Imagem de Logo do Fraternidade Sem Fronteiras"
                  width={120 * 0.7}
                  height={70 * 0.7}
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
                  width={177 * 0.7}
                  height={70 * 0.7}
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
                  width={177 * 0.7}
                  height={70 * 0.7}
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
                  width={177 * 0.7}
                  height={70 * 0.7}
                />
              </Link>
            </div>
          </div>

          <div className="social-media-wrapper">
            <div>
              <TitleColumns className="auto-align">
                Redes <span style={{ fontWeight: 400 }}>Sociais</span>
              </TitleColumns>

              <SocialMedia>
                <Link
                  className="social-media-icon-wrapper"
                  href={'https://www.facebook.com/ConsorcioTradicao/'}
                  target="_blank"
                  aria-label="Visite a pagina no Facebook do Consórcio Tradição"
                >
                  <FaFacebookF />
                </Link>

                <span className="column-rule" />

                <Link
                  className="social-media-icon-wrapper"
                  href={'https://www.instagram.com/consorciotradicao/?hl=pt-br'}
                  target="_blank"
                  aria-label="Visite a pagina no Instagram do Consórcio Tradição"
                >
                  <BsInstagram />
                </Link>

                <span className="column-rule" />

                <Link
                  className="social-media-icon-wrapper"
                  href={'https://www.tiktok.com/@consorciotradicao'}
                  target="_blank"
                  aria-label="Visite a pagina no Tik Tok do Consórcio Tradição"
                >
                  <FaTiktok />
                </Link>

                <span className="column-rule" />

                <Link
                  className="social-media-icon-wrapper youtube"
                  href={
                    'https://www.youtube.com/channel/UCPn_simvsLHGMJGrQbkreMQ'
                  }
                  target="_blank"
                  aria-label="Visite a pagina no Youtube do Consórcio Tradição"
                >
                  <FaYoutube />
                </Link>

                <span className="column-rule" />

                <Link
                  className="social-media-icon-wrapper"
                  href={'https://www.linkedin.com/company/consorciotradicao/'}
                  target="_blank"
                  aria-label="Visite a pagina no Linkedin do Consórcio Tradição"
                >
                  <FaLinkedinIn />
                </Link>
              </SocialMedia>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Link
                href={
                  'https://www.reclameaqui.com.br/empresa/consorcio-nacional-tradicao/premio/'
                }
                target="_blank"
              >
                <Image
                  src={'/images/selo-indicacao-ra.png'}
                  alt="Selo de indicação Reclame Aqui - Consórcio Tradição"
                  width={452 * 0.45}
                  height={124 * 0.45}
                />
              </Link>

              <div id="reputation-ra">
                <ReclameAquiSelo />
              </div>
            </div>
          </div>
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
