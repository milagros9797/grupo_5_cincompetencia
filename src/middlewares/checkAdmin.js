module.exports = (req,res,next) =>{

    if(req.sesion.userLogin && req.session.userLogin.role === 'Admin'){
        return next()
    }

    return res.redirect('/')
}