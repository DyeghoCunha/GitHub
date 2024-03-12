import { DefaultLayout } from '@/components/template/DefaultLayout';
import React from 'react'

export default function BlogPage() {
  return (
    <div>BlogPage</div>
  )
}
BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};