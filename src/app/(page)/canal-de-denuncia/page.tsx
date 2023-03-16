'use client'

import CenterWrapper from '@/components/global/CenterWrapper';
import SkewContainer from '@/components/shared/SkewContainer';
import ComplianceBg from '../../../../public/images/compliance_bg.png';
import React from 'react';
import MainTitle from '@/components/UI/MainTitle';

const CompliancePage = () => {
  return (
    <>
      <SkewContainer
        imageSrc={ComplianceBg}
        imageAlt="Homem em uma mesa trabalhando"
        size="tiny"
      />
      <CenterWrapper>
        <MainTitle
        title=''
        />
      </CenterWrapper>
    </>
  );
};

export default CompliancePage;
