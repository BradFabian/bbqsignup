let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", (event) => {
  // Stop defualt event behavior
  event.preventDefault();

  let ourFormData = new FormData(event.target);

  let userFirstName = ourFormData.get("firstName").toUpperCase();
  let userEmail = ourFormData.get("emailAddress").toLowerCase();

  let updatedHtmlContent = `<h2>Congratulations, ${userFirstName}!</h2>

      <p>You're on your way to becoming a BBQ Master!</p>

      <p>You will get weekly BBQ tips sent to: ${userEmail} </p>

      <p class="fine-print"> We'll never share your information without your permission</p>`;
  let ourMainContent = document.getElementById("Main-Content");
  ourMainContent.innerHTML = updatedHtmlContent;
});
