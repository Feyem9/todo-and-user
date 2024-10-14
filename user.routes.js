// pour creeer une route il faut
// d'abord creer le controller 

const { Router } = require('express');

const router = Router();

const userController = require('../controller/user.controller');
// je commence par reccuperer tout les utilisateurs de ma base de données

router.get('/' , userController.getAll);

// je cree un utilisateur

router.post('/create' , userController.create);

// je recupere un utilisateur par son ID

router.get('/getOne' , userController.getOne);

// je modifie un utilisateur

router.put('.update', userController.update);

// je supprime un utilisateur

router.delete('/delete' , userController.deleteUser);