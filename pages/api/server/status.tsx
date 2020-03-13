import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async ( req: NextApiRequest, res: NextApiResponse ) => {
    const response = await fetch('https://api.mcsrvstat.us/2/mc.moosecraft.us');
    const data = await response.json();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'Application/Json');
    res.end(JSON.stringify({status: data.online ? 'green' : 'red'}))
}