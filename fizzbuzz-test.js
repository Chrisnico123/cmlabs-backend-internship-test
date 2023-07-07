function Fizz(n) {
  if (n % 3 == 0) {
    return true;
  }

  return false;
}

function Buzz(n) {
  if (n % 5 == 0) {
    return true;
  }
  return false;
}

function Fizzbuzz(n) {
  if (Fizz(n) && Buzz(n)) return "FizzBuzz";
  if (Fizz(n)) return "Fizz";
  if (Buzz(n)) return "Buzz";
  return n;
}

var n = 1;

while (n != 100) {
  console.log(Fizzbuzz(n));
  n += 1;
}
