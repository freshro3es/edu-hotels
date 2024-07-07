const http = require('http');

const routeHandler = require('./routes/router');

const server = http.createServer(routeHandler);
const port = process.env.PORT || 3000;

if (!module.parent) {
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = server; 