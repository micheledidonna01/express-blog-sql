function checkTime(req, res, next){
    const currentHour = new Date().getHours();

    if(currentHour >= 9 && currentHour <= 14){
        return res.status(404).json("Meglio se vai a dormire");
        
    }

    next();
}

module.exports = checkTime;