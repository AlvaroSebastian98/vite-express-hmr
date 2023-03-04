//**************************************/
// Lista de rutas que cargan las páginas
//**************************************/

import { Router } from 'express';
const router = Router();
import { join } from 'path';

/** Página de login */
router.get('/login', function(_req, res, _next) {
  res.sendHTML(join(process.cwd(), 'dist', 'layouts', 'login.html'))
});

/** Página de listado de productos */
router.get('/products', function(_req, res, _next) {
  res.sendHTML(join(process.cwd(), 'dist', 'layouts', 'products.html'))
});

// Ping
router.get('/ping', (_req, res) => {
  res.sendStatus(200)
})

export default router