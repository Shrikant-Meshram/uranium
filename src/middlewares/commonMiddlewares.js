const Checker = async (req, res, next) => {
    const header = req.headers.isfreeappuser
    if(header){
        if(header === "true")
        req['isFreeAppUser'] = true
        if(header === "false")
        req['isFreeAppUser'] = false
    next()
    }
    else res.send({msg: "An usefull header is missing"})
}

module.exports.Checker=Checker