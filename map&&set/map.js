function strmapToObj(strMap) {
  let obj = Object.create(null);
  for (const [k, v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map().set("yes", true).set("no", false);

console.log(strmapToObj(myMap));
