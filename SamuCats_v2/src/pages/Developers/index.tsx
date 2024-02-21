import { DefaultLayout } from "@/components/templates/DefaultLayout";


export default function DevelopersPage() {
  return (
    <div>Developers Page !</div>
  )
}
DevelopersPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
        <DefaultLayout>{page}</DefaultLayout>
  );
};