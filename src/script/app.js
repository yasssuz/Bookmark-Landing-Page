const mobileToggler = document.getElementById('mobileToggler');
const sliderMenu = document.getElementById('sliderMenu');
const form = document.querySelector('.contact__form');
const faqs = document.querySelector('.faqs__questions');

sliderMenu.addEventListener('click', sliderChangeMenu);
mobileToggler.addEventListener('click', toggleMenu);
form.addEventListener('submit', validateEmail);
faqs.addEventListener('click', showFaq);

//MENU AREA
function toggleMenu() {
  const navigationMenu = document.getElementById('navigationMenu');
  const overlay = document.getElementById('overlay');
  const headerLogo = document.getElementById('headerLogo');
  const body = document.querySelector('body');
  const html = document.querySelector('html');

  mobileToggler.classList.toggle('header__mobile-menu--active');
  navigationMenu.classList.toggle('header__navigation--active');
  overlay.classList.toggle('header__overlay--active');
  headerLogo.classList.toggle('header__logo--white');
  body.classList.toggle('dont-overflow');
  html.classList.toggle('dont-overflow');
}

//SLIDER AREA
function sliderChangeMenu(event) {
  const target = event.target;
  const items = document.querySelectorAll('.features__slider-item');

  items.forEach(item => item.classList.remove('--active'));
  target.classList.add('--active');
  displaySliderContent(target);
}

function displaySliderContent(target) {
  const sliderTitle = document.getElementById('slider-title');
  const sliderParagraph = document.getElementById('slider-paragraph');
  const sliderIllustration = document.getElementById('slider-illustration');

  if (target.classList.contains('first-button')) {
    sliderTitle.textContent = 'Bookmark in one click';
    sliderParagraph.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
    sliderIllustration.src = '../images/illustration-features-tab-1.svg';
  } else if (target.classList.contains('second-button')) {
    sliderTitle.textContent = 'Intelligent Search';
    sliderParagraph.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
    sliderIllustration.src = '../images/illustration-features-tab-2.svg';
  } else if (target.classList.contains('third-button')) {
    sliderTitle.textContent = 'Share your bookmarks';
    sliderParagraph.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
    sliderIllustration.src = '../images/illustration-features-tab-3.svg';
  }
}

//FORM AREA
function validateEmail(event) {
  const input = document.querySelector('.contact__input-label');
  const userEmail = document.querySelector('.contact__email-input').value;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  userEmail.match(regex) ? sendEmail(input) : showError(event, input);
}

function showError(event, input) {
  event.preventDefault();
  input.classList.add('show-error');
}

function sendEmail(input) {
  input.classList.remove('show-error');
}

//FAQS AREA
function showFaq(event) {
  const questions = document.querySelectorAll('.faqs__question');
  const question = event.target;

  if (question.parentElement.classList.contains('show')) {
    question.parentElement.classList.remove('show');
  } else if (question.classList.contains('top-area')) {
    questions.forEach(element => element.classList.remove('show'));
    question.parentElement.classList.toggle('show');
  }
}
