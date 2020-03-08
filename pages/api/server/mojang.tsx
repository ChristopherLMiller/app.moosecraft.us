import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

const minestat = require('../../../src/minestat');

export default async ( req: NextApiRequest, res: NextApiResponse ) => {
    // grab the data from mojang
    const response = await fetch('https://status.mojang.com/check');
    const data = await response.json();

    // setup some variables to figure out which server person wants
    const server = req.query?.address;
    
    // loop over the servers trying to find this one
    data.forEach((element: object) => {
         if (Object.keys(element)[0] === server) {
            const key = Object.keys(element);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'Application/Json');
            res.end(JSON.stringify({status: Object.values(element)[0]}));
         }
    });

    res.statusCode = 401;
    res.end('Unable to find');
}