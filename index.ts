import { readdirSync, readFileSync } from "fs";
import sharp from "sharp";

const dir = Bun.argv[2]
readdirSync(dir).forEach(file => {
  console.log(file);
  const fileBuffer = readFileSync(`${dir}/${file}`);
  const convertedToWebp = sharp(fileBuffer).webp().toFile(`${dir}/${file.replace(/\.[^/.]+$/, "")}.webp`);
});