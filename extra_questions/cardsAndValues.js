// Chunnu has a collection of cards. Each card has a value assigned to it.
// He wants to check if there exist two cards N and M such that N is
// double the value of M (i.e N = 2 * M).
// Print "Yes" without quotes, if a solution exists, else print "No" without quotes.
// The value of all the cards are stored in an array ( arr ) or length x.

function cardvalues(x, arr) {
  // write code here
  for (i = 0; i < x - 1; i++) {
    for (let j = i + 1; j < x; j++) {
      if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) {
        console.log("Yes");
        return;
      }
    }
  }
  console.log("No");
}
cardvalues(4, [1, 2, 3, 4]); //Yes
cardvalues(5, [5, 0, 9, 7, 20]); //No
