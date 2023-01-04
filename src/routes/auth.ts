import { Router } from 'express';  

import {registerCtrl, loginCtrl} from '../controllers/auth';
const router = Router();
 
/* [GET]
* http:localhost:3000/auth/ 
*/ 

router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export {router};