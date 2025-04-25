const express = require('express');
const router = express.Router();
const holaRouter = require('./hola');
router.use((req,res,next)=>{
	console.log('[ROUTER] Entrando a /routes');
	next();
});
router.use('/hola',holaRouter);
module.exports=router;

