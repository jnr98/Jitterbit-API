const mongoose = require('mongoose');

// No Linux, se o MongoDB estiver rodando localmente, o padrão é o IP 127.0.0.1
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jitterbit_db';

        await mongoose.connect(mongoURI);

        console.log('✅ Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Encerra a aplicação em caso de erro crítico
    }
};

module.exports = connectDB;