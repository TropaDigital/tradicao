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
                        “Adesão”: significa a Proposta de Participação em Grupo de Consórcio, documento assinado pelo(a) CONSORCIADO(A), manifestando seu interesse em integrar grupo de consórcio a ser formado, para a aquisição de bem móvel, bem imóvel ou serviços de qualquer natureza, cujo valor está determinado conforme a referência constante na citada proposta;
                    </p>
                    
                    <p>
                        “ADMINISTRADORA”: significa a Tradição Administradora de Consórcio Ltda., sociedade empresária limitada, que atua no ramo de administração de grupos de consórcio, sendo devidamente normatizada, coordenada, supervisionada, fiscalizada e controlada pelo Banco Central do Brasil;
                    </p>
                    
                    <p>
                        “Alienação Fiduciária”: significa dar a propriedade do bem móvel ou imóvel, adquirido por meio do Consórcio, em garantia até a data de sua efetiva quitação, situação após a qual a propriedade do bem será definitivamente transferida ao(à) CONSORCIADO(A);
                    </p>

                    <p>
                        “AGC”: significa a Assembleia Geral Constituição, ou seja, a primeira assembleia do grupo de CONSORCIADOS, que deverá ser convocada pela ADMINISTRADORA, no prazo descrito no Parágrafo Único da Cláusula 7ª infra, com o objetivo de formalizar a existência do Grupo;
                    </p>

                    <p>
                        “AGE”: significa a Assembleia Geral Extraordinária, que pode ser convocada a qualquer momento, pela ADMINISTRADORA ou por iniciativa de 30% (trinta por cento) dos CONSORCIADOS, com o objetivo de analisar, discutir e deliberar sobre os assuntos do Grupo, desde que não sejam matérias próprias de Assembleia Geral Ordinária;
                    </p>
                    
                    <p>
                        “AGO”: significa a Assembleia Geral Ordinária, que deverá ser convocada 1 (uma) vez por mês pela ADMINISTRADORA, com o objetivo de analisar e deliberar sobre a aprovação das contas prestadas pela ADMINISTRADORA, realização de Contemplações, atendimento aos CONSORCIADOS e esclarecimentos que se entendam necessários;
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
                        “ANEXO IV”: é composto pelas principais orientações que o(a) Consorciado(a) Contemplado(a) deverá seguir e os documentos cadastrais que deverá apresentar à ADMINISTRADORA para a análise de crédito de bens móveis, bens imóveis e serviços, sendo intitulado PRINCIPAIS ORIENTAÇÕES E DOCUMENTOS CADASTRAIS;
                    </p>
                    
                    <p>
                        “ANEXO V”: é composto pelos documentos complementares aos documentos que integram o ANEXO IV, que o(a) CONSORCIADO(A), participante do segmento de bens móveis e serviços, deverá apresentar à ADMINISTRADORA após a Contemplação, sendo intitulado DOCUMENTOS COMPLEMENTARES / BENS MÓVEIS E SERVIÇOS;
                    </p>
                    
                    <p>
                        “ANEXO VI”: é composto pelos documentos complementares aos documentos que integram o ANEXO IV, que o(a) CONSORCIADO(A), participante do segmento de bens imóveis, deverá apresentar à ADMINISTRADORA após a Contemplação, sendo intitulado DOCUMENTOS COMPLEMENTARES / BENS IMÓVEIS;
                    </p>

                    <p>
                        “ANEXO VII”: é composto pela lista de documentos que deverá ser apresentada pelo(a) CONSORCIADO(A), para que este(esta) possa receber seu Crédito quando Contemplado nos contratos de Serviço Referenciado, sendo intitulado DOCUMENTOS PARA ENTREGA DE CARTA DE CRÉDITO DE SERVIÇOS;
                    </p>
                    
                    <p>
                        “ANEXO VIII”: é composto pelo detalhamento das taxas de transferência ou substituição de garantia mencionadas no inciso XII da Cláusula 23ª deste Contrato, sendo intitulado TAXAS DE TRANSFERÊNCIA OU SUBSTITUIÇÃO DE GARANTIA;
                    </p>
                    
                    <p>
                        “ANEXO IX”: é composto por informações necessárias para entendimento quanto a restituição de valores e cálculo para apuração do valor de restituição, sendo intitulado INFORMAÇÕES QUANTO A RESTITUIÇÃO DE VALORES PAGOS;
                    </p>
                    
                    <p>
                        “Área do CONSORCIADO”: significa a área de acesso digital do CONSORCIADO(A) ao website da ADMINISTRADORA;
                    </p>
                    
                    <p>
                        “BACEN”: significa o Banco Central do Brasil, que é o órgão responsável pela normatização, coordenação, supervisão, fiscalização e controle das atividades do sistema de consórcios;
                    </p>
                    
                    <p>
                        “Bem Referenciado”: significa o bem móvel ou imóvel descrito na Adesão, cujo preço dá referência de valor ao Crédito e contribuições a serem pagas pelo(a) CONSORCIADO(A);
                    </p>
                    
                    <p>
                        “CEF”: significa a instituição financeira Caixa Econômica Federal;
                    </p>
                    
                    <p>
                        “CNPJ/ME”: significa a inscrição no Cadastro Nacional da Pessoa Jurídica do Ministério da Economia;
                    </p>
                    
                    <p>
                        “CONSORCIADO(A)”: significa a pessoa física ou jurídica, devidamente qualificada na Adesão, interessada em participar do grupo de consórcio, comprometendo-se a cumprir integralmente a obrigação assumida;
                    </p>
                    
                    <p>
                        “Consorciado(a) Contemplado(a)”: significa o(a) CONSORCIADO(A) ao(à) qual já foi atribuído o crédito para a aquisição de bem móvel, bem imóvel ou serviço;
                    </p>
                    
                    <p>
                        “Consorciado(a) Excluído(a)”: significa o(a) CONSORCIADO(A) que manifeste, expressa e inequivocamente, por qualquer forma passível de comprovação, a intenção de não permanecer no grupo, ou que deixe de cumprir as obrigações financeiras assumidas, nos termos do Contrato, desde que não tenha sido contemplado(a);
                    </p>
                    
                    <p>
                        “Contemplação”: significa a atribuição ao(à) CONSORCIADO(A) do Crédito para a aquisição de bem ou serviço, ou, no caso de Consorciado Excluído, significa a restituição das parcelas pagas;
                    </p>
                    
                    <p>
                        “Cota”: significa a fração ideal, numericamente identificada, correspondente à participação do(a) CONSORCIADO(A) no grupo de consórcio;
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
                        “Fiança”: significa a garantia dada por terceiro indicado pelo(a) Consorciado(a) Contemplado(a) para assegurar o pagamento de seu Saldo Devedor à ADMINISTRADORA, sendo formalizada por meio de instrumento escrito;
                    </p>
                    
                    <p>
                        “Fiador”: significa a pessoa física ou jurídica que presta Fiança para garantir o Saldo Devedor do(a) Consorciado(a) Contemplado(a) em contratos de Serviços Referenciados;
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
                        “Lance”: significa o valor que pode ser ofertado pelo(a) CONSORCIADO(A) antecipadamente, objetivando o recebimento do Crédito, que deverá ser pago à ADMINISTRADORA em caso de Contemplação;
                    </p>                    

                    <p>
                        “Lance Diluído”: significa a forma de utilização de Lance descrita na Cláusula 46ª, I, abaixo;
                    </p>                    

                    <p>
                        “Lance Embutido”: significa a forma de utilização de Lance descrita na Cláusula 46ª, II, abaixo;
                    </p>                    

                    <p>
                        “Lance Fixo”: significa modalidade de lance a ser ofertado pelo(a) CONSORCIADO(A), com percentual pré fixado conforme descrito na Cláusula 44, I, abaixo;
                    </p>                    

                    <p>
                        “Lance Livre”: significa modalidade de lance a ser ofertado pelo(a) CONSORCIADO(A), com percentual determinado pela livre manifestação de vontade do CONSORCIADO(A), conforme descrito na Cláusula 44, II, abaixo;
                    </p>                    

                    <p>
                        “Loteria Federal”: significa uma modalidade de loteria praticada no Brasil por meio de sorteio.
                    </p>                    

                    <p>
                        “Parcela”: significa o valor devido pelo(a) CONSORCIADO(A), composto de percentual do Fundo Comum, percentual do Fundo de Reserva, Taxa de Administração, seguro e demais despesas previstas no Contrato;
                    </p>                    

                    <p>
                        “Pessoas Politicamente Expostas”: significa a pessoa que desempenha ou tenha desempenhado, nos últimos 5 (cinco) anos, cargos, empregos ou funções públicas relevantes, no Brasil ou em outros países, territórios e dependências estrangeiros, assim como seus representantes, familiares e outras pessoas de seu relacionamento próximo, conforme disposto na Cláusula 99ª infra;
                    </p>                    

                    <p>
                        “Rateio”: significa divisão proporcional de saldo do grupo relativo ao Fundo Comum e Fundo de Reserva entre os CONSORCIADOS;
                    </p>                    

                    <p>
                        “Restituição de Parcelas”: significa o valor a ser pago pela ADMINISTRADORA ao(à) Consorciado(a) Excluído(a) a título de restituição dos valores das Parcelas pagas até a efetiva exclusão, descontadas as taxas e encargos administrativos;
                    </p>                    

                    <p>
                        “Saldo Devedor”: significa o valor não pago das Parcelas e das Diferenças de Parcelas e outras responsabilidades financeiras não pagas, previstas na Adesão e/ou no Contrato;
                    </p>                    

                    <p>
                        “Serviço de Atendimento ao Consorciado”: significa o atendimento telefônico através dos números 0800-877-0020, 0800-877-0030 ou (11)4003-5090;
                    </p>                    

                    <p>
                        “Serviço Referenciado”: significa o serviço ou serviços, descritos na Adesão com seu preço, que dá referência de valor ao Crédito e contribuições a serem pagas pelo(a) CONSORCIADO(A);
                    </p>                    

                    <p>
                        “Sorteio”: significa a apuração, pela Loteria Federal, dos números de cotas que serão contempladas;
                    </p>                    

                    <p>
                        “SUSEP”: significa a Superintendência de Seguros Privados;
                    </p>                    

                    <p>
                        “Taxa de Administração”: significa a remuneração paga pelo(a) CONSORCIADO(A) à ADMINISTRADORA pelos serviços prestados relacionados à organização e gestão dos interesses do consórcio;
                    </p>                    

                    <p>
                        “Taxa de Administração Mensal”: significa o valor equivalente ao percentual de Taxa de Administração total, distribuído pela quantidade de meses do prazo de funcionamento do Grupo conforme campo n° 62 (sessenta e dois) da Adesão;
                    </p>                    

                    <p>
                        “Taxa de Permanência”: significa o valor a ser deduzido dos VNP como forma de remunerar a ADMINISTRADORA pelo período em que ficaram sob sua guarda; e
                    </p>                    

                    <p className='mid-space'>
                        “VNP”: significa Valores Não Procurados relativos às disponibilidades financeiras remanescentes na data do encerramento do Grupo e não procurados pelos respectivos CONSORCIADOS e Consorciados Excluídos.
                    </p>                    

                    <p>
                        II – DA ADESÃO
                    </p>                    

                    <p>
                        Cláusula 2ª – Para a participação em Grupo de Consórcio, o(a) CONSORCIADO(A) deverá ter assinado a Adesão, e ter comprovado capacidade financeira para arcar com as despesas do Grupo durante todo seu prazo de duração.
                    </p>                    

                    <p>
                        Parágrafo Primeiro – As informações e dados fornecidas pelo(a) CONSORCIADO(A) serão inclusos de forma automática no cadastro positivo a partir do momento em que passe ser obrigatória tal comunicação pelas Administradoras de Consórcio aos bureaus de crédito existentes.
                    </p>                    

                    <p>
                        Parágrafo Segundo – Ao passar a ser obrigatória a comunicação dos dados aos bureaus de crédito o(a) CONSORCIADO(A) que não quiser que as informações sejam disponibilizadas em suas consultas, deverão entrar em contato com o bureau de crédito respectivo e solicitar a retirada das informações.
                    </p>                    

                    <p>
                        Cláusula 3ª – No ato da assinatura da Adesão poderá ser cobrado o valor equivalente à 1ª (primeira) Parcela e antecipação de Taxa de Administração, conforme descrito no campo nº 57 (cinquenta e sete) da Adesão, que será considerado como pagamento efetivo da referida parcela na data da AGC.
                    </p>                    

                    <p>
                        Cláusula 4ª – A Taxa de Administração fixada na Adesão, poderá ser cobrada através de percentuais variáveis durante o prazo do Grupo.
                    </p>                    

                    <p>
                        Cláusula 5ª – No caso de comercialização de novas Cotas em Grupo em andamento, poderão ser cobrados valores e percentuais diferentes dos cobrados na inauguração do Grupo.
                    </p>                    

                    <p className='mid-space'>
                        Cláusula 6ª – O valor equivalente à Taxa de Administração Mensal, cobrado antecipadamente, encontra-se descrito no campo nº 62 (sessenta e dois) da Adesão.
                    </p>                    

                    <p>
                        III – DA CONSTITUIÇÃO DO GRUPO
                    </p>                    

                    <p>
                        Cláusula 7ª – O Grupo será considerado constituído após a realização da AGC, em data a ser designada pela ADMINISTRADORA, após esta considerar a Adesão de CONSORCIADOS em número suficiente, para assegurar a viabilidade financeira do empreendimento, data em que a Adesão aperfeiçoar-se-á no presente Contrato, criando vínculo obrigacional entre os CONSORCIADOS e destes com a ADMINISTRADORA.
                    </p>                    

                    <p>
                        Parágrafo Único – A AGC deverá ser convocada em até 90 (noventa) dias, a contar da data da assinatura da primeira Adesão, sob pena de a ADMINISTRADORA ser obrigada a restituir os valores pagos a ela no 1º (primeiro) dia útil subsequente ao prazo mencionado, devidamente corrigidos.
                    </p>                    

                    <p>
                        Cláusula 8ª – O Grupo é autônomo em relação à outros grupos geridos pela ADMINISTRADORA e possui patrimônio próprio, não se confundindo com o patrimônio de outro grupo de consórcio ou com o patrimônio da ADMINISTRADORA, sendo os seus recursos geridos e contabilizados separadamente.
                    </p>                    

                    <p>
                        Cláusula 9ª – O interesse coletivo do grupo de consórcio prevalece sobre o interesse individual de cada CONSORCIADO(A).
                    </p>                    

                    <p>
                        Cláusula 10ª – O número máximo de CONSORCIADOS no Grupo, descrito no campo nº 54 (cinquenta e quatro) da Adesão, na data da AGC, será calculado tendo por base o número de Créditos previstos para Contemplação mensal multiplicado pelo número de meses previsto para o encerramento do Grupo.
                    </p>                    

                    <p>
                        Cláusula 11ª – Na AGC do Grupo, a ADMINISTRADORA:
                    </p>                    

                    <p>
                        I) comprovará a existência de recursos suficientes para a Contemplação de pelo menos 1 (um) crédito, devendo ser ele considerado o de maior valor do Grupo;
                    </p>                    

                    <p>
                        II) promoverá a eleição de até 3 (três) membros do Grupo, não remunerados, de acordo com as condições dispostas na Cláusula 12ª abaixo;
                    </p>                    

                    <p>
                        III) colocará à disposição a listagem dos CONSORCIADOS, contendo seus nomes e o endereços completos, desde que eles autorizem, por escrito, a divulgação desses dados;
                    </p>                    

                    <p>
                        IV) fornecerá, aos CONSORCIADOS, todas as informações necessárias sobre as modalidades de aplicação financeira dos recursos coletados, conforme regularização BACEN; e
                    </p>                    

                    <p>
                        V) registrará na ata o nome e o endereço dos responsáveis pela auditoria externa contratada e, havendo qualquer alteração, anotará na ata da assembleia seguinte os dados relativos aos novos auditores.
                    </p>                    

                    <p>
                        Cláusula 12ª – Os representantes dos CONSORCIADOS eleitos pela ADMINISTRADORA terão mandato com prazo igual ao prazo de duração do Grupo, tendo como função:
                    </p>                    

                    <p>
                        I) acompanhar a regularidade de gestão da ADMINISTRADORA;
                    </p>                    

                    <p>
                        II) acessar todos os demonstrativos de movimentações financeiras pertinentes às operações do Grupo, sempre que houver interesse de qualquer dos CONSORCIADOS;
                    </p>   

                    <p>
                        III) solicitar quaisquer informações relativas ao Grupo à ADMINISTRADORA; e
                    </p>   

                    <p>
                        IV) representar o Grupo na defesa de seus interesses contra a ADMINISTRADORA e perante o BACEN.
                    </p>   

                    <p>
                        Parágrafo Primeiro – Fica estabelecido que os funcionários, sócios, gerentes, diretores e prepostos da ADMINISTRADORA ou de quaisquer sociedades e/ou empresas a ela ligada não poderão concorrer à eleição para representante dos CONSORCIADOS.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Segundo – Os CONSORCIADOS eleitos poderão ser substituídos, em AGO ou AGE, por decisão da maioria dos CONSORCIADOS.
                    </p>   

                    <p>
                        IV – DO PRAZO DE DURAÇÃO DO GRUPO
                    </p>   

                    <p>
                        Cláusula 13ª – O prazo de duração do Grupo será aquele descrito no campo 52 (cinquenta e dois) da Adesão e obedecerá ao que for determinado pela Lei do Consórcio.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Único – As Partes poderão acordar, por meio do termo aditivo da página 4 (quatro) da Adesão, a dilação do prazo de duração do Grupo expressa nos campos nº 67 (sessenta e sete) e 68 (sessenta e oito) e a dilação de prazo de duração do Grupo para consórcio de caminhão expressa campo nº 69 (sessenta e nove).
                    </p>   

                    <p>
                        V – DA DESISTÊNCIA DO GRUPO E DO RECEBIMENTO DA RESTITUIÇÃO DE PARCELAS
                    </p>   

                    <p>
                        Cláusula 14ª – O(A) CONSORCIADO(A) poderá desistir de participar do Grupo caso tenha assinado a Adesão fora do estabelecimento comercial, desde que tal desistência ocorra no prazo de 7 (sete) dias corridos, a contar da data da assinatura, conforme determina o Art. 49 da Lei nº 8.078/1990 (“Código de Defesa do Consumidor”), caso em que os valores pagos por ele(a) serão devolvidos em até 7 (sete) dias úteis, a contar da data da formalização do pedido de desistência, desde que não tenha participado de assembleia.
                    </p>   

                    <p>
                        Cláusula 15ª– O(A) CONSORCIADO(A) não contemplado(a) poderá desistir de participar do Grupo, arcando com a multa prevista na Cláusula 77ª, mediante encaminhamento de carta de solicitação assinada, via correio ou e-mail, incluindo cópia de seu documento de identidade e do comprovante do número de inscrição no CPF/ME, data em que passará a ser considerado(a) Consorciado(a) Excluído(a), ou ainda, será considerado como consorciado desistente aquele que tenha sua participação cancelada em razão do não pagamento de suas parcelas.
                    </p>   

                    <p>
                        Parágrafo Primeiro – O(A) Consorciado(a) Excluído(a) continuará concorrendo aos Sorteios nas AGO e, quando contemplado(a), receberá a Restituição do valor que lhe couber.
                    </p>   

                    <p>
                        Parágrafo Segundo – Caso o(a) Consorciado(a) Excluído(a) não seja contemplado(a) no prazo de duração do Grupo, ele(a) será contemplado na data da última AGO do Grupo, em valor equivalente à Restituição de Parcelas, sendo após sua disponibilização ao (à) Consorciado(a) Excluído(a) devidamente corrigido monetariamente pelo índice da conta onde estiver depositado, descontadas as taxas e encargos administrativos.
                    </p>   

                    <p>
                        Parágrafo Terceiro – O(A)Consorciado(a) Excluído(a) que não solicitar o pagamento da Restituição de Parcelas estará sujeito(a) à dedução de Taxa de Permanência a partir do 31º (trigésimo primeiro) dia do encerramento contábil do Grupo.
                    </p>   

                    <p>
                        VI – DA ALTERAÇÃO PARA VALOR DE CRÉDITO DIVERSO DO CONTRATADO
                    </p>   

                    <p>
                        Cláusula 16ª – O Grupo pode ter por objeto Créditos de valores diferenciados, observado que o Crédito de menor valor, vigente ou definido na data da AGC, não pode ser inferior a 50% (cinquenta por cento) do Crédito de maior valor.
                    </p>   

                    <p>
                        Cláusula 17ª – O(A) CONSORCIADO(A) não contemplado(a) poderá alterar o Crédito contratado por outro de menor valor, limitado ao Crédito de menor valor do Grupo, observadas as seguintes condições:
                    </p>   

                    <p>
                        I) tal mudança de faixa de Crédito só poderá ocorrer 1 (uma) vez para cada CONSORCIADO(A) em cada Grupo;
                    </p>   

                    <p>
                        II) o Crédito escolhido deverá ser, no mínimo, equivalente à metade do crédito original contratado;
                    </p>   

                    <p>
                        III) o Crédito escolhido tem de ser pelo menos igual à importância já paga pelo(a) CONSORCIADO(A) ao Fundo Comum;
                    </p>   

                    <p>
                        IV) a mudança para o Crédito de menor valor implicará no recálculo do percentual amortizado, mediante comparação entre o Crédito contratado e o do Crédito escolhido;
                    </p>   

                    <p>
                        V) restando saldo devedor, o percentual de amortização mensal não será alterado; e
                    </p>   

                    <p>
                        VI) não havendo saldo devedor, o(a) CONSORCIADO(A) deverá aguardar sua Contemplação por Sorteio, ficando responsável pelas Diferenças de Parcela apuradas de acordo com o disposto nas Cláusulas 28ª a 32ª, abaixo, até a efetiva compra do Bem Referenciado ou contratação dos Serviços Referenciados no presente Contrato.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 18ª – O(A) CONSORCIADO(A) não contemplado(a) poderá alterar o Crédito contratado por outro de maior valor, desde que o valor do Crédito seja até 50% (cinquenta por cento) superior ao valor do menor Crédito do Grupo, limitado ao Crédito de maior valor do Grupo.
                    </p>   

                    <p>
                        VII – DA REPRESENTAÇÃO PELA ADMINISTRADORA
                    </p>   

                    <p>
                        Cláusula 19ª – O Grupo é representado pela ADMINISTRADORA, em caráter irrevogável e irretratável, ativa ou passivamente, em juízo ou fora dele, para defesa dos direitos e interesses coletivamente considerados e para a execução deste Contrato no caso de haver Consorciados Contemplados e inadimplentes.
                    </p>   

                    <p>
                        Cláusula 20ª – O(A) CONSORCIADO(A) outorga, neste ato, poderes à ADMINISTRADORA para praticar os atos necessários à execução deste Contrato, podendo, inclusive, nomear procuradores para a defesa dos interesses do Grupo.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 21ª – O(A) CONSORCIADO(A) outorga, ainda, neste ato, à ADMINISTRADORA poderes especiais para representá-lo(a) nas AGO, quando ausente.
                    </p>   

                    <p>
                        VIII – DOS PAGAMENTOS
                    </p>   

                    <p>
                        Cláusula 22ª– O(A) CONSORCIADO(A) obriga-se a pagar a Parcela, cujo valor será calculado com base na soma dos valores destinados ao Fundo Comum, Fundo de Reserva, Taxa de Administração e seguros, quando contratados, além dos encargos e despesas estabelecidos na Cláusula 23ª, abaixo, e a quitar integralmente o débito até a data da última AGO de seu Grupo.
                    </p>   

                    <p>
                        Parágrafo Primeiro – O percentual de contribuição ao Fundo Comum poderá variar de uma AGO à outra, em razão de eventual alteração no valor do Bem Referenciado ou Serviço Referenciado.
                    </p>   

                    <p>
                        Parágrafo Segundo – Os percentuais referentes à Taxa de Administração total [campo nº 55 (cinquenta e cinco) ], Taxa de Administração Mensal [campo 62 (sessenta e dois) ] e Fundo de Reserva [campo 63 (sessenta e três) ], multiplicados pelos números de meses descritos no Prazo do Grupo [campo nº 52 (cinquenta e dois) ] e Prazo da Cota [campo nº 53 (cinquenta e três)], determinam o valor da Parcela.
                    </p>   

                    <p>
                        Parágrafo Terceiro – A Taxa de Administração será cobrada durante o número de meses previstos para a duração do Grupo, sendo calculada com base em percentual determinado no campo nº 55 (cinquenta e cinco) do Crédito atualizado.
                    </p>   

                    <p>
                        Parágrafo Quarto – Para o cálculo da Taxa de Administração total, multiplica-se o valor equivalente ao percentual descrito no campo nº 62 (sessenta e dois) pelo número de meses previstos para a duração do Grupo determinado no campo nº 52 (cinquenta e dois) e campo nº 53 (prazo da cota).
                    </p>   

                    <p>
                        Cláusula 23ª – O(A) CONSORCIADO(A) obriga-se, ainda, ao pagamento de:
                    </p>   

                    <p>
                        I) prêmio de seguro de vida em grupo, desde que não cobrados diretamente do Grupo, conforme determinado no campo nº 58 (cinquenta e oito) da Adesão, por todo o prazo de duração do Grupo;
                    </p>   

                    <p>
                        II) prêmio de seguro prestamista, desde que não cobrados diretamente do Grupo, descrito no campo nº 58 (cinquenta e oito) da Adesão, por todo o prazo de duração do Grupo;
                    </p>   

                    <p>
                        III) Diferença de Parcela, conforme definida no Capítulo I retro;
                    </p>   

                    <p>
                        IV) despesas referentes aos registros dos contratos de garantias prestadas e eventual cessão do presente Contrato, devidamente comprovadas;
                    </p>   

                    <p>
                        V) multa moratória de 2% (dois por cento), acrescida de juros de 1% (um por cento) ao mês, calculados sobre o valor atualizado da Parcela, em caso de atraso no pagamento;
                    </p>   

                    <p>
                        VI) tarifa de entrega de segunda via de documento fixada em até 0,1% (zero vírgula um por cento) do valor do Crédito, por documento;
                    </p>   

                    <p>
                        VII) despesas judiciais e honorários advocatícios em caso de cobranças extrajudiciais e/ou judiciais;
                    </p>   

                    <p>
                        VIII) Taxa de Administração antecipada quando o(a) CONSORCIADO(A) vier a integrar Grupo em andamento, devendo, inclusive neste caso, preencher e assinar a Adesão;
                    </p>   

                    <p>
                        IX) despesas decorrentes de avaliação e/ou vistoria de imóvel por engenheiro indicado pela ADMINISTRADORA, avaliação e/ou vistoria de veículos através de órgãos credenciados;
                    </p>   

                    <p>
                        X) despesas com registros das garantias prestadas quando da aquisição de bens imóveis, bens móveis e serviços;
                    </p>   

                    <p>
                        XI) Taxa de Permanência sobre eventual saldo disponível no término do Grupo, não procurado após 30 (trinta) dias contados da data de sua disponibilização, cobrada mensalmente à alíquota de 10% (dez por cento) sobre o citado saldo, extinguindo-se a exigibilidade do Crédito quando seu valor for inferior a R$ 30,00 (trinta reais);
                    </p>   

                    <p>
                        XII) taxas de transferência ou substituição de garantia descritas no ANEXO VIII;
                    </p>   

                    <p>
                        XIII) taxas, custas e/ou tributos, vencidos e não pagos e demais encargos incorridos nas ações judiciais para a retomada do bem e/ou execução de garantias;
                    </p>   

                    <p>
                        XIV) despesas com convocação e realização de AGE;
                    </p>   

                    <p>
                        XV) despesas decorrentes da compra e/ou entrega de bem móvel, por solicitação do(a) CONSORCIADO(A), em praça diversa daquela de constituição do Grupo;
                    </p>   

                    <p>
                        XVI) frete e seguro de transporte de bem móvel, caso necessário, assim como o pagamento da diferença de Crédito diretamente ao fornecedor do bem, se for o caso;
                    </p>   

                    <p>
                        XVII) taxa de cadastro, despesas com inclusão e baixa de gravame, para aprovação e liberação do Crédito, poderão ser pagos com recursos próprios ou descontados do Crédito já disponível, neste último caso, desde que autorizado, por escrito, pelo(a)CONSORCIADO(A);
                    </p>   

                    <p>
                        XVIII) IPVA ou IPTU, incidente sobre o bem objeto da garantia, sob pena de resultar em resolução do Contrato em caso de inadimplemento de tais impostos;
                    </p>   

                    <p className='mid-space'>
                        XIX) ITBI e despesas resultantes do registro da compra e venda ou alienação fiduciária.
                    </p>   

                    <p>
                        IX – DA CONSTITUIÇÃO E DA UTILIZAÇÃO DO FUNDO COMUM
                    </p>   

                    <p>
                        Cláusula 24ª – O Fundo Comum será constituído pelos recursos oriundos:
                    </p>   

                    <p>
                        I) das importâncias destinadas à sua formação, recolhidas através da Parcela paga pelo(a) CONSORCIADO(A);
                    </p>   

                    <p>
                        II) dos rendimentos de aplicação financeira dos recursos do próprio Fundo Comum;
                    </p>   

                    <p>
                        III) do pagamento das Parcelas relativas ao Fundo Comum pago pelo(a) CONSORCIADO(A) admitido(a) no Grupo em Cota de Consorciado(a) Excluído(a); e
                    </p>   

                    <p>
                        Cláusula 25ª – Os recursos do Fundo Comum serão utilizados para:
                    </p>   

                    <p>
                        I) pagamento do Crédito para aquisição de bens e serviços de CONSORCIADO(A) Contemplada;
                    </p>   

                    <p>
                        II) pagamento de Crédito em moeda corrente nacional nas hipóteses indicadas neste Contrato;
                    </p>   

                    <p>
                        III) restituição aos CONSORCIADOS de eventual saldo existente ao término do Grupo, paga proporcionalmente às suas Parcelas mensais;
                    </p>   

                    <p>
                        IV) restituição aos Consorciados Excluídos quando contemplados por Sorteio, conforme disposto na Cláusula 39ª, incisos II e IV, abaixo; e
                    </p>   

                    <p className='mid-space'>
                        V) restituição aos Consorciados Excluídos no caso de dissolução do Grupo a que pertencia.
                    </p>   

                    <p>
                        X – DA CONSTITUIÇÃO E DA UTILIZAÇÃO DO FUNDO DE RESERVA
                    </p>   

                    <p>
                        Cláusula 26ª – O valor pago pelo(a) CONSORCIADO(A) a ser creditado ao Fundo de Reserva corresponde ao percentual indicado no campo nº 63 (sessenta e três) da Adesão e será constituído pelos recursos oriundos:
                    </p>   

                    <p>
                        I) das importâncias destinadas à sua formação; e
                    </p>   

                    <p>
                        II) dos rendimentos da aplicação financeira dos recursos do próprio Fundo de Reserva.
                    </p>   

                    <p>
                        Cláusula 27ª – Os recursos do Fundo de Reserva serão usados, na seguinte ordem, para:
                    </p>   

                    <p>
                        I) cobertura de eventual insuficiência de recursos no Fundo Comum;
                    </p>   

                    <p>
                        II) pagamento de despesas bancárias de responsabilidade exclusiva do Grupo;
                    </p>   

                    <p>
                        III) pagamento de todas as despesas e custos incorridos com a adoção de medidas judiciais ou extrajudiciais com vistas ao ressarcimento do Grupo; e
                    </p>   

                    <p className='mid-space'>
                        IV) Contemplação, por Sorteio, desde que não comprometa a utilização para as finalidades anteriores.
                    </p>   

                    <p>
                        XI – DAS DIFERENÇAS DE PARCELAS
                    </p>   

                    <p>
                        Cláusula 28ª – Eventuais Diferenças de Parcelas serão cobradas ou compensadas sob a forma de Rateio e serão proporcionais aos percentuais efetivamente pagos pelo(a) CONSORCIADO(A), até o vencimento da segunda Parcela que seguir à verificação das referidas Diferenças de Parcela.
                    </p>   

                    <p>
                        Cláusula 29ª – Se o Crédito for aumentado, a deficiência do saldo do Fundo Comum deverá ser coberta pelos rendimentos financeiros da aplicação de seus próprios recursos, pelo Fundo de Reserva se existente, e, por último, se necessário, pela cobrança de Diferença de Parcela rateada entre os CONSORCIADOS.
                    </p>   

                    <p>
                        Cláusula 30ª – Ocorrendo redução do Crédito, o excesso do saldo do Fundo Comum ficará acumulado para AGO seguinte e compensado na Parcela subsequente mediante Rateio.
                    </p>   

                    <p>
                        Cláusula 31ª – As alíquotas de reajuste do valor de Bens Referenciados ou Serviços Referenciados serão estabelecidos na AGC, observados os índices que constam no campo nº 51 (cinquenta e um), de acordo com seguimento adquirido.
                    </p>   

                    <p>
                        Cláusula 32ª – Incidirá Taxa de Administração sobre os recursos do Fundo de Reserva utilizados para suprir a deficiência do Fundo Comum e sobre a importância paga pelos CONSORCIADOS para atender a esse fim, sendo a importância paga escriturada destacadamente na conta corrente do(a) CONSORCIADO(A) e o percentual correspondente não será considerado para efeito de amortização de Parcela.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Único – No caso da redução de Crédito prevista na Cláusula 27ª acima, o excesso de Taxa de Administração paga será compensado na Parcela subsequente.
                    </p>   

                    <p>
                        XII – DO VENCIMENTO DAS PARCELAS
                    </p>   

                    <p>
                        Cláusula 33ª– A ADMINISTRADORA manterá o(a) CONSORCIADO(A) informado(a) a respeito das datas de vencimento das Parcelas do Grupo através do boleto de cobrança, bem como das datas da realização das respectivas AGO, que serão todas definidas na AGC do Grupo.
                    </p>   

                    <p>
                        Parágrafo Primeiro – Na hipótese de não recebimento, perda, extravio ou atraso no recebimento do boleto, o(a) CONSORCIADO(A) deverá providenciar a segunda via até a data de vencimento através do Serviço de Atendimento ao Consorciado ou pelo atendimento eletrônico no website www.consorciotradicao.com.br de modo a evitar a aplicação de penalidades decorrentes de atraso.
                    </p>   

                    <p>
                        Parágrafo Segundo – Caso a data de vencimento da Parcela não seja dia útil, o vencimento passará, automaticamente, para o primeiro dia útil subsequente.
                    </p>   

                    <p>
                        Cláusula 34ª – O(A) CONSORCIADO(A) que não efetuar o pagamento de qualquer Parcela até a data do seu vencimento, ficará impedido(a) de concorrer ao Sorteio ou oferecer Lance na AGO realizada após a data de vencimento.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 35ª – O(A) Consorciado(a) Contemplado(a) que se tornar inadimplente estará sujeito(a) à cobrança extrajudicial ou judicial das Parcelas correspondentes.
                    </p>   

                    <p>
                        XIII – DA ANTECIPAÇÃO DE PARCELAS
                    </p>   

                    <p>
                        Cláusula 36ª – O(A) CONSORCIADO(A) poderá antecipar o pagamento de Parcelas do saldo devedor, na ordem inversa a contar da última, no todo ou em parte, nos seguintes casos:
                    </p>   

                    <p>
                        I) por meio de Lance vencedor;
                    </p>   

                    <p>
                        II) por utilização de diferença de Crédito, resultante da utilização a menor do valor do Crédito disponibilizado;
                    </p>   

                    <p>
                        III) quando o pagamento das Parcelas antecipadas se der até a data do vencimento; ou
                    </p>   

                    <p>
                        IV) ao solicitar a conversão do Crédito em espécie após 180 (cento e oitenta dias) da Contemplação, cabendo-lhe o direito de receber em espécie o valor remanescente.
                    </p>   

                    <p>
                        Cláusula 37ª – As antecipações de pagamento de Parcelas, que resultem em quitação, de CONSORCIADO(A) não contemplado(a) não lhe darão o direito de exigir a Contemplação, ficando responsável pelas Diferenças de Parcelas que houver e demais obrigações previstas neste Contrato até a data da efetiva Contemplação, que ocorrerá por Sorteio.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Único – As antecipações e Parcelas do(a) CONSORCIADO(A) não contemplado(a) não poderão ser aproveitadas, a título de Lance, em AGO futura.
                    </p>   

                    <p>
                        XIV – DA CONTEMPLAÇÃO
                    </p>   

                    <p>
                        Cláusula 38ª – A Contemplação poderá ser realizada por Sorteio ou por Lance, sendo certo que o valor do Crédito será equivalente ao valor do Bem Referenciado ou Serviço Referenciado na data da AGO em que houve a Contemplação.
                    </p>   

                    <p>
                        Cláusula 39ª – A Contemplação por Sorteio poderá ser realizada da seguinte forma:
                    </p>   

                    <p>
                        I) em dia e hora previamente indicados no boleto de pagamento;
                    </p>   

                    <p>
                        II) dividindo-se entre CONSORCIADOS e Consorciados Excluídos;
                    </p>   

                    <p>
                        III) em primeiro lugar serão sorteados os CONSORCIADOS através da Loteria Federal, cujo critério será estabelecido pela apuração de Sorteio do Grupo descrita no ANEXO I; e
                    </p>   

                    <p>
                        IV) em segundo lugar serão sorteados os Consorciados Excluídos através da Loteria Federal, cujo critério será estabelecido pela apuração de Sorteio do Grupo descrita no ANEXO I.
                    </p>   

                    <p>
                        Parágrafo Único – O(A) CONSORCIADO(A) poderá solicitar, por escrito e enquanto houver número suficiente de CONSORCIADOS aptos, sua exclusão do Sorteio.
                    </p>   

                    <p>
                        Cláusula 40ª – A Contemplação por Sorteio aos CONSORCIADOS somente ocorrerá se houver recurso financeiro suficiente no Fundo Comum, facultada a utilização dos recursos financeiros do Fundo de Reserva, para atribuição de, no mínimo, um Crédito por AGO. Não havendo recursos suficientes, o Sorteio não será realizado.
                    </p>   

                    <p>
                        Cláusula 41ª – Caso a ADMINISTRADORA proceda à Contemplação sem a existência de recursos suficientes, esta ficará responsável pelos prejuízos que causar ao Grupo.
                    </p>   

                    <p>
                        Cláusula 42ª – Ocorrendo ou não realização de Sorteio serão admitidas ofertas de Lances para viabilizar Contemplações.
                    </p>   

                    <p>
                        Cláusula 43ª – A Contemplação por Lance, poderá ser realizada pela modalidade de Lance Livre ou Lance Fixo.
                    </p>   

                    <p>
                        Cláusula 44ª – São modalidades de Lance:
                    </p>   

                    <p>
                        I) Lance Fixo: oferta de lance em percentual pré-fixado na ata da AGC do grupo consorcial; e
                    </p>   

                    <p>
                        II) Lance Livre: oferta de lance em percentual de crédito, a ser realizado de acordo com a livre manifestação de vontade por parte do(a) CONSORCIADO(A).
                    </p>   

                    <p>
                        Cláusula 45ª – As contemplações por lance, serão realizadas observando-se as seguintes determinações:
                    </p>   

                    <p>
                        I) O(a) CONSORCIADO(A) ou seu procurador, bem como o representante/revenda, poderão ofertar Lance, manifestando-se: (a) pessoalmente, na sede da ADMINISTRADORA; (b) por meio físico, através de carta ou telegrama; ou (c) por meio eletrônico, através de acesso ao website da ADMINISTRADORA, e-mail ou mensagem via aplicativo WhatsApp;
                    </p>   

                    <p>
                        II) os Lances deverão ser ofertados até 1 (um) dia antes da realização da AGO;
                    </p>   

                    <p>
                        III) quando tratar-se de Lance Livre, a oferta deverá ser equivalente a, no mínimo, 10% (dez por cento) do valor do Crédito na data da AGO;
                    </p>   

                    <p>
                        IV) o valor máximo do Lance poderá ser igual ao Saldo Devedor do(a) CONSORCIADO(A) que apresente a oferta;
                    </p>   

                    <p>
                        V) não serão consideradas as Parcelas vencidas antes do ingresso do(a) CONSORCIADO(A), que assumiu a posição do Consorciado(a) Excluído(a);
                    </p>   

                    <p>
                        VI) o(a) CONSORCIADO(A) que ofertar Lance em valor suficiente para quitação da sua Cota será considerado(a) vencedor(a);
                    </p>   

                    <p>
                        VII) tratando-se de Lance Livre, não havendo Lance em valor suficiente para quitação de Cota, o(a) CONSORCIADO(A) que ofertar Lance representativo do maior percentual do Crédito será considerado(a) vencedor(a), podendo ser contemplado(a), desde que seu Lance somado aos recursos do Fundo Comum sejam suficientes para atribuição do Crédito;
                    </p>   

                    <p>
                        VIII) havendo empate entre Lances, seja na modalidade de Lance Livre ou na modalidade de Lance Fixo, o desempate dar-se-á através do número do primeiro prêmio extraído pela Loteria Federal, aquela cota que mais se aproximar do primeiro prêmio será contemplada.
                    </p>   

                    <p>
                        IX) o Lance vencedor será considerado como pagamento antecipado de Parcelas vincendas, a contar regressivamente da última, ou para diminuição do valor das Parcelas mensais, conforme dispõe cláusula 46ª, I, abaixo;
                    </p>   

                    <p>
                        X) os Lances perdedores serão desconsiderados e não deverão ser pagos em favor da ADMINISTRADORA;
                    </p>   

                    <p>
                        XI) nos Lances relativos aos Grupos em que o Bem Referenciado é imóvel, os CONSORCIADOS poderão utilizar recursos provenientes do FGTS, desde que se enquadrem nas normas estabelecidas pela Curadoria da CEF e nas condições estabelecidas neste Contrato, sendo o(a) CONSORCIADO(A) o(a) único(a) responsável por observar esse enquadramento, bem como realizar os trâmites para a obtenção dos recursos em caso de Contemplação;
                    </p>   

                    <p>
                        XII) o Lance cujos recursos sejam provenientes do FGTS terão seu valor descontado no Crédito atribuído, de forma que no momento da aquisição do Bem Referenciado esses recursos sejam pagos diretamente pela CEF ao vendedor do referido bem; e
                    </p>   

                    <p>
                        XIII) o(a) Consorciado(a) Contemplado(a) por Lance oriundo de recursos do FGTS é obrigado a adquirir bem, não podendo solicitar a conversão do Crédito em moeda corrente nacional.
                    </p>   

                    <p>
                        Cláusula 46ª – O Lance poderá ser utilizado nas 2 (duas) formas a seguir:
                    </p>   

                    <p>
                        I) Lance Diluído: redução no valor da Parcela, mantendo o prazo de pagamento contratado no Grupo; ou redução do prazo contratado, com o abatimento das Parcelas vincendas de maneira decrescente; e/ou
                    </p>   

                    <p>
                        II) Lance Embutido: desconto do valor do Lance no Crédito, limitado ao percentual estipulado na ata da AGC, que deverá ser solicitado por escrito.
                    </p>   

                    <p>
                        Cláusula 47ª – O prazo para pagamento do Lance será de 2 (dois) dias úteis, a contar da data da Contemplação, sob pena de cancelamento da Contemplação.
                    </p>   

                    <p>
                        Cláusula 48ª – O(A) CONSORCIADO(A) ausente à AGO será comunicado(a) de sua Contemplação pela ADMINISTRADORA por telefone, por carta com aviso de recebimento, telegrama ou e-mail, expedido até o 2º (segundo) dia útil após a referida AGO.
                    </p>   

                    <p>
                        Cláusula 49ª – O(A) CONSORCIADO(A) que ofertar o Lance será considerado(a) ciente de sua eventual Contemplação, ainda que ausente à AGO.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 50ª – Se o(a) Consorciado(a) Contemplado(a), que não tenha utilizado seu Crédito atribuído, atrasar o pagamento de 2 (duas) ou mais Parcelas, consecutivas ou não, terá sua Contemplação cancelada, passando a ser considerado(a) CONSORCIADO(A) não contemplado(a).
                    </p>   

                    <p>
                        XV – DO CRÉDITO E DA SUA UTILIZAÇÃO
                    </p>   

                    <p>
                        Cláusula 51ª – A ADMINISTRADORA atribuirá ao(à) Consorciado(a) Contemplado(a) o Crédito vigente na data da AGO até o 3º (terceiro) dia útil após a data da Contemplação.
                    </p>   

                    <p>
                        Cláusula 52ª – O Crédito, enquanto não utilizado pelo(a) CONSORCIADO(A), deverá permanecer depositado em banco múltiplo com carteira comercial, banco comercial ou caixa econômica e somente poderão ser aplicados em títulos públicos federais registrados no Sistema Especial de Liquidação e Custódia (“SELIC”), em fundos de investimento e/ou em fundos de investimento em cotas de fundos de investimento constituídos sob a forma de condomínio aberto, classificados como fundos de curto prazo e fundos referenciados.
                    </p>   

                    <p>
                        Cláusula 53ª – O(A) CONSORCIADO(A) poderá receber o Crédito em moeda corrente nacional, após quitado seu Saldo Devedor e caso não tenha utilizado o respectivo Crédito até 180 (cento e oitenta) dias após a Contemplação.
                    </p>   

                    <p>
                        Cláusula 54ª – O pedido de liberação do Crédito poderá ser apresentado no momento da entrega das garantias abaixo requeridas, constando a descrição dos bens ou prestação de serviços a serem adquiridos, preço e, se for o caso, a indicação do vendedor e/ou prestador dos serviços, bem como do número de inscrição no CPF/ME ou no CNPJ/ME.
                    </p>   

                    <p>
                        Cláusula 55ª – A avaliação de bens móveis passíveis de Alienação Fiduciária que não possuam identificação e/ou registros em órgãos competentes, serão elaboradas por sociedades/empresas e/ou profissionais habilitados tecnicamente, facultado ao(à) CONSORCIADO(A) acompanhá-las, sendo de sua responsabilidade o pagamento das despesas decorrentes da referida avaliação.
                    </p>   

                    <p>
                        Cláusula 56ª – A autorização para utilização do Crédito será liberada pela ADMINISTRADORA após o Consorciado Contemplado efetuar o pagamento das Parcelas que, eventualmente, encontrem-se em atraso após a data da Contemplação, facultado à ADMINISTRADORA abater o valor em atraso do Crédito, acrescido de juros e multas previstas neste Contrato.
                    </p>   

                    <p>
                        Cláusula 57ª – A ADMINISTRADORA efetuará o pagamento dos bens ou prestação de serviços que já tenham sido adquiridos pelo(a) CONSORCIADO(A), somente mediante identificação do pagamento:
                    </p>   

                    <p>
                        I) em favor do vendedor do bem ou prestador dos serviços, desde que tenha sido emitida a nota fiscal correspondente;
                    </p>   

                    <p>
                        II) em favor do(a) CONSORCIADO(A), do valor do adiantamento que este tenha feito ao vendedor do bem ou prestador de serviços, mediante documentos exigidos pela ADMINISTRADORA e, desde que, a compra tenha sido realizada após a data da Contemplação.
                    </p>   

                    <p>
                        Parágrafo Primeiro: Fica expressamente vedado que pagamentos sejam efetuados em conta corrente ou conta poupança de titularidade de pessoas que não sejam aquelas de que tratam os incisos I e II acima.
                    </p>   

                    <p>
                        Parágrafo Segundo: Fica estabelecido que em caso de compra de bem gravado por credor do vendedor, o(a) CONSORCIADO(A) será responsável pela liberação do gravame e sua alienação à ADMINISTRADORA.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 58ª – Caso o Crédito seja superior ao Saldo Devedor em pelo menos 10% (dez por cento), o(a) CONSORCIADO(A) poderá utilizar o excedente do Crédito para pagamento de despesas cartorárias, transferências de propriedade, contratação de seguros e tributos, desde que efetivamente comprovadas.
                    </p>   

                    <p>
                        XVI – DAS GARANTIAS
                    </p>   

                    <p>
                        Cláusula 59ª – De modo a garantir o pagamento das Parcelas vincendas, após Contemplação e uso de Crédito para aquisição de Bem Referenciado móvel, será exigida a constituição de Alienação Fiduciária, bem como os documentos constantes do ANEXO IV.
                    </p>   

                    <p>
                        Cláusula 60ª – A ADMINISTRADORA deverá apreciar os documentos apresentados pelo(a) CONSORCIADO(A), relativos às garantias exigidas, no prazo de até 72 (setenta e duas) horas, para que o Crédito seja disponibilizado com a constituição dessas garantias.
                    </p>   

                    <p>
                        Cláusula 61ª – Para a aquisição de veículos automotores, a ADMINISTRADORA efetuará o pagamento do bem escolhido pelo(a) Consorciado(a) Contemplado(a) diretamente ao vendedor, após satisfeitas as exigências previstas nas Cláusulas 57ª e 58ª acima.
                    </p>   

                    <p>
                        Cláusula 62ª – Para a aquisição dos demais bens móveis, o pagamento dar-se-á após a apresentação do respectivo documento de aquisição do bem e o registro do Contrato perante o órgão competente.
                    </p>   

                    <p>
                        Cláusula 63ª – O(A) CONSORCIADO(A) poderá optar por adquirir bens usados, desde que obedecidas as condições constantes no ANEXO V.
                    </p>   

                    <p>
                        Cláusula 64ª – Para garantir o pagamento das Parcelas vincendas, após Contemplação e uso de Crédito para aquisição de Bem Referenciado imóvel, será exigida a constituição de Alienação Fiduciária, bem como os documentos constantes do ANEXO VI.
                    </p>   

                    <p>
                        Cláusula 65ª – O(A) CONSORCIADO(A), cujo bem imóvel a ser adquirido esteja vinculado a empreendimento imobiliário, poderá optar, se assim desejar, pela utilização do Crédito para adquirir bem imóvel diverso daquele indicado na Adesão, construído ou a ser construído, apenas pelo terreno ou pela reforma.
                    </p>   

                    <p>
                        Cláusula 66ª – A ADMINISTRADORA deverá apreciar, no prazo de até 10 (dez) dias úteis, os documentos apresentados pelo(a) CONSORCIADO(A) relativos às garantias exigidas, para que o Crédito seja com elas disponibilizado.
                    </p>   

                    <p>
                        Cláusula 67ª – A ADMINISTRADORA, a seu exclusivo critério, poderá exigir garantias reais ou pessoais complementares.
                    </p>   

                    <p>
                        Cláusula 68ª – A ADMINISTRADORA efetuará o pagamento do imóvel escolhido pelo(a) CONSORCIADO(A) quando da apresentação da certidão da matrícula, desde que conste o registro da Alienação Fiduciária em favor da ADMINISTRADORA.
                    </p>   

                    <p>
                        Cláusula 69ª –O(A) CONSORCIADO(A) obriga-se ao pagamento do IPTU, taxas lançadas pela Prefeitura do Município do local do imóvel, multas, laudêmio e taxas condominiais, quando for o caso, obrigando-se, ainda, por eventuais demandas judiciais que incluam a ADMINISTRADORA no polo passivo.
                    </p>   

                    <p>
                        Cláusula 70ª – Fica estabelecido que para receber o Crédito contemplado de grupo de consórcio de Serviços Referenciados será exigida a seguinte garantia:
                    </p>   

                    <p>
                        I) Alienação Fiduciária de bem móvel ou imóvel de propriedade do(a) CONSORCIADO(A) sobre os quais não recaiam dívidas, caso a garantia utilizada seja veículo automotor deverá estar devidamente segurado por operadora de seguros constituída e fiscalizada pela SUSEP, para garantir o pagamento do Saldo Devedor de Serviços Referenciados.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 71ª – As garantias constituídas em favor da ADMINISTRADORA serão baixadas somente após a quitação total do Saldo Devedor.
                    </p>   

                    <p>
                        XVII – DA EXCLUSÃO DE CONSORCIADO(A)
                    </p>   

                    <p>
                        Cláusula 72ª – O(A) CONSORCIADO(A) não contemplado que deixar de realizar o pagamento de 2 (duas) Parcelas ou de montante percentual equivalente será excluído do Grupo.
                    </p>   

                    <p>
                        Parágrafo Primeiro – Antes da exclusão de que trata o caput desta cláusula, o(a) CONSORCIADO(A) poderá realizar o pagamento em atraso e respectivas diferenças, com seus valores atualizados, acrescidos de multa e juros moratórios, no prazo de 10 (dez) dias, a contar do vencimento da segunda Parcela não paga.
                    </p>   

                    <p>
                        Parágrafo Segundo – Caso o(a) CONSORCIADO(A) não atenda a condição prevista no Parágrafo Primeiro desta cláusula será excluído(a), sendo-lhe permitida, no entanto, a readmissão se atendidos os seguintes critérios:
                    </p>   

                    <p>
                        I) quitação integral de seus débitos, acrescidos de multa e juros moratórios;
                    </p>   

                    <p>
                        II) disponibilidade de vagas no Grupo, com análise prévia relacionada ao prazo restante, de modo a evitar prejuízos aos integrantes do Grupo;
                    </p>   

                    <p>
                        III) reanálise de sua capacidade financeira; e
                    </p>   

                    <p>
                        IV) atualização de cadastro.
                    </p>   

                    <p>
                        Cláusula 73ª – O(A) Consorciado(a) Excluído(a) ou seus herdeiros ou sucessores, concorrerão nas AGO em igualdade com os CONSORCIADOS do Grupo para receber os valores de restituição a que tem direito, sendo observado as regras de restituição nos termos da lei do consórcio, ressaltando-se então que somente serão devolvidos os valores pagos ao fundo comum do grupo, aplicando-se ainda a multa de 20% nos termos da cláusula 77ª abaixo.
                    </p>   

                    <p className='mid-space'>
                        Parágrafo Primeiro – Não serão restituídos ao Consorciado(a) Excluído(a) valores pagos à título de taxa de administração e seguro.
                    </p>   

                    <p>
                        XVIII – DAS PENALIDADES
                    </p>   

                    <p>
                        Cláusula 74ª – Havendo atraso nos pagamentos descritos nas Cláusulas 22ª e 23ª, o(a) CONSORCIADO(A) estará sujeito(a) ao pagamento de multa de 2% (dois por cento), acrescida de juros moratórios de 1% (um por cento) ao mês, calculados sobre o valor atualizado da Parcela, sem prejuízo de honorários advocatícios cabíveis.
                    </p>   

                    <p>
                        Cláusula 75ª – No caso de atraso de valor equivalente à 2 (duas) ou mais Parcelas, o(a) CONSORCIADO(A) não contemplado(a) será excluído(a) do Grupo, sem o prejuízo da incidência de multa, juros e honorários advocatícios determinados na Cláusula 74ª, acima.
                    </p>   

                    <p>
                        Cláusula 76ª – No caso de inadimplência de valor equivalente à 2 (duas) ou mais Parcelas, o(a) Consorciado(a) Contemplado(a) que ainda não tenha utilizado seu Crédito terá sua Contemplação cancelada, sem o prejuízo da incidência de multa, juros e honorários advocatícios determinados na Cláusula 74ª, acima.
                    </p>   

                    <p>
                        Cláusula 77ª – O(A) CONSORCIADO(A) que desistir da sua participação no Grupo, nos termos da Cláusula 15ª acima, estará sujeito(a) à multa de 20% (vinte por cento) sobre o valor da Restituição dos valores a que tem direito.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 78ª – Fica estabelecido que será promovida a competente ação judicial contra o(a) Consorciado(a) Contemplado(a) que tenha utilizado seu Crédito e que fique inadimplente com suas Parcelas, visto que o presente Contrato é título executivo extrajudicial, conforme disposto na Lei do Consórcio, ficando sob responsabilidade do(a) CONSORCIADO(A) arcar com as despesas judiciais e honorários advocatícios decorrentes de cobrança judicial.
                    </p>   

                    <p>
                        XIX – DAS ASSEMBLEIAS GERAIS
                    </p>   

                    <p>
                        Cláusula 79ª – Ao longo do prazo de duração do Grupo serão realizadas, mensalmente, as AGO e sempre que solicitado pelos CONSORCIADOS ou pela ADMINISTRADORA serão realizadas as AGE, tendo direito a voto nessas ocasiões somente os CONSORCIADOS que estiverem com suas Parcelas pagas, sem qualquer Parcela em atraso.
                    </p>   

                    <p>
                        Cláusula 80ª – Compete à AGO a Contemplação e/ou cancelamento de Contemplações, bem como apreciação de contas apresentadas pela ADMINISTRADORA, atendimento e prestação de informações aos CONSORCIADOS.
                    </p>   

                    <p>
                        Cláusula 81ª – A AGO é pública e será realizada mensalmente na sede da ADMINISTRADORA, que estabelecerá o dia e hora para sua realização, tendo início com qualquer número de CONSORCIADOS presentes.
                    </p>   

                    <p>
                        Cláusula 82ª – Compete à AGE deliberar sobre:
                    </p>   

                    <p>
                        I) transferência da administração do Grupo para outra sociedade/empresa, por motivos plenamente justificáveis, cuja decisão deverá ser comunicada ao BACEN;
                    </p>   

                    <p>
                        II) fusão do Grupo a outros grupos de consórcios administrados pela ADMINISTRADORA;
                    </p>   

                    <p>
                        III) ampliação do prazo de duração do Grupo, com suspensão ou não de pagamento de Parcelas por igual período, na ocorrência de fatos que onerem os CONSORCIADOS em demasia ou de outros eventos que dificultem a satisfação das obrigações assumidas;
                    </p>   

                    <p>
                        IV) encerramento antecipado do Grupo;
                    </p>   

                    <p>
                        V) dissolução do Grupo;
                    </p>   

                    <p>
                        VI) substituição do bem, na hipótese de descontinuidade de produção do Bem Referenciado;
                    </p>   

                    <p>
                        VII) extinção de índice de atualização do valor do Crédito; e
                    </p>   

                    <p>
                        VIII) quaisquer outras matérias de interesse exclusivo do Grupo, desde que não sejam de competência da AGO e não colidam com as disposições legais emanadas pelo BACEN.
                    </p>   

                    <p>
                        Parágrafo Único – Nas deliberações referentes aos assuntos indicados nos incisos IV, V, VI e VII desta cláusula, apenas os CONSORCIADOS não contemplados poderão votar.
                    </p>   

                    <p>
                        Cláusula 83ª – A AGE será convocada pela ADMINISTRADORA, por sua própria iniciativa ou por solicitação de, no mínimo, 30% (trinta por cento) dos CONSORCIADOS, para deliberar sobre quaisquer outros assuntos que não sejam objeto da AGO.
                    </p>   

                    <p>
                        Cláusula 84ª – Quando solicitada a convocação da AGE pelos CONSORCIADOS, a ADMINISTRADORA expedirá notificação de convocação no prazo de 5 (cinco) dias úteis, a contar da respectiva solicitação.
                    </p>   

                    <p>
                        Cláusula 85ª – A notificação de convocação da AGE será enviada, por carta, telegrama ou e-mail a todos os CONSORCIADOS, com prazo mínimo de 8 (oito) dias úteis de antecedência, contados do dia seguinte à expedição da citada notificação, na qual constarão as informações relativas ao dia, hora, local e assuntos a serem deliberados na AGE.
                    </p>   

                    <p>
                        Cláusula 86ª – A AGE instalar-se-á com qualquer número de CONSORCIADOS aptos a votar, conforme determina a Cláusula 79ª.
                    </p>   

                    <p>
                        Parágrafo Único – O(A) CONSORCIADO(A) poderá, a seu exclusivo critério, ser representado(a) em AGE mediante procuração com poderes específicos a qualquer pessoa, inclusive à ADMINISTRADORA, na qual deverá constar as informações sobre a AGE previstas na Cláusula 83ª.
                    </p>   

                    <p>
                        Cláusula 87ª – Fica convencionado que nas AGO e AGE:
                    </p>   

                    <p>
                        I) cada Cota dará direito a 1 (um) voto, observada a pontualidade no pagamento das Parcelas;
                    </p>   

                    <p>
                        II) a instalação será feita com qualquer número de CONSORCIADOS, representantes legais ou procuradores devidamente constituídos;
                    </p>   

                    <p>
                        III) as deliberações serão tomadas por maioria dos votos dos presentes, não se computando os votos em branco;
                    </p>   

                    <p>
                        IV) para efeito do disposto nos incisos anteriores desta cláusula, consideram-se presentes os CONSORCIADOS que, atendendo às condições de que trata a Cláusula 79ª, enviarem seus votos por carta com aviso de recebimento e desde que esses votos sejam recebidos pela ADMINISTRADORA até o último dia útil que anteceder ao dia da realização da AGE; e
                    </p>   

                    <p className='mid-space'>
                        V) a ADMINISTRADORA lavrará as atas correspondentes.
                    </p>   

                    <p>
                        XX – DA DISSOLUÇÃO DO GRUPO
                    </p>   

                    <p>
                        Cláusula 88ª – A dissolução de Grupo deverá ser deliberada na AGE caso ocorra:
                    </p>   

                    <p>
                        I) descumprimento, pela ADMINISTRADORA, das disposições legais relativas à administração do Grupo ou das disposições constantes deste Contrato;
                    </p>   

                    <p>
                        II) exclusão de CONSORCIADOS em número que comprometa a realização de Contemplação dos CONSORCIADOS remanescentes no prazo estabelecido para a duração do Grupo; e
                    </p>   

                    <p>
                        III) descontinuidade de produção do Bem Referenciado na Adesão.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 89ª – Os valores pagos pelos CONSORCIADOS até a data da AGE que deliberou a dissolução do Grupo serão restituídos mensalmente e em igualdade de condições aos CONSORCIADOS e Consorciados Excluídos, observada a disponibilidade de caixa, por Rateio proporcional ao percentual amortizado do preço do Bem Referenciado ou Serviço Referenciado, vigente na data da referida AGE.
                    </p>   

                    <p>
                        XXI – DA ADESÃO AO GRUPO EM ANDAMENTO
                    </p>   

                    <p>
                        Cláusula 90ª – O(A) CONSORCIADO(A) que aderir a Grupo em andamento ficará obrigado(a) a integralizar 100% (cem por cento) do valor pago pelos outros CONSORCIADOS até a data da sua Adesão, acrescidas as taxas e encargos administrativos e prêmios de seguros.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 91ª – O valor da Parcela do(a) CONSORCIADO(A) que aderir a Grupo em andamento, será calculado com base no valor resultante da divisão de 100% (cem por cento) do Crédito, acrescido das taxas e prêmios de seguros, pelo número de meses restantes para o encerramento do Grupo.
                    </p>   

                    <p>
                        XXII – DO ENCERRAMENTO DO GRUPO
                    </p>   

                    <p>
                        Cláusula 92ª – No prazo de 60 (sessenta) dias, a contar da data de Contemplação de todos os CONSORCIADOS e da disponibilização do último Crédito devido, a ADMINISTRADORA deverá adotar os seguintes procedimentos, desde que haja recursos suficientes do Grupo, e na seguinte ordem:
                    </p>   

                    <p>
                        I) comunicar aos CONSORCIADOS que não tenham utilizado seus Créditos sobre a disposição para a retirada destes em moeda corrente nacional;
                    </p>   

                    <p>
                        II) comunicar ao(à) Consorciado(a) Excluído(a) que não tenha utilizado a Restituição de Parcelas sobre a disposição para retirada deste em moeda corrente nacional, descontadas multas e encargos determinados nas Cláusulas 74ª a 78ª acima;
                    </p>   

                    <p>
                        III) comunicar aos CONSORCIADOS sobre a disposição para retirada dos saldos existentes no Fundo Comum e no Fundo de Reserva em moeda corrente nacional, proporcionalmente às respectivas Parcelas mensais pagas.
                    </p>   

                    <p>
                        Parágrafo Único – Fica estabelecido que a comunicação referida nesta Cláusula 92ª e seus incisos deverá ser realizada por meio de carta ou telegrama com aviso de recebimento ou, ainda, por e-mail.
                    </p>   

                    <p>
                        Cláusula 93ª – O encerramento contábil do Grupo deverá ocorrer no prazo máximo de 120 (cento e vinte) dias, a contar da última AGO, e ser precedido da realização pela ADMINISTRADORA de depósito dos valores remanescentes ainda não devolvidos aos CONSORCIADOS e Consorciados Excluídos, desde que previamente autorizados na Adesão, em conta corrente e/ou conta poupança, comunicando-os da realização dos depósitos, ocasião em que se deve proceder à prestação de contas definitiva do Grupo, discriminando-se:
                    </p>   

                    <p>
                        I) os valores remanescentes de titularidade dos CONSORCIADOS e Consorciados Excluídos, desde que estes não tenham recebido seu Crédito ou Restituição de Parcelas quando contemplados; e
                    </p>   

                    <p>
                        II) os valores pendentes de recebimento, que sejam objeto de cobrança judicial de Consorciado(a) inadimplente.
                    </p>   

                    <p>                        
                        Parágrafo Único – No caso de CONSORCIADO(A) falecido(a) o Crédito a ele devido deverá ser entregue aos seus herdeiros, com base em Escritura de Inventário Extrajudicial, Formal de Partilha, Alvará Judicial ou determinação judicial apresentada.
                    </p>   

                    <p>
                        Cláusula 94ª – As importâncias não resgatadas no Encerramento do grupo ou decorrentes de Rateio pelos CONSORCIADOS ativos e Consorciados Excluídos após a comunicação por parte da ADMINISTRADORA serão consideradas VNP (Valores não procurados).
                    </p>   

                    <p>
                        Parágrafo Primeiro – Decorridos 31 (trinta e um) dias da data da comunicação mencionada no caput desta cláusula, não havendo resgate dos valores disponibilizados, fica a ADMINISTRADORA autorizada a deduzir, em razão da gestão do valor, a Taxa de Permanência Mensal, correspondente a 10% (dez por cento) do valor original dos recursos disponibilizados (VNP), sendo, subsequentemente, extinta a exigibilidade do Crédito quando seu valor for inferior a R$ 30,00 (trinta reais).
                    </p>   

                    <p>
                        Parágrafo Segundo – Fica estabelecido que os Consorciados Excluídos não participam do Rateio, tendo tão somente o direito de receber o valor equivalente às Parcelas pagas até a data de sua exclusão.
                    </p>   

                    <p>
                        Cláusula 95ª – Os VNP (Valores Não Procurados) receberão a remuneração correspondente ao rendimento mensal das aplicações financeiras de recursos, tendo por base outros grupos de consórcio ativos contabilizados de forma específica, independente dos registros contábeis da ADMINISTRADORA e outros grupos de consórcio.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 96ª – O recebimento de valores pela ADMINISTRADORA referentes à Créditos recuperados por meio extrajudicial ou judicial, após o encerramento do Grupo, serão rateados proporcionalmente entre os CONSORCIADOS ativos, que se sujeitarão à cobrança de Taxa de Permanência mensal equivalente a 10% (dez por cento) do valor disponibilizado, sendo, subsequentemente, extinta a exigibilidade do Crédito quando seu valor for inferior a R$ 30,00 (trinta reais).
                    </p>   

                    <p>
                        XXIII – DAS OBRIGAÇÕES DAS PARTES
                    </p>   

                    <p>
                        Cláusula 97ª – A ADMINISTRADORA obriga-se a:
                    </p>   

                    <p>
                        I) disponibilizar, imediatamente, o Crédito ao(à) Consorciado(a) Contemplado(a);
                    </p>   

                    <p>
                        II) administrar o Grupo de forma transparente, prestando contas sempre que solicitadas;
                    </p>   

                    <p>
                        III) colocar à disposição dos CONSORCIADOS na AGO, cópia do seu último balancete patrimonial, remetido ao BACEN, bem como da respectiva demonstração dos recursos de consórcios do Grupo e, ainda, da demonstração das variações nas disponibilidades do Grupo, relativa ao período compreendido entre a data da última assembleia e o dia anterior ou do próprio dia da realização da assembleia do mês, sendo esses documentos autenticados mediante assinatura dos diretores e do responsável pela contabilidade e acompanhados das notas explicativas e do parecer de auditoria independente, quando for o caso;
                    </p>   

                    <p>
                        IV) lavrar as atas da AGC, das AGO e AGE, bem como os termos de ocorrência;
                    </p>   

                    <p>
                        V) levantar o boletim de encerramento das operações do Grupo, até 60 (sessenta) dias após a realização da última AGO;
                    </p>   

                    <p>
                        VI) encaminhar ao(à) CONSORCIADO(A), juntamente ao documento de cobrança da Parcela, a demonstração dos recursos do consórcio e a demonstração das variações nas disponibilidades do Grupo, ambas referentes ao próprio Grupo, os quais serviram de base à elaboração dos documentos consolidados enviados ao BACEN;
                    </p>   

                    <p>
                        VII) entregar, a diferença entre o valor recebido a título de indenização de seguro de vida e o valor do Saldo Devedor amortizado do(a) CONSORCIADO(A) ao(à) seu(sua) beneficiário(a) ou, em sua falta, aos(às) seus(suas) sucessores(as) mediante Escritura de Inventário Extrajudicial, Formal de Partilha, Alvará Judicial ou determinação judicial; e
                    </p>   

                    <p>
                        VIII) cumprir todos os prazos e condições estabelecidos neste Contrato.
                    </p>   

                    <p>
                        Cláusula 98ª – O(A) CONSORCIADO(A) obriga-se a:
                    </p>   

                    <p>
                        I) comunicar, por escrito, à ADMINISTRADORA, qualquer alteração em suas informações cadastrais, mantendo-as atualizadas, em especial, o endereço, número de telefone e dados relativos à conta bancária;
                    </p>   

                    <p>
                        II) realizar, pontualmente, todos os pagamentos estabelecidos nas Cláusulas 22ª e 23ª, acima;
                    </p>   

                    <p>
                        III) prestar as garantias exigidas neste Contrato; e
                    </p>   

                    <p className='mid-space'>
                        IV) cumprir com todos os prazos e condições estabelecidos neste Contrato.
                    </p>   

                    <p>
                        XXIV – DAS DISPOSIÇÕES GERAIS
                    </p>   

                    <p>
                        Cláusula 99ª – Para fins de esclarecimento do mencionado nos campos nº 39 (trinta e nove) a 41 (quarenta e um) da Adesão, entende-se por Pessoas Politicamente Expostas os agentes públicos que desempenham ou tenham desempenhado, nos cinco anos anteriores a assinatura deste Contrato, cargos, empregos ou funções públicas relevantes no Brasil, assim como os seus representantes, familiares na linha direta, até o primeiro grau, e outras pessoas de seu relacionamento próximo, listados no ANEXO III.
                    </p>   

                    <p>
                        Cláusula 100ª – É facultado ao(à) CONSORCIADO(A) desistir, a qualquer momento, do presente Contrato, desde que não esteja contemplado com o bem entregue, observado o disposto na Cláusula 14ª, que trata da desistência dentro do prazo de 7 (sete) dias da Adesão assinada fora das dependências da ADMINISTRADORA, na Cláusula 15ª, que trata da desistência de consorciado não contemplado, e na Cláusula 77ª, que trata da multa relativa à desistência descrita na Cláusula 15ª.
                    </p>   

                    <p>
                        Cláusula 101ª – Fica estabelecido que o(a) CONSORCIADO(A) não poderá ceder este Contrato e sua respectiva Cota a terceiro, sem a anuência prévia e expressa da ADMINISTRADORA e da aprovação de garantias ofertadas pelo terceiro, caso a Cota esteja contemplada.
                    </p>   

                    <p>
                        Parágrafo Único – É vedada a transferência do Contrato a terceiros por Consorciados Contemplados por Lance, com utilização de recursos do FGTS, que ainda não adquiriram o bem.
                    </p>   

                    <p>
                        Cláusula 102ª – A ADMINISTRADORA, através de seus sócios, gerentes, diretores e prepostos com função de gestão, inclusive em sociedades/empresas coligadas, controladas ou controladoras, somente poderá participar de Grupo sob sua administração desde que não concorra à Contemplação, sendo o Crédito indicado em sua Cota atribuído somente após a Contemplação de todos os CONSORCIADOS.
                    </p>   

                    <p>
                        Cláusula 103ª – A ADMINISTRADORA compromete-se a observar o dever de sigilo e confidencialidade quanto à todos os dados e informações fornecidas pelo(a) CONSORCIADO(A) durante a vigência da Adesão e do Contrato, devendo tal dever ser mantido por prazo indeterminado após o término ou extinção Grupo, devendo, ainda, a ADMINISTRADORA tomar todas as medidas técnicas necessárias para assegurar e proteger esses dados e informações contra acesso não autorizado, processamento ou encaminhamento indevidos, bem como contra destruição, perda ou alteração, conforme determina a Lei nº 13.709/2018 (Lei de Proteção de Dados).
                    </p>   

                    <p>
                        Cláusula 104ª – Este Contrato, após Contemplação do(a) CONSORCIADO(A), é título executivo extrajudicial, e, portanto, passível de execução judicial em caso de inadimplência, conforme previsto na Cláusula 78ª, acima.
                    </p>   

                    <p>
                        Cláusula 105ª – Fica limitado ao(à) CONSORCIADO(A) adquirir até 10% (dez por cento) do total de Cotas disponibilizadas pelo Grupo, desde que comprovada a sua capacidade financeira.
                    </p>   

                    <p>
                        Cláusula 106ª – Os casos omissos no presente Contrato, quando de natureza administrativa, serão resolvidos pela ADMINISTRADORA e ratificados posteriormente pela AGO do Grupo e, quando de natureza legal ou regulamentar, deverão ser validados se aprovados pelo BACEN.
                    </p>   

                    <p>
                        Cláusula 107ª – O(A) CONSORCIADO(A), neste ato, declara ter lido e entendido o presente Contrato, bem como possuir situação financeira compatível com os compromissos ora assumidos.
                    </p>   

                    <p className='mid-space'>
                        Cláusula 108ª – O presente Contrato foi registrado no 1º Cartório de Registros de Títulos e Documentos da Cidade de Barueri/SP sob o nª 1.807.162 na data de 25/01/2022.
                    </p>   

                    <p>
                        XXV – DO FORO
                    </p>   

                    <p className='mid-space'>
                        Cláusula 109ª – Fica eleito o Foro da Comarca do local da constituição do Grupo, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir todos e quaisquer conflitos oriundos deste Contrato.
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
                        Nos Grupos com CONSORCIADOS em centenas (até 999 participantes), o sistema utilizará sempre a sequência das centenas dos prêmios e para Grupos com total de participantes até 9999, o sistema utilizará a sequência do milhar nos prêmios da Loteria Federal.
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
                        2.3. Assistência Funeral: será realizada por uma empresa prestadora de serviços de assistência, que colocará sua Central de Atendimento à disposição 24 (vinte e quatro) horas por dia, durante todo o ano.
                    </p>   

                    <p>
                        2.3.1 Quando ocorrer algum fato objeto de prestação dos serviços de assistência, entrar em contato nos seguintes telefones:
                    </p>   

                    <p>
                        Bradesco (Seguro Prestamista e Capitalização)<br />
                        – 4004-2704 (Capitais/Regiões Metropolitanas)<br />
                        – 0800 701 2714 – (Demais localidades)
                    </p>   

                    <p>
                        MAPFRE (Seguro de vida e Funeral) <br />
                        – 4002 7196 (capitais e cidades metropolitanas)<br />
                        – 0800 775 7196 (demais Localidades)<br />
                        – 55 11 4689-5672 (exterior)
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
                        2.3.4. A realização do funeral compreende: preparação do corpo, urna (com ou sem visor), ornamentação da urna (com flores da estação), 1 (uma) coroa de flores (com flores da estação), véu, paramentos, velas (se permitido no local da cerimônia), livro de presença, locação de sala para velório (com taxas equivalentes às municipais) e carro fúnebre. Todos os itens serão disponibilizados conforme a infraestrutura local. Não caberá à empresa de assistência a responsabilidade pela falta de itens que não estejam disponíveis ou não sejam comercializados em determinadas praças.
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
                        Para a análise de crédito de bens móveis, imóveis e serviços o(a) Consorciado(a) Contemplado(a) deverá seguir as orientações abaixo, bem como apresentar os documentos cadastrais a seguir listados.
                    </p>   

                    <p>
                        Critério Seletivo de Crédito:
                    </p>   

                    <p>
                        PRINCIPAIS ORIENTAÇÕES
                    </p>   

                    <p>
                        Documentação – Todos os documentos deverão ser acompanhados da ficha cadastral, devidamente assinados. Em caso de documentos incompletos ou insuficientes para aprovação, o setor de crédito poderá solicitar documentos complementares, pedindo, inclusive, que se apresente Fiador para garantir o pagamento por meio de Fiança.
                    </p>   

                    <p>
                        Comprovação de renda – Deverá ser igual ou superior a 3 (três) vezes o valor da Parcela, caso utilize mais Cotas para a compra de um bem, a comprovação de renda deverá ser igual ou superior a 3 (três) vezes o valor das Parcelas de todas as Cotas somadas;
                    </p>   

                    <p>
                        Pagamento da taxa de cadastro – Poderá ser realizado por boleto ou descontado do Crédito, caso em que é necessário o envio da carta de solicitação do(a) CONSORCIADO(A) nesse sentido;
                    </p>   

                    <p>
                        Restrição de crédito – O Crédito não poderá ser aprovado caso o(a) CONSORCIADO(A), titular da Cota contemplada, possuir à época da análise restrição de crédito vigente (Serasa/SCPC).
                    </p>   

                    <p>
                        Prazo de análise – É de até 5 (cinco) dias úteis, a contar do recebimento da documentação completa, pelo setor de crédito.
                    </p>   

                    <p>
                        Utilização do Crédito aprovado – É recomendado que se realize imediatamente o processo de faturamento do bem, visto que a citada análise perde a validade após 60 (sessenta) dias da data de aprovação, ficando o(a) CONSORCIADO(A) sujeito(a) à reanálise, com reapresentação da documentação.
                    </p>   

                    <p>
                        Caso o(a) CONSORCIADO(A) não apresente documentos pendentes para a conclusão da análise dentro do prazo de 60 (sessenta) dias, a contar do pedido, esse processo de análise será enviado para arquivo.
                    </p>   

                    <p>
                        Os documentos solicitados deverão ser encaminhados através de link direcionado ao(a) CONSORCIADO(A) quando da análise de crédito, pelo qual o(a) CONSORCIADO(A) realizará upload dos documentos que serão direcionados automaticamente ao setor responsável.
                    </p>   

                    <p>
                        DOCUMENTOS NECESSÁRIOS PARA ANÁLISE DE CRÉDITO
                    </p>   

                    <p>
                        Pessoa Física
                    </p>   
                    
                    <p>
                        Documentos pessoais [Obrigatório 1 (um) dos documentos abaixo]: <br />
                        – RG e CPF/ME; <br />
                        – Carteira Nacional de Habilitação (“CNH”) válida; <br />
                        – Carteira das Forças Armadas; <br />
                        – Carteira de Conselho de Classe (CRM, OAB e etc.), válida; ou <br />
                        – Registro Nacional de Estrangeiro (“RNE”).
                    </p>   

                    <p>
                        Comprovante de Endereço [Obrigatório 1 (um) dos documentos abaixo]: <br />
                        – Conta de consumo atualizada (água, luz, telefone fixo) em seu nome ou em nome de familiar com o mesmo sobrenome (pai, mãe, irmãos, cônjuge ou filhos), desde que residam no mesmo endereço com declaração de residência; ou <br />
                        – Fatura de cartão de crédito que tenha bandeira (Visa, Mastercard, Elo, Hiper e entre outros).
                    </p>   

                    <p>
                        Comprovante de renda:
                    </p>   

                    <p>
                        Para Assalariados (Todos os documentos são obrigatórios):<br />
                        – 3 (três) últimos holerites; e<br />
                        – Carteira de Trabalho e Previdência Social (“CTPS”), cópia das páginas com foto, qualificação e contrato de trabalho.
                    </p>   

                    <p>
                        Para Assalariados com renda variável – Comissionado/Hora Extra (Todos os documentos são obrigatórios):<br />
                        – 3 (três) últimos holerites; <br />
                        – CTPS, cópia das páginas com foto, qualificação e contrato de trabalho; e <br />
                        – Extrato bancário de conta corrente dos últimos 3 (três) meses.
                    </p>   

                    <p>
                        Para Autônomos (Todos os documentos são obrigatórios) <br />
                        – Declaração de Imposto de Renda de Pessoa Física (“DIRPF”) do último exercício, com recibo e protocolo de entrega; ou 3  (três) últimas DARF’S/DAS de recolhimento de Imposto de Renda de Pessoa Física (Carnê Leão), se a renda for passível de tributação; <br />
                        – Extrato bancário de conta corrente dos últimos 6 (seis) meses; e <br />
                        – Se profissional liberal enviar a Carteira de Conselho de Classe.
                    </p>   

                    <p>
                        Para Aposentados ou Pensionistas (Todos os documentos são obrigatórios): <br />
                        – Cartão com o número do benefício e espécie; e <br />
                        – 3 (três) últimos extratos bancários.
                    </p>   

                    <p>
                        Para Funcionários Públicos (Todos os documentos são obrigatórios): <br />
                        – 3 (três) últimos holerites; <br />
                        – Carta de nomeação ou funcional; e <br />
                        – DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação.
                    </p>   

                    <p>
                        Para Produtores Rurais: <br />
                        – 6 (seis) últimas notas fiscais do produtor rural; <br />
                        – 6 (seis) últimos extratos bancários de conta corrente; <br />
                        – Cadastro do INCRA ou cópia do último Imposto Territorial Rural (“ITR”) pago; e <br />
                        – DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação.
                    </p>   

                    <p>
                        Para Motoristas de Táxi ou Transporte Escolar e de Passageiros – (Todos os documentos são obrigatórios):     <br />
                        – Alvará da Prefeitura; <br />
                        – Extrato bancário de conta corrente dos últimos 6 (seis) meses; <br />
                        – Em caso de Motorista de aplicativos, extratos das viagens; e <br />
                        – DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação.
                    </p>   

                    <p>
                        Para Empresários e/ou Sócios de Sociedades Empresárias (Todos os documentos são obrigatórios):<br />
                        – DIRPF do último exercício, com recibo e protocolo de entrega, se a renda for passível de tributação; e <br />
                        – Extrato bancário de conta corrente dos últimos 6 (seis) meses. 
                    </p>   

                    <p>
                        Pessoa Jurídica
                    </p>   

                    <p className='mid-space'>
                        Documentos pessoais e comprovante de renda (Todos os documentos são obrigatórios): <br />
                        – Comprovante da sede da pessoa jurídica, como contas de consumo em nome da sociedade ou empresa (água, gás, luz, condomínio e/ou aluguel); <br />
                        – Contrato Social e última alteração contratual ou Estatuto Social, acompanhado da ata de eleição da diretoria, devidamente registrados na Junta Comercial do Estado da sede da sociedade; <br />
                        – Apresentação da declaração do Simples Nacional, indicando a receita mês a mês; <br />
                        – Faturamento dos últimos 12 (doze) meses assinados pelo contador, indicando o número de inscrição no Conselho Regional de Contabilidade (“CRC”); <br />
                        – Extrato bancário de conta corrente dos últimos 6 (seis) meses; e <br />
                        – Os sócios deverão apresentar todos os documentos que constam na lista de Pessoa Física, mencionados acima.
                    </p>   

                    <p>
                        ANEXO V
                    </p>   

                    <p>
                        DOCUMENTOS COMPLEMENTARES / BENS MÓVEIS E SERVIÇOS
                    </p>   

                    <p>
                        Feita a Contemplação, o(a) CONSORCIADO(A) participante do segmento de bem móvel e serviços, deverá apresentar à ADMINISTRADORA, além dos documentos descritos no ANEXO IV, os documentos complementares a seguir descritos e, conforme orientações abaixo.
                    </p>   

                    <p>
                        I) automóveis fabricados entre 0 (zero) e 7 (sete) anos da data da compra, deverão ter valor de mercado equivalente ou superior ao Saldo Devedor;
                    </p>   

                    <p>
                        II) automóveis fabricados entre 8 (oito) e 12 (doze) anos da data da compra, deverão ter valor de mercado equivalente a 50% (cinqüenta por cento), no mínimo, do Saldo Devedor;
                    </p>   

                    <p>
                        III) automóveis fabricados 12 (doze) anos antes da data da compra não serão aceitos como garantia;
                    </p>   

                    <p>
                        IV) bens provenientes de leilão judicial ou extrajudicial não serão aceitos como garantia;
                    </p>   

                    <p>
                        V) apresentação de avaliação com laudo técnico de empresa especializada indicada pela ADMINISTRADORA, contendo no mínimo 3 (três) fotos, decalque de chassis, decalque do motor e extrato onde não constem débitos de IPVA, multas, licenciamento e outros;
                    </p>   

                    <p>
                        VI) apresentação de prova de que o vendedor detenha a propriedade do bem a ser adquirido;
                    </p>   

                    <p>
                        VII) comprovação da inexistência de ônus e encargos incidentes sobre o bem a ser adquirido e restrições relacionadas ao proprietário do referido bem;
                    </p>   

                    <p>
                        VIII) preenchimento do Certificado de Registro de Veículo (“CRV”) deverá aguardar a aprovação da vistoria do bem, no caso de compra de veículo automotor de pessoa física, cuja assinatura do vendedor deverá ser reconhecida por autenticidade; e
                    </p>   

                    <p>
                        IX) emissão de Nota Fiscal, no caso de compra de veículo automotor de revendedora, deverá ocorrer após aprovação da vistoria do bem.
                    </p>   

                    <p>
                        Para andamento do processo de aquisição do bem, após aprovação do crédito, verificar abaixo as orientações para veículo 0 (zero) quilômetro ou usado.
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
                         Nota fiscal, caso não seja Nota Fiscal eletrônica (“NFe”), deverá ser enviada a 1ª (primeira) via original); e<br />
                         Contrato de Alienação Fiduciária em Garantia Original, emitido pela ADMINISTRADORA.
                    </p>   

                    <p>
                        Para veículos usados:
                    </p>   

                    <p>
                        Compra em lojas ou concessionárias:<br />
                         Nota fiscal de entrada e de saída, caso não seja Nota fiscal eletrônica – NFe, deverá ser enviada a 1ª (primeira) via original; <br />
                         Contrato de Alienação Fiduciária em Garantia Original, emitido pela ADMINISTRADORA; <br />
                         Caso a loja não possua a nota fiscal de entrada do veículo, deverá ser enviada a cópia autenticada do Documento Único de  Transferência (“DUT”) do veículo, preenchido em nome do CONSORCIADO e com as devidas assinaturas e reconhecimento por autenticidade que deverá ser na cidade/município que reside.
                    </p>   

                    <p>
                        Compra de Pessoa Física: < br/>
                         Cópia autenticada original do DUT do veículo preenchido em nome do CONSORCIADO e com as devidas assinaturas e reconhecimento por autenticidade que deverá ser na cidade/município que reside; e < br/>
                         Contrato de Alienação Fiduciária em Garantia Original, emitido pela ADMINISTRADORA.
                    </p>   

                    <p>
                        O pagamento ao vendedor será realizado em até 72 (setenta e duas) horas, após o recebimento da documentação original de garantia na sede da ADMINISTRADORA.
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
                        Feita a Contemplação, o(a) CONSORCIADO(A) participante do segmento de bem imóvel deverá apresentar à ADMINISTRADORA, além dos documentos descritos no ANEXO IV, os documentos complementares a seguir descritos e conforme orientações abaixo.
                    </p>   

                    <p>
                        Para utilização de recursos provenientes de FGTS, procure um Agente Financeiro para verificação dos documentos necessários.
                    </p>   

                    <p>
                        Consorciado(a) representado por terceiro: somente poderá ser representado por terceiro através da nomeação de procurador por outorga de instrumento público, em caráter irrevogável e irretratável, com poderes específicos para representar o(a) CONSORCIADO(A) em todos os assuntos relacionados ao Consórcio e ao negócio que está sendo entabulado, conforme texto adiante:
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
                        a) certidão atualizada de procuração pública elaborada de acordo com as especificações acima, com no máximo 30 (trinta) dias de expedição; e
                    </p>   

                    <p>
                        b) apresentação pelo procurador de cópia autenticada do seu RG e CPF ou CNH e original ou cópia autenticada do comprovante de residência.
                    </p>   

                    <p className='mid-space'>
                        A exigência de tais documentos se dá em razão de garantir, pelo procurador, o recebimento de correspondências, informações, citações e/ou intimações em nome do(a) CONSORCIADO(A) outorgante.
                    </p>   

                    <p>
                        ETAPA 1 – Análise Cadastral e Capacidade de Pagamento
                    </p>   

                    <p>
                        1. CRITÉRIO SELETIVO DE CRÉDITO:
                    </p>   

                    <p>
                        Além da documentação solicitada para análise de crédito, para o caso de Cotas destinadas à aquisição de imóveis ou reforma, far-se-á necessário apresentar as certidões negativas de protestos, ações cíveis, fiscais (municipais, estaduais e federais) e trabalhistas, solicitadas após a aprovação do Crédito e avaliação do bem imóvel;
                    </p>   

                    <p>
                        A ADMINISTRADORA se reserva o direito de solicitar quaisquer documentos que julgue necessários à complementação da comprovação de renda.
                    </p>   

                    <p>
                        ETAPA 2 – Avaliação Documental do Vendedor e do Imóvel
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
                        1.3. certidão de propriedade do registro de imóveis atualizada (matrícula), com negativa de ônus e alienações, em que deverão constar todas as averbações relativas ao estado civil dos proprietários, às construções existentes e às alterações de endereço e numeração do imóvel, devendo ser apresentadas em via original e ser válida por 30 (trinta) dias, a contar da data de emissão;
                    </p>   

                    <p>
                        1.4. cópia da certidão da matrícula anterior do registro de imóveis, para matrículas de imóveis, abertas há menos de 1 (um) ano;
                    </p>   

                    <p>
                        1.5. declaração de quitação das despesas condominiais, emitidas até 30 (trinta) dias anteriores à apresentação, assinada pelo síndico ou administradora de condomínio, com firma reconhecida e, acompanhada da cópia autenticada da ata de eleição ou da contratação do síndico, não sendo aceitos imóveis com débitos ou acordos condominiais em andamento; e
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
                        2.3. cópia autenticada da certidão de casamento com averbação do atual estado civil, obtida no prazo de até 6 (seis) meses anteriores à venda, quando o vendedor for separado, divorciado ou viúvo;
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
                        2.7.1. certidão de ações cíveis, do juizado especial cível e de família (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.7.2. certidão de interdições, tutela e curatela (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.7.3. certidão de Executivos Fiscais, Estaduais e Municipais (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.7.4. certidão da Justiça Federal (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.7.5. certidão da Justiça do Trabalho (pesquisa dos últimos 5 (cinco) anos);
                    </p>   

                    <p>
                        2.7.6. certidão Negativa de Débitos Trabalhistas (“CNDT”);
                    </p>   

                    <p>
                        2.7.7. certidão dos 10 (dez) Cartórios de Protesto (pesquisa dos últimos 5 (cinco) anos); e
                    </p>   

                    <p>
                        2.7.8. certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União.
                    </p>   

                    <p>
                        O prazo de validade das certidões relacionadas no item 2.7 e seus subitens é de 30 (trinta) dias contados da data de emissão, exceto para certidões com prazo de validade determinado pelo órgão emissor.
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
                        3.6. cópia autenticada da procuração válida, sendo necessário o prazo de validade máximo de 1 (um) ano, no caso de venda realizada por procurador;
                    </p>   

                    <p>
                        3.7. certidões expedidas no local da sede social e no local do imóvel, conforme abaixo:
                    </p>   

                    <p>
                        3.7.1. certidão de ações cíveis e do juizado especial cível (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        3.7.2. certidão de Executivos Fiscais, Estaduais e Municipais (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        3.7.3. certidão da Justiça Federal (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        3.7.4. certidão de Falência e Concordata (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        3.7.5. certidão da Justiça do Trabalho (pesquisa dos últimos 5 (cinco) anos);
                    </p>   

                    <p>
                        3.7.6. certidão Negativa de Débitos Trabalhistas (“CNDT”);e
                    </p>   

                    <p>
                        3.7.7. certidão dos 10 (dez) cartórios de protesto (pesquisa dos últimos 5 (cinco) anos).
                    </p>   

                    <p>
                        O prazo de validade das certidões relacionadas no item 3.7 e seus subitens é de 30 (trinta) dias contados da data de emissão, exceto para certidões com prazo de validade determinado pelo órgão emissor.
                    </p>   

                    <p>
                        ETAPA 3 – Avaliação do Imóvel
                    </p>   

                    <p>
                        CERTIDÕES DOS PROPRIETÁRIOS ANTERIORES (ÚLTIMO ANO DE REGISTRO NA MATRÍCULA).
                    </p>   

                    <p>
                        Deverão ser apresentadas as certidões dos proprietários anteriores, abaixo relacionadas, caso a venda anterior do imóvel tenha sido registrada na matrícula a menos de 1 (um) ano.
                    </p>   

                    <p>
                        Serão aceitas as certidões apresentadas na época da venda, com prazo de emissão de até 90 (noventa) dias anteriores ao registro da escritura de compra e venda.
                    </p>   

                    <p>
                        1. Proprietário Anterior (Pessoa Física): certidões originais, expedidas no local do imóvel:
                    </p>   

                    <p>
                        1.1. certidão de ações cíveis, do juizado especial cível e de família (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        1.2. certidão de interdições, tutela e curatela (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        1.3. certidão de Executivos Fiscais, Estaduais e Municipais (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        1.4. certidão da Justiça Federal (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        1.5. certidão da Justiça do Trabalho (pesquisa dos últimos 5 (cinco) anos);
                    </p>   

                    <p>
                        1.6. CNDT;
                    </p>   

                    <p>
                        1.7. certidão dos 10 (dez) cartórios de protesto (pesquisa dos últimos 5 (cinco) anos); e
                    </p>   

                    <p>
                        1.8. certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União.
                    </p>   

                    <p>
                        2. Proprietário Anterior (Pessoa Jurídica): as certidões originais, expedidas no local da sede da empresa e local do imóvel.
                    </p>   

                    <p>
                        2.1. certidão de ações cíveis e do juizado especial cível (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.2. certidões de Executivos Fiscais, Estaduais e Municipais (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.3. certidão da Justiça Federal (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.4. certidão de Falência e Concordata (pesquisa dos últimos 10 (dez) anos);
                    </p>   

                    <p>
                        2.5. certidão da Justiça do Trabalho (pesquisa dos últimos 5 (cinco) anos);
                    </p>   

                    <p>
                        2.6. CNDT;
                    </p>   

                    <p>
                        2.7. certidão dos Cartórios de Protestos (pesquisa dos últimos 5 (cinco) anos); e
                    </p>   

                    <p>
                        2.8. certidão Negativa Relativa aos Tributos Federais e à Dívida Ativa da União.
                    </p>   

                    <p>
                        ETAPA 4 – Instrumento Particular com Alienação Fiduciária em Garantia à ADMINISTRADORA
                    </p>   

                    <p>
                        Para garantir o pagamento das Parcelas vincendas será exigida do Contemplado a Alienação Fiduciária do Bem adquirido, na forma da Lei nº 9.514/97, submetendo ao registro no cartório imobiliário competente, devendo ainda ser apresentadas pelo(a) CONSORCIADO(A) e pelo vendedor, todas as certidões relacionadas nas etapas anteriores, bem como do bem a ser adquirido.
                    </p>   

                    <p>
                        O(A) CONSORCIADO(A) deverá apresentar sua ficha cadastral, bem como a ficha cadastral dos avalistas, se for o caso, e cópias dos documentos de identidade, entre outros que forem considerados indispensáveis pela ADMINISTRADORA;
                    </p>   

                    <p>
                        O objeto da Alienação Fiduciária dado em garantia poderá ser substituído mediante prévia autorização da ADMINISTRADORA.
                    </p>   

                    <p>
                        ETAPA 5 – Pagamento do Bem Imóvel
                    </p>   

                    <p>
                        O(A) CONSORCIADO(A) poderá utilizar o Crédito para adquirir o Bem Referenciado na Adesão, novo ou usado, já edificado e com habite-se.
                    </p>   

                    <p>
                        O(A) CONSORCIADO(A) poderá adquirir o bem imóvel de propriedade de empresa da qual seja sócio ou acionista, desde que não seja MEI, ME ou EIRELI.
                    </p>   

                    <p>
                        O(A) CONSORCIADO(A) não poderá adquirir bem imóvel de propriedade de cônjuge.
                    </p>   

                    <p>
                        A ADMINISTRADORA reserva-se no direito de avaliar o imóvel a ser adquirido pelo(a) CONSORCIADO(A) e, caso julgue que este não cubra as garantias necessárias, não disponibilizará o valor do Crédito, cabendo ao(à) CONSORCIADO(A) a indicação de outro bem, o qual estará sujeito à aplicação dos mesmos procedimentos e critérios.
                    </p>   

                    <p>
                        Caso o valor do bem a ser adquirido seja superior ao valor do Crédito, o(a) CONSORCIADO(A) deverá pagar a diferença diretamente ao vendedor.
                    </p>   

                    <p>
                        Caso o bem a ser adquirido seja de valor inferior ao Crédito, o(a) CONSORCIADO(A) poderá destinar a respectiva diferença para pagar:
                    </p>   

                    <p>
                        1. parcelas vincendas, na forma estabelecida na Cláusula 36ª do Contrato;
                    </p>   

                    <p>
                        2. obrigações financeiras vinculadas ao bem, tais como as realizadas com escritura, taxas, emolumentos e registro das garantias, limitado a 10% (dez por cento) do valor do Crédito.
                    </p>   

                    <p>
                        Caso o(a) CONSORCIADO(A) tenha quitado integralmente seu débito, a diferença do Crédito resultante de aquisição de bem de menor valor, ser-lhe-á restituída em espécie.
                    </p>   

                    <p>
                        O(A) CONSORCIADO(A) que, após a Contemplação, tiver pago com recursos próprios importância para a aquisição do bem, poderá receber esse valor em espécie até o montante do Crédito, observando-se as disposições aqui estabelecidas.
                    </p>   

                    <p>
                        Decorridos 180 (cento e oitenta) dias da Contemplação, o(a) CONSORCIADO(A) poderá requerer a conversão do Crédito em espécie, desde que pague integralmente seu Saldo Devedor.
                    </p>   

                    <p>
                        ANEXO VII
                    </p>   

                    <p>
                        DOCUMENTOS PARA ENTREGA DE CARTA DE CRÉDITO DE SERVIÇOS
                    </p>   

                    <p>
                        Para entrega do Crédito ao(à) CONSORCIADO(A) em caso de cotas relativas ao Serviço Referenciado, ele(ela) deverá apresentar à ADMINISTRADORA:
                    </p>   

                    <p>
                        a) garantia ou garantias complementares, conforme o disposto nas Cláusulas 59ª à 71ª, observado que, no caso de veículo automotor, este deverá estar em nome do(a) CONSORCIADO(A), devidamente quitado e segurado, ficando à critério da ADMINISTRADORA a aceitação desse veículo nos termos do ANEXO V.
                    </p>   

                    <p>
                        b) contrato de prestação de serviços;
                    </p>   

                    <p>
                        c) nota fiscal emitida pelo prestador; e
                    </p>   

                    <p>
                        d) autorização do cliente para pagamento ao serviço contratado.
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
                        1. 1% (um por cento) sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para a transferência de Cota já contemplada, cujo Crédito já tenha sido utilizado pelo(a) CONSORCIADO(A);
                    </p>   

                    <p>
                        2. 1% (um por cento) sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para a transferência de Cota não contemplada;
                    </p>   

                    <p>
                        3. 1% (um por cento) sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para a transferência de Cota já contemplada, cujo Crédito não tenha sido utilizado pelo(a) CONSORCIADO(A); e
                    </p>   

                    <p>
                        4. 1% (um por cento) sobre o valor do Crédito, somado às despesas previstas nos incisos IV, IX, XVII e XVIII da Cláusula 23ª para substituição de garantias.
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
                        Ou seja, será restituído ao consorciado o valor pago ao fundo comum do grupo de consórcio, deduzindo-se outros valores que estejam estipulados em contrato, como por exemplo a cláusula penal por quebra contratual (cláusula 77º).
                    </p>   

                    <p>
                        Assim, não serão devolvidos ao consorciado excluído o valor pago à título de taxa de administração, que é a remuneração da Administradora pelo serviço prestado, bem como será aplicada multa por descumprimento contratual, que é uma penalidade para quem desiste de continuar no grupo de consórcio.
                    </p>   

                    <p>
                        Tais informações poderão ser conferidas através do artigo 5°, parágrafo 3° da lei do consórcio (11.795/2008) e também através das cláusulas 73ª e 77ª deste contrato.
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
                        Valor do crédito atualizado multiplicado (x) pelo percentual pago ao fundo comum subtraído (-) 20% da cláusula penal.
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
                        Valor do crédito: R$31.000,00 (X) Percentual pago ao fundo comum: 31,6670% = R$9.816,77 (-) Cláusula penal 20% (1.963,36) = R$7.853,41.
                    </p>   

                    <p>
                        Para obter informações atualizadas quanto ao valor do crédito ou percentual pago ao fundo comum da cota, basta o consorciado acessar o site da Administradora com login e senha ou no app Tradcon e olhar o extrato da cota e lá encontrará todas as informações necessárias para realização do cálculo de restituição.
                    </p>   

                </S.RegulationContainer>
            </CenterWrapper>
        </>
    )
}