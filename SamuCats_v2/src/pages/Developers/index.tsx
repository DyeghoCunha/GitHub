import FormDefault from "@/components/molecules/FormDefault";
import { DefaultLayout } from "@/components/templates/DefaultLayout";


export default function DevelopersPage() {
  return (
    <main>
    <div>Developers Page !</div>
    <FormDefault/>
    </main>
  )
}
DevelopersPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
        <DefaultLayout>{page}</DefaultLayout>
  );
};