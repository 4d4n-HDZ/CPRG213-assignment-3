// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Check if we're on the contact page
if (
  document.querySelector(".contact-page") &&
  document.querySelector(".submit-button")
) {
  const contactPage = document.querySelector(".contact-page");
  const submitButton = document.querySelector(".submit-button");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting and reloading the page

    // Replace content with thank-you message
    contactPage.innerHTML =
      '<p class="large-text">Thank you for your message</p>';
  });
}
