const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");

const mongoose = require("mongoose");
const connectDatabase = require("./helper/connectDatabase");
const Schema = mongoose.Schema;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

//Schema
const ServiceModelSchema = new Schema({
  imageURL: String,
  name: String,
  description: String,
});

//Schema Model
const ServiceModel = mongoose.model("ServiceModel", ServiceModelSchema);

//Mongo db
connectDatabase();

app.get("/api", (req, res) => {
  res.send("Hello API!");
});

//Post
app.post("/api/services", async (req, res) => {
  const { imageURL, name, description } = req.body;
  const newService = new ServiceModel({
    imageURL: imageURL,
    name: name,
    description: description,
  });
  await newService.save();
  res.status(201).send("Created");
});

//Get All
app.get("/api/services", async (req, res) => {
  const { name } = req.query;
  const services = await ServiceModel.find();
  if (!name) {
    res.status(200).send(services);
  } else {
    res
      .status(200)
      .send(
        services.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        )
      );
  }
});

//Get By ID
app.get("/api/services/:id", async (req, res) => {
  const { id } = req.params;
  const service = await ServiceModel.findById(id);
  if (!service) {
    res.status(204).send("Data Not Found");
  } else {
    res.status(200).send(service);
  }
});

//delete By id
app.put("/api/services/:id", async (req, res) => {
  const { imageURL, name, description } = req.body;
  const { id } = req.params;
  const existedService = await ServiceModel.findByIdAndUpdate(id, {
    imageURL: imageURL,
    name: name,
    description: description,
  });
  if (!existedService) {
    res.status(204).send("Data Not Found");
  } else {
    res.status(203).send("Data edited");
  }
});

//Delete
app.delete("/api/services/:id", async (req, res) => {
  const { id } = req.params;
  const service = await ServiceModel.findByIdAndDelete(id);
  if (!service) {
    res.status(204).send("Data Not Found");
  } else {
    res.status(202).send("Data Deleted");
  }
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
