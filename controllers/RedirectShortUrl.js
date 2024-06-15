import fs from "fs";
import path from "path";

const Redirect = (req, res) => {
  // 1. Get short URL from request parameters
  const shortUrl = req.params.shortUrl;

  // 2. Find long URL from the data file in JSON format
  // Construct the path to the JSON data file
  const dataFilePath = path.join(process.cwd(), "model", "links.json");
  // Read the JSON file as a string
  const fileStringData = fs.readFileSync(dataFilePath, { encoding: "utf8" });
  // Parse the JSON string into an object
  const fileData = JSON.parse(fileStringData);

  // 3. Use the find method to get the corresponding long URL
  // Find the object in the array where shortUrl matches
  const link = fileData.find((linkData) => linkData.shortUrl === shortUrl);

  try {
    // If a matching link is found, extract the long URL
    const longUrl = link.url;
    console.log(`Redirecting to: ${longUrl}`);
    // Redirect to the long URL with a 301 status code (Moved Permanently)
    res.status(301).redirect(longUrl);
  } catch (error) {
    // Handle the case where the short URL is not found
    console.error(`Short URL '${shortUrl}' not found`);
    // Respond with a 404 status code (Not Found) and an error message
    res.status(404).send(error.message);
  }
};
export default Redirect;
// http://localhost:3000
