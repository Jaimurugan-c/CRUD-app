const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Crud", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));
  
app.get('/' , (req,res)=>{
    userModel.find({})
    .then(users =>res.json(users))
    .catch(err=>res.json(err))
})

app.post("/createuser", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
