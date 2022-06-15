import { Router } from 'express';
const router = Router()

import userRoute from './users.routes.js'
import articleRoute from './articles.routes.js'
import storeRoute from './stores.routes.js'

router.use(userRoute)
router.use(articleRoute)
router.use(storeRoute)

export default router