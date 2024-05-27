import { Router } from 'express';
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/items';
import { fieldValidator } from '../middlewares/validator';

const router = Router();

/* [GET]
* http:localhost:3000/item/
*/
router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', [
	check('name', 'Name is required').not().isEmpty(),
	check('color', 'Color is required').not().isEmpty(),
	check('gas', 'Gas is required').not().isEmpty(),
	check('year', 'Year is required').isNumeric(),
	fieldValidator
], postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router };