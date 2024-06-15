import { log } from "console";
import crypto from "crypto";
import fs, { link } from "fs";
import path from "path";

const ShortenUrl = (req, res) => {
  //1. get url from long request body
  const url = req.body.url;

  //2. generate short url + ramdomstring 6 characters
  const randomString = crypto.randomBytes(3).toString("hex");
  const shortUrl = `${randomString}`;

  //3. save long and short url in file form JSON format
  const linkFilePath = path.join(process.cwd(), "model", "links.json");

  // 4. baca data from file
  const filestringData = fs.readFileSync(linkFilePath, { encoding: "utf8" });
  const fileData = JSON.parse(filestringData);

  // 5. combine existing and new data
  const newData = {
    url: url,
    shortUrl: shortUrl,
  };
  fileData.push(newData);

  // 6. tulis data ke dalam file
  const stringData = JSON.stringify(fileData, null, 2);
  fs.writeFileSync(linkFilePath, stringData);
  res.send(`${shortUrl}`); 
};

export default ShortenUrl;

//http://localhost:3000;
