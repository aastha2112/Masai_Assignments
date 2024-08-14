// You are given a number stored in a variable with the name N
// You have to map the following symbols starting from the value N
// The mapping is such that the difference between the values of two characters, is 2

function mapSymbols(N) {
  let symbol = "!@#$%^&*";
  let obj = {};
  for (let i = 0; i < symbol.length; i++) {
    obj[symbol[i]] = N; //2*i +N
    N += 2;
  }
  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
mapSymbols(20);
