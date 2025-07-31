// دریافت متن از کاربر
const input = prompt("یک متن بلند وارد کنید:");

// حذف فاصله‌های ابتدا و انتها
const trimmed = input.trim();

// گرفتن ۵۰ کاراکتر اول و سه نقطه
let shortText = trimmed.slice(0, 50) + "...";

// چاپ قسمت کوتاه‌شده در صفحه
document.getElementById("app").innerText = shortText;

// کلمات را به آرایه تبدیل کن و در کنسول چاپ کن
const wordsArray = trimmed.split(" ");
console.log(wordsArray);

// تعداد کاراکترهای متن کامل را در کنسول نمایش بده
console.log(trimmed.length);
