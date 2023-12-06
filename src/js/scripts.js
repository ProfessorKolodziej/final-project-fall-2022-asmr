// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


////popup
const popupButton = document.getElementById('popupButton');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

popupButton.addEventListener('click', () => {
  overlay.style.display = 'block';
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  popup.style.display = 'none';
});

