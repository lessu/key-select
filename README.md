# JS select
Create a new object that only contain selected keys.

# Change log
## 2.0.0
change `select` to `keyselect`,due to conflict in many case

## 1.1.1
bug fixed

## 1.1.0
export `select` method

## 1.0.0
init

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
var newObject = object.keyselect(["a","b"]);

```

## Licence

MIT