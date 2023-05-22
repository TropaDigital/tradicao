'use client';

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import RegulamentoBg from '../../../../public/images/regulamento.jpg';
import React from 'react';
import MainTitle from '@/components/UI/MainTitle';
import { Container, StyledLink, Subtitle, Text, UnorderedList } from './styles';
import Link from 'next/link';

const TermosPage = () => {
  return (
    <>
      <SkewContainer
        imageAlt="Termos de Privacidade"
        imageSrc={RegulamentoBg}
      />

      <CenterWrapper>
        <Container>
          <MainTitle title="Termos de Uso" />
          <Subtitle>AVISOS DE COOKIES</Subtitle>
          <Text>
            A coleta de dados automática é realizada através de tecnologia
            padrão como cookies, que é utilizada pelo Consórcio Tradição para
            transformar a sua experiência de acesso ao site.
          </Text>
          <Text>
            Os cookies utilizam informações sobre a sua navegação para trazer a
            publicidade mais relevante para você, personalizada para suas
            necessidades.
          </Text>
          <Text>
            Além dos dados que são fornecidos diretamente por você, existem
            outros dados que o Consórcio Tradição poderá coletar automaticamente
            que podem te identificar, tal como endereço de IP da sua conexão,
            data e hora que você nos visitou, para fins de cumprimento de
            obrigação legal.
          </Text>
          <Text>
            Você pode configurar seu navegador para recusar os cookies que não
            são obrigatórios, mas consequentemente poderá não conseguir acessar
            ou usar partes do Site.
          </Text>

          <Subtitle>O QUE SÃO COOKIES?</Subtitle>
          <Text>
            Cookies são pedaços de informações armazenadas diretamente em seu
            dispositivo quando você entra em nossos endereços na internet. Esses
            arquivos contêm informações que servem para identificar o visitante,
            seja para personalizar a página de acordo com o perfil ou para
            facilitar o transporte de dados entre as páginas de um mesmo site.
          </Text>

          <Text>
            Quando você acessa algum de nossos sites ou aplicativos, por
            exemplo, pedimos permissão do uso destes cookies.
          </Text>

          <Text>
            Ainda, utilizamos cookies de terceiros, onde as condutas de
            privacidade são gerenciadas pelas políticas e avisos de privacidade
            desses terceiros, o qual são responsáveis pelo tratamento dos dados
            coletados.
          </Text>

          <Subtitle>QUAIS COOKIES UTILIZAMOS E COMO FUNCIONAM?</Subtitle>
          <Text>
            _ga: esses cookies são utilizados para contar e armazenar
            visualizações na página do Consórcio Tradição. _fbp: são cookies que
            rastreiam os visitantes do nosso website. _gid: utilizados para
            informar como o usuário do site Consórcio Tradição utiliza a página,
            assim ajuda a criar um relatório analítico de como o site está se
            desempenhando. _gat_AU: é um cookie padrão ao qual utiliza o número
            de identidade exclusiva do site ao qual se está utilizando.
          </Text>

          <Subtitle>
            COMO GERENCIAR E DESATIVAR OS COOKIES EM SEU NAVEGADOR?
          </Subtitle>
          <Text>
            Localize o menu de configurações/opções/preferências de seu
            navegador; Dentro da área de configurações, localize a seção de
            Segurança e Privacidade; Em Segurança e Privacidade, procure pela
            opção Limpar/Excluir Cookies; Após o procedimento, reinicie seu
            browser.
          </Text>

          <Text>
            <b>Desativação de cookies:</b> A qualquer momento você pode moderar
            a funcionalidade dos cookies utilizando as configurações do seu
            navegador. Veja abaixo como proceder:
            <UnorderedList>
              <li>
                <StyledLink
                  href="https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                >
                  Internet Explorer
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://support.mozilla.org/pt-BR/kb/impeca-que-sites-armazenem-cookies-e-dados-no-fire"
                  target="_blank"
                >
                  Mozilla Firefox
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://support.google.com/accounts/answer/61416?hl=pt-BR&co=GENIE.Platform%3DAndroid"
                  target="_blank"
                >
                  Google Chrome
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://www.apple.com/br/legal/privacy/br/cookies/#:~:text=Mas%20se%20voc%C3%AA%20quiser%20desabilitar,para%20saber%20como%20bloque%C3%A1-los."
                  target="_blank"
                >
                  Safari
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  href="https://support.microsoft.com/pt-br/microsoft-edge/permitir-cookies-e-dados-de-site-temporariamente-no-microsoft-edge-597f04f2-c0ce-f08c-7c2b-541086362bd2#:~:text=Voc%C3%AA%20pode%20remover%20essas%20permiss%C3%B5es,limpar%20seus%20dados%20de%20navega%C3%A7%C3%A3o."
                  target="_blank"
                >
                  Edge
                </StyledLink>
              </li>
            </UnorderedList>
          </Text>

          <Text>
            Caso aconteça o bloqueio do recebimento de cookies, algumas
            funcionalidades do site poderão não funcionar de maneira ideal. Ou
            ainda, para evitar a coleta de dados através dos cookies, você
            poderá realizar acesso ao site do Consórcio Tradição através da guia
            anônima de seu navegador.
          </Text>

          <Subtitle>ATUALIZAÇÕES E ALTERAÇÕES DOS AVISOS DE COOKIES</Subtitle>
          <Text>
            A Tradição Administradora de Consórcios LTDA pode modificar esse
            aviso em função de exigências legislativas, regulamentares ou com a
            finalidade de adaptar as orientações da Autoridade Nacional de
            Proteção de Dados (ANPD). Por isso, recomenda-se que os visitantes
            verifiquem periodicamente esse aviso.
          </Text>
        </Container>
      </CenterWrapper>
    </>
  );
};

export default TermosPage;
