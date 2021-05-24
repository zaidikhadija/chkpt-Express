const express = require('express');

const app = express();
console.log(app);

const workingTimeRoute = require("./routes/WorkingTime");

app.use (express.static(__dirname + "/Public"));
app.use(workingTimeRoute);
const port = 8000;
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);

})

            

