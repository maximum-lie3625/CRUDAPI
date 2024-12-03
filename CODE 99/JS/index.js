function cal() {
  let a = document.getElementById("value1").value,
    b = document.getElementById("value2").value,
    operation = document.getElementById("oper").value,
    ans = document.getElementById("result");
  if (operation == "add") {
    ans.innerText = a - 0 + (b - 0);
  } else if (operation == "sub") {
    ans.innerText = a - b;
  } else if (operation == "mul") {
    ans.innerText = a * b;
  } else if (operation == "div") {
    ans.innerText = a / b;
  } else {
    ans.innerText = "invalid";
  }
}
