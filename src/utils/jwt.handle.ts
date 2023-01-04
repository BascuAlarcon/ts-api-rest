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

const refreshToken = async(jwt: string, id: string) => {
	const isOk = await verifyToken(jwt);
	if(isOk){
		const newToken = await generateToken(id);
		return newToken;
	}else{
		return 'WRONK_TOKEN';
	} 
};

export {generateToken, verifyToken, refreshToken};