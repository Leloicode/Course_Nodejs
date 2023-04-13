const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Product = require('./models/ProductsModel')
const User = require('./models/UserModel');
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.get('/', (req, res) => {
//     res.send('Xin chao leloi')
//     console.log('xin chafo');
// });
// app.get('/tintuc', (req, res) => {
//     res.send('Xin chao tintuc')
// });

//product
app.get('/Api/Product', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
        console.log(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.get('/Api/Product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product);
        console.log(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.post('/Api/Product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.put('/Api/Product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productOld = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
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
})


//user
app.get('/Api/User', async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
        console.log(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.get('/Api/User/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
        console.log(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.post('/Api/User', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.put('/Api/User/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userCurrent = await User.findByIdAndUpdate(id, req.body);
        if (!userCurrent) {
            res.status(404).json({ message: 'cannot find id product' })
        }
        const userNew = await User.findById(id);
        res.status(200).json(userNew);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})
app.delete('/Api/User/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: `cannot find id user` })
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://testApi:loi12tren9deptrai@atlascluster.ptmjntq.mongodb.net/Product?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`)
        });
        console.log('Connected susscefully');
    })
    .catch((error) => {
        console.log(error);
    })