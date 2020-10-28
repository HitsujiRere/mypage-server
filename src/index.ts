import { app } from "./app";

import path from "path";

import * as fs from "fs";

app.get("/", (req, res) => {
    const f = fs.readFileSync("html/index.html");
    res.write(f);
    res.end();
});

app.use((req, res, next) => {
    const f = fs.readFileSync("html/err404.html");
    res.write(f);
    res.end();
});
