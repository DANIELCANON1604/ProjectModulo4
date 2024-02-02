class CartService {
    constructor() {
        this.cart = new Map();
    }

    addToCart(userId, product) {
        if (!this.cart.has(userId)) {
            this.cart.set(userId, []);
        }
        this.cart.get(userId).push(product);
    }

    getCart() {
        return Array.from(this.cart.entries());
    }
}

export default new CartService();