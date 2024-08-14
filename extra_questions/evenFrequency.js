// Ms. Johnson, a dedicated teacher, observes her students’ interactions and wants to find out if any students tend to interact with others an even number of times. She has recorded these interactions in an array, with each number representing a student's unique identifier.
// Your mission is to help her identify students who interact with an even number of classmates.

// Input
// The first line of the input is the size of the array.
// The second line is an array of unique student numbers representing interactions.

function studentInteraction(n, arr) {
  let obj = {};

  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  // console.log(obj)
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      count++;
    }
  }
  console.log(count);
}

studentInteraction(9, [101, 102, 101, 103, 102, 101, 105, 106, 105]);
