function ConnectDB(mongoose, app, port) {
    return (
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
    );
}

export default ConnectDB;