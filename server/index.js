const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3001;

const firebaseUrl = "https://webassignment3-db5e2-default-rtdb.firebaseio.com/";

app.use(cors());

app.get("/getData", async (req, res) => {
  try {
    const response = await axios.get(`${firebaseUrl}.json`);
    const data = response.data;
    res.json(data);
  } catch (err) {
    console.error('Error fetching data from Firebase:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
