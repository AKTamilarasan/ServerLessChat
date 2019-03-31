module.exports = async function (context, req) {
    context.bindings.cosmosDBMessage = req.body;
    context.bindings.signalRMessages = [{
        "target": "newMessage",
        "arguments": [req.body]
    }];
    context.done();
};