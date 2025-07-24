// casos de uso  dos itens

// criar item com subtotal certo
async function createItem(name, price, quantity) {
    return { // tudo dentro das chaves é um objeto
        name,
        price,
        quantity,
        subtotal: () => price * quantity, // para declarar que é uma função usa (: dois pontos)
    };
};

export default createItem;