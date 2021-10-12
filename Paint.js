const Paint = function(){
    this.liters_paint = [];

    
};

Paint.prototype.checkIfItsEmpty = function(){
    if(this.liters_paint = []){
        return true
    }else {
        return false
    }
}

Paint.prototype.addPaint= function(){
    this.liters_paint.push(paint);
}


Paint.prototype.numberOfPaint = function(){
    return this.liters_paint.length;
}


Paint.prototype.removeAllPaint = function(liters){
    const indexOfPaint = this.liters_paint.indexOf(liters);
    this.liters_paint.splice(0, this.numberOfPaint())
};


module.exports = Paint