module.exports = async function (context, req, messages) {
    context.res.body = messages;
    context.done();
};