// مرحله اول: ساخت تابع isEven
function isEven(number) {
  // بررسی باقی‌مانده تقسیم بر 2
  const remainder = number % 2;

  if (remainder === 0) {
    return "زوج"; // زوج
  } else {
    return "فرد"; // فرد
  }
}

// مرحله دوم: تست تابع
console.log("تست تابع isEven:");

// تست با عدد 77
const num1 = 77;
const result1 = isEven(num1);
console.log("عدد " + num1 + ": " + result1);

// تست با عدد 78
const num2 = 78;
const result2 = isEven(num2);
console.log("عدد " + num2 + ": " + result2);
