function toggleMenu () {
  const main = document.getElementById('main')
  const menu = document.getElementById('menu-content')
  const footer = document.getElementById('footer')

  if (main.className.includes('hide')) {
    main.className = 'show'
    footer.className = 'show'
    menu.className = 'hide'
  } else {
    main.className = 'hide'
    footer.className = 'hide'
    menu.className = 'show'
  }
}

document.getElementById('menu-button').addEventListener('click', toggleMenu)
