# JS select
Create a new object that only contain selected keys.

## install

```shell
npm install key-select --save
```

## example

```javascript
var object = {
    a : "a",
    b : "b",
    c : "c"
};
// {a : "a" , b : "b"}
var newObject = object.select(["a","b"]);

```

## Licence

MIT