//**************************************/
// Lista de rutas que sirven como gateway
//**************************************/

import { Router } from 'express'
import productController from '../controllers/product.controller.js'

const router = Router()

// Example routes
router.get('/products', productController.getAll)


export default router
