function check() {
  const inputText = document.getElementById("value");
  const value = inputText.value;
  const reversed = value.split("").reverse().join("");
  const output = document.getElementById("output");

  if (!value == "") {
    if (value == reversed) {
      output.textContent = "Its a palindrome";
      output.style.color = "green";
    } else {
      output.textContent = "Its not a palindrome";
      output.style.color = "red";
    }
  } else {
    output.textContent = "give input";
    output.style.color = "red";
  }
}
