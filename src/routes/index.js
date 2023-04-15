import SiteController from '../../controller/SiteController.js';
import ProductsRouter from './products.js'
function routes(app) {

    app.use('/products', ProductsRouter);
    app.use('/search', SiteController.search)
    app.use('/', SiteController.home)
}

export default routes;