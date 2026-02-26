const express = require("express");
const app = express();
app.use(express.json());

app.get("/",(req,res)=> {
    res.send("backend running successfully");
});

app.listen(5000,()=>{
    console.log("Server running on port 500");
});
