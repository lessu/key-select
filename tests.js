/// <reference path="./index.d.ts"/>

require("./index");
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
    it("#1",function(){
        var test = object.select(["a","b"]);
        test.should.hasOwnProperty("a");
        test.a.should.equal("a");
    });
});
describe("edge",function(){
    it("#empty array",function(){
        try{
            var test = object.select([]);
            test.should.not.null();
        }catch(e){
            should.fail("exception","no exception","select empty key array should safe");
        }
    });
    it("#not exist key",function(){
        try{
            var test = object.select(["qq"]);
            test.should.not.null();
        }catch(e){
            should.fail("exception","no exception","select empty key array should safe");
        }
    });
})