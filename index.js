
Object.prototype.select = function(keys){
    var newObject = {};
    for(var index = 0 ; index < keys.length ; index++){
        newObject[keys[index]] = this[keys[index]];
    }
    return newObject;
}