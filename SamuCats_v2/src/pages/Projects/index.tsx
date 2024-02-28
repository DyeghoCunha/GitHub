import FormProject from "@/components/molecules/FormProject";
import ImagePicker from "@/components/molecules/ImagePicker";
import { DefaultLayout } from "@/components/templates/DefaultLayout";


export default function ProjectsPage() {
  return (
    <main>
      <FormProject />
    </main>
  )
}
ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};