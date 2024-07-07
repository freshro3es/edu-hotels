const data = require('../../data-sql');

module.exports = async (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const isDeleted = await data.deleteUser(id);

    if (isDeleted) {
        res.writeHead(204);
        res.end(JSON.stringify(isDeleted));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "User not found"}));
    }
};