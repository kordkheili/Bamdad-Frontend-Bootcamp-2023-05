// تابع بررسی زوج یا فرد بودن
function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return "زوج";
  } else {
    return "فرد";
  }
}

// تابع فیلتر اعداد زوج
function evenFilter(array) {
  return array.filter((num) => isEven(num) === "زوج");
}

// مثال تست تمرین
const inputArray = [1, 6, 77, 3, -5, 999, 56, 0, -34];
const result = evenFilter(inputArray);

console.log("آرایه ورودی:", inputArray);
console.log("فقط اعداد زوج:", result);
