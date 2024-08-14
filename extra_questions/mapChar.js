// You are given a number stored in a variable with the name N
// You have to print the first N English smaller case alphabets, mapped with the values starting from 1 to N , including the value stored in N

function mapCharacters(N) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};

  for (let i = 0; i < N; i++) {
    obj[str[i]] = i + 1;
  }
  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}

mapCharacters(5);
