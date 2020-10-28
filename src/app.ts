import express from "express";

const PORT = process.env.PORT || 8000;

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Server is up!");
});
