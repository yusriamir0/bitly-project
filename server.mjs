import express from "express";
import Home from "./controllers/Home.js";
import Dashboard from "./controllers/Dashboard.js";
import ShortenUrl from "./controllers/GenerateShortUrl.js";
import Redirect from "./controllers/RedirectShortUrl.js";

const app = express();
const PORT = 3000;

// handle static public routes
app.use(express.static("public"));

// handle body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Home);
app.get("/dashboard", Dashboard);
app.post("/shorten", ShortenUrl);
app.get("/:shortUrl", Redirect);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

//http://localhost:3000;
