import FormDeveloper from "@/components/molecules/FormDeveloper";
import FormDefault from "@/components/molecules/FormProject";
import { DefaultLayout } from "@/components/templates/DefaultLayout";


export default function DevelopersPage() {
  return (
    <main>
    <FormDeveloper/> 

    </main>
  )
}
DevelopersPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};