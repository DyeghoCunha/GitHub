"use server"
import { redirect } from "next/navigation";
//import { saveProject } from "./projects";


export async function saveProjectForm(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }
 
  //await saveProject(meal)
  redirect("/");
}