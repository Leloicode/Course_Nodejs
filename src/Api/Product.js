import Product from "../../models/ProductsModel.js";
function ProductApi(app) {
    app.get('/Api/Product', async (req, res) => {
        try {
            const product = await Product.find({});
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    })
    app.get('/Api/Product/:slug', async (req, res) => {
        try {
            const slug = req.params.slug;
            console.log(slug);
            const product = await Product.findOne({ slug: slug });
            res.status(200).json(product);
            console.log(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    })
    // app.get('/Api/Product/:id', async (req, res) => {
    //     try {
    //         const id = req.params.id;
    //         const product = await Product.findById(id);
    //         res.status(200).json(product);
    //         console.log(product);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({ message: error.message });
    //     }
    // })
    app.post('/Api/Product', async (req, res) => {

        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message, data: req.body });
        }
    })
    app.put('/Api/Product/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const productOld = await Product.findByIdAndUpdate(id, req.body);
            if (!productOld) {
                res.status(404).json({ message: 'cannot find id product' })
            }
            const productNew = await Product.findById(id);
            res.status(200).json(productNew);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    })
    app.delete('/Api/Product/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                return res.status(404).json({ message: `cannot find id product` })
            }
            res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    });
}

export default ProductApi;