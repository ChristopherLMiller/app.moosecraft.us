import { NextApiRequest, NextApiResponse } from 'next';

const minestat = require('../../../src/utils/minestat');

export default ( req: NextApiRequest, res: NextApiResponse ) => {
    // defualt colors
    let status = 'grey';

    minestat.init(req.query?.address || 'localhost', req.query?.port || 25565, () => {
        console.log(minestat.online);
        status = minestat.online ? 'green' : 'red';           
    }); 
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({status: status}));
}