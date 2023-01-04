import { Request, Response } from 'express';
import { getCars } from '../services/item.service';
import { handleHttp } from '../utils/error.handle';
 
const getItems = async (req: Request, res: Response) => {
	try{ 
		res.send({data: 'asd'});
	}catch(e){
		handleHttp(res, 'ERROR_GET_ITEMS');
	}
}; 

export{ getItems };