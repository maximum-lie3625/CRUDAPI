function display(data) {
  document.getElementById("heading").innerText = data;
  console.log(data);
  let menu = document.getElementsByClassName("menulist");
  for (let item of menu) {
    if (item.innerText === data) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
  // document.getElementById(heading).innerText()= document.getquerySelectorAll(button);
}
