import { DefaultLayout } from '@/components/template/DefaultLayout';
import React from 'react'

export default function ProjectsPage() {
  return (
    <div>ProjectsPage</div>
  )
}

ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};