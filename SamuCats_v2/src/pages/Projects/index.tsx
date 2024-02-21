import { DefaultLayout } from "@/components/templates/DefaultLayout";


export default function ProjectsPage() {
  return (
    <div>Projects Page !</div>
  )
}
ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
        <DefaultLayout>{page}</DefaultLayout>
  );
};