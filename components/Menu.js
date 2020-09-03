// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Pikachu'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
function menuMaker (menuArray){ 

  //create ul before looping
  const newMenu = document.createElement('div');
  const menuList = document.createElement('ul');

  newMenu.classList.add('menu');
  
  //TESTING
  // newMenu.classList.add('menu--open');


  //for each item in array
  menuArray.forEach((item)=>{

    //create a new list item & add it to the list
    const newLink = document.createElement('li');
    newLink.textContent = item;
    menuList.append(newLink);
  });
  
  //grab existing header and menu image
  const menuImg = document.querySelector('img.menu-button');
  // const header = document.querySelector('div.header');
  
  //connect elements together
  // el: to be wrapped, wrapper
  // el.parentNode.insertBefore(wrapper, el);
  menuImg.parentNode.insertBefore(newMenu,menuImg);
  newMenu.append(menuList);
  

  // not this:
  // newMenu.append(menuImg,menuList);

  menuImg.addEventListener('click',(e)=>{
    if(newMenu.classList.contains('menu--open')){
      newMenu.classList.remove('menu--open');
    }else{
      newMenu.classList.add('menu--open');
    }
  });

  //return 
  return newMenu;
}
// debugger
const menuContainer = document.querySelector('div.header');
const menu1 = menuMaker(menuItems);
menuContainer.append(menu1);

// console.log('Testing menu:');
// console.log(menu1);
