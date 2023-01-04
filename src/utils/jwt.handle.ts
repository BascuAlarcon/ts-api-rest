import {sign, verify} from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'mysecretpassword';

const generateToken = async (id: string) => {
	const jwt = sign({id}, JWT_SECRET, {
		expiresIn: '2h'
	});
	return jwt;
};

const verifyToken = (jwt: string) => {
	const isOk = verify(jwt, JWT_SECRET);
	return isOk;
};

export {generateToken, verifyToken};