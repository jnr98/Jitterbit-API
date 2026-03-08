const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    productId: { type: Number, required: true }, // Mapeado de idItem [cite: 265, 274]
    quantity: { type: Number, required: true },  // Mapeado de quantidadeItem [cite: 265, 275]
    price: { type: Number, required: true }      // Mapeado de valorItem [cite: 265, 276]
});

const OrderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true }, // numeroPedido [cite: 267]
    value: { type: Number, required: true },                 // valorTotal [cite: 268]
    creationDate: { type: Date, required: true },            // dataCriacao [cite: 269]
    items: [ItemSchema]
});

module.exports = mongoose.model('Order', OrderSchema);