const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test',
};

const s = require('http').Server((req,res) => {
    let body = '';
    switch (req.url) {
        case '/result4/':
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                res.writeHead(200, {
                    'Content-Type': 'application/json; charset=utf-8',
                    ...CORS
                });
                res.write(JSON.stringify({
                    message: 'itmo307702',
                    'x-result': req.headers['x-test'],
                    'x-body': body
                }));
                return res.end('\n');
            });
            break;
        default:
            res.writeHead(200, {
                ...CORS
            });

            return res.end('\n');
            break;
    }
    // res.end('\n');
});
s.listen(4321);