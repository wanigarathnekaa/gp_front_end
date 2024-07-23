import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res:NextApiResponse){
    const {email, password} = req.body;

    if(email === 'user@example.com' && password === 'password123'){
        return res.status(200).json({message: 'Login successful'});

    }else{
        return res.status(401).json({message: 'Invalid credentials'});
    }
}