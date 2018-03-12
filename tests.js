/// <reference path="./index.d.ts"/>

var keySelect = require("./index");
require("should");
var object = {
    a : "a",
    b : "b",
    c : "c",
    d : "d",
    e : "e",
    f : "f",
}
describe("basic",function(){
    it("#object",function(){
        var test = object.keyselect(["a","b"]);
        test.should.hasOwnProperty("a");
        test.a.should.equal("a");
    });
    it("#function",function(){
        var test = keySelect.keyselect(object,["a","b"])
        test.should.hasOwnProperty("a");
        test.a.should.equal("a");
    });
});
describe("edge",function(){
    it("#empty array",function(){
        try{
            var test = object.keyselect([]);
            test.should.not.null();
        }catch(e){
            should.fail("exception","no exception","select empty key array should safe");
        }
    });
    it("#not exist key",function(){
        try{
            var test = object.keyselect(["qq"]);
            test.should.not.null();
        }catch(e){
            should.fail("exception","no exception","select empty key array should safe");
        }
    });
})