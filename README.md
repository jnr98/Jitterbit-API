# Jitterbit Integration Challenge - Order API

[cite_start]Esta é uma API desenvolvida em **Node.js** para o teste técnico da Jitterbit[cite: 1, 223]. [cite_start]A aplicação gerencia pedidos e realiza a transformação (mapping) de dados entre a entrada da requisição e o armazenamento no banco de dados[cite: 224, 265].

## 🛠️ Tecnologias Utilizadas

* [cite_start]**Node.js**: Ambiente de execução[cite: 223].
* **Express**: Framework para construção de APIs.
* [cite_start]**MongoDB**: Banco de dados NoSQL para armazenamento[cite: 234].
* **Mongoose**: Modelagem de dados e conexão com o banco.

## 📁 Estrutura do Projeto

[cite_start]O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade[cite: 310]:
* `src/config`: Configurações de conexão com o banco de dados.
* `src/models`: Definição dos Schemas do MongoDB.
* `src/controllers`: Lógica de negócio e transformação de dados (Mapping).
* [cite_start]`src/routes`: Definição dos endpoints da API[cite: 226].

## 🔄 Transformação de Dados (Mapping)

[cite_start]Conforme solicitado no desafio, a API recebe os dados em um formato e os salva no banco seguindo o mapeamento abaixo[cite: 265, 266]:

| Campo Entrada (JSON) | Campo Saída (Banco) |
| :--- | :--- |
| `numeroPedido` | `orderId` |
| `valorTotal` | `value` |
| `dataCriacao` | `creationDate` |
| `idItem` | `productId` |
| `quantidadeltem` | `quantity` |
| `valorltem` | `price` |

## 🚀 Como Rodar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
