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
} from "@/assets/icons";

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
} from "./styles";

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
                            <Link href={''}>
                                <FacebookIcon />
                            </Link>

                            <Link href={''}>
                                <InstagramIcon />
                            </Link>

                            <Link href={''}>
                                <YoutubeIcon />
                            </Link>

                            <Link href={''}>
                                <TikTokIcon />
                            </Link>

                            <Link href={''}>
                                <LinkedinIcon />
                            </Link>
                        </SocialMedia>
                    </LeftSide>

                    <RightSide>
                        <div className="correct">
                            <Image 
                                src={WizImage}
                                alt='Imagem do Wi3'
                                width={231}
                                height={87}
                            />     
                        </div>
                        <Image 
                            src={ReclameLogo}
                            alt='Imagem do Wi3'
                            width={175}
                            height={64}
                        />               
                    </RightSide>
                </TopFooter>

                <MidFooter> 
                    <Column>
                        <div style={{marginBottom: '20px'}}>
                            <TitleColumns>A Tradição</TitleColumns>
                            <div style={{marginTop: '10px'}}>
                                <Link href={''}>
                                    <TextButton>História</TextButton>
                                </Link>

                                <Link href={''}>
                                    <TextButton>Parceiros</TextButton>
                                </Link>
                                
                                <Link href={''}>
                                    <TextButton>Trabalhe Conosco</TextButton>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <TitleColumns>Está com dúvidas?</TitleColumns>
                            <div style={{marginTop: '10px', marginBottom: '25px'}}>
                                <TextField>
                                    Se sinta a vontade para entrar em contato conosco. Entre em contato por <span>este link</span> ou envie um e-mail para: <span>sac@consorciotradicao.com.br</span>
                                </TextField>                        
                            </div>
                            
                            <GreenButton>
                                <div className="absolute">
                                    <div className="icon">
                                        <TalkWithUsIcon />
                                    </div>
                                </div>
                                <div className="button">
                                    <div className="text">Fale Conosco</div>
                                </div>
                            </GreenButton>
                        </div>
                    </Column>
                    
                    <Column>
                        <TitleColumns>Consórcios</TitleColumns>
                        <div style={{marginTop: '10px', marginBottom: '26px'}}>
                            <Link href={''}>
                                <TextButton>Consórcio de Pesados</TextButton>
                            </Link>

                            <Link href={''}>
                                <TextButton>Consórcio de Serviços</TextButton>
                            </Link>
                            
                            <Link href={''}>
                                <TextButton>Consórcio de Imóveis</TextButton>
                            </Link>
                            
                            <Link href={''}>
                                <TextButton>Consórcio de Automóveis</TextButton>
                            </Link>
                            
                            <Link href={''}>
                                <TextButton>Simulador de Consórcio</TextButton>
                            </Link>
                            
                            <Link href={''}>
                                <TextButton>Fale com um Especialista</TextButton>
                            </Link>
                        </div>

                        <TitleColumns>Ouvidoria</TitleColumns>
                        <div style={{marginTop: '10px'}}>
                            <TextButton>ouvidoria@consorciotradicao.com.br</TextButton>
                            <TextButton>0800 877 0020</TextButton>
                        </div>
                    </Column>
                    
                    <Column>
                        <TitleColumns>Entenda o Consórcio</TitleColumns>
                        <div style={{marginTop: '10px', marginBottom: '18px'}}>
                            <Link href={''}>
                                <TextButton>O que é um consórcio</TextButton>
                            </Link>

                            <Link href={''}>
                                <TextButton>Contemplação</TextButton>
                            </Link>

                            <Link href={''}>
                                <TextButton>Cotas</TextButton>
                            </Link>

                            <Link href={''}>
                                <TextButton>Lance</TextButton>
                            </Link>

                            <Link href={''}>
                                <TextButton>Pagamento</TextButton>
                            </Link>
                        </div>

                        <TitleColumns>Parceria</TitleColumns>
                        <div style={{marginTop: '10px', marginBottom: '6px'}}>
                            <TextButton>Área do parceiro</TextButton>
                        </div>

                        <GreenButton>
                            <div className="absolute">
                                <div className="icon">
                                    <BeAPartnerIcon />
                                </div>
                            </div>
                            <div className="button">
                                <div className="text">Seja um Parceiro</div>
                            </div>
                        </GreenButton>
                    </Column>
                    
                    <Column>
                        <TitleColumns>Contato</TitleColumns>
                        <div style={{marginTop: '10px', marginBottom: '30px'}}>
                            <TextField>
                                Alameda Rio Negro, 1084 <br />
                                Alphaville Industrial, Barueri/SP <br />
                                CEP: 06454-000 0800 877 0020 
                            </TextField>
                            <TextButton> 
                                <PhoneIcon />
                                (11) 4003 5090
                            </TextButton>
                            <TextButton> 
                                <PhoneIcon />
                                (11) 2928-4800
                            </TextButton>
                        </div>

                        <TitleColumns>LGPD</TitleColumns>

                        <Link href={''}>
                            <TextButton>Portal da Privacidade</TextButton>
                        </Link>
                        
                        <Link href={''}>
                            <TextButton>Portal do Titular</TextButton>
                        </Link>
                        
                        <Link href={''}>
                            <TextButton>Consentimentos</TextButton>
                        </Link>
                        
                        <Link href={''}>
                            <TextButton>Pedidos dos Titulares</TextButton>
                        </Link>
                    </Column>
                </MidFooter>

                <Divider />

                <BottomFooter>
                    <div className="text">O Consórcio Tradição Apoia:</div>
                    <Image 
                        src={NoFrontiers}
                        alt='Imagem de Logo do Fraternidade Sem Fronteiras'
                        width={217}
                        height={79}
                    />
                    <Image 
                        src={AyrtonSenna}
                        alt='Imagem de Logo do Instituto Ayrton Senna'
                        width={177}
                        height={79}
                    />
                </BottomFooter>
            </FooterWrapper>

            <Copyright>
                <div className="text">
                    A TRADIÇÃO ADMINISTRADORA DE CONSÓRCIO LTDA, CNPJ: 59.956.185/0001-55, fiscalizada e autorizada pelo Banco Central do Brasil, através do Certificado de Autorização n° 03/00/210/89 de 13/11/1989 não comercializa cotas contempladas ou fornece datas específicas para contemplação.
                </div>

                <div className="developed">
                    Copyright © 2020 Consórcio Tradição. All Rights Reserved. | Developed By:
                    <Link href={'https://tropa.digital/'} target={'_blank'}>
                        <Image 
                            src={Tropa}
                            alt='Imagem de Logo da Tropa Digital'
                            width={130}
                            height={16}
                        />
                    </Link>
                </div>
            </Copyright>
        </Container>
    )
}