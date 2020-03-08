import * as homeController from '../controllers/home';
import { Router } from 'express';

const router = Router();

// home page
router.get('/', homeController.index);
// login page
router.get('/login', homeController.login);
// about page
router.get('/about', homeController.about);


export default router;
