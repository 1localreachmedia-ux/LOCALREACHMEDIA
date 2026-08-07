const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

const placement = document.getElementById('placement');
const selectedPlanText = document.getElementById('selectedPlanText');

document.querySelectorAll('.choose').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    placement.value = plan;
    selectedPlanText.textContent = plan;
    document.getElementById('reserve').scrollIntoView({ behavior: 'smooth' });
  });
});

placement.addEventListener('change', () => {
  selectedPlanText.textContent = placement.value;
});

const uploadBox = document.getElementById('uploadBox');
const logoInput = document.getElementById('logoInput');
const logoFileName = document.getElementById('logoFileName');

uploadBox.addEventListener('click', () => logoInput.click());
logoInput.addEventListener('change', () => {
  logoFileName.textContent = logoInput.files[0]?.name || 'Choose PNG, JPG, SVG, or PDF';
});

document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formStatus').textContent =
    'The website form is ready visually. Next we need to connect it so submissions are actually emailed or stored.';
});
