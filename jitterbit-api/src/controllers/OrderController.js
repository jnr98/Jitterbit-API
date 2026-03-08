const Order = require('../models/Order');

module.exports = {
    // Criar um novo pedido (Obrigatório)
    async create(req, res) {
        try {
            const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

            // Mapping dos campos para o banco de dados [cite: 265, 266]
            const orderData = {
                orderId: numeroPedido,
                value: valorTotal,
                creationDate: dataCriacao,
                items: items.map(item => ({
                    productId: item.idItem,
                    quantity: item.quantidadeltem,
                    price: item.valorltem
                }))
            };

            const newOrder = await Order.create(orderData);
            return res.status(201).json(newOrder); // 201: Sucesso na criação [cite: 313]
        } catch (error) {
            return res.status(400).json({ error: "Erro ao criar pedido", details: error.message });
        }
    },

    // Obter dados por número do pedido (Obrigatório) [cite: 228]
    async show(req, res) {
        try {
            const order = await Order.findOne({ orderId: req.params.orderId });
            if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar pedido" });
        }
    },

    // Listar todos os pedidos (Opcional) [cite: 230, 231]
    async index(req, res) {
        try {
            const orders = await Order.find();
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar pedidos" });
        }
    },

    // Atualizar pedido (Opcional) [cite: 232]
    async update(req, res) {
        try {
            const { valorTotal, items } = req.body;

            // Prepara os dados atualizados (se enviados)
            const updateData = {};
            if (valorTotal) updateData.value = valorTotal;
            if (items) {
                updateData.items = items.map(item => ({
                    productId: item.idItem,
                    quantity: item.quantidadeltem,
                    price: item.valorltem
                }));
            }

            const updatedOrder = await Order.findOneAndUpdate(
                { orderId: req.params.orderId },
                updateData,
                { new: true } // Retorna o documento já atualizado
            );

            if (!updatedOrder) return res.status(404).json({ message: "Pedido não encontrado para atualizar" });
            return res.status(200).json(updatedOrder);
        } catch (error) {
            return res.status(400).json({ error: "Erro ao atualizar pedido" });
        }
    },

    // Deletar pedido (Opcional) [cite: 233]
    async delete(req, res) {
        try {
            const deletedOrder = await Order.findOneAndDelete({ orderId: req.params.orderId });
            if (!deletedOrder) return res.status(404).json({ message: "Pedido não encontrado para exclusão" });
            return res.status(200).json({ message: "Pedido removido com sucesso" });
        } catch (error) {
            return res.status(500).json({ error: "Erro ao deletar pedido" });
        }
    }
};