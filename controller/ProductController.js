import { request } from "../src/util/request.js";
class ProductController {
    async index(req, res) {
        const data = await request.get('/Api/Product/')
        res.render('product', {
            data: data.data
        });
    }
    async show(req, res) {
        const slug = req.params.slug;
        const product = await request.get(`/Api/Product/${slug}`)
        console.log(product);
        res.render('productdetail', {
            product: product.data
        });
    }

    showadd(req, res) {
        res.render('addProduct');
    }
    async addProduct(req, res) {
        const data = req.body;
        data.price = +req.body.price;
        data.quantity = +req.body.quantity;
        console.log(data);
        try {
            const product = await request.post(`/Api/Product`, data)
            res.redirect('/products');
        } catch (error) {
            console.log(error);
        }
    }
    async updateProduct(req, res, next) {
        const id = req.params.id;
        try {
            const product = await request.get(`/Api/Product/${id}`)
            res.render('updateProduct', {
                product: product.data
            })
        } catch (error) {
            next(error);
        }
    }
    async updateStoreProduct(req, res, next) {
        // const data = req.body;
        res.send('hoho');
    }
}
export default new ProductController