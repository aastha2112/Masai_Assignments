// Pine Tree Pattern

function pineTree(n) {
  for (let i = 1; i <= n - 1; i++) {
    let star = "";
    let space = "";
    for (let x = 1; x <= n - i - 1; x++) {
      space += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "* ";
    }
    console.log(space, star);
  }
}

pineTree(5);
