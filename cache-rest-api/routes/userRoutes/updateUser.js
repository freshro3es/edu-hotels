const data = require('../../data');

module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        const id = parseInt(req.url.split('/')[2]);

        const updatedData = {};
        // const parsedBody = new URLSearchParams(body);
        // const name = parsedBody.get('name');
        // if (name) { updatedData('name') = name };
        // const age = parsedBody.get('age');
        // if (age) { updatedData('age') = parseInt(age) };
        
        const parsedBody = JSON.parse(body);
        const name = parsedBody.name;
        if (name) { updatedData.name = name };
        const age = parsedBody.age;
        if (age) { updatedData.age = parseInt(age) };
        

        if (updatedData) {
            const user = data.updateUser(id, updatedData);
            res.writeHead(201);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: "Name and age are required"}));
        }
    });
};