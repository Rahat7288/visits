const express = require("express");
const redis = require("redis");
// const process = require("process");

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    // default port for redis server
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res)=>{
    // process.exit(0);
    // getting the visits 
    client.get("visits", (err, visits)=>{
        // sending the response to the webpage
        res.send("number of visits are" + visits);
        // updating the visit count
        client.set('visits', parseInt(visits)+1 );
    });
});


app.listen(8081, ()=>{
    console.log("port is listening to port 8081");
});