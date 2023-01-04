import { Request, Response } from 'express';
import { insertCar, getCars, getCar, updateCar, deleteCar} from '../services/item.service';
import { handleHttp } from '../utils/error.handle';

const getItem = async({ params }: Request, res: Response) => {
	try{
		const {id} = params;
		console.log(id);
		const response = await getCar(id);
		res.send(response);
	}catch(e){
		handleHttp(res, 'ERROR_GET_ITEM');
	}
};
const getItems = async (req: Request, res: Response) => {
	try{
		const response = await getCars();
		res.send(response);
	}catch(e){
		handleHttp(res, 'ERROR_GET_ITEMS');
	}
};
const postItem = async({body}: Request, res: Response) => {
	try{
		const responseItem = insertCar(body);
		res.send(responseItem);
	}catch(e){
		handleHttp(res, 'ERROR_POST_ITEM', e);
	}
};
const updateItem = async({params, body}: Request, res: Response) => {
	try{
		const {id} = params;
		const response = await updateCar(id, body);
		res.send(response);
	}catch(e){
		handleHttp(res, 'ERROR_UPDATE_ITEM');
	}
};
const deleteItem = async({params}: Request, res: Response) => {
	try{
		const {id} = params;
		const response = await deleteCar(id);
		res.send(response);
	}catch(e){
		handleHttp(res, 'ERROR_DELETE_ITEM');
	}
};

export{getItem,getItems,postItem,updateItem,deleteItem};