import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhisiList = [];

console.log("welcome to the your Shoppe Cart");

// criando dois itens no carrinho
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborguini", 39.99, 3);

// adicionando dois itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// remove o item do carrinho
await cartService.removeItem(myCart, 2);
await cartService.removeItem(myCart, 2);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);

console.log("\nMy WhisiList:");
await cartService.calculateTotal(myWhisiList);

