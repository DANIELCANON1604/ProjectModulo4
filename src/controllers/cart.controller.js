import CartService from "../services/cart.service.js";
import UsersService from "../services/users.service.js";
import ProductsService from "../services/products.service.js";

export const getUserCart = (req, res) => {
    try {
        const cart = CartService.getCart();
        const userCartInfo = [];

        for (const [userId, products] of cart) {
            const user = UsersService.getUserById(userId);
            if (user) {
                userCartInfo.push({ user, products });
            }
        }

        res.status(200).json(userCartInfo);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener información del carrito" });
    }
};


export const addToCart = async (req, res) => {
    try {
        const { userId, productCode } = req.body;

        const user = UsersService.getUserById(userId);
        const product = await ProductsService.getProductByCode(productCode);

        if (user && product) {
            CartService.addToCart(user, product);
            res.status(200).json({ message: "Producto agregado al carrito correctamente" });
        } else {
            res.status(404).json({ message: "Usuario o producto no encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
