# Placevalue Ascii

This is a JavaScript port of [Mouse Reeve's](https://github.com/mouse-reeve) Python [Placevalue Ascii](https://github.com/mouse-reeve/placevalue_ascii) project. See the original project [README](https://github.com/mouse-reeve/placevalue_ascii/blob/master/README.md) for a short illustration of how Placevalue works.

## How to install

```
$ npm install placevalue-ascii
```

## How to use

```js
const placevalue = require('placevalue');

// an example from Mouse Reeve's website:
const str = placevalue(
  (x, y) => 5 * Math.sqrt(Math.abs(x*x - y*y)),
  50,
  200,
  7,
);
console.log(str);
```

## API
```
placevalue(
  fn : (x int, y int): int,
  height: int,
  width: int,
  placevalue: int,
  offsetY: int,
  offsetX: int
): string
```
