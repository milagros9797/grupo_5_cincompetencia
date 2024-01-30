module.exports = (req,res,next) =>{

    if(req.session.userLogin && req.session.userLogin.role === 'Admin'){
        return next()
    }

    return res.redirect('/')
}