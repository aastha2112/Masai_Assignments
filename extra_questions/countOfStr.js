let str = "aastha";
let obj = {};

for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);

  if (obj[str[i]] === undefined) {
    // adding key value pair
    obj[str[i]] = 1;
  } else {
    // increment by 1
    obj[str[i]]++;
  }
}
console.log(obj);
