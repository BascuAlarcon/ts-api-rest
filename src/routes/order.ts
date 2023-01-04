import { Router } from 'express'; 
import { getItems } from '../controllers/order';
import { checkJWT } from '../middlewares/session';

const router = Router();

/* [GET]
* http:localhost:3000/order/
protected route with jwt
*/  

router.get('/', checkJWT, getItems);

export {router};