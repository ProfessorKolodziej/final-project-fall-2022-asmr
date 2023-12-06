// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

////popup
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}






// essense sound 
const playsound1 = document.getElementById('playsound1');
const audio1 = document.getElementById('audio1');
  
playsound1.addEventListener('click', () => {
    audio1.play();
});

// cream sound 
const playsound = document.getElementById('playsound2');
const audio2 = document.getElementById('audio2');
  
playsound2.addEventListener('click', () => {
    audio2.play();
});

// bb sound 
const playsound3 = document.getElementById('playsound3');
const audio3 = document.getElementById('audio3');
  
playsound3.addEventListener('click', () => {
    audio3.play();
});
/// razer sound
const playsound4 = document.getElementById('playsound4');
const audio4 = document.getElementById('audio4');
  
playsound4.addEventListener('click', () => {
    audio4.play();
});
///
const playsound5 = document.getElementById('playsound5');
const audio5 = document.getElementById('audio5');
  
playsound5.addEventListener('click', () => {
    audio5.play();
});
///
const playsound6 = document.getElementById('playsound6');
const audio6 = document.getElementById('audio6');
  
playsound6.addEventListener('click', () => {
    audio6.play();
});
///
const playsound7 = document.getElementById('playsound7');
const audio7 = document.getElementById('audio7');
  
playsound7.addEventListener('click', () => {
    audio7.play();
});
///
const playsound8 = document.getElementById('playsound8');
const audio8 = document.getElementById('audio8');
  
playsound8.addEventListener('click', () => {
    audio8.play();
});
///
const playsound9 = document.getElementById('playsound9');
const audio9 = document.getElementById('audio9');
  
playsound9.addEventListener('click', () => {
    audio9.play();
});
///
const playsound10 = document.getElementById('playsound10');
const audio10 = document.getElementById('audio10');
  
playsound10.addEventListener('click', () => {
    audio10.play();
});
///
const playsound11 = document.getElementById('playsound11');
const audio11 = document.getElementById('audio11');
  
playsound11.addEventListener('click', () => {
    audio11.play();
});
///
const playsound12 = document.getElementById('playsound12');
const audio12 = document.getElementById('audio12');
  
playsound12.addEventListener('click', () => {
    audio12.play();
});
