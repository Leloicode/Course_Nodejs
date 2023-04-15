import User from '../../models/UserModel.js';
function UserApI(app) {
    app.get('/Api/User', async (req, res) => {
        try {
            const user = await User.find({});
            res.status(200).json(user);
            console.log(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    });
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
}

export default UserApI;