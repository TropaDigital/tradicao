import {
  CounterClockIcon,
  FlagIcon,
  HeartEyeIcon,
  PersonHandIcon
} from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';
import { BsStar } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import {
  ConsortiumContainer,
  ConsortiumTimeLine,
  ConsortiumTimeLineSmall,
  ConsortiumTitle,
  InfoIcon,
  InfoText,
  InfoWithIcon,
  TimeLineCenter,
  TimeLineInfo,
  TimeLineRight
} from './styles';
import 'animate.css';

export default function ConsortiumWorks() {
  return (
    <ConsortiumContainer data-aos="fade-up">
      <CenterWrapper>
        <ConsortiumTitle>Como funciona o consórcio?</ConsortiumTitle>

        {/* Screens bigger than 500px */}
        <ConsortiumTimeLine>
          <TimeLineInfo>
            <InfoWithIcon>
              <InfoText>
                <div className="info-title">Grupo</div>
                <div className="description right">
                  No Consórcio você faz parte de um grupo, com a finalidade de
                  adquirir bens imóveis ou móveis. Cada participante desse grupo
                  será chamado de consorciado e terá um número chamado cota
                </div>
              </InfoText>

              <InfoIcon>
                <IoIosSearch />
              </InfoIcon>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoText>
                <div className="info-title">Assembleia</div>
                <div className="description right">
                  Mensalmente são realizadas assembleias de contemplação,
                  através de sorteios extraídos pela Loteria Federal.
                </div>
              </InfoText>

              <InfoIcon>
                <FlagIcon />
              </InfoIcon>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoText>
                <div className="info-title">Contemplação</div>
                <div className="description right">
                  É quando você recebe o crédito para adquirir seu bem. Os
                  participantes contemplados devem continuar pagando as
                  parcelas, conforme o plano adquirido.
                </div>
              </InfoText>

              <InfoIcon>
                <HeartEyeIcon />
              </InfoIcon>
            </InfoWithIcon>
          </TimeLineInfo>

          <TimeLineCenter>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </TimeLineCenter>

          <TimeLineInfo className="left">
            <InfoWithIcon>
              <InfoIcon>
                <CounterClockIcon />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Pagamento das parcelas</div>
                <div className="description left">
                  A partir da adesão, é muito importante que pague as parcelas
                  mensais em dia, assim garantindo sua participação nas
                  assembleias.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <PersonHandIcon />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Lance</div>
                <div className="description left">
                  Uma maneira de aumentar suas chances de contemplação é por
                  oferta de lances. No Consórcio Tradição, você pode ser
                  contemplado por lance: livre, embutido, fixo ou quitação.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <BsStar />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Análise de Crédito</div>
                <div className="description left">
                  Após a contemplação, o Consórcio Tradição, irá avaliar o
                  potencial de pagamento do crédito, para que não prejudique a
                  saúde do grupo.
                </div>
              </InfoText>
            </InfoWithIcon>
          </TimeLineInfo>
        </ConsortiumTimeLine>

        {/* Screens lower than 500px */}
        <ConsortiumTimeLineSmall>
          <TimeLineCenter>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </TimeLineCenter>

          <TimeLineRight>
            <InfoWithIcon>
              <InfoIcon>
                <IoIosSearch />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Grupo</div>
                <div className="description left">
                  No Consórcio você faz parte de um grupo, com a finalidade de
                  adquirir bens imóveis ou móveis. Cada participante desse grupo
                  será chamado de consorciado e terá um número chamado cota.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <CounterClockIcon />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Pagamento das parcelas</div>
                <div className="description left">
                  A partir da adesão é muito importante que pague as parcelas
                  mensalmente para garantir sua participação nas assembleias.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <FlagIcon />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Assembleia</div>
                <div className="description left">
                  Mensalmente são realizadas assembleias de contemplação,
                  através de sorteios extraídos pela Loteria Federal.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <PersonHandIcon />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Lance</div>
                <div className="description left">
                  Uma maneira de aumentar suas chances de contemplação é por
                  oferta de lances. No Tradição, você pode ser contemplado por
                  lance: livre, embutido, fixo ou quitação.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <BsStar />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Análise de Crédito</div>
                <div className="description left">
                  Após a contemplação, o Consórcio Tradição, irá avaliar o
                  potencial de pagamento do crédito.
                </div>
              </InfoText>
            </InfoWithIcon>

            <InfoWithIcon>
              <InfoIcon>
                <HeartEyeIcon />
              </InfoIcon>

              <InfoText>
                <div className="info-title left">Contemplação</div>
                <div className="description left">
                  É quando você recebe o crédito para adquirir seu bem. Os
                  participantes contemplados devem continuar pagando as
                  parcelas, conforme o plano adquirido.
                </div>
              </InfoText>
            </InfoWithIcon>
          </TimeLineRight>
        </ConsortiumTimeLineSmall>
      </CenterWrapper>
    </ConsortiumContainer>
  );
}
