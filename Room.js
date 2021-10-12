const { start } = require("repl")

const Room = function(area, painted_status = false){
    this.area = area
    this.painted_status = painted_status

}

Room.prototype.markRoomAsPainted = function(){
    this.painted_status = true

}


module.exports = Room
