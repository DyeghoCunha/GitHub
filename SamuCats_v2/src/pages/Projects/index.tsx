import ImagePicker from "@/components/molecules/ImagePicker";
import { DefaultLayout } from "@/components/templates/DefaultLayout";


export default function ProjectsPage() {
  return (
    <main>
      <div>Projects Page !</div>
    </main>
  )
}
ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};