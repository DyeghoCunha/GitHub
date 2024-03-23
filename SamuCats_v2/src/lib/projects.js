import sql from "better-sqlite3"
import slugfy from 'slugify'
import xss from 'xss'
import fs from "node:fs"
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});


const db = sql("projects.db");
//TODO Arrumar o Banco de Dados e Aparecer a Imagem do Formulário 
export async function getProjects() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //throw new Error("Loading projects Failed");
  return db.prepare("SELECT * FROM projects").all();
}

export function getProject(slug) {
  return db.prepare("SELECT * FROM projects WHERE slug = ?").get(slug)
}

export async function saveProject(project) {
  project.slug = slugfy(project.title, { lower: true });
  project.instructions = xss(project.instructions);

  const extension = project.image.name.split(".").pop();
  const fileName = `${project.slug}.${extension}`

  const bufferedImage = await project.image.arrayBuffer();

  s3.putObject({
    Bucket: 'dyeghocunha-udemy-nextjs-demo-user-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: project.image.type,
  });

  project.image = `/images/${fileName}`





  db.prepare(`
  INSERT INTO projects (title,summary,instructions,creator,creator_email,image,slug)
  VALUES(
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )
  `).run(project);
}
