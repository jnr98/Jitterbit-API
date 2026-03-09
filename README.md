# Jitterbit Integration Challenge - Order API

Esta é uma API desenvolvida em **Node.js** para o teste técnico da Jitterbit.A aplicação gerencia pedidos e realiza a transformação (mapping) de dados entre a entrada da requisição e o armazenamento no banco de dados.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para construção de APIs.
* **MongoDB**: Banco de dados NoSQL para armazenamento.
* **Mongoose**: Modelagem de dados e conexão com o banco.

## 📁 Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:
* `src/config`: Configurações de conexão com o banco de dados.
* `src/models`: Definição dos Schemas do MongoDB.
* `src/controllers`: Lógica de negócio e transformação de dados (Mapping).
* `src/routes`: Definição dos endpoints da API.

## 🔄 Transformação de Dados (Mapping)

Conforme solicitado no desafio, a API recebe os dados em um formato e os salva no banco seguindo o mapeamento abaixo:

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
