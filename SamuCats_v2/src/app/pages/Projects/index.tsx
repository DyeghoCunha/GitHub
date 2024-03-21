import FormProject from "@/components/molecules/FormProject";
import ImagePicker from "@/components/molecules/ImagePicker";
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box } from "@chakra-ui/react";


export default function ProjectsPage() {
  return (
    <main>
      <Box mt={100}></Box>
      <FormProject />
    </main>
  )
}
ProjectsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};