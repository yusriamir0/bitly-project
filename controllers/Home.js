import fs from "fs";
import path from "path";

const Home = (req, res) => {
  const filepath = path.join(process.cwd(), "pages", "index.html");
  const page = fs.readFileSync(filepath, "utf8");
  res.send(page);
};

export default Home;
