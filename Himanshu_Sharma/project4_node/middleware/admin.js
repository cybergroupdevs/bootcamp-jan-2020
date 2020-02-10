module.exports = function(req, res, next){
    if(!req.employee.admin) return res.status(403).send('Access denied');

    next();
}