const modal = document.getElementById("bookingModal");
const packageTitle = document.getElementById("packageTitle");

// Open Modal
function openModal(packageName) {
  packageTitle.innerText = "Book: " + packageName;
  modal.style.display = "flex";
}

// Close Modal
function closeModal() {
  modal.style.display = "none";
}

// Confirm Booking
function confirmBooking() {
  alert("Your booking has been confirmed! 🎉");
  closeModal();
}

// Close when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};
