'use client';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import MainTitle from '@/components/UI/MainTitle';

import Regulation from '../../../../public/images/regulamento_bg.jpeg'

// Styles
import * as S from './styles';

export default function Regulamento() {
    return (
        <>
            <S.ContainerTop>
                <SkewContainer 
                    imageAlt="Imagem de uma mão assinando um contrato" 
                    imageSrc={Regulation} 
                />

                <CenterWrapper>
                    <div className="margin">
                        <MainTitle title='Regulamento geral' />
                    </div>
                </CenterWrapper>
            </S.ContainerTop>

            <CenterWrapper>
                <S.RegulationContainer>
                    <p>
                        CONTRATO DE PARTICIPAÇÃO EM GRUPO DE CONSÓRCIO REFERENCIADO DE BENS MÓVEIS, IMÓVEIS E SERVIÇOS DE QUALQUER NATUREZA.
                    </p>

                    <p>
                        Por este instrumento particular e na melhor forma de direito, as partes, de um lado:
                    </p>

                    <p>
                        ADMINISTRADORA: TRADIÇÃO ADMINISTRADORA DE CONSÓRCIO LTDA., sociedade empresária limitada, com sede da Cidade de Barueri, no Estado de São Paulo, na Alameda Rio Negro, nº 1.084, Conjunto 125, Alphaville, CEP 06454-000, inscrita no Cadastro Nacional de Pessoas Jurídicas do Ministério da Economia &#40;“CNPJ/ME”&#41; sob nº 59.956.185/0001-55, com seus atos constitutivos devidamente arquivados na Junta Comercial do Estado de São Paulo &#40;“JUCESP”&#41; sob o NIRE 3522081847-8, em sessão de 24/07/2006;
                    </p>

                    <p>
                        E, de outro lado:
                    </p>

                    <p>
                        CONSORCIADO: a pessoa física ou jurídica, devidamente qualificada na Proposta de Participação em Grupo de Consórcio.
                    </p>

                    <p>
                        CONSIDERANDO QUE:
                    </p>

                    <p>
                        a&#41; a ADMINISTRADORA é sociedade com expertise na administração de consórcio de bens móveis, imóveis e serviços, sendo devidamente cadastrada e autorizada a funcionar, de acordo com as normas do Banco Central do Brasil;
                    </p>

                    <p>
                        b&#41; o&#40;a&#41; CONSORCIADO&#40;A&#41; é pessoa física ou jurídica com interesse em adquirir, por meio de carta de crédito emitida pela ADMINISTRADORA, bem móvel, bem imóvel ou serviço;
                    </p>
                    
                    <p>
                        c&#41; o&#40;a&#41; CONSORCIADO&#40;A&#41; assinou a Proposta de Participação em Grupo de Consórcio da ADMINISTRADORA manifestando seu interesse em integrar grupo de consórcio por ela gerido;
                    </p>
                    
                    <p>
                        d&#41; o&#40;a&#41; CONSORCIADO&#40;A&#41; comprovou ter capacidade financeira para arcar com as parcelas do consórcio para aquisição do crédito almejado;
                    </p>
                    
                    <p>
                        e&#41; cada Parte declara possuir plena capacidade e legitimidade para celebrar o presente instrumento, realizar todas as operações aqui previstas e cumprir todas as obrigações ora assumidas, tendo tomado todas as medidas necessárias para autorizar a sua celebração; e
                    </p>
                    
                    <p>
                        f&#41; cada Parte compromete-se a agir de boa-fé e com lealdade ao ora convencionado.
                    </p>
                    
                    <p className='mid-space'>
                        Resolvem as Partes firmar o presente Contrato de Participação em Grupo de Consórcio Referenciado de Bens Móveis, Bens Imóveis e Serviços de Qualquer Natureza &#40;“Contrato”&#41;, que será regido pelas seguintes cláusulas e condições, observada a Lei nº 11.795/2008 &#40;“Lei do Consórcio”&#41;:
                    </p>

                    <p>
                        I &#45; DAS DEFINIÇÕES
                    </p>

                    <p>
                        Cláusula 1ª &#45; As seguintes palavras, expressões e abreviações quando usadas neste Contrato e seus anexos com letras iniciais maiúsculas, no singular ou no plural, conforme o caso, terão o significado a elas especificamente atribuído nesta cláusula.
                    </p>
                    
                    <p>
                        “Adesão”: significa a Proposta de Participação em Grupo de Consórcio, documento assinado pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, manifestando seu interesse em integrar grupo de consórcio a ser formado, para a aquisição de bem móvel, bem imóvel ou serviços de qualquer natureza, cujo valor está determinado conforme a referência constante na citada proposta;
                    </p>
                    
                    <p>
                        “ADMINISTRADORA”: significa a Tradição Administradora de Consórcio Ltda., sociedade empresária limitada, que atua no ramo de administração de grupos de consórcio, sendo devidamente normatizada, coordenada, supervisionada, fiscalizada e controlada pelo Banco Central do Brasil;
                    </p>
                    
                    <p>
                        “Alienação Fiduciária”: significa dar a propriedade do bem móvel ou imóvel, adquirido por meio do Consórcio, em garantia até a data de sua efetiva quitação, situação após a qual a propriedade do bem será definitivamente transferida ao&#40;à&#41; CONSORCIADO&#40;A&#41;;
                    </p>

                    <p>
                        “AGC”: significa a Assembleia Geral Constituição, ou seja, a primeira assembleia do grupo de CONSORCIADOS, que deverá ser convocada pela ADMINISTRADORA, no prazo descrito no Parágrafo Único da Cláusula 7ª infra, com o objetivo de formalizar a existência do Grupo;
                    </p>

                    <p>
                        “AGE”: significa a Assembleia Geral Extraordinária, que pode ser convocada a qualquer momento, pela ADMINISTRADORA ou por iniciativa de 30% &#40;trinta por cento&#41; dos CONSORCIADOS, com o objetivo de analisar, discutir e deliberar sobre os assuntos do Grupo, desde que não sejam matérias próprias de Assembleia Geral Ordinária;
                    </p>
                    
                    <p>
                        “AGO”: significa a Assembleia Geral Ordinária, que deverá ser convocada 1 &#40;uma&#41; vez por mês pela ADMINISTRADORA, com o objetivo de analisar e deliberar sobre a aprovação das contas prestadas pela ADMINISTRADORA, realização de Contemplações, atendimento aos CONSORCIADOS e esclarecimentos que se entendam necessários;
                    </p>
                    
                    <p>
                        “ANEXO I”: é composto pelo detalhamento da apuração do sorteio extraído pela Loteria Federal, sendo intitulado DETALHAMENTO DA APURAÇÃO DO SORTEIO EXTRAÍDO PELA LOTERIA FEDERAL;
                    </p>
                    
                    <p>
                        “ANEXO II”: é composto pelas informações relevantes sobre o seguro das cotas, por meio de seguro de vida e seguro prestamista, contratado com o Bradesco Seguros, cujas cláusulas podem sofrer alterações em decorrência de políticas internas deste e/ou da lei aplicável, sendo intitulado INFORMAÇÕES RELEVANTES SOBRE SEGURO DAS COTAS;
                    </p>
                    
                    <p>
                        “ANEXO III”: é composto pela definição detalhada do que são pessoas politicamente expostas, sendo intitulado PESSOAS POLITICAMENTE EXPOSTAS;
                    </p>
                    
                    <p>
                        “ANEXO IV”: é composto pelas principais orientações que o&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; deverá seguir e os documentos cadastrais que deverá apresentar à ADMINISTRADORA para a análise de crédito de bens móveis, bens imóveis e serviços, sendo intitulado PRINCIPAIS ORIENTAÇÕES E DOCUMENTOS CADASTRAIS;
                    </p>
                    
                    <p>
                        “ANEXO V”: é composto pelos documentos complementares aos documentos que integram o ANEXO IV, que o&#40;a&#41; CONSORCIADO&#40;A&#41;, participante do segmento de bens móveis e serviços, deverá apresentar à ADMINISTRADORA após a Contemplação, sendo intitulado DOCUMENTOS COMPLEMENTARES / BENS MÓVEIS E SERVIÇOS;
                    </p>
                    
                    <p>
                        “ANEXO VI”: é composto pelos documentos complementares aos documentos que integram o ANEXO IV, que o&#40;a&#41; CONSORCIADO&#40;A&#41;, participante do segmento de bens imóveis, deverá apresentar à ADMINISTRADORA após a Contemplação, sendo intitulado DOCUMENTOS COMPLEMENTARES / BENS IMÓVEIS;
                    </p>

                    <p>
                        “ANEXO VII”: é composto pela lista de documentos que deverá ser apresentada pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, para que este&#40;esta&#41; possa receber seu Crédito quando Contemplado nos contratos de Serviço Referenciado, sendo intitulado DOCUMENTOS PARA ENTREGA DE CARTA DE CRÉDITO DE SERVIÇOS;
                    </p>
                    
                    <p>
                        “ANEXO VIII”: é composto pelo detalhamento das taxas de transferência ou substituição de garantia mencionadas no inciso XII da Cláusula 23ª deste Contrato, sendo intitulado TAXAS DE TRANSFERÊNCIA OU SUBSTITUIÇÃO DE GARANTIA;
                    </p>
                    
                    <p>
                        “ANEXO IX”: é composto por informações necessárias para entendimento quanto a restituição de valores e cálculo para apuração do valor de restituição, sendo intitulado INFORMAÇÕES QUANTO A RESTITUIÇÃO DE VALORES PAGOS;
                    </p>
                    
                    <p>
                        “Área do CONSORCIADO”: significa a área de acesso digital do CONSORCIADO&#40;A&#41; ao website da ADMINISTRADORA;
                    </p>
                    
                    <p>
                        “BACEN”: significa o Banco Central do Brasil, que é o órgão responsável pela normatização, coordenação, supervisão, fiscalização e controle das atividades do sistema de consórcios;
                    </p>
                    
                    <p>
                        “Bem Referenciado”: significa o bem móvel ou imóvel descrito na Adesão, cujo preço dá referência de valor ao Crédito e contribuições a serem pagas pelo&#40;a&#41; CONSORCIADO&#40;A&#41;;
                    </p>
                    
                    <p>
                        “CEF”: significa a instituição financeira Caixa Econômica Federal;
                    </p>
                    
                    <p>
                        “CNPJ/ME”: significa a inscrição no Cadastro Nacional da Pessoa Jurídica do Ministério da Economia;
                    </p>
                    
                    <p>
                        “CONSORCIADO&#40;A&#41;”: significa a pessoa física ou jurídica, devidamente qualificada na Adesão, interessada em participar do grupo de consórcio, comprometendo-se a cumprir integralmente a obrigação assumida;
                    </p>
                    
                    <p>
                        “Consorciado&#40;a&#41; Contemplado&#40;a&#41;”: significa o&#40;a&#41; CONSORCIADO&#40;A&#41; ao&#40;à&#41; qual já foi atribuído o crédito para a aquisição de bem móvel, bem imóvel ou serviço;
                    </p>
                    
                    <p>
                        “Consorciado&#40;a&#41; Excluído&#40;a&#41;”: significa o&#40;a&#41; CONSORCIADO&#40;A&#41; que manifeste, expressa e inequivocamente, por qualquer forma passível de comprovação, a intenção de não permanecer no grupo, ou que deixe de cumprir as obrigações financeiras assumidas, nos termos do Contrato, desde que não tenha sido contemplado&#40;a&#41;;
                    </p>
                    
                    <p>
                        “Contemplação”: significa a atribuição ao&#40;à&#41; CONSORCIADO&#40;A&#41; do Crédito para a aquisição de bem ou serviço, ou, no caso de Consorciado Excluído, significa a restituição das parcelas pagas;
                    </p>
                    
                    <p>
                        “Cota”: significa a fração ideal, numericamente identificada, correspondente à participação do&#40;a&#41; CONSORCIADO&#40;A&#41; no grupo de consórcio;
                    </p>

                    <p>
                        “CPF/ME”: significa a inscrição no Cadastro de Pessoas Físicas do Ministério da Economia;
                    </p>
                    
                    <p>
                        “Crédito”: significa o valor atualizado do bem ou do serviço na data da Assembleia Geral Ordinária;
                    </p>

                    <p>
                        “Diferença de Parcela”: significa os valores pagos, a título de Parcela, a menor ou a maior em relação ao preço do Bem Referenciado na primeira AGO, ou a diferença de saldo do Fundo Comum, em razão da alteração no preço do referido bem, transferido de uma AGO à outra;
                    </p>
                    
                    <p>
                        “FGTS”: significa Fundo de Garantia por Tempo de Serviço;
                    </p>

                    <p>
                        “Fiança”: significa a garantia dada por terceiro indicado pelo&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; para assegurar o pagamento de seu Saldo Devedor à ADMINISTRADORA, sendo formalizada por meio de instrumento escrito;
                    </p>
                    
                    <p>
                        “Fiador”: significa a pessoa física ou jurídica que presta Fiança para garantir o Saldo Devedor do&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; em contratos de Serviços Referenciados;
                    </p>

                    <p>
                        “Fundo Comum”: significa os recursos do grupo de consórcio destinados à atribuição do Crédito aos Consorciados Contemplados para aquisição do bem ou serviço e à restituição aos Consorciados Excluídos do grupo de consórcio;
                    </p>
                    
                    <p>
                        “Fundo de Reserva”: significa os recursos do grupo, que não façam parte do Fundo Comum, com destinação específica no Contrato;
                    </p>                    

                    <p>
                        “Grupo”: significa sociedade não personificada, constituída por CONSORCIADOS para os fins estabelecidos em contrato, reunidos pela ADMINISTRADORA com a finalidade de propiciar-lhes a aquisição de bens e serviços;
                    </p>                    

                    <p>
                        “INCC”: significa Índice Nacional da Construção Civil;
                    </p>                    

                    <p>
                        “ITBI”: significa Imposto sobre a Transmissão de Bens Imóveis Inter-Vivos;
                    </p>                    

                    <p>
                        “IPTU”: significa Imposto Predial e Territorial Urbano;
                    </p>                    

                    <p>
                        “IPVA”: significa Imposto sobre a Propriedade de Veículos Automotores;
                    </p>                    

                    <p>
                        “Lance”: significa o valor que pode ser ofertado pelo&#40;a&#41; CONSORCIADO&#40;A&#41; antecipadamente, objetivando o recebimento do Crédito, que deverá ser pago à ADMINISTRADORA em caso de Contemplação;
                    </p>                    

                    <p>
                        “Lance Diluído”: significa a forma de utilização de Lance descrita na Cláusula 46ª, I, abaixo;
                    </p>                    

                    <p>
                        “Lance Embutido”: significa a forma de utilização de Lance descrita na Cláusula 46ª, II, abaixo;
                    </p>                    

                    <p>
                        “Lance Fixo”: significa modalidade de lance a ser ofertado pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, com percentual pré fixado conforme descrito na Cláusula 44, I, abaixo;
                    </p>                    

                    <p>
                        “Lance Livre”: significa modalidade de lance a ser ofertado pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, com percentual determinado pela livre manifestação de vontade do CONSORCIADO&#40;A&#41;, conforme descrito na Cláusula 44, II, abaixo;
                    </p>                    

                    <p>
                        “Loteria Federal”: significa uma modalidade de loteria praticada no Brasil por meio de sorteio.
                    </p>                    

                    <p>
                        “Parcela”: significa o valor devido pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, composto de percentual do Fundo Comum, percentual do Fundo de Reserva, Taxa de Administração, seguro e demais despesas previstas no Contrato;
                    </p>                    

                    <p>
                        “Pessoas Politicamente Expostas”: significa a pessoa que desempenha ou tenha desempenhado, nos últimos 5 &#40;cinco&#41; anos, cargos, empregos ou funções públicas relevantes, no Brasil ou em outros países, territórios e dependências estrangeiros, assim como seus representantes, familiares e outras pessoas de seu relacionamento próximo, conforme disposto na Cláusula 99ª infra;
                    </p>                    

                    <p>
                        “Rateio”: significa divisão proporcional de saldo do grupo relativo ao Fundo Comum e Fundo de Reserva entre os CONSORCIADOS;
                    </p>                    

                    <p>
                        “Restituição de Parcelas”: significa o valor a ser pago pela ADMINISTRADORA ao&#40;à&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41; a título de restituição dos valores das Parcelas pagas até a efetiva exclusão, descontadas as taxas e encargos administrativos;
                    </p>                    

                    <p>
                        “Saldo Devedor”: significa o valor não pago das Parcelas e das Diferenças de Parcelas e outras responsabilidades financeiras não pagas, previstas na Adesão e/ou no Contrato;
                    </p>                    

                    <p>
                        “Serviço de Atendimento ao Consorciado”: significa o atendimento telefônico através dos números 0800-877-0020, 0800-877-0030 ou &#40;11&#41;4003-5090;
                    </p>                    

                    <p>
                        “Serviço Referenciado”: significa o serviço ou serviços, descritos na Adesão com seu preço, que dá referência de valor ao Crédito e contribuições a serem pagas pelo&#40;a&#41; CONSORCIADO&#40;A&#41;;
                    </p>                    

                    <p>
                        “Sorteio”: significa a apuração, pela Loteria Federal, dos números de cotas que serão contempladas;
                    </p>                    

                    <p>
                        “SUSEP”: significa a Superintendência de Seguros Privados;
                    </p>                    

                    <p>
                        “Taxa de Administração”: significa a remuneração paga pelo&#40;a&#41; CONSORCIADO&#40;A&#41; à ADMINISTRADORA pelos serviços prestados relacionados à organização e gestão dos interesses do consórcio;
                    </p>                    

                    <p>
                        “Taxa de Administração Mensal”: significa o valor equivalente ao percentual de Taxa de Administração total, distribuído pela quantidade de meses do prazo de funcionamento do Grupo conforme campo n° 62 &#40;sessenta e dois&#41; da Adesão;
                    </p>                    

                    <p>
                        “Taxa de Permanência”: significa o valor a ser deduzido dos VNP como forma de remunerar a ADMINISTRADORA pelo período em que ficaram sob sua guarda; e
                    </p>                    

                    <p className='mid-space'>
                        “VNP”: significa Valores Não Procurados relativos às disponibilidades financeiras remanescentes na data do encerramento do Grupo e não procurados pelos respectivos CONSORCIADOS e Consorciados Excluídos.
                    </p>                    

                    <p>
                        II &#45; DA ADESÃO
                    </p>                    

                    <p>
                        Cláusula 2ª &#45; Para a participação em Grupo de Consórcio, o&#40;a&#41; CONSORCIADO&#40;A&#41; deverá ter assinado a Adesão, e ter comprovado capacidade financeira para arcar com as despesas do Grupo durante todo seu prazo de duração.
                    </p>                    

                    <p>
                        Parágrafo Primeiro &#45; As informações e dados fornecidas pelo&#40;a&#41; CONSORCIADO&#40;A&#41; serão inclusos de forma automática no cadastro positivo a partir do momento em que passe ser obrigatória tal comunicação pelas Administradoras de Consórcio aos bureaus de crédito existentes.
                    </p>                    

                    <p>
                        Parágrafo Segundo &#45; Ao passar a ser obrigatória a comunicação dos dados aos bureaus de crédito o&#40;a&#41; CONSORCIADO&#40;A&#41; que não quiser que as informações sejam disponibilizadas em suas consultas, deverão entrar em contato com o bureau de crédito respectivo e solicitar a retirada das informações.
                    </p>                    

                    <p>
                        Cláusula 3ª &#45; No ato da assinatura da Adesão poderá ser cobrado o valor equivalente à 1ª &#40;primeira&#41; Parcela e antecipação de Taxa de Administração, conforme descrito no campo nº 57 &#40;cinquenta e sete&#41; da Adesão, que será considerado como pagamento efetivo da referida parcela na data da AGC.
                    </p>                    

                    <p>
                        Cláusula 4ª &#45; A Taxa de Administração fixada na Adesão, poderá ser cobrada através de percentuais variáveis durante o prazo do Grupo.
                    </p>                    

                    <p>
                        Cláusula 5ª &#45; No caso de comercialização de novas Cotas em Grupo em andamento, poderão ser cobrados valores e percentuais diferentes dos cobrados na inauguração do Grupo.
                    </p>                    

                    <p className='mid-space'>
                        Cláusula 6ª &#45; O valor equivalente à Taxa de Administração Mensal, cobrado antecipadamente, encontra-se descrito no campo nº 62 &#40;sessenta e dois&#41; da Adesão.
                    </p>                    

                    <p>
                        III &#45; DA CONSTITUIÇÃO DO GRUPO
                    </p>                    

                    <p>
                        Cláusula 7ª &#45; O Grupo será considerado constituído após a realização da AGC, em data a ser designada pela ADMINISTRADORA, após esta considerar a Adesão de CONSORCIADOS em número suficiente, para assegurar a viabilidade financeira do empreendimento, data em que a Adesão aperfeiçoar-se-á no presente Contrato, criando vínculo obrigacional entre os CONSORCIADOS e destes com a ADMINISTRADORA.
                    </p>                    

                    <p>
                        Parágrafo Único &#45; A AGC deverá ser convocada em até 90 &#40;noventa&#41; dias, a contar da data da assinatura da primeira Adesão, sob pena de a ADMINISTRADORA ser obrigada a restituir os valores pagos a ela no 1º &#40;primeiro&#41; dia útil subsequente ao prazo mencionado, devidamente corrigidos.
                    </p>                    

                    <p>
                        Cláusula 8ª &#45; O Grupo é autônomo em relação à outros grupos geridos pela ADMINISTRADORA e possui patrimônio próprio, não se confundindo com o patrimônio de outro grupo de consórcio ou com o patrimônio da ADMINISTRADORA, sendo os seus recursos geridos e contabilizados separadamente.
                    </p>                    

                    <p>
                        Cláusula 9ª &#45; O interesse coletivo do grupo de consórcio prevalece sobre o interesse individual de cada CONSORCIADO&#40;A&#41;.
                    </p>                    

                    <p>
                        Cláusula 10ª &#45; O número máximo de CONSORCIADOS no Grupo, descrito no campo nº 54 &#40;cinquenta e quatro&#41; da Adesão, na data da AGC, será calculado tendo por base o número de Créditos previstos para Contemplação mensal multiplicado pelo número de meses previsto para o encerramento do Grupo.
                    </p>                    

                    <p>
                        Cláusula 11ª &#45; Na AGC do Grupo, a ADMINISTRADORA:
                    </p>                    

                    <p>
                        I&#41; comprovará a existência de recursos suficientes para a Contemplação de pelo menos 1 &#40;um&#41; crédito, devendo ser ele considerado o de maior valor do Grupo;
                    </p>                    

                    <p>
                        II&#41; promoverá a eleição de até 3 &#40;três&#41; membros do Grupo, não remunerados, de acordo com as condições dispostas na Cláusula 12ª abaixo;
                    </p>                    

                    <p>
                        III&#41; colocará à disposição a listagem dos CONSORCIADOS, contendo seus nomes e o endereços completos, desde que eles autorizem, por escrito, a divulgação desses dados;
                    </p>                    

                    <p>
                        IV&#41; fornecerá, aos CONSORCIADOS, todas as informações necessárias sobre as modalidades de aplicação financeira dos recursos coletados, conforme regularização BACEN; e
                    </p>                    

                    <p>
                        V&#41; registrará na ata o nome e o endereço dos responsáveis pela auditoria externa contratada e, havendo qualquer alteração, anotará na ata da assembleia seguinte os dados relativos aos novos auditores.
                    </p>                    

                    <p>
                        Cláusula 12ª &#45; Os representantes dos CONSORCIADOS eleitos pela ADMINISTRADORA terão mandato com prazo igual ao prazo de duração do Grupo, tendo como função:
                    </p>                    

                    <p>
                        I&#41; acompanhar a regularidade de gestão da ADMINISTRADORA;
                    </p>                    

                    <p>
                        II&#41; acessar todos os demonstrativos de movimentações financeiras pertinentes às operações do Grupo, sempre que houver interesse de qualquer dos CONSORCIADOS;
                    </p>   

                    <p>
                        III&#41; solicitar quaisquer informações relativas ao Grupo à ADMINISTRADORA; e
                    </p>   

                    <p>
                        IV&#41; representar o Grupo na defesa de seus interesses contra a ADMINISTRADORA e perante o BACEN.
                    </p>   

                    <p>
                        Parágrafo Primeiro &#45; Fica estabelecido que os funcionários, sócios, gerentes, diretores e prepostos da ADMINISTRADORA ou de quaisquer sociedades e/ou empresas a ela ligada não poderão concorrer à eleição para representante dos CONSORCIADOS.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Segundo &#45; Os CONSORCIADOS eleitos poderão ser substituídos, em AGO ou AGE, por decisão da maioria dos CONSORCIADOS.
                    </p>   

                    <p>
                        IV &#45; DO PRAZO DE DURAÇÃO DO GRUPO
                    </p>   

                    <p>
                        Cláusula 13ª &#45; O prazo de duração do Grupo será aquele descrito no campo 52 &#40;cinquenta e dois&#41; da Adesão e obedecerá ao que for determinado pela Lei do Consórcio.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Único &#45; As Partes poderão acordar, por meio do termo aditivo da página 4 &#40;quatro&#41; da Adesão, a dilação do prazo de duração do Grupo expressa nos campos nº 67 &#40;sessenta e sete&#41; e 68 &#40;sessenta e oito&#41; e a dilação de prazo de duração do Grupo para consórcio de caminhão expressa campo nº 69 &#40;sessenta e nove&#41;.
                    </p>   

                    <p>
                        V &#45; DA DESISTÊNCIA DO GRUPO E DO RECEBIMENTO DA RESTITUIÇÃO DE PARCELAS
                    </p>   

                    <p>
                        Cláusula 14ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá desistir de participar do Grupo caso tenha assinado a Adesão fora do estabelecimento comercial, desde que tal desistência ocorra no prazo de 7 &#40;sete&#41; dias corridos, a contar da data da assinatura, conforme determina o Art. 49 da Lei nº 8.078/1990 &#40;“Código de Defesa do Consumidor”&#41;, caso em que os valores pagos por ele&#40;a&#41; serão devolvidos em até 7 &#40;sete&#41; dias úteis, a contar da data da formalização do pedido de desistência, desde que não tenha participado de assembleia.
                    </p>   

                    <p>
                        Cláusula 15ª&#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41; poderá desistir de participar do Grupo, arcando com a multa prevista na Cláusula 77ª, mediante encaminhamento de carta de solicitação assinada, via correio ou e-mail, incluindo cópia de seu documento de identidade e do comprovante do número de inscrição no CPF/ME, data em que passará a ser considerado&#40;a&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41;, ou ainda, será considerado como consorciado desistente aquele que tenha sua participação cancelada em razão do não pagamento de suas parcelas.
                    </p>   

                    <p>
                        Parágrafo Primeiro &#45; O&#40;A&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41; continuará concorrendo aos Sorteios nas AGO e, quando contemplado&#40;a&#41;, receberá a Restituição do valor que lhe couber.
                    </p>   

                    <p>
                        Parágrafo Segundo &#45; Caso o&#40;a&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41; não seja contemplado&#40;a&#41; no prazo de duração do Grupo, ele&#40;a&#41; será contemplado na data da última AGO do Grupo, em valor equivalente à Restituição de Parcelas, sendo após sua disponibilização ao &#40;à&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41; devidamente corrigido monetariamente pelo índice da conta onde estiver depositado, descontadas as taxas e encargos administrativos.
                    </p>   

                    <p>
                        Parágrafo Terceiro &#45; O&#40;A&#41;Consorciado&#40;a&#41; Excluído&#40;a&#41; que não solicitar o pagamento da Restituição de Parcelas estará sujeito&#40;a&#41; à dedução de Taxa de Permanência a partir do 31º &#40;trigésimo primeiro&#41; dia do encerramento contábil do Grupo.
                    </p>   

                    <p>
                        VI &#45; DA ALTERAÇÃO PARA VALOR DE CRÉDITO DIVERSO DO CONTRATADO
                    </p>   

                    <p>
                        Cláusula 16ª &#45; O Grupo pode ter por objeto Créditos de valores diferenciados, observado que o Crédito de menor valor, vigente ou definido na data da AGC, não pode ser inferior a 50% &#40;cinquenta por cento&#41; do Crédito de maior valor.
                    </p>   

                    <p>
                        Cláusula 17ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41; poderá alterar o Crédito contratado por outro de menor valor, limitado ao Crédito de menor valor do Grupo, observadas as seguintes condições:
                    </p>   

                    <p>
                        I&#41; tal mudança de faixa de Crédito só poderá ocorrer 1 &#40;uma&#41; vez para cada CONSORCIADO&#40;A&#41; em cada Grupo;
                    </p>   

                    <p>
                        II&#41; o Crédito escolhido deverá ser, no mínimo, equivalente à metade do crédito original contratado;
                    </p>   

                    <p>
                        III&#41; o Crédito escolhido tem de ser pelo menos igual à importância já paga pelo&#40;a&#41; CONSORCIADO&#40;A&#41; ao Fundo Comum;
                    </p>   

                    <p>
                        IV&#41; a mudança para o Crédito de menor valor implicará no recálculo do percentual amortizado, mediante comparação entre o Crédito contratado e o do Crédito escolhido;
                    </p>   

                    <p>
                        V&#41; restando saldo devedor, o percentual de amortização mensal não será alterado; e
                    </p>   

                    <p>
                        VI&#41; não havendo saldo devedor, o&#40;a&#41; CONSORCIADO&#40;A&#41; deverá aguardar sua Contemplação por Sorteio, ficando responsável pelas Diferenças de Parcela apuradas de acordo com o disposto nas Cláusulas 28ª a 32ª, abaixo, até a efetiva compra do Bem Referenciado ou contratação dos Serviços Referenciados no presente Contrato.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 18ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41; poderá alterar o Crédito contratado por outro de maior valor, desde que o valor do Crédito seja até 50% &#40;cinquenta por cento&#41; superior ao valor do menor Crédito do Grupo, limitado ao Crédito de maior valor do Grupo.
                    </p>   

                    <p>
                        VII &#45; DA REPRESENTAÇÃO PELA ADMINISTRADORA
                    </p>   

                    <p>
                        Cláusula 19ª &#45; O Grupo é representado pela ADMINISTRADORA, em caráter irrevogável e irretratável, ativa ou passivamente, em juízo ou fora dele, para defesa dos direitos e interesses coletivamente considerados e para a execução deste Contrato no caso de haver Consorciados Contemplados e inadimplentes.
                    </p>   

                    <p>
                        Cláusula 20ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; outorga, neste ato, poderes à ADMINISTRADORA para praticar os atos necessários à execução deste Contrato, podendo, inclusive, nomear procuradores para a defesa dos interesses do Grupo.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 21ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; outorga, ainda, neste ato, à ADMINISTRADORA poderes especiais para representá-lo&#40;a&#41; nas AGO, quando ausente.
                    </p>   

                    <p>
                        VIII &#45; DOS PAGAMENTOS
                    </p>   

                    <p>
                        Cláusula 22ª&#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; obriga-se a pagar a Parcela, cujo valor será calculado com base na soma dos valores destinados ao Fundo Comum, Fundo de Reserva, Taxa de Administração e seguros, quando contratados, além dos encargos e despesas estabelecidos na Cláusula 23ª, abaixo, e a quitar integralmente o débito até a data da última AGO de seu Grupo.
                    </p>   

                    <p>
                        Parágrafo Primeiro &#45; O percentual de contribuição ao Fundo Comum poderá variar de uma AGO à outra, em razão de eventual alteração no valor do Bem Referenciado ou Serviço Referenciado.
                    </p>   

                    <p>
                        Parágrafo Segundo &#45; Os percentuais referentes à Taxa de Administração total [campo nº 55 &#40;cinquenta e cinco&#41; ], Taxa de Administração Mensal [campo 62 &#40;sessenta e dois&#41; ] e Fundo de Reserva [campo 63 &#40;sessenta e três&#41; ], multiplicados pelos números de meses descritos no Prazo do Grupo [campo nº 52 &#40;cinquenta e dois&#41; ] e Prazo da Cota [campo nº 53 &#40;cinquenta e três&#41;], determinam o valor da Parcela.
                    </p>   

                    <p>
                        Parágrafo Terceiro &#45; A Taxa de Administração será cobrada durante o número de meses previstos para a duração do Grupo, sendo calculada com base em percentual determinado no campo nº 55 &#40;cinquenta e cinco&#41; do Crédito atualizado.
                    </p>   

                    <p>
                        Parágrafo Quarto &#45; Para o cálculo da Taxa de Administração total, multiplica-se o valor equivalente ao percentual descrito no campo nº 62 &#40;sessenta e dois&#41; pelo número de meses previstos para a duração do Grupo determinado no campo nº 52 &#40;cinquenta e dois&#41; e campo nº 53 &#40;prazo da cota&#41;.
                    </p>   

                    <p>
                        Cláusula 23ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; obriga-se, ainda, ao pagamento de:
                    </p>   

                    <p>
                        I&#41; prêmio de seguro de vida em grupo, desde que não cobrados diretamente do Grupo, conforme determinado no campo nº 58 &#40;cinquenta e oito&#41; da Adesão, por todo o prazo de duração do Grupo;
                    </p>   

                    <p>
                        II&#41; prêmio de seguro prestamista, desde que não cobrados diretamente do Grupo, descrito no campo nº 58 &#40;cinquenta e oito&#41; da Adesão, por todo o prazo de duração do Grupo;
                    </p>   

                    <p>
                        III&#41; Diferença de Parcela, conforme definida no Capítulo I retro;
                    </p>   

                    <p>
                        IV&#41; despesas referentes aos registros dos contratos de garantias prestadas e eventual cessão do presente Contrato, devidamente comprovadas;
                    </p>   

                    <p>
                        V&#41; multa moratória de 2% &#40;dois por cento&#41;, acrescida de juros de 1% &#40;um por cento&#41; ao mês, calculados sobre o valor atualizado da Parcela, em caso de atraso no pagamento;
                    </p>   

                    <p>
                        VI&#41; tarifa de entrega de segunda via de documento fixada em até 0,1% &#40;zero vírgula um por cento&#41; do valor do Crédito, por documento;
                    </p>   

                    <p>
                        VII&#41; despesas judiciais e honorários advocatícios em caso de cobranças extrajudiciais e/ou judiciais;
                    </p>   

                    <p>
                        VIII&#41; Taxa de Administração antecipada quando o&#40;a&#41; CONSORCIADO&#40;A&#41; vier a integrar Grupo em andamento, devendo, inclusive neste caso, preencher e assinar a Adesão;
                    </p>   

                    <p>
                        IX&#41; despesas decorrentes de avaliação e/ou vistoria de imóvel por engenheiro indicado pela ADMINISTRADORA, avaliação e/ou vistoria de veículos através de órgãos credenciados;
                    </p>   

                    <p>
                        X&#41; despesas com registros das garantias prestadas quando da aquisição de bens imóveis, bens móveis e serviços;
                    </p>   

                    <p>
                        XI&#41; Taxa de Permanência sobre eventual saldo disponível no término do Grupo, não procurado após 30 &#40;trinta&#41; dias contados da data de sua disponibilização, cobrada mensalmente à alíquota de 10% &#40;dez por cento&#41; sobre o citado saldo, extinguindo-se a exigibilidade do Crédito quando seu valor for inferior a R$ 30,00 &#40;trinta reais&#41;;
                    </p>   

                    <p>
                        XII&#41; taxas de transferência ou substituição de garantia descritas no ANEXO VIII;
                    </p>   

                    <p>
                        XIII&#41; taxas, custas e/ou tributos, vencidos e não pagos e demais encargos incorridos nas ações judiciais para a retomada do bem e/ou execução de garantias;
                    </p>   

                    <p>
                        XIV&#41; despesas com convocação e realização de AGE;
                    </p>   

                    <p>
                        XV&#41; despesas decorrentes da compra e/ou entrega de bem móvel, por solicitação do&#40;a&#41; CONSORCIADO&#40;A&#41;, em praça diversa daquela de constituição do Grupo;
                    </p>   

                    <p>
                        XVI&#41; frete e seguro de transporte de bem móvel, caso necessário, assim como o pagamento da diferença de Crédito diretamente ao fornecedor do bem, se for o caso;
                    </p>   

                    <p>
                        XVII&#41; taxa de cadastro, despesas com inclusão e baixa de gravame, para aprovação e liberação do Crédito, poderão ser pagos com recursos próprios ou descontados do Crédito já disponível, neste último caso, desde que autorizado, por escrito, pelo&#40;a&#41;CONSORCIADO&#40;A&#41;;
                    </p>   

                    <p>
                        XVIII&#41; IPVA ou IPTU, incidente sobre o bem objeto da garantia, sob pena de resultar em resolução do Contrato em caso de inadimplemento de tais impostos;
                    </p>   

                    <p className='mid-space'>
                        XIX&#41; ITBI e despesas resultantes do registro da compra e venda ou alienação fiduciária.
                    </p>   

                    <p>
                        IX &#45; DA CONSTITUIÇÃO E DA UTILIZAÇÃO DO FUNDO COMUM
                    </p>   

                    <p>
                        Cláusula 24ª &#45; O Fundo Comum será constituído pelos recursos oriundos:
                    </p>   

                    <p>
                        I&#41; das importâncias destinadas à sua formação, recolhidas através da Parcela paga pelo&#40;a&#41; CONSORCIADO&#40;A&#41;;
                    </p>   

                    <p>
                        II&#41; dos rendimentos de aplicação financeira dos recursos do próprio Fundo Comum;
                    </p>   

                    <p>
                        III&#41; do pagamento das Parcelas relativas ao Fundo Comum pago pelo&#40;a&#41; CONSORCIADO&#40;A&#41; admitido&#40;a&#41; no Grupo em Cota de Consorciado&#40;a&#41; Excluído&#40;a&#41;; e
                    </p>   

                    <p>
                        Cláusula 25ª &#45; Os recursos do Fundo Comum serão utilizados para:
                    </p>   

                    <p>
                        I&#41; pagamento do Crédito para aquisição de bens e serviços de CONSORCIADO&#40;A&#41; Contemplada;
                    </p>   

                    <p>
                        II&#41; pagamento de Crédito em moeda corrente nacional nas hipóteses indicadas neste Contrato;
                    </p>   

                    <p>
                        III&#41; restituição aos CONSORCIADOS de eventual saldo existente ao término do Grupo, paga proporcionalmente às suas Parcelas mensais;
                    </p>   

                    <p>
                        IV&#41; restituição aos Consorciados Excluídos quando contemplados por Sorteio, conforme disposto na Cláusula 39ª, incisos II e IV, abaixo; e
                    </p>   

                    <p className='mid-space'>
                        V&#41; restituição aos Consorciados Excluídos no caso de dissolução do Grupo a que pertencia.
                    </p>   

                    <p>
                        X &#45; DA CONSTITUIÇÃO E DA UTILIZAÇÃO DO FUNDO DE RESERVA
                    </p>   

                    <p>
                        Cláusula 26ª &#45; O valor pago pelo&#40;a&#41; CONSORCIADO&#40;A&#41; a ser creditado ao Fundo de Reserva corresponde ao percentual indicado no campo nº 63 &#40;sessenta e três&#41; da Adesão e será constituído pelos recursos oriundos:
                    </p>   

                    <p>
                        I&#41; das importâncias destinadas à sua formação; e
                    </p>   

                    <p>
                        II&#41; dos rendimentos da aplicação financeira dos recursos do próprio Fundo de Reserva.
                    </p>   

                    <p>
                        Cláusula 27ª &#45; Os recursos do Fundo de Reserva serão usados, na seguinte ordem, para:
                    </p>   

                    <p>
                        I&#41; cobertura de eventual insuficiência de recursos no Fundo Comum;
                    </p>   

                    <p>
                        II&#41; pagamento de despesas bancárias de responsabilidade exclusiva do Grupo;
                    </p>   

                    <p>
                        III&#41; pagamento de todas as despesas e custos incorridos com a adoção de medidas judiciais ou extrajudiciais com vistas ao ressarcimento do Grupo; e
                    </p>   

                    <p className='mid-space'>
                        IV&#41; Contemplação, por Sorteio, desde que não comprometa a utilização para as finalidades anteriores.
                    </p>   

                    <p>
                        XI &#45; DAS DIFERENÇAS DE PARCELAS
                    </p>   

                    <p>
                        Cláusula 28ª &#45; Eventuais Diferenças de Parcelas serão cobradas ou compensadas sob a forma de Rateio e serão proporcionais aos percentuais efetivamente pagos pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, até o vencimento da segunda Parcela que seguir à verificação das referidas Diferenças de Parcela.
                    </p>   

                    <p>
                        Cláusula 29ª &#45; Se o Crédito for aumentado, a deficiência do saldo do Fundo Comum deverá ser coberta pelos rendimentos financeiros da aplicação de seus próprios recursos, pelo Fundo de Reserva se existente, e, por último, se necessário, pela cobrança de Diferença de Parcela rateada entre os CONSORCIADOS.
                    </p>   

                    <p>
                        Cláusula 30ª &#45; Ocorrendo redução do Crédito, o excesso do saldo do Fundo Comum ficará acumulado para AGO seguinte e compensado na Parcela subsequente mediante Rateio.
                    </p>   

                    <p>
                        Cláusula 31ª &#45; As alíquotas de reajuste do valor de Bens Referenciados ou Serviços Referenciados serão estabelecidos na AGC, observados os índices que constam no campo nº 51 &#40;cinquenta e um&#41;, de acordo com seguimento adquirido.
                    </p>   

                    <p>
                        Cláusula 32ª &#45; Incidirá Taxa de Administração sobre os recursos do Fundo de Reserva utilizados para suprir a deficiência do Fundo Comum e sobre a importância paga pelos CONSORCIADOS para atender a esse fim, sendo a importância paga escriturada destacadamente na conta corrente do&#40;a&#41; CONSORCIADO&#40;A&#41; e o percentual correspondente não será considerado para efeito de amortização de Parcela.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Único &#45; No caso da redução de Crédito prevista na Cláusula 27ª acima, o excesso de Taxa de Administração paga será compensado na Parcela subsequente.
                    </p>   

                    <p>
                        XII &#45; DO VENCIMENTO DAS PARCELAS
                    </p>   

                    <p>
                        Cláusula 33ª&#45; A ADMINISTRADORA manterá o&#40;a&#41; CONSORCIADO&#40;A&#41; informado&#40;a&#41; a respeito das datas de vencimento das Parcelas do Grupo através do boleto de cobrança, bem como das datas da realização das respectivas AGO, que serão todas definidas na AGC do Grupo.
                    </p>   

                    <p>
                        Parágrafo Primeiro &#45; Na hipótese de não recebimento, perda, extravio ou atraso no recebimento do boleto, o&#40;a&#41; CONSORCIADO&#40;A&#41; deverá providenciar a segunda via até a data de vencimento através do Serviço de Atendimento ao Consorciado ou pelo atendimento eletrônico no website www.consorciotradicao.com.br de modo a evitar a aplicação de penalidades decorrentes de atraso.
                    </p>   

                    <p>
                        Parágrafo Segundo &#45; Caso a data de vencimento da Parcela não seja dia útil, o vencimento passará, automaticamente, para o primeiro dia útil subsequente.
                    </p>   

                    <p>
                        Cláusula 34ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; que não efetuar o pagamento de qualquer Parcela até a data do seu vencimento, ficará impedido&#40;a&#41; de concorrer ao Sorteio ou oferecer Lance na AGO realizada após a data de vencimento.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 35ª &#45; O&#40;A&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; que se tornar inadimplente estará sujeito&#40;a&#41; à cobrança extrajudicial ou judicial das Parcelas correspondentes.
                    </p>   

                    <p>
                        XIII &#45; DA ANTECIPAÇÃO DE PARCELAS
                    </p>   

                    <p>
                        Cláusula 36ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá antecipar o pagamento de Parcelas do saldo devedor, na ordem inversa a contar da última, no todo ou em parte, nos seguintes casos:
                    </p>   

                    <p>
                        I&#41; por meio de Lance vencedor;
                    </p>   

                    <p>
                        II&#41; por utilização de diferença de Crédito, resultante da utilização a menor do valor do Crédito disponibilizado;
                    </p>   

                    <p>
                        III&#41; quando o pagamento das Parcelas antecipadas se der até a data do vencimento; ou
                    </p>   

                    <p>
                        IV&#41; ao solicitar a conversão do Crédito em espécie após 180 &#40;cento e oitenta dias&#41; da Contemplação, cabendo-lhe o direito de receber em espécie o valor remanescente.
                    </p>   

                    <p>
                        Cláusula 37ª &#45; As antecipações de pagamento de Parcelas, que resultem em quitação, de CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41; não lhe darão o direito de exigir a Contemplação, ficando responsável pelas Diferenças de Parcelas que houver e demais obrigações previstas neste Contrato até a data da efetiva Contemplação, que ocorrerá por Sorteio.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Único &#45; As antecipações e Parcelas do&#40;a&#41; CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41; não poderão ser aproveitadas, a título de Lance, em AGO futura.
                    </p>   

                    <p>
                        XIV &#45; DA CONTEMPLAÇÃO
                    </p>   

                    <p>
                        Cláusula 38ª &#45; A Contemplação poderá ser realizada por Sorteio ou por Lance, sendo certo que o valor do Crédito será equivalente ao valor do Bem Referenciado ou Serviço Referenciado na data da AGO em que houve a Contemplação.
                    </p>   

                    <p>
                        Cláusula 39ª &#45; A Contemplação por Sorteio poderá ser realizada da seguinte forma:
                    </p>   

                    <p>
                        I&#41; em dia e hora previamente indicados no boleto de pagamento;
                    </p>   

                    <p>
                        II&#41; dividindo-se entre CONSORCIADOS e Consorciados Excluídos;
                    </p>   

                    <p>
                        III&#41; em primeiro lugar serão sorteados os CONSORCIADOS através da Loteria Federal, cujo critério será estabelecido pela apuração de Sorteio do Grupo descrita no ANEXO I; e
                    </p>   

                    <p>
                        IV&#41; em segundo lugar serão sorteados os Consorciados Excluídos através da Loteria Federal, cujo critério será estabelecido pela apuração de Sorteio do Grupo descrita no ANEXO I.
                    </p>   

                    <p>
                        Parágrafo Único &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá solicitar, por escrito e enquanto houver número suficiente de CONSORCIADOS aptos, sua exclusão do Sorteio.
                    </p>   

                    <p>
                        Cláusula 40ª &#45; A Contemplação por Sorteio aos CONSORCIADOS somente ocorrerá se houver recurso financeiro suficiente no Fundo Comum, facultada a utilização dos recursos financeiros do Fundo de Reserva, para atribuição de, no mínimo, um Crédito por AGO. Não havendo recursos suficientes, o Sorteio não será realizado.
                    </p>   

                    <p>
                        Cláusula 41ª &#45; Caso a ADMINISTRADORA proceda à Contemplação sem a existência de recursos suficientes, esta ficará responsável pelos prejuízos que causar ao Grupo.
                    </p>   

                    <p>
                        Cláusula 42ª &#45; Ocorrendo ou não realização de Sorteio serão admitidas ofertas de Lances para viabilizar Contemplações.
                    </p>   

                    <p>
                        Cláusula 43ª &#45; A Contemplação por Lance, poderá ser realizada pela modalidade de Lance Livre ou Lance Fixo.
                    </p>   

                    <p>
                        Cláusula 44ª &#45; São modalidades de Lance:
                    </p>   

                    <p>
                        I&#41; Lance Fixo: oferta de lance em percentual pré-fixado na ata da AGC do grupo consorcial; e
                    </p>   

                    <p>
                        II&#41; Lance Livre: oferta de lance em percentual de crédito, a ser realizado de acordo com a livre manifestação de vontade por parte do&#40;a&#41; CONSORCIADO&#40;A&#41;.
                    </p>   

                    <p>
                        Cláusula 45ª &#45; As contemplações por lance, serão realizadas observando-se as seguintes determinações:
                    </p>   

                    <p>
                        I&#41; O&#40;a&#41; CONSORCIADO&#40;A&#41; ou seu procurador, bem como o representante/revenda, poderão ofertar Lance, manifestando-se: &#40;a&#41; pessoalmente, na sede da ADMINISTRADORA; &#40;b&#41; por meio físico, através de carta ou telegrama; ou &#40;c&#41; por meio eletrônico, através de acesso ao website da ADMINISTRADORA, e-mail ou mensagem via aplicativo WhatsApp;
                    </p>   

                    <p>
                        II&#41; os Lances deverão ser ofertados até 1 &#40;um&#41; dia antes da realização da AGO;
                    </p>   

                    <p>
                        III&#41; quando tratar-se de Lance Livre, a oferta deverá ser equivalente a, no mínimo, 10% &#40;dez por cento&#41; do valor do Crédito na data da AGO;
                    </p>   

                    <p>
                        IV&#41; o valor máximo do Lance poderá ser igual ao Saldo Devedor do&#40;a&#41; CONSORCIADO&#40;A&#41; que apresente a oferta;
                    </p>   

                    <p>
                        V&#41; não serão consideradas as Parcelas vencidas antes do ingresso do&#40;a&#41; CONSORCIADO&#40;A&#41;, que assumiu a posição do Consorciado&#40;a&#41; Excluído&#40;a&#41;;
                    </p>   

                    <p>
                        VI&#41; o&#40;a&#41; CONSORCIADO&#40;A&#41; que ofertar Lance em valor suficiente para quitação da sua Cota será considerado&#40;a&#41; vencedor&#40;a&#41;;
                    </p>   

                    <p>
                        VII&#41; tratando-se de Lance Livre, não havendo Lance em valor suficiente para quitação de Cota, o&#40;a&#41; CONSORCIADO&#40;A&#41; que ofertar Lance representativo do maior percentual do Crédito será considerado&#40;a&#41; vencedor&#40;a&#41;, podendo ser contemplado&#40;a&#41;, desde que seu Lance somado aos recursos do Fundo Comum sejam suficientes para atribuição do Crédito;
                    </p>   

                    <p>
                        VIII&#41; havendo empate entre Lances, seja na modalidade de Lance Livre ou na modalidade de Lance Fixo, o desempate dar-se-á através do número do primeiro prêmio extraído pela Loteria Federal, aquela cota que mais se aproximar do primeiro prêmio será contemplada.
                    </p>   

                    <p>
                        IX&#41; o Lance vencedor será considerado como pagamento antecipado de Parcelas vincendas, a contar regressivamente da última, ou para diminuição do valor das Parcelas mensais, conforme dispõe cláusula 46ª, I, abaixo;
                    </p>   

                    <p>
                        X&#41; os Lances perdedores serão desconsiderados e não deverão ser pagos em favor da ADMINISTRADORA;
                    </p>   

                    <p>
                        XI&#41; nos Lances relativos aos Grupos em que o Bem Referenciado é imóvel, os CONSORCIADOS poderão utilizar recursos provenientes do FGTS, desde que se enquadrem nas normas estabelecidas pela Curadoria da CEF e nas condições estabelecidas neste Contrato, sendo o&#40;a&#41; CONSORCIADO&#40;A&#41; o&#40;a&#41; único&#40;a&#41; responsável por observar esse enquadramento, bem como realizar os trâmites para a obtenção dos recursos em caso de Contemplação;
                    </p>   

                    <p>
                        XII&#41; o Lance cujos recursos sejam provenientes do FGTS terão seu valor descontado no Crédito atribuído, de forma que no momento da aquisição do Bem Referenciado esses recursos sejam pagos diretamente pela CEF ao vendedor do referido bem; e
                    </p>   

                    <p>
                        XIII&#41; o&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; por Lance oriundo de recursos do FGTS é obrigado a adquirir bem, não podendo solicitar a conversão do Crédito em moeda corrente nacional.
                    </p>   

                    <p>
                        Cláusula 46ª &#45; O Lance poderá ser utilizado nas 2 &#40;duas&#41; formas a seguir:
                    </p>   

                    <p>
                        I&#41; Lance Diluído: redução no valor da Parcela, mantendo o prazo de pagamento contratado no Grupo; ou redução do prazo contratado, com o abatimento das Parcelas vincendas de maneira decrescente; e/ou
                    </p>   

                    <p>
                        II&#41; Lance Embutido: desconto do valor do Lance no Crédito, limitado ao percentual estipulado na ata da AGC, que deverá ser solicitado por escrito.
                    </p>   

                    <p>
                        Cláusula 47ª &#45; O prazo para pagamento do Lance será de 2 &#40;dois&#41; dias úteis, a contar da data da Contemplação, sob pena de cancelamento da Contemplação.
                    </p>   

                    <p>
                        Cláusula 48ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; ausente à AGO será comunicado&#40;a&#41; de sua Contemplação pela ADMINISTRADORA por telefone, por carta com aviso de recebimento, telegrama ou e-mail, expedido até o 2º &#40;segundo&#41; dia útil após a referida AGO.
                    </p>   

                    <p>
                        Cláusula 49ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; que ofertar o Lance será considerado&#40;a&#41; ciente de sua eventual Contemplação, ainda que ausente à AGO.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 50ª &#45; Se o&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41;, que não tenha utilizado seu Crédito atribuído, atrasar o pagamento de 2 &#40;duas&#41; ou mais Parcelas, consecutivas ou não, terá sua Contemplação cancelada, passando a ser considerado&#40;a&#41; CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41;.
                    </p>   

                    <p>
                        XV &#45; DO CRÉDITO E DA SUA UTILIZAÇÃO
                    </p>   

                    <p>
                        Cláusula 51ª &#45; A ADMINISTRADORA atribuirá ao&#40;à&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; o Crédito vigente na data da AGO até o 3º &#40;terceiro&#41; dia útil após a data da Contemplação.
                    </p>   

                    <p>
                        Cláusula 52ª &#45; O Crédito, enquanto não utilizado pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, deverá permanecer depositado em banco múltiplo com carteira comercial, banco comercial ou caixa econômica e somente poderão ser aplicados em títulos públicos federais registrados no Sistema Especial de Liquidação e Custódia &#40;“SELIC”&#41;, em fundos de investimento e/ou em fundos de investimento em cotas de fundos de investimento constituídos sob a forma de condomínio aberto, classificados como fundos de curto prazo e fundos referenciados.
                    </p>   

                    <p>
                        Cláusula 53ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá receber o Crédito em moeda corrente nacional, após quitado seu Saldo Devedor e caso não tenha utilizado o respectivo Crédito até 180 &#40;cento e oitenta&#41; dias após a Contemplação.
                    </p>   

                    <p>
                        Cláusula 54ª &#45; O pedido de liberação do Crédito poderá ser apresentado no momento da entrega das garantias abaixo requeridas, constando a descrição dos bens ou prestação de serviços a serem adquiridos, preço e, se for o caso, a indicação do vendedor e/ou prestador dos serviços, bem como do número de inscrição no CPF/ME ou no CNPJ/ME.
                    </p>   

                    <p>
                        Cláusula 55ª &#45; A avaliação de bens móveis passíveis de Alienação Fiduciária que não possuam identificação e/ou registros em órgãos competentes, serão elaboradas por sociedades/empresas e/ou profissionais habilitados tecnicamente, facultado ao&#40;à&#41; CONSORCIADO&#40;A&#41; acompanhá-las, sendo de sua responsabilidade o pagamento das despesas decorrentes da referida avaliação.
                    </p>   

                    <p>
                        Cláusula 56ª &#45; A autorização para utilização do Crédito será liberada pela ADMINISTRADORA após o Consorciado Contemplado efetuar o pagamento das Parcelas que, eventualmente, encontrem-se em atraso após a data da Contemplação, facultado à ADMINISTRADORA abater o valor em atraso do Crédito, acrescido de juros e multas previstas neste Contrato.
                    </p>   

                    <p>
                        Cláusula 57ª &#45; A ADMINISTRADORA efetuará o pagamento dos bens ou prestação de serviços que já tenham sido adquiridos pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, somente mediante identificação do pagamento:
                    </p>   

                    <p>
                        I&#41; em favor do vendedor do bem ou prestador dos serviços, desde que tenha sido emitida a nota fiscal correspondente;
                    </p>   

                    <p>
                        II&#41; em favor do&#40;a&#41; CONSORCIADO&#40;A&#41;, do valor do adiantamento que este tenha feito ao vendedor do bem ou prestador de serviços, mediante documentos exigidos pela ADMINISTRADORA e, desde que, a compra tenha sido realizada após a data da Contemplação.
                    </p>   

                    <p>
                        Parágrafo Primeiro: Fica expressamente vedado que pagamentos sejam efetuados em conta corrente ou conta poupança de titularidade de pessoas que não sejam aquelas de que tratam os incisos I e II acima.
                    </p>   

                    <p>
                        Parágrafo Segundo: Fica estabelecido que em caso de compra de bem gravado por credor do vendedor, o&#40;a&#41; CONSORCIADO&#40;A&#41; será responsável pela liberação do gravame e sua alienação à ADMINISTRADORA.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 58ª &#45; Caso o Crédito seja superior ao Saldo Devedor em pelo menos 10% &#40;dez por cento&#41;, o&#40;a&#41; CONSORCIADO&#40;A&#41; poderá utilizar o excedente do Crédito para pagamento de despesas cartorárias, transferências de propriedade, contratação de seguros e tributos, desde que efetivamente comprovadas.
                    </p>   

                    <p>
                        XVI &#45; DAS GARANTIAS
                    </p>   

                    <p>
                        Cláusula 59ª &#45; De modo a garantir o pagamento das Parcelas vincendas, após Contemplação e uso de Crédito para aquisição de Bem Referenciado móvel, será exigida a constituição de Alienação Fiduciária, bem como os documentos constantes do ANEXO IV.
                    </p>   

                    <p>
                        Cláusula 60ª &#45; A ADMINISTRADORA deverá apreciar os documentos apresentados pelo&#40;a&#41; CONSORCIADO&#40;A&#41;, relativos às garantias exigidas, no prazo de até 72 &#40;setenta e duas&#41; horas, para que o Crédito seja disponibilizado com a constituição dessas garantias.
                    </p>   

                    <p>
                        Cláusula 61ª &#45; Para a aquisição de veículos automotores, a ADMINISTRADORA efetuará o pagamento do bem escolhido pelo&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; diretamente ao vendedor, após satisfeitas as exigências previstas nas Cláusulas 57ª e 58ª acima.
                    </p>   

                    <p>
                        Cláusula 62ª &#45; Para a aquisição dos demais bens móveis, o pagamento dar-se-á após a apresentação do respectivo documento de aquisição do bem e o registro do Contrato perante o órgão competente.
                    </p>   

                    <p>
                        Cláusula 63ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá optar por adquirir bens usados, desde que obedecidas as condições constantes no ANEXO V.
                    </p>   

                    <p>
                        Cláusula 64ª &#45; Para garantir o pagamento das Parcelas vincendas, após Contemplação e uso de Crédito para aquisição de Bem Referenciado imóvel, será exigida a constituição de Alienação Fiduciária, bem como os documentos constantes do ANEXO VI.
                    </p>   

                    <p>
                        Cláusula 65ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41;, cujo bem imóvel a ser adquirido esteja vinculado a empreendimento imobiliário, poderá optar, se assim desejar, pela utilização do Crédito para adquirir bem imóvel diverso daquele indicado na Adesão, construído ou a ser construído, apenas pelo terreno ou pela reforma.
                    </p>   

                    <p>
                        Cláusula 66ª &#45; A ADMINISTRADORA deverá apreciar, no prazo de até 10 &#40;dez&#41; dias úteis, os documentos apresentados pelo&#40;a&#41; CONSORCIADO&#40;A&#41; relativos às garantias exigidas, para que o Crédito seja com elas disponibilizado.
                    </p>   

                    <p>
                        Cláusula 67ª &#45; A ADMINISTRADORA, a seu exclusivo critério, poderá exigir garantias reais ou pessoais complementares.
                    </p>   

                    <p>
                        Cláusula 68ª &#45; A ADMINISTRADORA efetuará o pagamento do imóvel escolhido pelo&#40;a&#41; CONSORCIADO&#40;A&#41; quando da apresentação da certidão da matrícula, desde que conste o registro da Alienação Fiduciária em favor da ADMINISTRADORA.
                    </p>   

                    <p>
                        Cláusula 69ª &#45;O&#40;A&#41; CONSORCIADO&#40;A&#41; obriga-se ao pagamento do IPTU, taxas lançadas pela Prefeitura do Município do local do imóvel, multas, laudêmio e taxas condominiais, quando for o caso, obrigando-se, ainda, por eventuais demandas judiciais que incluam a ADMINISTRADORA no polo passivo.
                    </p>   

                    <p>
                        Cláusula 70ª &#45; Fica estabelecido que para receber o Crédito contemplado de grupo de consórcio de Serviços Referenciados será exigida a seguinte garantia:
                    </p>   

                    <p>
                        I&#41; Alienação Fiduciária de bem móvel ou imóvel de propriedade do&#40;a&#41; CONSORCIADO&#40;A&#41; sobre os quais não recaiam dívidas, caso a garantia utilizada seja veículo automotor deverá estar devidamente segurado por operadora de seguros constituída e fiscalizada pela SUSEP, para garantir o pagamento do Saldo Devedor de Serviços Referenciados.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 71ª &#45; As garantias constituídas em favor da ADMINISTRADORA serão baixadas somente após a quitação total do Saldo Devedor.
                    </p>   

                    <p>
                        XVII &#45; DA EXCLUSÃO DE CONSORCIADO&#40;A&#41;
                    </p>   

                    <p>
                        Cláusula 72ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; não contemplado que deixar de realizar o pagamento de 2 &#40;duas&#41; Parcelas ou de montante percentual equivalente será excluído do Grupo.
                    </p>   

                    <p>
                        Parágrafo Primeiro &#45; Antes da exclusão de que trata o caput desta cláusula, o&#40;a&#41; CONSORCIADO&#40;A&#41; poderá realizar o pagamento em atraso e respectivas diferenças, com seus valores atualizados, acrescidos de multa e juros moratórios, no prazo de 10 &#40;dez&#41; dias, a contar do vencimento da segunda Parcela não paga.
                    </p>   

                    <p>
                        Parágrafo Segundo &#45; Caso o&#40;a&#41; CONSORCIADO&#40;A&#41; não atenda a condição prevista no Parágrafo Primeiro desta cláusula será excluído&#40;a&#41;, sendo-lhe permitida, no entanto, a readmissão se atendidos os seguintes critérios:
                    </p>   

                    <p>
                        I&#41; quitação integral de seus débitos, acrescidos de multa e juros moratórios;
                    </p>   

                    <p>
                        II&#41; disponibilidade de vagas no Grupo, com análise prévia relacionada ao prazo restante, de modo a evitar prejuízos aos integrantes do Grupo;
                    </p>   

                    <p>
                        III&#41; reanálise de sua capacidade financeira; e
                    </p>   

                    <p>
                        IV&#41; atualização de cadastro.
                    </p>   

                    <p>
                        Cláusula 73ª &#45; O&#40;A&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41; ou seus herdeiros ou sucessores, concorrerão nas AGO em igualdade com os CONSORCIADOS do Grupo para receber os valores de restituição a que tem direito, sendo observado as regras de restituição nos termos da lei do consórcio, ressaltando-se então que somente serão devolvidos os valores pagos ao fundo comum do grupo, aplicando-se ainda a multa de 20% nos termos da cláusula 77ª abaixo.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Primeiro &#45; Não serão restituídos ao Consorciado&#40;a&#41; Excluído&#40;a&#41; valores pagos à título de taxa de administração e seguro.
                    </p>   

                    <p>
                        XVIII &#45; DAS PENALIDADES
                    </p>   

                    <p>
                        Cláusula 74ª &#45; Havendo atraso nos pagamentos descritos nas Cláusulas 22ª e 23ª, o&#40;a&#41; CONSORCIADO&#40;A&#41; estará sujeito&#40;a&#41; ao pagamento de multa de 2% &#40;dois por cento&#41;, acrescida de juros moratórios de 1% &#40;um por cento&#41; ao mês, calculados sobre o valor atualizado da Parcela, sem prejuízo de honorários advocatícios cabíveis.
                    </p>   

                    <p>
                        Cláusula 75ª &#45; No caso de atraso de valor equivalente à 2 &#40;duas&#41; ou mais Parcelas, o&#40;a&#41; CONSORCIADO&#40;A&#41; não contemplado&#40;a&#41; será excluído&#40;a&#41; do Grupo, sem o prejuízo da incidência de multa, juros e honorários advocatícios determinados na Cláusula 74ª, acima.
                    </p>   

                    <p>
                        Cláusula 76ª &#45; No caso de inadimplência de valor equivalente à 2 &#40;duas&#41; ou mais Parcelas, o&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; que ainda não tenha utilizado seu Crédito terá sua Contemplação cancelada, sem o prejuízo da incidência de multa, juros e honorários advocatícios determinados na Cláusula 74ª, acima.
                    </p>   

                    <p>
                        Cláusula 77ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; que desistir da sua participação no Grupo, nos termos da Cláusula 15ª acima, estará sujeito&#40;a&#41; à multa de 20% &#40;vinte por cento&#41; sobre o valor da Restituição dos valores a que tem direito.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 78ª &#45; Fica estabelecido que será promovida a competente ação judicial contra o&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; que tenha utilizado seu Crédito e que fique inadimplente com suas Parcelas, visto que o presente Contrato é título executivo extrajudicial, conforme disposto na Lei do Consórcio, ficando sob responsabilidade do&#40;a&#41; CONSORCIADO&#40;A&#41; arcar com as despesas judiciais e honorários advocatícios decorrentes de cobrança judicial.
                    </p>   

                    <p>
                        XIX &#45; DAS ASSEMBLEIAS GERAIS
                    </p>   

                    <p>
                        Cláusula 79ª &#45; Ao longo do prazo de duração do Grupo serão realizadas, mensalmente, as AGO e sempre que solicitado pelos CONSORCIADOS ou pela ADMINISTRADORA serão realizadas as AGE, tendo direito a voto nessas ocasiões somente os CONSORCIADOS que estiverem com suas Parcelas pagas, sem qualquer Parcela em atraso.
                    </p>   

                    <p>
                        Cláusula 80ª &#45; Compete à AGO a Contemplação e/ou cancelamento de Contemplações, bem como apreciação de contas apresentadas pela ADMINISTRADORA, atendimento e prestação de informações aos CONSORCIADOS.
                    </p>   

                    <p>
                        Cláusula 81ª &#45; A AGO é pública e será realizada mensalmente na sede da ADMINISTRADORA, que estabelecerá o dia e hora para sua realização, tendo início com qualquer número de CONSORCIADOS presentes.
                    </p>   

                    <p>
                        Cláusula 82ª &#45; Compete à AGE deliberar sobre:
                    </p>   

                    <p>
                        I&#41; transferência da administração do Grupo para outra sociedade/empresa, por motivos plenamente justificáveis, cuja decisão deverá ser comunicada ao BACEN;
                    </p>   

                    <p>
                        II&#41; fusão do Grupo a outros grupos de consórcios administrados pela ADMINISTRADORA;
                    </p>   

                    <p>
                        III&#41; ampliação do prazo de duração do Grupo, com suspensão ou não de pagamento de Parcelas por igual período, na ocorrência de fatos que onerem os CONSORCIADOS em demasia ou de outros eventos que dificultem a satisfação das obrigações assumidas;
                    </p>   

                    <p>
                        IV&#41; encerramento antecipado do Grupo;
                    </p>   

                    <p>
                        V&#41; dissolução do Grupo;
                    </p>   

                    <p>
                        VI&#41; substituição do bem, na hipótese de descontinuidade de produção do Bem Referenciado;
                    </p>   

                    <p>
                        VII&#41; extinção de índice de atualização do valor do Crédito; e
                    </p>   

                    <p>
                        VIII&#41; quaisquer outras matérias de interesse exclusivo do Grupo, desde que não sejam de competência da AGO e não colidam com as disposições legais emanadas pelo BACEN.
                    </p>   

                    <p>
                        Parágrafo Único &#45; Nas deliberações referentes aos assuntos indicados nos incisos IV, V, VI e VII desta cláusula, apenas os CONSORCIADOS não contemplados poderão votar.
                    </p>   

                    <p>
                        Cláusula 83ª &#45; A AGE será convocada pela ADMINISTRADORA, por sua própria iniciativa ou por solicitação de, no mínimo, 30% &#40;trinta por cento&#41; dos CONSORCIADOS, para deliberar sobre quaisquer outros assuntos que não sejam objeto da AGO.
                    </p>   

                    <p>
                        Cláusula 84ª &#45; Quando solicitada a convocação da AGE pelos CONSORCIADOS, a ADMINISTRADORA expedirá notificação de convocação no prazo de 5 &#40;cinco&#41; dias úteis, a contar da respectiva solicitação.
                    </p>   

                    <p>
                        Cláusula 85ª &#45; A notificação de convocação da AGE será enviada, por carta, telegrama ou e-mail a todos os CONSORCIADOS, com prazo mínimo de 8 &#40;oito&#41; dias úteis de antecedência, contados do dia seguinte à expedição da citada notificação, na qual constarão as informações relativas ao dia, hora, local e assuntos a serem deliberados na AGE.
                    </p>   

                    <p>
                        Cláusula 86ª &#45; A AGE instalar-se-á com qualquer número de CONSORCIADOS aptos a votar, conforme determina a Cláusula 79ª.
                    </p>   

                    <p>
                        Parágrafo Único &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá, a seu exclusivo critério, ser representado&#40;a&#41; em AGE mediante procuração com poderes específicos a qualquer pessoa, inclusive à ADMINISTRADORA, na qual deverá constar as informações sobre a AGE previstas na Cláusula 83ª.
                    </p>   

                    <p>
                        Cláusula 87ª &#45; Fica convencionado que nas AGO e AGE:
                    </p>   

                    <p>
                        I&#41; cada Cota dará direito a 1 &#40;um&#41; voto, observada a pontualidade no pagamento das Parcelas;
                    </p>   

                    <p>
                        II&#41; a instalação será feita com qualquer número de CONSORCIADOS, representantes legais ou procuradores devidamente constituídos;
                    </p>   

                    <p>
                        III&#41; as deliberações serão tomadas por maioria dos votos dos presentes, não se computando os votos em branco;
                    </p>   

                    <p>
                        IV&#41; para efeito do disposto nos incisos anteriores desta cláusula, consideram-se presentes os CONSORCIADOS que, atendendo às condições de que trata a Cláusula 79ª, enviarem seus votos por carta com aviso de recebimento e desde que esses votos sejam recebidos pela ADMINISTRADORA até o último dia útil que anteceder ao dia da realização da AGE; e
                    </p>   

                    <p className='mid-space'>
                        V&#41; a ADMINISTRADORA lavrará as atas correspondentes.
                    </p>   

                    <p>
                        XX &#45; DA DISSOLUÇÃO DO GRUPO
                    </p>   

                    <p>
                        Cláusula 88ª &#45; A dissolução de Grupo deverá ser deliberada na AGE caso ocorra:
                    </p>   

                    <p>
                        I&#41; descumprimento, pela ADMINISTRADORA, das disposições legais relativas à administração do Grupo ou das disposições constantes deste Contrato;
                    </p>   

                    <p>
                        II&#41; exclusão de CONSORCIADOS em número que comprometa a realização de Contemplação dos CONSORCIADOS remanescentes no prazo estabelecido para a duração do Grupo; e
                    </p>   

                    <p>
                        III&#41; descontinuidade de produção do Bem Referenciado na Adesão.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 89ª &#45; Os valores pagos pelos CONSORCIADOS até a data da AGE que deliberou a dissolução do Grupo serão restituídos mensalmente e em igualdade de condições aos CONSORCIADOS e Consorciados Excluídos, observada a disponibilidade de caixa, por Rateio proporcional ao percentual amortizado do preço do Bem Referenciado ou Serviço Referenciado, vigente na data da referida AGE.
                    </p>   

                    <p>
                        XXI &#45; DA ADESÃO AO GRUPO EM ANDAMENTO
                    </p>   

                    <p>
                        Cláusula 90ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; que aderir a Grupo em andamento ficará obrigado&#40;a&#41; a integralizar 100% &#40;cem por cento&#41; do valor pago pelos outros CONSORCIADOS até a data da sua Adesão, acrescidas as taxas e encargos administrativos e prêmios de seguros.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 91ª &#45; O valor da Parcela do&#40;a&#41; CONSORCIADO&#40;A&#41; que aderir a Grupo em andamento, será calculado com base no valor resultante da divisão de 100% &#40;cem por cento&#41; do Crédito, acrescido das taxas e prêmios de seguros, pelo número de meses restantes para o encerramento do Grupo.
                    </p>   

                    <p>
                        XXII &#45; DO ENCERRAMENTO DO GRUPO
                    </p>   

                    <p>
                        Cláusula 92ª &#45; No prazo de 60 &#40;sessenta&#41; dias, a contar da data de Contemplação de todos os CONSORCIADOS e da disponibilização do último Crédito devido, a ADMINISTRADORA deverá adotar os seguintes procedimentos, desde que haja recursos suficientes do Grupo, e na seguinte ordem:
                    </p>   

                    <p>
                        I&#41; comunicar aos CONSORCIADOS que não tenham utilizado seus Créditos sobre a disposição para a retirada destes em moeda corrente nacional;
                    </p>   

                    <p>
                        II&#41; comunicar ao&#40;à&#41; Consorciado&#40;a&#41; Excluído&#40;a&#41; que não tenha utilizado a Restituição de Parcelas sobre a disposição para retirada deste em moeda corrente nacional, descontadas multas e encargos determinados nas Cláusulas 74ª a 78ª acima;
                    </p>   

                    <p>
                        III&#41; comunicar aos CONSORCIADOS sobre a disposição para retirada dos saldos existentes no Fundo Comum e no Fundo de Reserva em moeda corrente nacional, proporcionalmente às respectivas Parcelas mensais pagas.
                    </p>   

                    <p>
                        Parágrafo Único &#45; Fica estabelecido que a comunicação referida nesta Cláusula 92ª e seus incisos deverá ser realizada por meio de carta ou telegrama com aviso de recebimento ou, ainda, por e-mail.
                    </p>   

                    <p>
                        Cláusula 93ª &#45; O encerramento contábil do Grupo deverá ocorrer no prazo máximo de 120 &#40;cento e vinte&#41; dias, a contar da última AGO, e ser precedido da realização pela ADMINISTRADORA de depósito dos valores remanescentes ainda não devolvidos aos CONSORCIADOS e Consorciados Excluídos, desde que previamente autorizados na Adesão, em conta corrente e/ou conta poupança, comunicando-os da realização dos depósitos, ocasião em que se deve proceder à prestação de contas definitiva do Grupo, discriminando-se:
                    </p>   

                    <p>
                        I&#41; os valores remanescentes de titularidade dos CONSORCIADOS e Consorciados Excluídos, desde que estes não tenham recebido seu Crédito ou Restituição de Parcelas quando contemplados; e
                    </p>   

                    <p>
                        II&#41; os valores pendentes de recebimento, que sejam objeto de cobrança judicial de Consorciado&#40;a&#41; inadimplente.
                    </p>   

                    <p>                        
                        Parágrafo Único &#45; No caso de CONSORCIADO&#40;A&#41; falecido&#40;a&#41; o Crédito a ele devido deverá ser entregue aos seus herdeiros, com base em Escritura de Inventário Extrajudicial, Formal de Partilha, Alvará Judicial ou determinação judicial apresentada.
                    </p>   

                    <p>
                        Cláusula 94ª &#45; As importâncias não resgatadas no Encerramento do grupo ou decorrentes de Rateio pelos CONSORCIADOS ativos e Consorciados Excluídos após a comunicação por parte da ADMINISTRADORA serão consideradas VNP &#40;Valores não procurados&#41;.
                    </p>   

                    <p>
                        Parágrafo Primeiro &#45; Decorridos 31 &#40;trinta e um&#41; dias da data da comunicação mencionada no caput desta cláusula, não havendo resgate dos valores disponibilizados, fica a ADMINISTRADORA autorizada a deduzir, em razão da gestão do valor, a Taxa de Permanência Mensal, correspondente a 10% &#40;dez por cento&#41; do valor original dos recursos disponibilizados &#40;VNP&#41;, sendo, subsequentemente, extinta a exigibilidade do Crédito quando seu valor for inferior a R$ 30,00 &#40;trinta reais&#41;.
                    </p>   

                    <p>
                        Parágrafo Segundo &#45; Fica estabelecido que os Consorciados Excluídos não participam do Rateio, tendo tão somente o direito de receber o valor equivalente às Parcelas pagas até a data de sua exclusão.
                    </p>   

                    <p>
                        Cláusula 95ª &#45; Os VNP &#40;Valores Não Procurados&#41; receberão a remuneração correspondente ao rendimento mensal das aplicações financeiras de recursos, tendo por base outros grupos de consórcio ativos contabilizados de forma específica, independente dos registros contábeis da ADMINISTRADORA e outros grupos de consórcio.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 96ª &#45; O recebimento de valores pela ADMINISTRADORA referentes à Créditos recuperados por meio extrajudicial ou judicial, após o encerramento do Grupo, serão rateados proporcionalmente entre os CONSORCIADOS ativos, que se sujeitarão à cobrança de Taxa de Permanência mensal equivalente a 10% &#40;dez por cento&#41; do valor disponibilizado, sendo, subsequentemente, extinta a exigibilidade do Crédito quando seu valor for inferior a R$ 30,00 &#40;trinta reais&#41;.
                    </p>   

                    <p>
                        XXIII &#45; DAS OBRIGAÇÕES DAS PARTES
                    </p>   

                    <p>
                        Cláusula 97ª &#45; A ADMINISTRADORA obriga-se a:
                    </p>   

                    <p>
                        I&#41; disponibilizar, imediatamente, o Crédito ao&#40;à&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41;;
                    </p>   

                    <p>
                        II&#41; administrar o Grupo de forma transparente, prestando contas sempre que solicitadas;
                    </p>   

                    <p>
                        III&#41; colocar à disposição dos CONSORCIADOS na AGO, cópia do seu último balancete patrimonial, remetido ao BACEN, bem como da respectiva demonstração dos recursos de consórcios do Grupo e, ainda, da demonstração das variações nas disponibilidades do Grupo, relativa ao período compreendido entre a data da última assembleia e o dia anterior ou do próprio dia da realização da assembleia do mês, sendo esses documentos autenticados mediante assinatura dos diretores e do responsável pela contabilidade e acompanhados das notas explicativas e do parecer de auditoria independente, quando for o caso;
                    </p>   

                    <p>
                        IV&#41; lavrar as atas da AGC, das AGO e AGE, bem como os termos de ocorrência;
                    </p>   

                    <p>
                        V&#41; levantar o boletim de encerramento das operações do Grupo, até 60 &#40;sessenta&#41; dias após a realização da última AGO;
                    </p>   

                    <p>
                        VI&#41; encaminhar ao&#40;à&#41; CONSORCIADO&#40;A&#41;, juntamente ao documento de cobrança da Parcela, a demonstração dos recursos do consórcio e a demonstração das variações nas disponibilidades do Grupo, ambas referentes ao próprio Grupo, os quais serviram de base à elaboração dos documentos consolidados enviados ao BACEN;
                    </p>   

                    <p>
                        VII&#41; entregar, a diferença entre o valor recebido a título de indenização de seguro de vida e o valor do Saldo Devedor amortizado do&#40;a&#41; CONSORCIADO&#40;A&#41; ao&#40;à&#41; seu&#40;sua&#41; beneficiário&#40;a&#41; ou, em sua falta, aos&#40;às&#41; seus&#40;suas&#41; sucessores&#40;as&#41; mediante Escritura de Inventário Extrajudicial, Formal de Partilha, Alvará Judicial ou determinação judicial; e
                    </p>   

                    <p>
                        VIII&#41; cumprir todos os prazos e condições estabelecidos neste Contrato.
                    </p>   

                    <p>
                        Cláusula 98ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41; obriga-se a:
                    </p>   

                    <p>
                        I&#41; comunicar, por escrito, à ADMINISTRADORA, qualquer alteração em suas informações cadastrais, mantendo-as atualizadas, em especial, o endereço, número de telefone e dados relativos à conta bancária;
                    </p>   

                    <p>
                        II&#41; realizar, pontualmente, todos os pagamentos estabelecidos nas Cláusulas 22ª e 23ª, acima;
                    </p>   

                    <p>
                        III&#41; prestar as garantias exigidas neste Contrato; e
                    </p>   

                    <p className='mid-space'>
                        IV&#41; cumprir com todos os prazos e condições estabelecidos neste Contrato.
                    </p>   

                    <p>
                        XXIV &#45; DAS DISPOSIÇÕES GERAIS
                    </p>   

                    <p>
                        Cláusula 99ª &#45; Para fins de esclarecimento do mencionado nos campos nº 39 &#40;trinta e nove&#41; a 41 &#40;quarenta e um&#41; da Adesão, entende-se por Pessoas Politicamente Expostas os agentes públicos que desempenham ou tenham desempenhado, nos cinco anos anteriores a assinatura deste Contrato, cargos, empregos ou funções públicas relevantes no Brasil, assim como os seus representantes, familiares na linha direta, até o primeiro grau, e outras pessoas de seu relacionamento próximo, listados no ANEXO III.
                    </p>   

                    <p>
                        Cláusula 100ª &#45; É facultado ao&#40;à&#41; CONSORCIADO&#40;A&#41; desistir, a qualquer momento, do presente Contrato, desde que não esteja contemplado com o bem entregue, observado o disposto na Cláusula 14ª, que trata da desistência dentro do prazo de 7 &#40;sete&#41; dias da Adesão assinada fora das dependências da ADMINISTRADORA, na Cláusula 15ª, que trata da desistência de consorciado não contemplado, e na Cláusula 77ª, que trata da multa relativa à desistência descrita na Cláusula 15ª.
                    </p>   

                    <p>
                        Cláusula 101ª &#45; Fica estabelecido que o&#40;a&#41; CONSORCIADO&#40;A&#41; não poderá ceder este Contrato e sua respectiva Cota a terceiro, sem a anuência prévia e expressa da ADMINISTRADORA e da aprovação de garantias ofertadas pelo terceiro, caso a Cota esteja contemplada.
                    </p>   

                    <p>
                        Parágrafo Único &#45; É vedada a transferência do Contrato a terceiros por Consorciados Contemplados por Lance, com utilização de recursos do FGTS, que ainda não adquiriram o bem.
                    </p>   

                    <p>
                        Cláusula 102ª &#45; A ADMINISTRADORA, através de seus sócios, gerentes, diretores e prepostos com função de gestão, inclusive em sociedades/empresas coligadas, controladas ou controladoras, somente poderá participar de Grupo sob sua administração desde que não concorra à Contemplação, sendo o Crédito indicado em sua Cota atribuído somente após a Contemplação de todos os CONSORCIADOS.
                    </p>   

                    <p>
                        Cláusula 103ª &#45; A ADMINISTRADORA compromete-se a observar o dever de sigilo e confidencialidade quanto à todos os dados e informações fornecidas pelo&#40;a&#41; CONSORCIADO&#40;A&#41; durante a vigência da Adesão e do Contrato, devendo tal dever ser mantido por prazo indeterminado após o término ou extinção Grupo, devendo, ainda, a ADMINISTRADORA tomar todas as medidas técnicas necessárias para assegurar e proteger esses dados e informações contra acesso não autorizado, processamento ou encaminhamento indevidos, bem como contra destruição, perda ou alteração, conforme determina a Lei nº 13.709/2018 &#40;Lei de Proteção de Dados&#41;.
                    </p>   

                    <p>
                        Cláusula 104ª &#45; Este Contrato, após Contemplação do&#40;a&#41; CONSORCIADO&#40;A&#41;, é título executivo extrajudicial, e, portanto, passível de execução judicial em caso de inadimplência, conforme previsto na Cláusula 78ª, acima.
                    </p>   

                    <p>
                        Cláusula 105ª &#45; Fica limitado ao&#40;à&#41; CONSORCIADO&#40;A&#41; adquirir até 10% &#40;dez por cento&#41; do total de Cotas disponibilizadas pelo Grupo, desde que comprovada a sua capacidade financeira.
                    </p>   

                    <p>
                        Cláusula 106ª &#45; Os casos omissos no presente Contrato, quando de natureza administrativa, serão resolvidos pela ADMINISTRADORA e ratificados posteriormente pela AGO do Grupo e, quando de natureza legal ou regulamentar, deverão ser validados se aprovados pelo BACEN.
                    </p>   

                    <p>
                        Cláusula 107ª &#45; O&#40;A&#41; CONSORCIADO&#40;A&#41;, neste ato, declara ter lido e entendido o presente Contrato, bem como possuir situação financeira compatível com os compromissos ora assumidos.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 108ª &#45; O presente Contrato foi registrado no 1º Cartório de Registros de Títulos e Documentos da Cidade de Barueri/SP sob o nª 1.807.162 na data de 25/01/2022.
                    </p>   

                    <p>
                        XXV &#45; DO FORO
                    </p>   

                    <p className='mid-space'>
                        Cláusula 109ª &#45; Fica eleito o Foro da Comarca do local da constituição do Grupo, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir todos e quaisquer conflitos oriundos deste Contrato.
                    </p>   

                    <p>
                        ANEXO I
                    </p>   

                    <p>
                        DETALHAMENTO DA APURAÇÃO DO SORTEIO EXTRAÍDO PELA LOTERIA FEDERAL
                    </p>   

                    <p>
                        O detalhamento da apuração do sorteio mencionado na Cláusula 39ª, estabelecendo os critérios para o Sorteio a ser realizado pela Loteria Federal, segue abaixo descrito:
                    </p>   

                    <p>
                        Nos Grupos com CONSORCIADOS em centenas &#40;até 999 participantes&#41;, o sistema utilizará sempre a sequência das centenas dos prêmios e para Grupos com total de participantes até 9999, o sistema utilizará a sequência do milhar nos prêmios da Loteria Federal.
                    </p>   

                    <p>
                        A sequência de Contemplação é do primeiro prêmio ao quinto prêmio, analisando-se a centena. Por exemplo, se a Cota do primeiro prêmio não for encontrada o sistema seguirá para o prêmio seguinte. Se a Cota do segundo prêmio não for encontrada o sistema seguirá para o prêmio seguinte e assim sucessivamente.
                    </p>   

                    <p className='mid-space'>
                        Em seguida, caso o sistema não encontre uma Cota apta a ser contemplada, o sistema voltará para o primeiro prêmio buscando habilitar a Cota mais próxima do prêmio.
                    </p>   

                    <p>
                        ANEXO II
                    </p>   

                    <p>
                        INFORMAÇÕES RELEVANTES SOBRE SEGURO DAS COTAS
                    </p>   

                    <p>
                        1. CONCEITO DE SEGURO:
                    </p>   

                    <p>
                        É uma garantia de segurança e amparo familiar num momento de perda. Não se trata apenas de dinheiro, mas de assessoria completa aliada a benefícios adicionais à família.
                    </p>   

                    <p>
                        As condições gerais do seguro ficarão à disposição do segurado, bastando que este o solicite a ADMINISTRADORA.
                    </p>   

                    <p>
                        1.1. Seguro de Vida: ocorrendo a morte do segurado durante o período de diferimento contratado, o beneficiário fará jus ao recebimento do capital segurado contratado para a cobertura por morte, respeitando o procedimento de análise da seguradora.
                    </p>   

                    <p>
                        1.2. Seguro Prestamista: o Seguro Prestamista tem como objetivo garantir o pagamento de uma indenização para amortização da dívida contraída, referente ao Contrato, na ocorrência de morte ou invalidez permanente total por acidente. A ADMINISTRADORA será beneficiária da indenização do seguro para amortização do Saldo Devedor à época da ocorrência do sinistro.
                    </p>   

                    <p>
                        1.2.1. Caso o valor do capital segurado, na data do evento coberto, seja superior ao Saldo Devedor do segurado, o valor excedente, será pago ao beneficiário.
                    </p>   

                    <p>
                        2. Coberturas do Seguro Prestamista:
                    </p>   

                    <p>
                        2.1. Morte: garante o pagamento de uma indenização para cobertura do Saldo Devedor da Cota em caso de morte do segurado por causas naturais ou acidentais.
                    </p>   

                    <p>
                        2.1.1. Em caso de morte por doença pré-existente não ocorrerá a cobertura de seguro.                        
                    </p>   

                    <p>
                        2.2. Invalidez Permanente Total por Acidente: garante o pagamento de uma indenização correspondente ao capital segurado contratado, na ocorrência de perda e/ou redução funcional definitiva de um membro ou órgão do segurado, causada por acidente pessoal coberto.
                    </p>   

                    <p>
                        2.3. Assistência Funeral: será realizada por uma empresa prestadora de serviços de assistência, que colocará sua Central de Atendimento à disposição 24 &#40;vinte e quatro&#41; horas por dia, durante todo o ano.
                    </p>   

                    <p>
                        2.3.1 Quando ocorrer algum fato objeto de prestação dos serviços de assistência, entrar em contato nos seguintes telefones:
                    </p>   

                    <p>
                        Bradesco &#40;Seguro Prestamista e Capitalização&#41;<br />
                        &#45; 4004-2704 &#40;Capitais/Regiões Metropolitanas&#41;<br />
                        &#45; 0800 701 2714 &#45; &#40;Demais localidades&#41;
                    </p>   

                    <p>
                        MAPFRE &#40;Seguro de vida e Funeral&#41; <br />
                        &#45; 4002 7196 &#40;capitais e cidades metropolitanas&#41;<br />
                        &#45; 0800 775 7196 &#40;demais Localidades&#41;<br />
                        &#45; 55 11 4689-5672 &#40;exterior&#41;
                    </p>   

                    <p>
                        Será necessário informar o nome do consorciado, número do CPF, número da apólice, bem como o local onde se encontra e o serviço de que necessita.
                    </p>   

                    <p>
                        2.3.2 Serviços disponíveis: todos os serviços serão executados sempre com respeito às condições de religiosidade ou crença manifestada pela família, em caso de providências necessárias para a realização do funeral.
                    </p>   

                    <p>
                        2.3.3. Atendimento Social: o representante da empresa de assistência dirigir-se-á ao local do óbito, para coletar toda documentação necessária para as tratativas do sepultamento na funerária do município e tomará todas as medidas devidas para sua realização em companhia de um membro da família ou responsável, quando houver necessidade. Os documentos correspondentes serão entregues à família ou à pessoa responsável, que será devidamente informada das providências tomadas.
                    </p>   

                    <p>
                        2.3.4. A realização do funeral compreende: preparação do corpo, urna &#40;com ou sem visor&#41;, ornamentação da urna &#40;com flores da estação&#41;, 1 &#40;uma&#41; coroa de flores &#40;com flores da estação&#41;, véu, paramentos, velas &#40;se permitido no local da cerimônia&#41;, livro de presença, locação de sala para velório &#40;com taxas equivalentes às municipais&#41; e carro fúnebre. Todos os itens serão disponibilizados conforme a infraestrutura local. Não caberá à empresa de assistência a responsabilidade pela falta de itens que não estejam disponíveis ou não sejam comercializados em determinadas praças.
                    </p>   

                    <p>
                        3. Da Suspensão da Cobertura
                    </p>   

                    <p>
                        3.1. Caso o segurado ou seu representante legal ajam com dolo, pratiquem ato ilícito, cometam fraude ou tentativa de fraude no ato da contratação ou durante toda a vigência do Contrato, simulando ou provocando sinistro ou ainda agravando as consequências do mesmo para obter indenização ou dificultando sua elucidação.
                    </p>   

                    <p>
                        3.2 Caso o segurado não faça declarações verdadeiras e completas, omita circunstâncias do seu conhecimento que possam influir na aceitação, na taxação ou no conhecimento exato e caracterização do risco.
                    </p>   

                    <p>
                        3.3 Na hipótese de qualquer descumprimento das obrigações convencionadas no contrato de seguro.
                    </p>   

                    <p>
                        3.4 Findo o prazo de vigência do seguro individual, sem renovação.
                    </p>   

                    <p>
                        3.5 Cancelado o seguro, as coberturas só poderão ser reabilitadas mediante o preenchimento de nova Adesão e análise de aceitação por parte da seguradora.
                    </p>   

                    <p>
                        4. Da Indenização
                    </p>   

                    <p>
                        4.1 Para o recebimento da indenização, deverá o segurado e/ou beneficiários prestar toda a assistência que se fizer necessária e provar satisfatoriamente a ocorrência do sinistro, bem como relatar todas as circunstâncias relacionadas ao sinistro, facultado à seguradora a adoção de medidas tendentes à plena elucidação do fato.
                    </p>   

                    <p>
                        4.2 Todas as despesas efetuadas com a comprovação do sinistro e os documentos necessários correrão por conta do segurado, salvo as diretamente realizadas pela seguradora.
                    </p>   

                    <p className='mid-space'>
                        4.3 Os atos ou as providências que a seguradora praticar, após o sinistro, não importam, por si só, no reconhecimento da obrigação de pagar o capital segurado reclamado.
                    </p>   

                    <p>
                        ANEXO III
                    </p>   

                    <p>
                        PESSOAS POLITICAMENTE EXPOSTAS
                    </p>   

                    <p>
                        1. Consideram-se funções públicas relevantes no Brasil:
                    </p>   

                    <p>
                        1.1. Presidente ou Vice-Presidente da República; <br />
                        1.2. Senador ou Deputado Federal;<br />
                        1.3. Governador ou Vice-Governador de Estado e do Distrito Federal, os presidentes de Tribunal de Justiça, de Assembleia Legislativa e de Câmara Distrital, e os presidentes de Tribunal e de Conselho de Contas de Estado, de Municípios e do Distrito Federal; <br />
                        1.4. Ministro de Estado; <br />
                        1.5. Presidente, vice-presidente e diretor, ou equivalentes, de autarquias, fundações públicas, empresas públicas ou sociedades de economia mista; <br />
                        1.6. Membros do Conselho Nacional de Justiça, do Supremo Tribunal Federal e dos Tribunais Superiores; <br />
                        1.7. Membros do Conselho Nacional do Ministério Público, o Procurador-Geral da República, o Vice Procurador-Geral da República, o Procurador-Geral do Trabalho, o Procurador-Geral da Justiça Militar, os Subprocuradores-Gerais da República e os Procuradores-Gerais de Justiça dos Estados e do Distrito Federal; <br />
                        1.8. Membros do Tribunal de Contas da União e o Procurador-Geral do Ministério Público junto ao Tribunal de Contas da União; <br />e
                        1.9. Prefeito, Vice-Prefeito, Presidente e Vice-Presidente de Câmara Municipal da capital de Estado.
                    </p>   

                    <p>
                        2. Consideram-se familiares de Pessoas Politicamente Expostas:
                    </p>   

                    <p>
                        2.1. genitores; <br />
                        2.2. filhos; <br />
                        2.3. enteados; <br />
                        2.4. cônjuge; <br />
                        2.5. convivente ou companheiro; <br />
                        2.6. irmãos; e <br />
                        2.7. padrastos ou madrastas.
                    </p>   

                    <p>
                        3. Consideram-se representantes de Pessoas Politicamente Expostas:
                    </p>   

                    <p className='mid-space'>
                        3.1. representante legal ou procurador; <br />
                        3.2. assessor ou assistente parlamentar; <br />
                        3.3. assessor ou assistente técnico; <br />
                        3.4. assessor ou assistente jurídico; e <br />
                        3.5. sócio.
                    </p>   

                    <p>
                        ANEXO IV
                    </p>   

                    <p>
                        PRINCIPAIS ORIENTAÇÕES E DOCUMENTOS CADASTRAIS
                    </p>   

                    <p>
                        Para a análise de crédito de bens móveis, imóveis e serviços o&#40;a&#41; Consorciado&#40;a&#41; Contemplado&#40;a&#41; deverá seguir as orientações abaixo, bem como apresentar os documentos cadastrais a seguir listados.
                    </p>   

                    <p>
                        Critério Seletivo de Crédito:
                    </p>   

                    <p>
                        PRINCIPAIS ORIENTAÇÕES
                    </p>   

                    <p>
                        Documentação &#45; Todos os documentos deverão ser acompanhados da ficha cadastral, devidamente assinados. Em caso de documentos incompletos ou insuficientes para aprovação, o setor de crédito poderá solicitar documentos complementares, pedindo, inclusive, que se apresente Fiador para garantir o pagamento por meio de Fiança.
                    </p>   

                    <p>
                        Comprovação de renda &#45; Deverá ser igual ou superior a 3 &#40;três&#41; vezes o valor da Parcela, caso utilize mais Cotas para a compra de um bem, a comprovação de renda deverá ser igual ou superior a 3 &#40;três&#41; vezes o valor das Parcelas de todas as Cotas somadas;
                    </p>   

                    <p>
                        Pagamento da taxa de cadastro &#45; Poderá ser realizado por boleto ou descontado do Crédito, caso em que é necessário o envio da carta de solicitação do&#40;a&#41; CONSORCIADO&#40;A&#41; nesse sentido;
                    </p>   

                    <p>
                        Restrição de crédito &#45; O Crédito não poderá ser aprovado caso o&#40;a&#41; CONSORCIADO&#40;A&#41;, titular da Cota contemplada, possuir à época da análise restrição de crédito vigente &#40;Serasa/SCPC&#41;.
                    </p>   

                    <p>
                        Prazo de análise &#45; É de até 5 &#40;cinco&#41; dias úteis, a contar do recebimento da documentação completa, pelo setor de crédito.
                    </p>   

                    <p>
                        Utilização do Crédito aprovado &#45; É recomendado que se realize imediatamente o processo de faturamento do bem, visto que a citada análise perde a validade após 60 &#40;sessenta&#41; dias da data de aprovação, ficando o&#40;a&#41; CONSORCIADO&#40;A&#41; sujeito&#40;a&#41; à reanálise, com reapresentação da documentação.
                    </p>   

                    <p>
                        Caso o&#40;a&#41; CONSORCIADO&#40;A&#41; não apresente documentos pendentes para a conclusão da análise dentro do prazo de 60 &#40;sessenta&#41; dias, a contar do pedido, esse processo de análise será enviado para arquivo.
                    </p>   

                    <p>
                        Os documentos solicitados deverão ser encaminhados através de link direcionado ao&#40;a&#41; CONSORCIADO&#40;A&#41; quando da análise de crédito, pelo qual o&#40;a&#41; CONSORCIADO&#40;A&#41; realizará upload dos documentos que serão direcionados automaticamente ao setor responsável.
                    </p>   

                    <p>
                        DOCUMENTOS NECESSÁRIOS PARA ANÁLISE DE CRÉDITO
                    </p>   

                    <p>
                        Pessoa Física
                    </p>   
                    
                    <p>
                        Documentos pessoais [Obrigatório 1 &#40;um&#41; dos documentos abaixo]: <br />
                        &#45; RG e CPF/ME; <br />
                        &#45; Carteira Nacional de Habilitação &#40;“CNH”&#41; válida; <br />
                        &#45; Carteira das Forças Armadas; <br />
                        &#45; Carteira de Conselho de Classe &#40;CRM, OAB e etc.&#41;, válida; ou <br />
                        &#45; Registro Nacional de Estrangeiro &#40;“RNE”&#41;.
                    </p>   

                    <p>
                        Comprovante de Endereço [Obrigatório 1 &#40;um&#41; dos documentos abaixo]: <br />
                        &#45; Conta de consumo atualizada &#40;água, luz, telefone fixo&#41; em seu nome ou em nome de familiar com o mesmo sobrenome &#40;pai, mãe, irmãos, cônjuge ou filhos&#41;, desde que residam no mesmo endereço com declaração de residência; ou <br />
                        &#45; Fatura de cartão de crédito que tenha bandeira &#40;Visa, Mastercard, Elo, Hiper e entre outros&#41;.
                    </p>   

                    <p>
                        Comprovante de renda:
                    </p>   

                    <p>
                        Para Assalariados &#40;Todos os documentos são obrigatórios&#41;:<br />
                        &#45; 3 &#40;três&#41; últimos holerites; e<br />
                        &#45; Carteira de Trabalho e Previdência Social &#40;“CTPS”&#41;, cópia das páginas com foto, qualificação e contrato de trabalho.
                    </p>   

                    <p>
                        Para Assalariados com renda variável &#45; Comissionado/Hora Extra &#40;Todos os documentos são obrigatórios&#41;:<br />
                        &#45; 3 &#40;três&#41; últimos holerites; <br />
                        &#45; CTPS, cópia das páginas com foto, qualificação e contrato de trabalho; e <br />
                        &#45; Extrato bancário de conta corrente dos últimos 3 &#40;três&#41; meses.
                    </p>   

                    <p>
                        Para Autônomos &#40;Todos os documentos são obrigatórios&#41; <br />
                        &#45; Declaração de Imposto de Renda de Pessoa Física &#40;“DIRPF”&#41; do último exercício, com recibo e protocolo de entrega; ou 3  &#40;três&#41; últimas DARF’S/DAS de recolhimento de Imposto de Renda de Pessoa Física &#40;Carnê Leão&#41;, se a renda for passível de tributação; <br />
                        &#45; Extrato bancário de conta corrente dos últimos 6 &#40;seis&#41; meses; e <br />
                        &#45; Se profissional liberal enviar a Carteira de Conselho de Classe.
                    </p>   

                    <p>
                        Para Aposentados ou Pensionistas &#40;Todos os documentos são obrigatórios&#41;: <br />
                        &#45; Cartão com o número do benefício e espécie; e <br />
                        &#45; 3 &#40;três&#41; últimos extratos bancários.
                    </p>   

                    <p>
                        Para Funcionários Públicos &#40;Todos os documentos são obrigatórios&#41;: <br />
                        &#45; 3 &#40;três&#41; últimos holerites; <br />
                        &#45; Carta de nomeação ou funcional; e <br />
                        &#45; DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação.
                    </p>   

                    <p>
                        Para Produtores Rurais: <br />
                        &#45; 6 &#40;seis&#41; últimas notas fiscais do produtor rural; <br />
                        &#45; 6 &#40;seis&#41; últimos extratos bancários de conta corrente; <br />
                        &#45; Cadastro do INCRA ou cópia do último Imposto Territorial Rural &#40;“ITR”&#41; pago; e <br />
                        &#45; DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação.
                    </p>   

                    <p>
                        Para Motoristas de Táxi ou Transporte Escolar e de Passageiros &#45; &#40;Todos os documentos são obrigatórios&#41;:     <br />
                        &#45; Alvará da Prefeitura; <br />
                        &#45; Extrato bancário de conta corrente dos últimos 6 &#40;seis&#41; meses; <br />
                        &#45; Em caso de Motorista de aplicativos, extratos das viagens; e <br />
                        &#45; DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação.
                    </p>   

                    <p>
                        Para Empresários e/ou Sócios de Sociedades Empresárias &#40;Todos os documentos são obrigatórios&#41;:<br />
                        &#45; DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação; e <br />
                        &#45; Extrato bancário de conta corrente dos últimos 6 &#40;seis&#41; meses. 
                    </p>   

                    <p>
                        Pessoa Jurídica
                    </p>   

                    <p className='mid-space'>
                        Documentos pessoais e comprovante de renda &#40;Todos os documentos são obrigatórios&#41;: <br />
                        &#45; Comprovante da sede da pessoa jurídica, como contas de consumo em nome da sociedade ou empresa &#40;água, gás, luz, condomínio e/ou aluguel&#41;; <br />
                        &#45; Contrato Social e última alteração contratual ou Estatuto Social, acompanhado da ata de eleição da diretoria, devidamente registrados na Junta Comercial do Estado da sede da sociedade; <br />
                        &#45; Apresentação da declaração do Simples Nacional, indicando a receita mês a mês; <br />
                        &#45; Faturamento dos últimos 12 &#40;doze&#41; meses assinados pelo contador, indicando o número de inscrição no Conselho Regional de Contabilidade &#40;“CRC”&#41;; <br />
                        &#45; Extrato bancário de conta corrente dos últimos 6 &#40;seis&#41; meses; e <br />
                        &#45; Os sócios deverão apresentar todos os documentos que constam na lista de Pessoa Física, mencionados acima.
                    </p>   

                    <p>
                        ANEXO V
                    </p>   

                    <p>
                        DOCUMENTOS COMPLEMENTARES / BENS MÓVEIS E SERVIÇOS
                    </p>   

                    <p>
                        Feita a Contemplação, o&#40;a&#41; CONSORCIADO&#40;A&#41; participante do segmento de bem móvel e serviços, deverá apresentar à ADMINISTRADORA, além dos documentos descritos no ANEXO IV, os documentos complementares a seguir descritos e, conforme orientações abaixo.
                    </p>   

                    <p>
                        I&#41; automóveis fabricados entre 0 &#40;zero&#41; e 7 &#40;sete&#41; anos da data da compra, deverão ter valor de mercado equivalente ou superior ao Saldo Devedor;
                    </p>   

                    <p>
                        II&#41; automóveis fabricados entre 8 &#40;oito&#41; e 12 &#40;doze&#41; anos da data da compra, deverão ter valor de mercado equivalente a 50% &#40;cinqüenta por cento&#41;, no mínimo, do Saldo Devedor;
                    </p>   

                    <p>
                        III&#41; automóveis fabricados 12 &#40;doze&#41; anos antes da data da compra não serão aceitos como garantia;
                    </p>   

                    <p>
                        IV&#41; bens provenientes de leilão judicial ou extrajudicial não serão aceitos como garantia;
                    </p>   

                    <p>
                        V&#41; apresentação de avaliação com laudo técnico de empresa especializada indicada pela ADMINISTRADORA, contendo no mínimo 3 &#40;três&#41; fotos, decalque de chassis, decalque do motor e extrato onde não constem débitos de IPVA, multas, licenciamento e outros;
                    </p>   

                    <p>
                        VI&#41; apresentação de prova de que o vendedor detenha a propriedade do bem a ser adquirido;
                    </p>   

                    <p>
                        VII&#41; comprovação da inexistência de ônus e encargos incidentes sobre o bem a ser adquirido e restrições relacionadas ao proprietário do referido bem;
                    </p>   

                    <p>
                        VIII&#41; preenchimento do Certificado de Registro de Veículo &#40;“CRV”&#41; deverá aguardar a aprovação da vistoria do bem, no caso de compra de veículo automotor de pessoa física, cuja assinatura do vendedor deverá ser reconhecida por autenticidade; e
                    </p>   

                    <p>
                        IX&#41; emissão de Nota Fiscal, no caso de compra de veículo automotor de revendedora, deverá ocorrer após aprovação da vistoria do bem.
                    </p>   

                    <p>
                        Para andamento do processo de aquisição do bem, após aprovação do crédito, verificar abaixo as orientações para veículo 0 &#40;zero&#41; quilômetro ou usado.
                    </p>   

                    <p>
                        Não serão aceitos bens com data de fabricação superior a 12 anos como garantia.
                    </p>   

                    <p>
                        Enviar a Solicitação de Faturamento preenchida e assinada, constando nome e qualificação completa do vendedor e do bem a ser adquirido e, no caso de veículo usado, enviar o laudo de vistoria conforme orientação acima.
                    </p>   

                    <p>
                        Após a análise e aprovação do laudo de vistoria do veículo apresentado, a ADMINISTRADORA emitirá a autorização de faturamento confirmando o valor de Crédito e contrato com os respectivos dados para constituição de Alienação Fiduciária.
                    </p>   

                    <p>
                        Para veículos zero km: <br />
                         Nota fiscal, caso não seja Nota Fiscal eletrônica &#40;“NFe”&#41;, deverá ser enviada a 1ª &#40;primeira&#41; via original&#41;; e<br />
                         Contrato de Alienação Fiduciária em Garantia Original, emitido pela ADMINISTRADORA.
                    </p>   

                    <p>
                        Para veículos usados:
                    </p>   

                    <p>
                        Compra em lojas ou concessionárias:<br />
                         Nota fiscal de entrada e de saída, caso não seja Nota fiscal eletrônica &#45; NFe, deverá ser enviada a 1ª &#40;primeira&#41; via original; <br />
                         Contrato de Alienação Fiduciária em Garantia Original, emitido pela ADMINISTRADORA; <br />
                         Caso a loja não possua a nota fiscal de entrada do veículo, deverá ser enviada a cópia autenticada do Documento Único de  Transferência &#40;“DUT”&#41; do veículo, preenchido em nome do CONSORCIADO e com as devidas assinaturas e reconhecimento por autenticidade que deverá ser na cidade/município que reside.
                    </p>   

                    <p>
                        Compra de Pessoa Física: < br/>
                         Cópia autenticada original do DUT do veículo preenchido em nome do CONSORCIADO e com as devidas assinaturas e reconhecimento por autenticidade que deverá ser na cidade/município que reside; e < br/>
                         Contrato de Alienação Fiduciária em Garantia Original, emitido pela ADMINISTRADORA.
                    </p>   

                    <p>
                        O pagamento ao vendedor será realizado em até 72 &#40;setenta e duas&#41; horas, após o recebimento da documentação original de garantia na sede da ADMINISTRADORA.
                    </p>   

                    <p className='mid-space'>
                        Os documentos de garantia originais mencionados acima deverão ser entregues aos cuidados do setor de crédito no endereço da ADMINISTRADORA.
                    </p>   

                    <p>
                        ANEXO VI
                    </p>   

                    <p>
                        DOCUMENTOS COMPLEMENTARES / BENS IMÓVEIS
                    </p>   

                    <p>
                        Feita a Contemplação, o&#40;a&#41; CONSORCIADO&#40;A&#41; participante do segmento de bem imóvel deverá apresentar à ADMINISTRADORA, além dos documentos descritos no ANEXO IV, os documentos complementares a seguir descritos e conforme orientações abaixo.
                    </p>   

                    <p>
                        Para utilização de recursos provenientes de FGTS, procure um Agente Financeiro para verificação dos documentos necessários.
                    </p>   

                    <p>
                        Consorciado&#40;a&#41; representado por terceiro: somente poderá ser representado por terceiro através da nomeação de procurador por outorga de instrumento público, em caráter irrevogável e irretratável, com poderes específicos para representar o&#40;a&#41; CONSORCIADO&#40;A&#41; em todos os assuntos relacionados ao Consórcio e ao negócio que está sendo entabulado, conforme texto adiante:
                    </p>   

                    <p>
                        “Conceder poderes para representá-lo na formalização de pedido de participação em grupo de consorcio, bem como aderir ao seguro de vida em grupo vinculado ao contrato, participar, votar e ofertar lances nas assembleias ordinária e extraordinária, desistir, transferir ou ceder o contrato e a respectiva cota, transigir, concordar, acordar, receber e dar quitação, confessar, renunciar, receber citações e intimações extrajudiciais e judiciais, assinar contratos públicos ou particulares em cartórios de notas ou de registro de imóveis que se façam necessários, inclusive de retificação ou de rescisão, representá-lo nas repartições públicas e privadas e demais órgãos dos poderes executivo, legislativo e judiciário, enfim, praticar conjunta ou isoladamente, todos e quaisquer atos necessários ao bom e fiel desempenho do presente mandato, inclusive substabelecer esta a outrem, com ou sem reserva de iguais poderes, dando tudo por bom, firme e valioso.”
                    </p>   

                    <p>
                        A procuração deverá ainda conter os dados de especificação do imóvel a ser adquirido para se adequar à lavratura de escritura e registro imobiliários pertinentes.
                    </p>   

                    <p>
                        No caso de CONSORCIADOS residentes no exterior, a procuração pública deverá ser feita pelo Consulado do país de residência ou através da Embaixada e ao ser enviada para o procurador no Brasil deverá ser traduzida por tradutor juramentado e registro em cartório de títulos e documentos.
                    </p>   

                    <p>
                        Documentos necessários para a representação por terceiros:
                    </p>   

                    <p>
                        a&#41; certidão atualizada de procuração pública elaborada de acordo com as especificações acima, com no máximo 30 &#40;trinta&#41; dias de expedição; e
                    </p>   

                    <p>
                        b&#41; apresentação pelo procurador de cópia autenticada do seu RG e CPF ou CNH e original ou cópia autenticada do comprovante de residência.
                    </p>   

                    <p className='mid-space'>
                        A exigência de tais documentos se dá em razão de garantir, pelo procurador, o recebimento de correspondências, informações, citações e/ou intimações em nome do&#40;a&#41; CONSORCIADO&#40;A&#41; outorgante.
                    </p>   

                    <p>
                        ETAPA 1 &#45; Análise Cadastral e Capacidade de Pagamento
                    </p>   

                    <p>
                        1. CRITÉRIO SELETIVO DE CRÉDITO:
                    </p>   

                    <p>
                        Além da documentação solicitada para análise de crédito, para o caso de Cotas destinadas à aquisição de imóveis ou reforma, far-se-á necessário apresentar as certidões negativas de protestos, ações cíveis, fiscais &#40;municipais, estaduais e federais&#41; e trabalhistas, solicitadas após a aprovação do Crédito e avaliação do bem imóvel;
                    </p>   

                    <p>
                        A ADMINISTRADORA se reserva o direito de solicitar quaisquer documentos que julgue necessários à complementação da comprovação de renda.
                    </p>   

                    <p>
                        ETAPA 2 &#45; Avaliação Documental do Vendedor e do Imóvel
                    </p>   

                    <p>
                        1. DOCUMENTAÇÃO DO IMÓVEL:
                    </p>   

                    <p>
                        1.1. espelho ou Carnê de IPTU ou Certidão de Valor Venal do ano vigente, sendo original ou cópia autenticada;
                    </p>   

                    <p>
                        1.2. certidão negativa de débito de IPTU, sendo original e atualizada, uma vez que não serão aceitos imóveis com débitos de IPTU ou acordos em andamento;
                    </p>   

                    <p>
                        1.3. certidão de propriedade do registro de imóveis atualizada &#40;matrícula&#41;, com negativa de ônus e alienações, em que deverão constar todas as averbações relativas ao estado civil dos proprietários, às construções existentes e às alterações de endereço e numeração do imóvel, devendo ser apresentadas em via original e ser válida por 30 &#40;trinta&#41; dias, a contar da data de emissão;
                    </p>   

                    <p>
                        1.4. cópia da certidão da matrícula anterior do registro de imóveis, para matrículas de imóveis, abertas há menos de 1 &#40;um&#41; ano;
                    </p>   

                    <p>
                        1.5. declaração de quitação das despesas condominiais, emitidas até 30 &#40;trinta&#41; dias anteriores à apresentação, assinada pelo síndico ou administradora de condomínio, com firma reconhecida e, acompanhada da cópia autenticada da ata de eleição ou da contratação do síndico, não sendo aceitos imóveis com débitos ou acordos condominiais em andamento; e
                    </p>   

                    <p>
                        1.6. no caso de locação, prova de oferta de venda do imóvel para o locatário, comprovando a chance de exercício do direito de preferência e resposta assinada pelo inquilino, com a firma reconhecida, além da cópia simples do contrato de locação.
                    </p>   

                    <p>
                        2. DOCUMENTAÇÃO DO VENDEDOR E SEU CÔNJUGE:
                    </p>   

                    <p>
                        2.1. cópia simples de certidão de nascimento para vendedores solteiros;
                    </p>   

                    <p>
                        2.2. cópia autenticada da certidão de casamento atualizada e, se houver, escritura de pacto antenupcial, quando o vendedor for casado, bem como seu registro;
                    </p>   

                    <p>
                        2.3. cópia autenticada da certidão de casamento com averbação do atual estado civil, obtida no prazo de até 6 &#40;seis&#41; meses anteriores à venda, quando o vendedor for separado, divorciado ou viúvo;
                    </p>   

                    <p>
                        2.4. cópia autenticada da certidão de nascimento ou casamento emitida no exterior devidamente apostilada, traduzida e registrada no cartório de títulos e documentos, quando o vendedor for estrangeiro, independente do estado civil;
                    </p>   

                    <p>
                        2.5. cópia simples de comprovante de residência atual, sendo aceitas as contas de luz, de gás, de telefone fixo ou correspondência bancária;
                    </p>   

                    <p>
                        2.6. cópia autenticada da cédula de identidade e do CPF ou CNH do vendedor e respectivo cônjuge;
                    </p>   

                    <p>
                        2.7. certidões pessoais dos atuais proprietários e cônjuges expedidas no local de residência e no local do imóvel, conforme abaixo:
                    </p>   

                    <p>
                        2.7.1. certidão de ações cíveis, do juizado especial cível e de família &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.7.2. certidão de interdições, tutela e curatela &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.7.3. certidão de Executivos Fiscais, Estaduais e Municipais &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.7.4. certidão da Justiça Federal &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.7.5. certidão da Justiça do Trabalho &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;;
                    </p>   

                    <p>
                        2.7.6. certidão Negativa de Débitos Trabalhistas &#40;“CNDT”&#41;;
                    </p>   

                    <p>
                        2.7.7. certidão dos 10 &#40;dez&#41; Cartórios de Protesto &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;; e
                    </p>   

                    <p>
                        2.7.8. certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União.
                    </p>   

                    <p>
                        O prazo de validade das certidões relacionadas no item 2.7 e seus subitens é de 30 &#40;trinta&#41; dias contados da data de emissão, exceto para certidões com prazo de validade determinado pelo órgão emissor.
                    </p>   

                    <p>
                        3. DOCUMENTAÇÃO DO VENDEDOR PESSOA JURÍDICA
                    </p>   

                    <p>
                        3.1. cópia autenticada do Contrato Social última alteração ou Estatuto Social e ata da eleição da atual diretoria, publicados no Diário Oficial;
                    </p>   

                    <p>
                        3.2. cópia autenticada ou certidão emitida pela internet do cartão do CNPJ;
                    </p>   

                    <p>
                        3.3. via original da Certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União, válida;
                    </p>   

                    <p>
                        3.4. certidão de breve relato da Junta Comercial;
                    </p>   

                    <p>
                        3.5. cópia autenticada dos documentos pessoais dos sócios, representante legais ou procuradores;
                    </p>   

                    <p>
                        3.6. cópia autenticada da procuração válida, sendo necessário o prazo de validade máximo de 1 &#40;um&#41; ano, no caso de venda realizada por procurador;
                    </p>   

                    <p>
                        3.7. certidões expedidas no local da sede social e no local do imóvel, conforme abaixo:
                    </p>   

                    <p>
                        3.7.1. certidão de ações cíveis e do juizado especial cível &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        3.7.2. certidão de Executivos Fiscais, Estaduais e Municipais &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        3.7.3. certidão da Justiça Federal &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        3.7.4. certidão de Falência e Concordata &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        3.7.5. certidão da Justiça do Trabalho &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;;
                    </p>   

                    <p>
                        3.7.6. certidão Negativa de Débitos Trabalhistas &#40;“CNDT”&#41;;e
                    </p>   

                    <p>
                        3.7.7. certidão dos 10 &#40;dez&#41; cartórios de protesto &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;.
                    </p>   

                    <p>
                        O prazo de validade das certidões relacionadas no item 3.7 e seus subitens é de 30 &#40;trinta&#41; dias contados da data de emissão, exceto para certidões com prazo de validade determinado pelo órgão emissor.
                    </p>   

                    <p>
                        ETAPA 3 &#45; Avaliação do Imóvel
                    </p>   

                    <p>
                        CERTIDÕES DOS PROPRIETÁRIOS ANTERIORES &#40;ÚLTIMO ANO DE REGISTRO NA MATRÍCULA&#41;.
                    </p>   

                    <p>
                        Deverão ser apresentadas as certidões dos proprietários anteriores, abaixo relacionadas, caso a venda anterior do imóvel tenha sido registrada na matrícula a menos de 1 &#40;um&#41; ano.
                    </p>   

                    <p>
                        Serão aceitas as certidões apresentadas na época da venda, com prazo de emissão de até 90 &#40;noventa&#41; dias anteriores ao registro da escritura de compra e venda.
                    </p>   

                    <p>
                        1. Proprietário Anterior &#40;Pessoa Física&#41;: certidões originais, expedidas no local do imóvel:
                    </p>   

                    <p>
                        1.1. certidão de ações cíveis, do juizado especial cível e de família &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        1.2. certidão de interdições, tutela e curatela &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        1.3. certidão de Executivos Fiscais, Estaduais e Municipais &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        1.4. certidão da Justiça Federal &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        1.5. certidão da Justiça do Trabalho &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;;
                    </p>   

                    <p>
                        1.6. CNDT;
                    </p>   

                    <p>
                        1.7. certidão dos 10 &#40;dez&#41; cartórios de protesto &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;; e
                    </p>   

                    <p>
                        1.8. certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União.
                    </p>   

                    <p>
                        2. Proprietário Anterior &#40;Pessoa Jurídica&#41;: as certidões originais, expedidas no local da sede da empresa e local do imóvel.
                    </p>   

                    <p>
                        2.1. certidão de ações cíveis e do juizado especial cível &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.2. certidões de Executivos Fiscais, Estaduais e Municipais &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.3. certidão da Justiça Federal &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.4. certidão de Falência e Concordata &#40;pesquisa dos últimos 10 &#40;dez&#41; anos&#41;;
                    </p>   

                    <p>
                        2.5. certidão da Justiça do Trabalho &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;;
                    </p>   

                    <p>
                        2.6. CNDT;
                    </p>   

                    <p>
                        2.7. certidão dos Cartórios de Protestos &#40;pesquisa dos últimos 5 &#40;cinco&#41; anos&#41;; e
                    </p>   

                    <p>
                        2.8. certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União.
                    </p>   

                    <p>
                        ETAPA 4 &#45; Instrumento Particular com Alienação Fiduciária em Garantia à ADMINISTRADORA
                    </p>   

                    <p>
                        Para garantir o pagamento das Parcelas vincendas será exigida do Contemplado a Alienação Fiduciária do Bem adquirido, na forma da Lei nº 9.514/97, submetendo ao registro no cartório imobiliário competente, devendo ainda ser apresentadas pelo&#40;a&#41; CONSORCIADO&#40;A&#41; e pelo vendedor, todas as certidões relacionadas nas etapas anteriores, bem como do bem a ser adquirido.
                    </p>   

                    <p>
                        O&#40;A&#41; CONSORCIADO&#40;A&#41; deverá apresentar sua ficha cadastral, bem como a ficha cadastral dos avalistas, se for o caso, e cópias dos documentos de identidade, entre outros que forem considerados indispensáveis pela ADMINISTRADORA;
                    </p>   

                    <p>
                        O objeto da Alienação Fiduciária dado em garantia poderá ser substituído mediante prévia autorização da ADMINISTRADORA.
                    </p>   

                    <p>
                        ETAPA 5 &#45; Pagamento do Bem Imóvel
                    </p>   

                    <p>
                        O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá utilizar o Crédito para adquirir o Bem Referenciado na Adesão, novo ou usado, já edificado e com habite-se.
                    </p>   

                    <p>
                        O&#40;A&#41; CONSORCIADO&#40;A&#41; poderá adquirir o bem imóvel de propriedade de empresa da qual seja sócio ou acionista, desde que não seja MEI, ME ou EIRELI.
                    </p>   

                    <p>
                        O&#40;A&#41; CONSORCIADO&#40;A&#41; não poderá adquirir bem imóvel de propriedade de cônjuge.
                    </p>   

                    <p>
                        A ADMINISTRADORA reserva-se no direito de avaliar o imóvel a ser adquirido pelo&#40;a&#41; CONSORCIADO&#40;A&#41; e, caso julgue que este não cubra as garantias necessárias, não disponibilizará o valor do Crédito, cabendo ao&#40;à&#41; CONSORCIADO&#40;A&#41; a indicação de outro bem, o qual estará sujeito à aplicação dos mesmos procedimentos e critérios.
                    </p>   

                    <p>
                        Caso o valor do bem a ser adquirido seja superior ao valor do Crédito, o&#40;a&#41; CONSORCIADO&#40;A&#41; deverá pagar a diferença diretamente ao vendedor.
                    </p>   

                    <p>
                        Caso o bem a ser adquirido seja de valor inferior ao Crédito, o&#40;a&#41; CONSORCIADO&#40;A&#41; poderá destinar a respectiva diferença para pagar:
                    </p>   

                    <p>
                        1. parcelas vincendas, na forma estabelecida na Cláusula 36ª do Contrato;
                    </p>   

                    <p>
                        2. obrigações financeiras vinculadas ao bem, tais como as realizadas com escritura, taxas, emolumentos e registro das garantias, limitado a 10% &#40;dez por cento&#41; do valor do Crédito.
                    </p>   

                    <p>
                        Caso o&#40;a&#41; CONSORCIADO&#40;A&#41; tenha quitado integralmente seu débito, a diferença do Crédito resultante de aquisição de bem de menor valor, ser-lhe-á restituída em espécie.
                    </p>   

                    <p>
                        O&#40;A&#41; CONSORCIADO&#40;A&#41; que, após a Contemplação, tiver pago com recursos próprios importância para a aquisição do bem, poderá receber esse valor em espécie até o montante do Crédito, observando-se as disposições aqui estabelecidas.
                    </p>   

                    <p>
                        Decorridos 180 &#40;cento e oitenta&#41; dias da Contemplação, o&#40;a&#41; CONSORCIADO&#40;A&#41; poderá requerer a conversão do Crédito em espécie, desde que pague integralmente seu Saldo Devedor.
                    </p>   

                    <p>
                        ANEXO VII
                    </p>   

                    <p>
                        DOCUMENTOS PARA ENTREGA DE CARTA DE CRÉDITO DE SERVIÇOS
                    </p>   

                    <p>
                        Para entrega do Crédito ao&#40;à&#41; CONSORCIADO&#40;A&#41; em caso de cotas relativas ao Serviço Referenciado, ele&#40;ela&#41; deverá apresentar à ADMINISTRADORA:
                    </p>   

                    <p>
                        a&#41; garantia ou garantias complementares, conforme o disposto nas Cláusulas 59ª à 71ª, observado que, no caso de veículo automotor, este deverá estar em nome do&#40;a&#41; CONSORCIADO&#40;A&#41;, devidamente quitado e segurado, ficando à critério da ADMINISTRADORA a aceitação desse veículo nos termos do ANEXO V.
                    </p>   

                    <p>
                        b&#41; contrato de prestação de serviços;
                    </p>   

                    <p>
                        c&#41; nota fiscal emitida pelo prestador; e
                    </p>   

                    <p>
                        d&#41; autorização do cliente para pagamento ao serviço contratado.
                    </p>   

                    <p>
                        ANEXO VIII
                    </p>   

                    <p>
                        TAXAS DE TRANSFERÊNCIA OU SUBSTITUIÇÃO DE GARANTIA
                    </p>   

                    <p>
                        Segue abaixo o detalhamento das taxas de transferência ou substituição de garantia mencionadas na Cláusula 23ª do Contrato:
                    </p>   

                    <p>
                        1. 1% &#40;um por cento&#41; sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para a transferência de Cota já contemplada, cujo Crédito já tenha sido utilizado pelo&#40;a&#41; CONSORCIADO&#40;A&#41;;
                    </p>   

                    <p>
                        2. 1% &#40;um por cento&#41; sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para a transferência de Cota não contemplada;
                    </p>   

                    <p>
                        3. 1% &#40;um por cento&#41; sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para a transferência de Cota já contemplada, cujo Crédito não tenha sido utilizado pelo&#40;a&#41; CONSORCIADO&#40;A&#41;; e
                    </p>   

                    <p>
                        4. 1% &#40;um por cento&#41; sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para substituição de garantias.
                    </p>   

                    <p>
                        ANEXO IX
                    </p>   

                    <p>
                        INFORMAÇÕES QUANTO A RESTITUIÇÃO DE VALORES PAGOS
                    </p>   

                    <p>
                        Como é realizada a restituição de valores no sistema de consórcio?
                    </p>   

                    <p>
                        Se o consorciado solicitar o cancelamento do consórcio em até 7 dias contados da adesão ou não tiver participado de assembleia poderá receber integralmente o valor pago de imediato, conforme procedimentos internos da Administradora.
                    </p>   

                    <p>
                        Caso o consorciado já tenha participado de assembleia, este obedecerá às regras da Lei 11.795/2008 “Lei do Consórcio” que diz:
                    </p>   

                    <p>
                        Art. 30. O consorciado excluído não contemplado terá direito à restituição da importância paga ao fundo comum do grupo, cujo valor deve ser calculado com base no percentual amortizado do valor do bem ou serviço vigente na data da assembleia de contemplação, acrescido dos rendimentos da aplicação financeira a que estão sujeitos os recursos dos consorciados enquanto não utilizados pelo participante, na forma do art. 24, § 1o.
                    </p>   

                    <p>
                        Ou seja, será restituído ao consorciado o valor pago ao fundo comum do grupo de consórcio, deduzindo-se outros valores que estejam estipulados em contrato, como por exemplo a cláusula penal por quebra contratual &#40;cláusula 77º&#41;.
                    </p>   

                    <p>
                        Assim, não serão devolvidos ao consorciado excluído o valor pago à título de taxa de administração, que é a remuneração da Administradora pelo serviço prestado, bem como será aplicada multa por descumprimento contratual, que é uma penalidade para quem desiste de continuar no grupo de consórcio.
                    </p>   

                    <p>
                        Tais informações poderão ser conferidas através do artigo 5°, parágrafo 3° da lei do consórcio &#40;11.795/2008&#41; e também através das cláusulas 73ª e 77ª deste contrato.
                    </p>   

                    <p>
                        Quando é realizada a restituição de valores ao consorciado excluído?
                    </p>   

                    <p>
                        O consorciado excluído ou desistente terá direito a restituição do valor pago, após a contemplação da cota por sorteio dos excluídos que é realizado mensalmente através da AGO, seguindo a apuração da loteria federal conforme explicado através do Anexo I deste contrato. Ou no caso de não sendo contemplado por sorteio a restituição ocorrerá com o encerramento contábil do grupo.
                    </p>   

                    <p>
                        Qual será o valor da restituição no momento da contemplação por sorteio dos excluídos?
                    </p>   

                    <p>
                        Para apuração do valor a ser restituído será necessário realizar o seguinte cálculo:
                    </p>   

                    <p>
                        Valor do crédito atualizado multiplicado &#40;x&#41; pelo percentual pago ao fundo comum subtraído &#40;-&#41; 20% da cláusula penal.
                    </p>   

                    <p>
                        Exemplo prático:
                    </p>   

                    <p>
                        Um consorciado que foi contemplado por sorteio dos excluídos na data de hoje e tendo sua cota as seguintes características: Valor do crédito: R$31.000,00 / Percentual pago ao fundo comum: 31,6670%.
                    </p>   

                    <p>
                        RESUMO CÁLCULO
                    </p>   

                    <p>
                        Valor do crédito atualizado R$ 31.000,00
                    </p>   

                    <p>
                        Percentual pago ao fundo comum 31,6670%
                    </p>   

                    <p>
                        Sub total R$ 9.816,77
                    </p>   

                    <p>
                        Cláusula Penal 20% R$ 1.963,36
                    </p>   

                    <p>                        
                        Valor de restituição *na data da contemplação R$ 7.853,41
                    </p>   

                    <p>
                        Valor do crédito: R$31.000,00 &#40;X&#41; Percentual pago ao fundo comum: 31,6670% = R$9.816,77 &#40;-&#41; Cláusula penal 20% &#40;1.963,36&#41; = R$7.853,41.
                    </p>   

                    <p>
                        Para obter informações atualizadas quanto ao valor do crédito ou percentual pago ao fundo comum da cota, basta o consorciado acessar o site da Administradora com login e senha ou no app Tradcon e olhar o extrato da cota e lá encontrará todas as informações necessárias para realização do cálculo de restituição.
                    </p>   

                </S.RegulationContainer>
            </CenterWrapper>
        </>
    )
}