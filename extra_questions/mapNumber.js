// You are given a number stored in a variable with the name N
// You are given another number stored in a variable with the name K
// You have to map all the numbers in the range of [1, N] , including the values stored in N , such that the mapping begins from K

function mapNumbers(N, K) {
  // loop till N
  let obj = {};
  for (let i = 0; i < N; i++) {
    //add keys in object
    obj[i + 1] = K + i;
  }
  for (let key in obj) {
    //print keys and values
    console.log(key + "-" + obj[key]);
  }
}

mapNumbers(5, 10);
