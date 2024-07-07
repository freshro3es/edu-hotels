const data = require('../../data-sql');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const id = parseInt(req.url.split('/')[2]);
        const parsedBody = JSON.parse(body);

        const updatedData = {};
        const name = parsedBody.name;
        const age = parsedBody.age;
        if (age && name) { 
            updatedData.age = parseInt(age)
            updatedData.name = name;
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: "Name and age are required"}));
        };
        
        if (updatedData) {
            const user = await data.updateUser(id, updatedData);
            res.writeHead(201);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: "Name and age are required"}));
        }
    });
};