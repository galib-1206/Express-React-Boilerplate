//express has routing system
const express = require('express');
const { sequelize } = require('../models');
const { DataTypes } = require('sequelize');
const router = express.Router();
const Post  = require("../models/Post")(sequelize, DataTypes);

router.get("/", async (req, res) => {
 const listofPosts = await Post.findAll();
 res.json(listofPosts);
});

 router.post("/", async (req,res) => {
    //inside it,grabbing post data
    //call sequelize func to create table 
     try {
        const post = req.body;
        await Post.create(post);
        res.json(post);
        console.log("post is here");
     } catch (error) {
        console.log(error)
        res.json({error: "an error occured"})
     }
 });












module.exports = router;