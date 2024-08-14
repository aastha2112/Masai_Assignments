// You are given a number stored in variable with the name N
// You have to map all the lowercase English characters, to a number starting from the value stored in N , and incrementing it by 1 at every step

function mapCharactersAgain(N) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = N + i;
  }
  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
mapCharactersAgain(5);
