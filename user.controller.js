// je commence ici par appeler mon model
const { response } = require('express');
const User = require('../models/users.model');

// je require mongoose qui est ma base de donne

const mongoose = require('mongoose');

// ici maintenant je cree les fonctions CALLBACK qui ont trois parametres(request , response et next)
// ces fonctions seront utilisé dans nos routes

// toujour utiliser les "async/await"

const create = async(req , res , next) => {

    const body = request.body;
    
     // ici on recuper les informations de l'utilisateur dans le body 
    if(body.email && body.password && body.name){ 
        const user = new User({
            name: nody.name,
            email:body.email,
            password:body.password
        });

        // et ici nous sauvegardons l'utilisateur dans notre base de donnée
        const save = await user.save();

        // si c'est bien fait on retourne un message JSON
        return res.status(201).json({
            status: 'success',
            status_code : 201,
            message : 'User created successfully',
            data : save
        })
    }
    // s'il ya une erreur renvoyer un message JSON
    return res.status(400).json({
        status: 'erreur lors de la creation de l utilisateur',
        status_code: 400,
        message: 'informations non valide',
    });
}

//  recuperer tous les utilisateurs

const getAll = async (req, res) => {

    // on recupere tous les users
    const user = await User.find();

    // on retourne une reponse json
    return res.status(200).json({
        status: 'success',
        status_code: 200,
        message: 'user fetched successfully',
        data: user
    });
}

// pour faire le update on doit d'abord rechercher un utilisateur par son id

// on recupere un utilisateur par son id

const getOne = async(req,res,next) => {

    const id  = req.params.id;

    const user = await User.findById(id);

    // on verifie si l'id a ete recupere
    if(!id){
        return res.status(404).json({
            status : '404 Not Found',
            status_code : 404,
            message : ' User Not Found'
        })
    }
    return res.status(200).json({
        status: 'success',
        status_code: 200,
        message: 'user fetched successfully',
        data: user,
    });
}

const update = async(req , res) => {
    const {id} = req.params;
    const body =  req.body;
    const user = await User.findByIdAndUpdate(id,body , {new  : true})
    if(user){
        return res.status(200).json({
            status : 'success',
            status_code : 200,
            message : 'user updated successfully',
            data : user
        })
    }
    return res.status(404).json({
        status : '404 Not Found',
        status_code : 404,
        message : ' User Not Found'
    })
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (user) {
        return res.status(200).json({
            status: 'success',
            status_code: 200,
            message: 'user deleted successfully',
        });
    }
    return res.status(404).json({
        status: 'not found',
        status_code: 404,
        message: 'user not found',
    });
}

module.exports = { create , getAll , getOne , update , deleteUser };