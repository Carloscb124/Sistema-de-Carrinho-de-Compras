// adiciona um item 
async function addItem(userCart, item) {
    userCart.push(item);
};

// calculo total do carrinho
async function calculateTotal(userCart){
    console.log("\nShopee Cart Total: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🛒Total: ${result}`)
};

// deleta um item 
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    
    if (index !== -1) {
        userCart.splice(index, 1);
    }
};

// remove um item
async function removeItem(userCart, index){
   const deleteIndex = index - 1;
    
   if(index >= 0 && index < userCart.length ){
        userCart.splice(deleteIndex, 1)
    }
};

// ver itens do carrinho
async function displayCart(userCart){
    console.log("\nShopee Cart List: ")
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${
        item.quantity}x | Subtotal = ${item.subtotal()}`)
    })
};

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};

