// Write a custom function that has the same behaviour of inbuilt String Replace Function

function replaceStr(str, elmFrom, elmTo) {
  let testArr = str.split(elmFrom);
  //   console.log({ testArr });

  let firstElm = testArr[0];
  //   console.log({ firstElm });

  let newArray = firstElm.split("");
  //   console.log({ newArray });

  newArray.push(elmTo);
  //   console.log(newArray);

  let newStr = newArray.join("");
  //   console.log({ newStr });

  result = newStr + testArr[1];

  return result;
}

console.log(replaceStr("Hello user! This is a demo string", "user", "Pablo")); //Hello Pablo! This is a demo string
console.log(replaceStr("Hello user! This is a demo string", "demo", "test")); //Hello user! This is a test string
