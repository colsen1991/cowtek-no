function toggleMenu () {
  const main = document.getElementById('main')
  const menu = document.getElementById('menu-content')
  const footer = document.getElementById('footer')
  const menuButton = document.getElementById('menu-button')

  if (main.className.includes('hide')) {
    main.className = 'show'
    footer.className = 'show'
    menu.className = 'hide'
    menuButton.className = 'fa fa-bars'
  } else {
    main.className = 'hide'
    footer.className = 'hide'
    menu.className = 'show'
    menuButton.className = 'fa fa-times'
  }
}

document.getElementById('menu-button').addEventListener('click', toggleMenu)
