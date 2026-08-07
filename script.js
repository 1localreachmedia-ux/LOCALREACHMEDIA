document.querySelectorAll(".choose").forEach(button => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    const select = document.getElementById("placement");
    [...select.options].forEach(option => {
      if (option.text.startsWith(plan)) select.value = option.value;
    });
  });
});

document.getElementById("leadForm").addEventListener("submit", event => {
  event.preventDefault();
  const status = document.getElementById("status");
  status.textContent = "Your form is working as a demo. Connect it to Formspree, Tally, Google Forms, or another form service before publishing.";
});
