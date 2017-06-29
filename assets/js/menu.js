function setTabindexElements (elements, index) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute('tabindex', index)
  }
}

function showHideMenu (elements, show) {
  elements.main.className = show ? 'hide' : 'show'
  elements.footer.className = show ? 'hide' : 'show'
  elements.menu.className = show ? 'show' : 'hide'
  elements.menuButton.className = show ? 'fa fa-times' : 'fa fa-bars'
}

function toggleMenu () {
  const elements = {
    main: document.getElementById('main'),
    menu: document.getElementById('menu-content'),
    footer: document.getElementById('footer'),
    menuButton: document.getElementById('menu-button')
  }
  const navLinks = document.getElementsByClassName('nav-link')
  const showMenu = elements.menu.className.includes('hide')

  showHideMenu(elements, showMenu)
  setTabindexElements(navLinks, showMenu ? '0' : '-1')
}

document.getElementById('menu-button').addEventListener('click', toggleMenu)
