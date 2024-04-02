"use server"
import { redirect } from "next/navigation";
import { saveProject } from "./projects";
import { revalidatePath } from "next/cache";


interface Project {
  title: FormDataEntryValue |null  ;
  summary: FormDataEntryValue |null  ;
  instructions: FormDataEntryValue |null ;
  image: FormDataEntryValue |null ;
  creator: FormDataEntryValue |null ;
  creator_email: string ;
}

function isInvalidText(text:any) {
  return !text || text.trim() === '';
}

export async function saveProjectForm(prevState: unknown, formData: FormData){
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
