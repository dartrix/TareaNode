const express = require('express');
const path = require('path');

const routes =  require('../routes');

module.exports = app => {
    app.set('puerto', process.env.PORT || 8080);

    app.set('views', path.join(__dirname,'../views'));
    app.engine('html', require('ejs').renderFile);

    // Static files
    app.use('/public', express.static(path.join(__dirname, '../public')));

    app.set('view engine', 'ejs');
    
    routes(app);
    
    return app;
}