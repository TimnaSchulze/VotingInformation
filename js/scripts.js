window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    
    let is18 = document.querySelector("#is18");
    is18.setAttribute("class", "hidden");
    let not18 = document.querySelector("#not18");
    not18.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value)

    if (age >= 18) {
      is18.removeAttribute("class");
    } else {
      not18.removeAttribute("class");
    }
  }
};