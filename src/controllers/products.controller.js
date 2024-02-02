import  ProductsService  from "../services/products.service.js";

export const getProducts = async (req, res) => {
    const data = await ProductsService.getProducts ();
    res.status(200).send(data);
};

export const getProductByCode = async (req, res) => {
    const { code } = req.params;
    const data = await ProductsService.getProductByCode(code);
    
    if (data) {
        res.status(200).send(data);
    } else {
        res.status(404).json({ message: "id no encontrado" });
    }
};