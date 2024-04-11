"use server"
import { redirect } from "next/navigation";
import { saveProject } from "./projects";
import { revalidatePath } from "next/cache";
import Developer from "@/types/types";


interface IDeveloperForm {

  title: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  instructions: FormDataEntryValue | null;
  image: FormDataEntryValue | null;
  creator: FormDataEntryValue | null;
  creator_email:  FormDataEntryValue | null;
  id: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  availability: FormDataEntryValue | null;
  linkedIn: FormDataEntryValue | null;
  github: FormDataEntryValue | null;
  whatsapp?: FormDataEntryValue | null;
  primaryStack: FormDataEntryValue | null;
  secondaryStack?: FormDataEntryValue | null;
  primaryLanguage: FormDataEntryValue | null;
  programmingLanguages?: FormDataEntryValue | null;
  stylingFrameWork?: FormDataEntryValue | null;
  frameWork: FormDataEntryValue | null;
}

function isInvalidText(text: any) {
  return !text || text.trim() === '';
}

export async function saveDeveloperForm(prevState: unknown, formData: FormData) {
  const project: IDeveloperForm = {
    title: formData.get("name"),
  summary: formData.get("name"),
  instructions: formData.get("name"),
  image:formData.get("name"),
  creator: formData.get("name"),
  creator_email:formData.get("name"),
  id: formData.get("name"),
  name: formData.get("name"),
  availability: formData.get("name"),
  linkedIn: formData.get("name"),
  github: formData.get("name"),
  whatsapp: formData.get("name"),
  primaryStack: formData.get("name"),
  secondaryStack: formData.get("name"),
  primaryLanguage: formData.get("name"),
  programmingLanguages: formData.get("name"),
  stylingFrameWork: formData.get("name"),
  frameWork: formData.get("name"),

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
