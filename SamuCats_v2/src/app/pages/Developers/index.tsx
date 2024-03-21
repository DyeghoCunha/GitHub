import FormDeveloper from "@/components/molecules/FormDeveloper";
import FormDefault from "@/components/molecules/FormProject";
import { DefaultLayout } from "@/components/templates/DefaultLayout";
import { Box } from "@chakra-ui/react";


export default function DevelopersPage() {
  return (
    <main>
      <Box my={100}></Box>
      <FormDeveloper />

    </main>
  )
}
DevelopersPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
};