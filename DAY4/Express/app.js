// const express = require("express");
import express from "express";
import cors from "cors";
import { courses } from "./data.js";
const app = express()
const port = 3500;

app.use(cors());
app.get("/courses", (req,res)=> {
    res.json(courses);
});

app.listen(port, ()=>{
    console.log(`Listening app on port${port}`);
})