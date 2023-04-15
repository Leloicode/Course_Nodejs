
class ProductController {
    index(req, res) {
        res.render('product');
    }
    show(req, res) {
        res.send('productdetail');
    }
}
export default new ProductController