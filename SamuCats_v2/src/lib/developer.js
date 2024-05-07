import sql from "better-sqlite3"
import slugify from 'slugify'
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: "sa-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});


const db = sql("samucats.db");

export async function getDevelopers() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //throw new Error("Loading projects Failed");
  return db.prepare("SELECT * FROM developers").all();
}

export function getDeveloper(slug) {
  return db.prepare("SELECT * FROM developers WHERE slug = ?").get(slug)
}

export async function saveDeveloper(developer) {
  developer.slug = slugify(developer.name, { lower: true });
  console.log("SLUG" + developer.slug)
  const extension = developer.image.name.split(".").pop();
  const fileName = `${developer.slug}.${extension}`
  console.log("Filename" + fileName)
  const bufferedImage = await developer.image.arrayBuffer();

  s3.putObject({
    Bucket: 'samucatsv2',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: developer.image.type,
  });

  developer.image = fileName

  db.prepare(`
  INSERT INTO developers (
    availability,
    email,
    framework,
    github,
    id,
    image,
    linkedIn,
    name,
    primaryLanguage,
    primaryStack,
    programmingLanguages,
    secondaryStack,
    slug,
    stylingFramework,
    summary,
    whatsapp
  )
  VALUES(
    @availability,
    @email,
    @framework,
    @github,
    @id,
    @image,
    @linkedIn,
    @name,
    @primarylanguage,
    @primaryStack,
    @programmingLanguages,
    @secondaryStack,
    @slug,
    @stylingFramework,
    @summary,
    @whatsapp
  )
`).run(developer);

}
