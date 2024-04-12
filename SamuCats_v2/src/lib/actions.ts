"use server"
import { redirect } from "next/navigation";
import { saveDeveloper } from "./developer";
import { revalidatePath } from "next/cache";


interface IDeveloperForm {
  availability: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  framework: FormDataEntryValue | null;
  github: FormDataEntryValue | null;
  image: string;
  linkedIn: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  primaryLanguage: FormDataEntryValue | null;
  primaryStack: FormDataEntryValue | null;
  programmingLanguages?: FormDataEntryValue | null;
  secondaryStack?: FormDataEntryValue | null;
  stylingFramework?: FormDataEntryValue | null;
  summary: FormDataEntryValue | null;
  title: FormDataEntryValue | null;
  whatsapp?: FormDataEntryValue | null;
}

function isInvalidText(text: any) {
  return !text || text.trim() === '';
}

async function getGithubProfileImage(username: FormDataEntryValue | null) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data.avatar_url;
}



export async function saveDeveloperForm(prevState: unknown, formData: FormData) {

  const developer: IDeveloperForm = {
    availability: formData.get("availability"),
    email: formData.get("email"),
    framework: formData.get("framework"),
    github: formData.get("github"),
    image: await getGithubProfileImage(formData.get("githug")),
    linkedIn: formData.get("linkedIn"),
    name: formData.get("name"),
    primaryLanguage: formData.get("primarylanguage"),
    primaryStack: formData.get("primaryStack"),
    programmingLanguages: formData.get("programmingLanguages"),
    secondaryStack: formData.get("secondaryStack"),
    stylingFramework: formData.get("stylingFramework"),
    summary: formData.get("summary"),
    title: formData.get("title"),
    whatsapp: formData.get("whatsapp"),
  }
  {/**
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
   */}
  await saveDeveloper(developer)
  revalidatePath("/developers")
  redirect("/developers");
}
