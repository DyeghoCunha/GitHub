import PageContainer from '@/components/atoms/PageContainer/PageContainer'
import React from 'react'
import CalculaFatorR from '../components/CalculaFatorR/CalculaFatorR'
import { DefaultLayout } from '@/components/templates/DefaultLayout';

export default function CalculadoraFatorR() {
  return (
    <PageContainer>
      <CalculaFatorR />
    </PageContainer>
  )
}
CalculadoraFatorR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};