 const UsersController = require('../controllers/usersController');
const passport = require('passport');

module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
    app.get('/api/users/findById/:id', passport.authenticate('jwt', {session: false}), UsersController.findById);
    app.get('/api/users/findDeliveryMen', passport.authenticate('jwt', {session: false}), UsersController.findDeliveryMen);
    app.get('/api/users/getAdminsNotificationTokens', passport.authenticate('jwt', {session: false}), UsersController.getAdminsNotificationTokens);

    // GUARDAR DATOS
    app.post('/api/users/create', upload.array('image', 1), UsersController.registerWithImage);
    app.post('/api/users/login', UsersController.login);
    app.post('/api/users/logout', UsersController.logout);

    // ACTUALIZAR DATOS
    app.put('/api/users/update', passport.authenticate('jwt', {session: false}),  UsersController.update)
    app.put('/api/users/updateImage', passport.authenticate('jwt', {session: false}), upload.array('image', 1), UsersController.updatePhoto)
    app.put('/api/users/updateNotificationToken', UsersController.updateNotificationToken)
}