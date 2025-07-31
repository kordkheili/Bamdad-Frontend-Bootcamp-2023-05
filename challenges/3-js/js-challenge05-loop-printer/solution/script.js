// تابع برای خواندن مقادیر ورودی و اجرای loopPrinter
function handlePrint() {
  const start = Number(document.getElementById("startNum").value);
  const end = Number(document.getElementById("endNum").value);
  loopPrinter(start, end);
}

function loopPrinter(start, end) {
  let result = "";
  for (let i = start; i <= end; i++) {
    result += i + "</br>";
  }
  document.getElementById("output").innerHTML = result;
}
