import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth.service';

const registerCtrl = async ({ body }: Request, res: Response) => {
	try {
		const responseUser = await registerNewUser(body);
		res.send(responseUser);
	} catch (e) {
		res.status(500);
		res.send('Error');
	}
};

const loginCtrl = async ({ body }: Request, res: Response) => {
	try {
		const { email, password } = body;
		const responseUser = await loginUser({ email, password });
		if (responseUser === 'WRONG_CREDENTIALS') {
			res.status(403);
			res.send(responseUser);
		} else {
			res.send(responseUser);
		}
	} catch (e) {
		res.status(500);
		res.send('Error');
	}
};

export { registerCtrl, loginCtrl };