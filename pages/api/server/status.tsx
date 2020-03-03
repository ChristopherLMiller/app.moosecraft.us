import { NextApiRequest, NextApiResponse } from 'next';

const minestat = require('../../../src/minestat');

export default ( req: NextApiRequest, res: NextApiResponse ) => {
    minestat.init(req.query?.address || 'localhost', req.query?.port || 25565, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({status: minestat.online ? 'green' : 'red'}));    
    });  
}