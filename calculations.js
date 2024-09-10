function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
   x -= y;
   return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function incrementBalance(y) {
  x = ++y;
  return x;
}

function decrementBalance(y) {
  x = --y;
  return x;
}

console.log(incrementBalance(700));
console.log(decrementBalance(700));
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
