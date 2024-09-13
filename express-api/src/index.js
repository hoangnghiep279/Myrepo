import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/repos", async (req, res) => {
    try {
        const api = await axios.get("https://api.github.com/users/freeCodeCamp/repos");

        const filterRepos = api.data.filter((repos) => !repos.fork && repos.forks > 5);
        res.json(filterRepos);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Error fetching data from github" });
    }
});
app.listen(PORT, () => {
    console.log(`server is running with PORT: ${PORT}`);
});
