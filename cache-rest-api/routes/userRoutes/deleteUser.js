const data = require('../../data');

module.exports = (req, res) => {
    const id = parseInt(req.url.split('/')[2]);
    const user = data.deleteUser(id);

    if (user) {
        res.writeHead(204);
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "User not found"}));
    }
};