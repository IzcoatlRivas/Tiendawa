const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
	console.log(`[HOLA] Ruta accedida con metodo ${req.method}`);
	next();
});
router.get('/', (req, res) => {
		res.send(`GET en /hola`);
});
router.post('/', (req, res) => {
		res.send('POST en /hola');
});
module.exports = router;
