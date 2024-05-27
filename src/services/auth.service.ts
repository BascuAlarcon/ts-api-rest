import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import UserModel from '../models/user';
import { encrpyt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({ email, password, name }: User) => {
	const checkIs = await UserModel.findOne({ email });
	if (checkIs) return 'ALREADY_USER';
	const passHash = await encrpyt(password);
	const registerNewUser = await UserModel.create({ email, password: passHash, name });
	return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
	const checkIs = await UserModel.findOne({ email });
	if (!checkIs) return 'WRONG_CREDENTIALS';

	const passwordHash = checkIs.password;
	const isCorrect = await verified(password, passwordHash);
	if (!isCorrect) return 'WRONG_CREDENTIALS';

	const token = await generateToken(checkIs.email);
	const data = {
		token,
		user: checkIs
	};

	return data;
};

export { registerNewUser, loginUser };