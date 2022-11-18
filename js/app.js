// variable that contain the navigation bar.
let navbar = document.querySelector('#navbar__list');

//styling the navigation bar using css.
navbar.style.cssText = 'background-color:rgb(41, 212, 155); height: 70px; display:flex; justify-content:space-around;';

//create list item and append child the list  and give it his specific name.
let firstItem = document.createElement('li');
navbar.appendChild(firstItem);
firstItem.textContent = 'Section 1';

let secondItem = document.createElement('li');
navbar.appendChild(secondItem);
secondItem.textContent = 'Section 2';

let thirdItem = document.createElement('li');
navbar.appendChild(thirdItem);
thirdItem.textContent = 'Section 3';

let fourthItem = document.createElement('li');
navbar.appendChild(fourthItem);
fourthItem.textContent = 'Section 4';


//set one class to all sections
firstItem.setAttribute('class' , 'navItems')
secondItem.setAttribute('class' , 'navItems')
thirdItem.setAttribute('class' , 'navItems')
fourthItem.setAttribute('class' , 'navItems')


//collecting them in one class.
let navItems = document.querySelectorAll('.navItems');
let allSections = document.getElementsByTagName('section')



//styling the navigation's bar items and get to all of them event
for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.cssText = ' height: 20px;  margin-top: 9px; padding: 13px; color:white;';

  navItems[i].addEventListener('click', function (properties) {
    properties.preventDefault();
    allSections[i].scrollIntoView({ behavior: 'smooth' });
  });

  navItems[i].addEventListener('mouseover', function () {
    navItems[i].style.cssText += 'background-color: rgb(53 96 82); color: white;';
  });

  navItems[i].addEventListener('mouseleave', function () {
    navItems[i].style.cssText += 'background-color: rgb(41, 212, 155); color: white;';
  });
}

//activating events in the projects
window.addEventListener('scroll', function () {
  for (let i = 0; i < allSections.length; i++) {
    let height = window.innerHeight;
    let top = allSections[i].getBoundingClientRect().top;
    let bottom = allSections[i].getBoundingClientRect().bottom;

    if (top > 0 && top < height && bottom < height || bottom > height && top < height) {
      allSections[i].classList.add('activable');
      navItems[i].style.cssText += 'color:white; background-color: rgb(53 96 82);';
    }
    else if
      (top <= 0 || bottom <= 0 || top > height || bottom > height || top < height || bottom < height) {
      allSections[i].classList.remove('activable');
      navItems[i].style.cssText += 'color: white; background-color: rgb(41, 212, 155);';
    }
  }
});





