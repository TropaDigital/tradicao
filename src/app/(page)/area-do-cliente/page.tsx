'use client';

// Next
import Image from 'next/image';

// Components
import CenterWrapper from '@/components/global/CenterWrapper';

// Styles
import * as S from './styles';
import ClientLogin from '@/components/pages/area-do-cliente/ClientLogin';

// Images
import AppImage from '../../../../public/images/client_image.png';
import {
  AnalyticsIcon,
  AppStoreIcon,
  CartIcon,
  LikeHandIcon,
  MoneyIcon,
  PlayStoreIcon,
  SmartphoneIcon,
  UnlockIcon
} from '@/assets/icons';
import Link from 'next/link';

export default function ClientArea() {
  return (
    <>
      <CenterWrapper>
        <S.MainWrapper>
          <S.AppWrapper>
            <S.AppLinks>
              <S.AppTitleLinks>Tudo isso na palma da sua mão!</S.AppTitleLinks>
              <h3 style={{ color: 'var(--primary)' }}>
                Com o aplicativo Tradcon você pode:
              </h3>
              <S.AppSubtitleLinks>
                <ul>
                  <li>Retirar 2° Via do Boleto;</li>
                  <li>Ofertar Lances;</li>
                  <li>Obter Resultado das Assembleias</li>
                  <li>Informações Sobre a Cota.</li>
                </ul>
              </S.AppSubtitleLinks>

              <div className="flex">
                <Link
                  href={
                    'https://play.google.com/store/apps/dev?id=5000676211929608521&pli=1'
                  }
                  target="_blank"
                >
                  <PlayStoreIcon />
                </Link>
                <Link
                  href={'https://apps.apple.com/br/app/tradcon/id1545583087'}
                  target="_blank"
                >
                  <AppStoreIcon />
                </Link>
              </div>
            </S.AppLinks>

            <Image
              src={AppImage}
              alt="Imagem do App do Consórcio Tradição"
              className="app-image"
              width={315}
              height={286}
            />
          </S.AppWrapper>

          <ClientLogin />
        </S.MainWrapper>
      </CenterWrapper>
    </>
  );
}
