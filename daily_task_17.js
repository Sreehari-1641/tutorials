// yazar
var s = 0,
  a,
  x = 121,
  d;
d = x;
while (x > 0) {
  a = x % 10;
  s = s * 10 + a;
  x = Math.floor(x / 10);
}
if (s == d) {
  console.log("The number is palindrome");
} else {
  console.log("The number is not palindrome");
}

// ayush
let y = 1000;
while (y <= 1500) {
  if (y % 5 === 0 && y % 25 === 0) {
    console.log(y);
  }
  y += 1;
}

// javed anil

let sum = 0,
  f = 1000;
while (f <= 1500) {
  if (f % 2 === 0) {
    sum = sum + f;
  }
  f += 1;
}
console.log("sum is ,", sum);

// preiztly
let k = 5,
  q = 1;
while (k > 0) {
  q = q * k;
  k -= 1;
}
console.log("factorial is", q);

// anandhu

let l = 1;
while (l <= 100) {
  if (l % 3 === 0) {
    console.log(l);
  }
  l += 1;
}

// archa

let z = 1,
  su = 0;
while (z <= 10) {
  su = su + z;
  z += 1;
}
console.log("sum:", su);

// sahad


let m = 1,
  c,
  n = 0,
  op = 5;

while (n <= op) {
  c = m + n;
  m = n;
  n = c;
  console.log(m);
  n;
}

// shereena


let e = 1;
while (e <= 10) {
  console.log("8 * ", e, "=", 8 * e);
  e += 1;
}

// chandana


let sum1 = 0,
  f1 = 200;
while (f1 <= 500) {
  if (f1 % 2 === 0) {
    sum1 = sum1 + f1;
  }
  f1 += 1;
}
console.log("sum is ,", sum1);

//sreepriya


let cv = 1;
while (cv <= 50) {
  if (cv % 2 === 0) {
  } else {
    console.log(cv);
  }
  cv += 1;
}

//amal
const obj = {
  name: "Amal",
  age: "25",
  gender: "Male",
  Qualification: "Bca",
  Passing_year: "2023",
};
console.log("--------------BIODATA---------------");

for (key in obj) {
  console.log(key, ":", obj[key]);
}
const ob = {};

let a1 = ["name", "age", "gender", "dob", "place"];
let a2 = ["Abhi", "23", "Male", "22-22-2222", "kottarakkara"];
for (let v = 0; v < 5; v++) {
  ob[a1[v]] = a2[v];
}
console.log(ob);

//my qn 


for (let num = 1; num <= 100; num++) {
  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(num);
  }
}
