const express = require('express');
const router = express.Router();

const home = require('../controladores/homeController')

module.exports = app => {
    router.get("/", home.index);
    router.get('/hobby',home.hobby);
    router.get('/modelos', home.modelos)
    router.get('/contacto', home.contacto)
    app.use(router);
}