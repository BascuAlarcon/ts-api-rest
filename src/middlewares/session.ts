import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from '../utils/jwt.handle';

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const jwtHeader = req.headers.authorization || null;
		const jwt = jwtHeader?.split(' ').pop();
		const isUser = verifyToken(`${jwt}`);

		if(!isUser){
			res.status(401);
			res.send('JWT_UNVALID');
		}else{
			req.user = isUser; 
			console.log('JWT_VALID');
			next();
		}
	} catch (error) {
		res.status(400);
		res.send('UNVALID_SESSION');
	}
};

export {checkJWT};