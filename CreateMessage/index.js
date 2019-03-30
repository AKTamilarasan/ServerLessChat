module.exports = async function (context, req) {
    context.bindings.cosmosDBMessage = req.body;
    context.done();
};