// // Title: Brick Wall Pattern

// function brickWall(h, w) {
//   for (let i = 1; i <= h; i++) {
//     let brick = "";
//     for (let j = 1; j <= 2 * w; j++) {
//       if ((i + j) % 2 === 0) {
//         brick += "[ ]";
//       } else {
//         brick += "  ";
//       }
//     }
//     console.log(brick);
//   }
// }

// brickWall(3, 9);

function patternPrintingV(N) {
  for (let i = 1; i <= N; i++) {
    let row = "";

    for (let j = 1; j <= N - i + 1; j++) {
      row += "*";
      if (j < N - i + 1) {
        row += " ";
      }
    }

    for (let k = 0; k < i - 1; k++) {
      row += "  ";
    }

    console.log(row);
  }
}

patternPrintingV(5);
