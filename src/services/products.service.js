import axios from "axios";

 class ProductsService {
    #data; 
    #url = "https://fakestoreapi.com/products"; 

    async getProducts() {
        const response = await axios.get(this.#url);
        this.#data = response.data; 
        return response.data;
    }

    async getProductByCode(code) {
        const response = await axios.get(`${this.#url}/${code}`);
        return response.data;
    }
}

export default new ProductsService();