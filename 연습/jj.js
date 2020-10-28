const btn = document.querySelector(".btn");

function btnHandler() {
  btn.classList.toggle("color");

  //   if (!btn.classList.contains("color")) {
  //     btn.classList.add("color");
  //   } else {
  //     btn.classList.remove("color");
  //   }
}

btn.addEventListener("click", btnHandler);
