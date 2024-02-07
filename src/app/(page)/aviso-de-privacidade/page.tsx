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
      <SkewContainer imageAlt="Aviso de Privacidade" imageSrc={RegulamentoBg} />

      <CenterWrapper>
        <Container>
          <MainTitle title="Termos de Privacidade" />
          <Subtitle>AVISO DE PRIVACIDADE</Subtitle>
          <Text>
            Nós do Consórcio Tradição estamos comprometidos com você.
            Trabalhamos com transparência e diante disso elaboramos o presente
            Aviso de Privacidade, de forma simples e objetiva, que ditará quais
            dados são coletados e como estes serão utilizados, em observância
            com a LGPD (Lei Geral de Proteção de Dados). Recomendamos a leitura
            cuidadosa desta política de privacidade abaixo reproduzida, e ao
            usar o site, você reconhece que leu esta política e concorda em se
            comprometer com ela. O Consórcio Tradição, está estabelecido na
            Alameda Rio Negro, 1084- 12º andar- Conj. 125 e 128. Alphaville –
            Barueri – SP – CEP: 06454-000. Atuamos como operador e controlador
            dos dados pessoais fornecidos diretamente por você através do site
            www.consorciotradicao.com.br, pela coleta automática dos cookies ou
            através da formalização de contrato de consórcio para aquisição de
            bens, ou serviços. Esta Política se aplica também aos dados pessoais
            que foram fornecidos por você, seja diretamente com o Consórcio
            Tradição ou por intermédio das revendas parceiras credenciadas.
          </Text>

          <Subtitle>CONCEITOS ESSENCIAIS</Subtitle>
          <Text>
            <b>Dados pessoais:</b> Informação relacionada a pessoa natural
            identificada ou identificável, ou seja, qualquer dado que possa
            identificar a pessoa;
          </Text>

          <Text>
            <b>Dados sensíveis:</b> São dados sobre origem racial ou étnica,
            convicção religiosa, opinião política, filiação a sindicato ou a
            organização de caráter religioso, filosófico ou político, dado
            referente à saúde ou à vida sexual, dado genético ou biométrico,
            quando vinculado a uma pessoa natural;
          </Text>

          <Text>
            <b>Titular:</b> Pessoa natural a quem se referem os dados pessoais
            que são objeto de tratamento; Controlador: pessoa natural ou
            jurídica, de direito público ou privado, a quem competem as decisões
            referentes ao tratamento de dados pessoais.
          </Text>

          <Text>
            <b>Operador:</b> Pessoa natural ou jurídica, de direito público ou
            privado, que realiza o tratamento de dados pessoais em nome do
            controlador;
          </Text>

          <Text>
            <b>Encarregado (DPO):</b> Pessoa indicada pelo controlador e
            operador para atuar como canal de comunicação entre o controlador,
            os titulares dos dados e a Autoridade Nacional de Proteção de Dados
            (ANPD).
          </Text>

          <Subtitle>DADOS FORNECIDOS PELO USUÁRIO</Subtitle>
          <Text>
            No site do Consórcio Tradição, você somente fornecerá{' '}
            <strong>CEP, nome, e-mail e telefone</strong> para contato no
            momento da realização da simulação de consórcio. Tais dados serão
            utilizados para facilitar o contato de um de nossos consultores com
            você para que tenha mais informações e todo o auxílio necessário na
            contratação do consórcio. No caso de realização da contratação será
            realizado o preenchimento da proposta de adesão, momento que você
            deverá informar{' '}
            <strong>
              nome, CPF, documento de identidade, data de expedição, órgão
              emissor, data de nascimento, estado civil, nacionalidade, endereço
              residencial, telefone, e-mail, profissão, renda
            </strong>{' '}
            entre outras informações que sejam necessárias em razão de exigência
            legal e/ou regulatória. Se por qualquer motivo você não fornecer os
            dados solicitados tanto para a simulação ou para a contratação do
            consórcio, estes não serão finalizados.
          </Text>

          <Subtitle>DADOS COLETADOS AUTOMATICAMENTE</Subtitle>
          <Text>
            Além dos dados que são fornecidos diretamente por você, existem
            outros dados que o Consórcio Tradição poderá coletar
            automaticamente, dados que podem te identificar, tal como endereço
            de IP da sua conexão, data e hora que você nos visitou, o
            dispositivo utilizado para acesso (desktop, mobile, tablet) e, qual
            o navegador utilizado, tais informações são para fins de cumprimento
            de obrigação legal. A coleta de dados automática é realizada através
            de tecnologias padrões como cookies, que é o utilizado pelo
            Consórcio Tradição para transformar a sua experiência de acesso ao
            site.{' '}
          </Text>

          <Text>
            <b>Cookies:</b> São informações que um site transfere para o
            computador de um indivíduo para fins de manutenção de registros.
            Estes cookies serão colocados como um arquivo de texto no navegador
            do seu computador. Você pode configurar seu navegador para recusar
            cookies, mas consequentemente poderá não conseguir acessar ou usar
            partes do site.
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

              <li>
                <StyledLink
                  href="https://help.opera.com/en/latest/web-preferences/#cookies"
                  target="_blank"
                >
                  Opera
                </StyledLink>
              </li>

              <li>
                <StyledLink
                  href="https://brave.com/pt-br/privacy-updates/21-blocking-cookie-notices/"
                  target="_blank"
                >
                  Brave
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

          <Subtitle>FINALIDADES DO TRATAMENTO DE DADOS </Subtitle>
          <Text>
            O tratamento de dados realizado pelo Consórcio Tradição tem como
            objetivo melhorar sua experiência de acesso ao site, permitindo que
            nossos consultores entrem em contato com você para passar
            informações a respeito do Consórcio Tradição, além de todo auxílio
            necessário da contratação até a finalização do contrato. Além do
            contato de nossos Consultores, seus dados serão utilizados para
            realizar o envio de conteúdos de Marketing e informativos a respeito
            do consórcio, permitir a assinatura de documentos eletronicamente
            única e exclusivamente a respeito do relacionamento mantido entre o
            cliente e o Consórcio Tradição, atender exigências legais com
            informações adicionais, manter registros de suas solicitações e
            realização de pesquisas de qualidade a respeito do Consórcio
            Tradição. Desativação de recebimento de conteúdo: Se você não
            desejar receber comunicações de marketing e contatos, basta
            solicitar o não acionamento através do contato disponibilizado ao
            final desta política.
          </Text>

          <Subtitle>COMPATILHAMENTO DE DADOS</Subtitle>
          <Text>
            O Consórcio Tradição somente realizará o compartilhamento de seus
            dados com parceiros e fornecedores em geral que sejam necessários ao
            desenvolvimento das atividades comerciais, manutenção dos contratos
            em andamento, para exercer direitos de forma extrajudicial ou
            judicial, ou por requerimento administrativo de autoridade
            competente para tal solicitação e, por último no caso de venda de
            grupos específicos ou a operação na totalidade, ou alterações
            societárias, neste caso visando dar continuidade aos serviços
            prestados.
          </Text>

          <Subtitle>GUARDA DOS DADOS PESSOAIS</Subtitle>
          <Text>
            O Consórcio Tradição armazenará seus dados pessoais em servidores
            próprios ou por ele contratados no Brasil e/ou no exterior. A guarda
            dos dados pessoais serão armazenados pelo prazo determinado em
            legislação e regulações específicas. Após a finalização dos prazos
            determinados, você poderá solicitar a exclusão de seus dados de
            nossos servidores.
          </Text>

          <Subtitle>SEGURANÇA DA INFORMAÇÃO</Subtitle>
          <Text>
            O Consórcio Tradição, declara a você que são tomadas todas as
            medidas de segurança determinadas pela legislação vigente para
            garantir que seus dados estejam protegidos, e que não possam ser
            acessados por pessoas não autorizadas e que todas as pessoas que
            tenham acesso a seus dados estão comprometidas e instruídas a
            respeito do sigilo das informações a qual tem o contato. Ainda,
            pedimos a você que tome todas as precauções a respeito do
            dispositivo do qual você acessa as informações a respeito do
            consórcio, como a instalação e atualização constante de antivírus
            entre outros, pois garantimos a você que seus dados estarão seguros,
            mas para isso você também precisa fazer a sua parte.
          </Text>

          <Subtitle>RESPONSABILIDADE PELO TRATAMENTO DE DADOS</Subtitle>
          <Text>
            O acesso ao site do Consórcio Tradição poderá ser realizado através
            de aplicações de terceiros como redes sociais, landing pages e
            buscadores, e você também poderá ser direcionado ao site do
            Consórcio Tradição para aplicações de terceiros. Nessas situações a
            responsabilidade pelo tratamento dos dados pessoais será de
            responsabilidade dos titulares das respectivas aplicações.
          </Text>

          <Subtitle>DIREITOS DO TITULAR</Subtitle>
          <Text>
            Nós do Consórcio Tradição respeitamos os seus direitos como usuário
            e titular dos dados pessoais que coletamos de forma automatizada ou
            fornecido diretamente por você, desta forma informamos abaixo quais
            os direitos que podem ser exercidos por você:
          </Text>

          <ul className="normal-unorderedList">
            <li>Confirmação de existência de tratamento de dados;</li>
            <li>Acesso aos dados coletados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>
              Anonimização, bloqueio ou eliminação de dados desnecessários;
            </li>
            <li>Eliminação dos dados pessoais;</li>
            <li>
              Informação das entidades públicas e privadas com as quais o
              controlador realiza uso compartilhado de dados;
            </li>
            <li>
              Informação sobre a possibilidade de não fornecer consentimento e
              sobre as consequências da negativa;
            </li>
            <li>Revogação do consentimento; </li>
          </ul>

          <Text>
            Para que você possa exercer alguns de seus direitos, o Consórcio
            Tradição necessitará de algumas informações adicionais que deverão
            ser fornecidas por você. A Tradição está comprometida em atender
            todas as solicitações realizadas quando possível de forma imediata,
            e se tratando de informações mais complexas que exijam buscas e
            fornecimento de informações específicas, estas serão atendidas
            dentro do prazo legal de 15 dias. A respeito da eliminação de dados,
            as solicitações só serão realizadas no caso de não estarem conforme
            as legislações e regulamentos vigentes.
          </Text>

          <Subtitle>TRANSFERÊNCIAS INTERNACIONAIS</Subtitle>
          <Text>
            Os dados pessoais são protegidos no Brasil pelas exigências da Lei
            Geral de Proteção de Dados (LGPD), mas alguns outros países podem
            não necessariamente ter o mesmo alto padrão de proteção para seus
            dados pessoais. Nós não transferimos nem tratamos seus dados
            pessoais fora do Brasil.
          </Text>

          <Subtitle>CASO NÃO CONCORDE EM FORNECER SEUS DADOS PESSOAIS</Subtitle>
          <Text>
            Você não é obrigado a fornecer seus dados pessoais. No entanto, como
            essas informações são necessárias para efetuarmos a venda e
            administração de cotas de consórcio, não seremos capazes de oferecer
            os nossos serviços sem seus dados, ficando prejudicada a
            contratação.
          </Text>

          <Subtitle>INTERESSES LEGÍTIMOS</Subtitle>
          <Text>
            Todos os dados coletados possuem uma base legal para tanto, alguns
            dados, ocasionalmente, utilizamos o legítimo interesse para
            tratamento e, quando necessário, compartilhamento. Quando utilizado
            o legítimo interesse, realizamos uma análise desse interesse (LIA),
            para ser realmente seguro o processo e atender aos requisitos
            legais.{' '}
          </Text>

          <Subtitle>QUAL O TEMPO QUE MANTEMOS SEUS DADOS PESSOAIS?</Subtitle>
          <Text>
            Manteremos seus dados pessoais até que se cumpra a necessidade a que
            compete, qual seja, finalização do contrato de consórcio. Conforme a
            Lei n.º 11.795/08, devemos manter seus dados pessoais básicos (nome,
            endereço, detalhes de contato) por um período mínimo de 5 anos, e
            decorrido tal período seus dados serão apagados caso seu contrato já
            tenha se cumprido. Quando você nos der seu consentimento para
            utilizarmos seus dados para marketing direto, manteremos esses dados
            até que você exerça seu direito de oposição e/ou retire seu
            consentimento.{' '}
          </Text>

          <Subtitle>SOLICITAÇÃO DE INFORMAÇÕES E DIREITOS</Subtitle>
          <Text>
            Você pode enviar suas dúvidas e solicitações relativas a seus
            direitos e a esta Política para o e-mail:{' '}
            <strong>dpo@tradicao.net.br</strong> ou através do telefone (11)
            2928-4804.
          </Text>

          <Subtitle>DADOS DO CONTROLADOR</Subtitle>
          <Text>
            <b>Razão Social:</b> Tradição Administradora de Consórcio Ltda.
            CNPJ: 59.956.185/0001-55 – Endereço: Alameda Rio Negro, 1084 – 12º
            andar – Cj. 125 e 128, Alphaville – Barueri – SP – CEP 06454-000
          </Text>

          <Subtitle>ALTERAÇÕES AOS TERMOS DESTA POLÍTICA</Subtitle>
          <Text>
            Caso você não concorde com a nossa política, não prossiga e não
            forneça nenhum dado pessoal que seja solicitado. Esta Política de
            Privacidade poderá sofrer alterações, desta forma pedimos a você que
            sempre que possível faça nova leitura para verificar sempre a versão
            mais atualizada. E ainda, caso você já seja nosso cliente, você
            receberá e-mail informativo a respeito de alterações que sejam
            realizadas nesta política.
          </Text>

          <Subtitle>LEGISLAÇÃO E FORO</Subtitle>
          <Text>
            Esta política foi elaborada e deve ser interpretada com base na
            legislação aplicável sobre segurança da informação, privacidade e
            proteção de dados, a Constituição Federal, o Código de Defesa do
            Consumidor, o Código Civil, o Marco Civil da Internet (Lei Federal
            n. 12.965/2014), seu decreto regulamentador (Decreto 8.771/2016), a
            Lei Geral de Proteção de Dados (Lei Federal n. 13.709/2018), e
            demais normas segundo as leis da República Federativa do Brasil.
            Fica eleito o foro de Barueri, São Paulo, como competente para
            dirimir quaisquer controvérsias decorrentes deste documento.
          </Text>
        </Container>
      </CenterWrapper>
    </>
  );
};

export default TermosPage;
