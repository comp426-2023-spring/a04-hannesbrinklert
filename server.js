#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import rpsls from "./lib/a03-hannesbrinklert/lib/rpsls.js";
import rps from "./lib/a03-hannesbrinklert/lib/rps.js";
import bodyParser from 'body-parser';


const args = minimist(process.argv.slice(2));


const port = args.port || 5000;

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res) => {
    res.status(200);
    res.send("200 OK")
});

app.get('/app/rpsls/', (req, res) => {
    res.send(rpsls());
});

app.get('/app/rps/', (req, res) => {
    res.send(rps());
});

app.get('/app/rpsls/', (req, res) => {
    res.send(rpsls());
});

app.get('/app/rps/play/', (req, res) => {
    res.send(rps(req.query.shot));
});

app.get('/app/rpsls/play/', (req, res) => {
    res.send(rpsls(req.query.shot))
});


app.post('/app/rps/play/', (req, res) => {
    res.send(rps(req.body.shot));
});

app.post('/app/rpsls/play/', (req, res) => {
    res.send(rpsls(req.body.shot));
});


app.get('/app/rps/play/:shot(rock|paper|scissors)', (req, res) => {
    res.send(rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot(rock|paper|scissors|lizard|spock)', (req, res) => {
    res.send(rpsls(req.params.shot));
});


app.get('*', (req, res) => {
    res.status(404);
    res.send("404 NOT FOUND")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
