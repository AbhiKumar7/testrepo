let http = require("http")
let port = 5000
let axios = require("axios");
const { json } = require("body-parser");

let server = http.createServer( async function (req,res) {
    console.log("req done");

let response = await axios.get("https://api.codingninjas.com/api/v3/event_tags")
console.log(response.data.data);

    
res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response.data.data))
})

server.listen(port,()=>{
    console.log(`${port} is running`);
})