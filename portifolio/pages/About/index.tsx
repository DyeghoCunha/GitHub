import { DefaultLayout } from '@/components/template/DefaultLayout';
import React from 'react'

export default function AboutPage() {
  return (
    <div>AboutPage</div>
  )
}
AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};