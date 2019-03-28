

const controller = {}

controller.index = (req,res) =>{
    res.render('index.html');
}

controller.hobby = (req,res) =>{
    res.render('hobby.html');
}

controller.modelos = (req,res) =>{
    res.render('modelos.html');
}

controller.contacto = (req,res) =>{
    res.render('contacto.html')
}
module.exports = controller;