function validateForm() {
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const dogname = document.getElementById('dogname').value.trim();
  const breed = document.getElementById('breed').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !dogname || !breed || !message) {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  if (name.length < 3) {
    alert("Please enter your full name.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thank you for joining the Dog Lovers Club, " + name + "!");
  return true;
}