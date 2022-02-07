const { response, request } = require('express');

const usuariosGet = ( req = request, res = response ) => {
    const { q, nombre = 'Unavaliable', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};
const usuariosPut = ( req = request, res = response ) => {
    const { id } = req.params;

    res.status(200).json({
        msg: 'put API - Controlador',
        id
    });
};
const usuariosPost = ( req, res = response ) => {
    const { nombre, edad } = req.body;

    res.status(200).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}
const usuariosDelete = ( req, res ) => {
    res.json({
        msg: 'delete API - Controlador'
    });
};
const usuariosPatch = ( req, res ) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};