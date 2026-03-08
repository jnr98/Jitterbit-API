const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// URLs conforme o documento do desafio
router.post('/order', OrderController.create);               // Criar
router.get('/order/list', OrderController.index);            // Listar todos
router.get('/order/:orderId', OrderController.show);         // Obter um
router.put('/order/:orderId', OrderController.update);       // Atualizar
router.delete('/order/:orderId', OrderController.delete);    // Deletar

module.exports = router;