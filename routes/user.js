import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.js';
import { Router } from 'express';
const router = Router();

// CRUD Routes /users
router.get('/', getUsers); // /users
router.get('/:userId', getUser); // /users/:userId
router.post('/', createUser); // /users
router.put('/:userId', updateUser); // /users/:userId
router.delete('/:userId', deleteUser); // /users/:userId

export default router;