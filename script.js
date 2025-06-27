document.getElementById("trip-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your trip plan has been submitted! We'll contact you shortly.");
  this.reset();
});
