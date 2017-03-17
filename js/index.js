// Get utils
var utils = require('./utils')

// Get templates
var header = document.createElement('div')
header.innerHTML = require('../partials/header.html')
var footer = document.createElement('div')
footer.innerHTML = require('../partials/footer.html')

// Add header and footer to document
var body = document.body || document.getElementsByTagName('body')[0]
body.prepend(header)
body.appendChild(footer)

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

// jQuery(document).ready(function ($) {
//   var script = 'https://cdn.rawgit.com/markotom/gobmx-branding/2becfa62/dist/gobmx.min.js';

//   $.getScript(script).done(function () {
//     $('.gobmx-footer').appendTo('#wrapper-content');
//   });
// });

