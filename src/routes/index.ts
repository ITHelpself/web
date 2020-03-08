import { Router } from 'express';
import homeRouter from './home';
import loginRouter from './login';
// Init router and path
const router = Router();

// Add sub-routes
router.use('/',loginRouter);
router.use('/', homeRouter);
//router.use(erorrRouter);
// Export the base-router
export default router;
