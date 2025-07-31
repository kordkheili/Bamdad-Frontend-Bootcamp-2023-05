// گرفتن ورودی پسورد از کاربر
const password = prompt("لطفاً پسورد خود را وارد کنید:");

// المان نمایش نتیجه
const resultDiv = document.getElementById("result");

// بررسی قدرت پسورد و تنظیم رنگ و متن
if (password && password.length < 6) {
  resultDiv.textContent = "ضعیف";
  resultDiv.className = "weak";
} else if (password && password.length <= 10) {
  resultDiv.textContent = "متوسط";
  resultDiv.className = "medium";
} else if (password && password.length > 10) {
  resultDiv.textContent = "قوی";
  resultDiv.className = "strong";
} else {
  resultDiv.textContent = "پسورد وارد نشد";
  resultDiv.style.color = "#666";
}
