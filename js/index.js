// Get utils
var utils = require('./utils')

// Get templates
var header = require('../partials/header.html')
var footer = require('../partials/footer.html')

// Add header and footer to document
var body = document.getElementsByTagName('body')
if (body.length) {
  body[0].innerHTML = header + body[0].innerHTML + footer
}

// Add event listener to navbar toggle button
var navbarToggle = document.getElementsByClassName('gobmx-header-navbar-collapse')
var navbarToggleButton = document.getElementsByClassName('gobmx-header-navbar-toggle')

if (navbarToggleButton.length && navbarToggle.length) {
  navbarToggle = navbarToggle[0]
  navbarToggleButton = navbarToggleButton[0]

  navbarToggleButton.addEventListener('click', function (e) {
    e.preventDefault()

    utils.toggleClass(navbarToggle, 'gobmx-in')
    utils.toggleClass(navbarToggleButton, 'gobmx-collapsed')
  })
}
