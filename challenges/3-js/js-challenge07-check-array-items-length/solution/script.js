// تابع محاسبه تعداد کاراکترهای هر آیتم آرایه
function stringLengths(array) {
  return array.map((item) => item.length);
}

// تست با آرایه‌ی نمونه
const input = ["a", "ab", "abc", "", "9999"];
const output = stringLengths(input);

console.log("آرایه ورودی:", input);
console.log("آرایه خروجی (تعداد کاراکترها):", output);
// خروجی:
// آرایه ورودی: ["a", "ab", "abc", "", "9999"]
// آرایه خروجی (تعداد کاراکترها): [1, 2, 3, 0, 4]
