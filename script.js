import Express from 'express';

import router from "./charactercontroller.js";

import bodyParser from 'body-parser';

const app = Express();

const port = 3010;

app.listen(port, (req, res) => {

console.log(`running in console ${port}`)
})

app.use(bodyParser.json());

app.use("/api/characters", router);

