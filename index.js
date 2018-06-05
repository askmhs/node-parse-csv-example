import restify from "restify";

const server = restify.createServer({
    name: "node-parse-csv-example"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

require("./Routes/Import")(server);

server.listen(3000, () => {
    console.log("Listening at port 3000!");
});