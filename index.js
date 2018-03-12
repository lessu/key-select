function keyselect (object,keys){
    var newObject = {};
    for(var index = 0 ; index < keys.length ; index++){
        newObject[keys[index]] = object[keys[index]];
    }
    return newObject;
}
module.exports.keyselect = keyselect


Object.prototype.keyselect = function(keys){
    return keyselect(this,keys);
}