const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const form = document.getElementById("bookingForm");
const success = document.getElementById("successMsg");

checkin.addEventListener("change", () => {
  checkout.min = checkin.value;
});

form.addEventListener("submit", e => {
  e.preventDefault();
  success.style.display = "block";
  form.reset();
});