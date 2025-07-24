# 🛒 Shopee Cart Terminal - Sistema de Carrinho de Compras em Node.js

Este é um projeto de desafio da [DIO (Digital Innovation One)](https://www.dio.me/) que consiste no desenvolvimento de um sistema de **carrinho de compras inspirado na Shopee**, utilizando **Node.js** para ser executado diretamente no terminal.

## 📦 Descrição do Projeto

O objetivo é criar uma aplicação que simule um carrinho de compras, permitindo que o usuário adicione, remova e visualize produtos, além de calcular os totais com base na quantidade e preço dos itens. Toda a lógica do sistema está no **backend**, sem interface gráfica, proporcionando uma experiência completa de manipulação de dados via terminal.

## 🚀 Funcionalidades

- ✅ Adicionar itens ao carrinho
- ❌ Remover itens do carrinho por índice
- 🗑️ Deletar itens do carrinho por nome
- 📜 Exibir todos os itens do carrinho
- 💰 Calcular o total com base na quantidade e preço dos produtos
- ❤️ Simulação de uma lista de desejos (wishlist)

## 🛠️ Tecnologias Utilizadas

- Node.js (ESModules)
- JavaScript Assíncrono (async/await)
- Execução via terminal

## 📁 Estrutura de Arquivos

📦 src/
├── 📁 services/
│ ├── cart.js # Lógica do carrinho (add, remove, total, etc.)
│ └── item.js # Função para criar itens com subtotal
├── index.js # Ponto de entrada da aplicação
📄 package.json # Configuração do projeto Node.js
📄 readme.md # Documentação do projeto

## 🧪 Como Executar

git clone [https://github.com/Carloscb124/Sistema-de-Carrinho-de-Compras]
cd shopee-cart-terminal
npm install
node src/index.js

💡 Certifique-se de que o package.json esteja com "type": "module" para usar import/export.
