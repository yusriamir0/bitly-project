import fs from "fs";
import path from "path";

const Dashboard = (req, res) => {
  const filepath = path.join(process.cwd(), "pages", "dashboard.html");
  const page = fs.readFileSync(filepath, "utf8");
  res.send(page);
};

export default Dashboard;
