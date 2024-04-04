"use server"
import { redirect } from "next/navigation";
import { saveProject, saveSimplesNacional } from "./projects";
import { revalidatePath } from "next/cache";
import { ISimplesNacionalForm } from "@/types/types";


interface Project {
  title: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  instructions: FormDataEntryValue | null;
  image: FormDataEntryValue | null;
  creator: FormDataEntryValue | null;
  creator_email: string;
}


function isInvalidText(text: any) {
  return !text || text.trim() === '';
}

export async function saveProjectForm(prevState: unknown, formData: FormData) {
  const project: Project = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: "teste",
  }

  if (
    isInvalidText(project.title) ||
    isInvalidText(project.summary) ||
    isInvalidText(project.instructions) ||
    isInvalidText(project.creator)
  ) {
    return {
      message: 'Invalid input.',
    };
  }
  await saveProject(project)
  revalidatePath("/Projects")
  redirect("/Projects");
}
export async function saveSimplesNacionalForm(prevState: unknown, formData: FormData) {
  const simplesNacional: ISimplesNacionalForm = {
    annexOption: formData.get("annexOption"),
    rbt12: formData.get("rbt12"),
    salesValue: formData.get("salesValue"),
    salesValueToExterior: formData.get("salesValueToExterior"),
    taxesReplaced: formData.get("taxesReplaced"),
    valueIcmsReplacement: formData.get("valueIcmsReplacement"),
    valueIssReplacement: formData.get("valueIssReplacement"),
    valuePisCofinsReplacement: formData.get("valuePisCofinsReplacement"),

  }

  
    if (
      isInvalidText(simplesNacional.annexOption) ||
      isInvalidText(simplesNacional.rbt12) ||
      isInvalidText(simplesNacional.salesValue) ||
      isInvalidText(simplesNacional.taxesReplaced)
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveSimplesNacional(simplesNacional)
  // revalidatePath("/Projects")
  // redirect("/Projects");
}