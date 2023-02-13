// Get references to the elements you'll be working with
var input = document.getElementById("password");
var div = document.getElementById("HIDDENDIV");
var btn = document.getElementById("button");

// Set up event handlers in JavaScript
button.addEventListener("click", validate);

function validate() {
  if (input.value == "test") {
    // No need to add a "show" class. Just remove the "hidden" class.
    div.classList.remove("hidden");

    // Or, add it:
    input.classList.add("hidden");
  } else {
    password.focus(); // <-- If you don't do this first, your select code won't work
    password.setSelectionRange(0, password.value.length);
    alert("مفتاح مرور خاطئ");
  }
}

input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    // No reason to simulate a button click. Just call the code that needs to be run.
    validate();
  }
});
