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
              <S.AppTitleLinks>Tudo isso na palma da sua mão</S.AppTitleLinks>
              <S.AppSubtitleLinks>
                <ul>
                  <li>
                    <SmartphoneIcon />
                    Consórcio Digital
                  </li>
                  <li>
                    <CartIcon />
                    Compra planejada
                  </li>
                  <li>
                    <MoneyIcon />
                    Sem entrada
                  </li>
                  <li>
                    <UnlockIcon size={24} />
                    Sem juros
                  </li>
                  <li>
                    <LikeHandIcon /> Parcelas mensais que cabem no seu bolso
                  </li>
                  <li>
                    <AnalyticsIcon size={24} />
                    Compra parcelada
                  </li>
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
