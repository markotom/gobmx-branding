module.exports = {
  toggleClass: function (element, className) {
    if (!element || !className) return
    
    var current = element.className

    if (~current.split(/\s/).indexOf(className)) {
        current = current.replace(new RegExp('\\b' + className + '\\b', 'g'), '')
    } else {
        current = current + ' ' + className
    }

    element.className = current.trim()
  }
}
